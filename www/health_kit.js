var exec = require('cordova/exec');

var HealthKit = {
  available: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "available", []);
  },

  requestAuthorization: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "requestAuthorization", [options]);
  },

  readDateOfBirth: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "readDateOfBirth", []);
  },

  readGender: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "readGender", []);
  },

  saveWeight: function (options, successCallback, errorCallback) {
    if (options.date === undefined) {
      options.date = new Date();
    }
    if (typeof options.date == 'object') {
      options.date = Math.round(options.date.getTime()/1000);
    }
    exec(successCallback, errorCallback, "HealthKit", "saveWeight", [options]);
  },

  readWeight: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "readWeight", [options]);
  },

  saveHeight: function (options, successCallback, errorCallback) {
    if (options.date === undefined) {
      options.date = new Date();
    }
    if (typeof options.date == 'object') {
      options.date = Math.round(options.date.getTime()/1000);
    }
    exec(successCallback, errorCallback, "HealthKit", "saveHeight", [options]);
  },

  readHeight: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "readHeight", [options]);
  },

  findWorkouts: function(options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HealthKit", "findWorkouts", [options]);
  },

  saveWorkout: function(options, successCallback, errorCallback) {
    if (!options.startDate instanceof Date) {
      errorCallback("startDate must be a JavaScript Date Object");
      return;
    }
    options.startDate = Math.round(options.startDate.getTime()/1000);

    if (!(options.endDate instanceof Date || options.duration > 0)) {
      errorCallback("endDate must be JavaScript Date Object, or the duration must be set");
      return;
    }
    if (options.endDate instanceof Date) {
      options.endDate = Math.round(options.endDate.getTime()/1000);
    }

    var opts = options || {};
    exec(successCallback, errorCallback, "HealthKit", "saveWorkout", [options]);
  }
};

module.exports = HealthKit;

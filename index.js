'use strict';

var React = require('react-native');
var {NativeModules} = React;

var FIRAnalytics = NativeModules.RNFIRAnalytics;

module.exports = {
   setUserId: function(userId) {
       FIRAnalytics.setUserId(userId);
   },

   setUserProperty: function(name, property) {
       FIRAnalytics.setUserProperty(name, property);
   },

   logEvent: function(name, parameters) {
       FIRAnalytics.logEvent(name, parameters);
   },

   setEnabled: function(enabled) {
       FIRAnalytics.setEnabled(enabled);
   }
};

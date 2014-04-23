'use strict';
angular
  .module('twentyfortyeightApp', ['Game', 'Grid', 'ngCookies']).config(function(GridServiceProvider) {
    GridServiceProvider.size = 4;
  });

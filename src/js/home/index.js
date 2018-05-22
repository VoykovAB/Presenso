import angular from 'angular';
import HomeCtrl from './home.controller';
import HomeConfig from './home.config';

angular.module('app.home', [])
    .config(HomeConfig)
    .controller('HomeCtrl', HomeCtrl);


import angular from 'angular';

// Import our app config files
import constants from './config/app.constants';
import config from './config/app.config';
import 'angular-ui-router';

// Import our app functionality
import './home';
import './config/app.templates';

import MenuItemDirective from "./menu/menu-item.directive";
import MenuDirective from "./menu/menu.directive";


angular.module('app', [
    'templates',
    'ui.router',
    'app.home'
])
    .constant('AppConstants', constants)
    .directive('menu', () => new MenuDirective())
    .directive('menuItem', () => new MenuItemDirective())
    .config(config);

angular.bootstrap(document, ['app'], {
    strictDi: true
});

function AppConfig($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');
}

export default AppConfig;

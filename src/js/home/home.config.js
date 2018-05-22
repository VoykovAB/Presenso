// import HomeCtrl from './home.controller';

function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'home/home.html',
      title: 'Home'
    });

};

export default HomeConfig;

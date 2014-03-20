'use strict';

var app = angular.module('ehres.ngSwiperDocs', ['ehres.ngSwiper']);

angular.module('ehres.ngSwiperDocs')
  .config(function($swiperProvider) {
    angular.extend($swiperProvider.defaults, {
      swiper : {
        loop            : false,
        autoplay        : false,
      },
      template        : 'swiper.tpl.demo.html'
    });
  })
  .controller('SwiperDemoCtrl', function($scope) {
    $scope.slides = [{
      title           : 'foo',
      name            : 'bar'
    }, {
      title           : 'oof',
      name            : 'rab'
    }];
  });

'use strict';

var app = angular.module('ehres.ngSwiperDocs', ['ehres.ngSwiper']);

angular.module('ehres.ngSwiperDocs')
  .config(function($swiperProvider) {
    angular.extend($swiperProvider.defaults, {
      swiper : {
        loop     : false,
        autoplay : false,
      },
      template : 'swiper.tpl.demo.html'
    });
  })
  .controller('SwiperDemoCtrl', function($scope) {
    $scope.slides = [{
      title : 'Slide 1'
    }, {
      title : 'Slide 2'
    }];
    $scope.currentSlide = 0;

    $scope.$on('$swiper:onFirstInit', function(swiper){
      console.log('on first init');
    });

  });

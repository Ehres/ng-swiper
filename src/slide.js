'use strict';

angular.module('ehres.ngSwiper')
  .directive('slide', function() {
    return {
      restrict: 'EA',
      // Look for a parent `swiper` element and get its controller
      require: '^swiper',
      template: '<div class="swiper-slide" ng-transclude></div>',
      replace: true,
      transclude: true
    };
  });

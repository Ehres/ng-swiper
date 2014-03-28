'use strict';

angular.module('ehres.ngSwiper', [])
  .provider('$swiper', function() {
    var defaults = this.defaults = {
      //$swiper config
      //--------------
      template        : 'swiper.tpl.html',
      contentTemplate : false,

      //Swiper config
      //-------------
      swiper : {
        speed                        : 300, //duration of animation between slides (in ms)
        eventTarget                  : 'wrapper', //Event target for swipes, by default all touch events are used on wrapper. Useful to switch it to 'container' if you have some other elements inside of container and you want to keep swipes on them. New in 2.4.2
        autoplay                     : '5000', //delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
        autoplayDisableOnInteraction : true, //Set to false and autoplay will not be disabled after user interactions(swipes, arrow and pagination clicks), it will be restarted every time after interaction. New in 2.4
        autoplayStopOnLast           : false, //Set to false and autoplay will be disabled on last slide (works only with disabled loop). New in 2.4.2
        mode                         : 'horizontal', //slides will be positioned horizontally (for horizontal swipes) or vertically (for vertical swipes)
        loop                         : true, //Set to true to enable loop mode.
        loopAdditionalSlides         : 5, //Addition number of slides that will be cloned after creating of loop.
        loopedSlides                 : 1, //If you use slidesPerView:'auto' with loop mode you should tell to Swiper how many slides it should "loop" using this parameter. New in 2.4
        slidesPerView                : 1, //Set numbers of slides you want to display at the same time on slider's container for carousel mode. Also supports for 'auto' value, in this case it will fit slides depending on container's width. 'auto' mode doesn't compatible with loop mode.
        slidesPerViewFit             : true, //Will make effect only with slidesPerView:'auto' and if you have slides that are wider than container. When true (by default) then large slide transition will be divided on two part on its edge positions. When false - slide transition will be divided as many parts as slide larger than container. New in 2.5.0
        slidesPerGroup               : 1, //Set numbers of slides to define and enable group sliding. Useful to use with carousel mode.
        calculateHeight              : false, //Set to true and Swiper will calculate container's height depending on slides content. Useful in repsonsive layout or when you don't know height of your slides (like with responsive images).
        cssWidthAndHeight            : false, //Set to true and Swiper will not set width and height to container, wrapper and slides. New in 2.4
        updateOnImagesReady          : true, //When enabled Swiper will be reinitialized after all inner images (<img> tags) are loaded. .
        releaseFormElements          : true, //This option allows to use form elements in Swiper and disable swiping on them. .
        watchActiveIndex             : false, //If enabled the Swipe recalculates activeIndex dynamically during touch interactions .
        visibilityFullFit            : false, //If enabled then "visible" slides will be only those slides that are entirely fit to the container's view. .
        autoResize                   : true, //Set to false if you want to disable automatic slider resize on window resize. .
        resizeReInit                 : false, //If "true" then Swiper will be always reinitialized with window resize. .
        DOMAnimation                 : true, //Enable/disable custom DOM animation in browsers that don't support css transitions (like IE7-9). .
        resistance                   : true, //Set to false if you want to disable resistant bounds. Set to '100%' to enable nopeek resistance mode. .
        noSwiping                    : false, //If true, then you can add "noSwipingClass" class to swiper's slide to prevent/disable swiping on this element. .
        preventLinks                 : true, //When enabled Swiper will prevent clicks on links (<a>) while slider is "touching".
        preventLinksPropagation      : false, //Set to true if you want to do stopPropagation along with preventLinks during swipes. New in 2.4.2
        initialSlide                 : 0, //Index number of initial slide.
        useCSS3Transforms            : true, //Set to false if you don't want to use css3 transforms for slides offset (could improve quality, but could reduce performance) to use wrapper's left/top properties instead.

        //Free Mode and Scroll Container
        //------------------------------
        freeMode            : false, //If 'true' then slides will not have fixed positions
        freeModeFluid       : false, //If true, then if you release the slide it will keep moving for a while
        scrollContainer     : false, //Set to true if you want to use Swiper like a scrollable area.
        momentumRatio       : 1, //Higher value produces larger momentum distance after you release slider.
        momentumBounce      : true, //Set to false if you want to disable momentum bounce in free mode.
        momentumBounceRatio : 1, //Higher value produces larger momentum bounce effect.

        //Slides offset
        //-------------
        centeredSlides     : false, //If true, then active slide will be centered, not always on the left side. .
        offsetPxBefore     : 0, //Slides will have specified offset value from the left "border" of wrapper .
        offsetPxAfter      : 0, //Slides will have specified offset value from the right "border" of wrapper
        offsetSlidesBefore : 0, //Slides will have offset from the left "border" of wrapper that equal to the specified number of slides' widths. Useful in responsive layouts when you don't know slide's width .
        offsetSlidesAfter  : 0, //Slides will have offset from the right "border" of wrapper that equal to the specified number of slides' widths. Useful in responsive layouts when you don't know slide's width .

        //Touch/mouse interactions
        //------------------------
        touchRatio         : 1, //Touch ratio
        simulateTouch      : true, //If true, Swiper will accept mouse events like touch events (click and drag to change slides)
        onlyExternal       : false, //If true, then the only way to switch the slide is use of external API functions like swipeRight or swipeLeft. Useful for tabs like in example above
        followFinger       : true, //If false, then slider will be animated only when you release it, it will not move while you hold your finger on it
        grabCursor         : false, //This option may a little improve usability of your swiper users. If true, user will see the "grab" cursor when hover on Swiper.
        shortSwipes        : true, //Set to false if you want to disable short swipes.
        longSwipesRatio    : 0.5, //Ratio to trigger swipe to next/previous slide during long swipes.New in 2.4.2
        moveStartThreshold : false, //Threshold value in px. If "touch distance" will be lower than this value then swiper will not move.

        //Navigation
        //----------
        keyboardControl              : false, //Set to true to enable navigation through slides using keyboard right and left (for horizontal mode), top and borrom (for vertical mode) keyboard arrows
        mousewheelControl            : false, //Set to true to enable navigation through slides using mouse wheel.
        mousewheelControlForceToAxis : false, //Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode. New in 2.4.1

        //Pagination
        //----------
        pagination          : '', //CSS selector of the container with pagination. Or HTML element of pagination element.
        paginationClickable : false, //If true then clicking on pagination button will cause transition to appropriate slide. .
        paginationAsRange   : true, //If true then pagination buttons that are related to visible slides will have additional css class. Useful when using slidesPerView more than 1. .
        createPagination    : true, //if true, then Swiper will create as many SPAN elements as many slides in slider. All these spans will be created in the container specified in the "pagination" parameter. Every SPAN will have a 'swiper-pagination-switch' class, active span (of the current slide) will have a 'swiper-active-switch' class. They will be useful for styling them.

        //Namespace
        //---------
        wrapperClass           : 'swiper-wrapper', //CSS class of the Swiper's wrapper. See the HTML demo above
        slideClass             : 'swiper-slide', //CSS class of the Swiper's slide. See the HTML demo above
        slideActiveClass       : 'swiper-slide-active', //CSS class of the Swiper's active slide. .
        slideVisibleClass      : 'swiper-slide-visible', //CSS class of the Swiper's visible slide. .
        slideElement           : 'div', //Name of tag that you use for single slide.
        noSwipingClass         : 'swiper-no-swiping', //CSS class of html element that will be used to prevent swiping when "noSwiping" parameter is set to true. .
        paginationElement      : 'span', //Name of tag that you use for single pagination button.
        paginationElementClass : 'swiper-pagination-switch', //CSS class of the Swiper's pagination switch. .
        paginationActiveClass  : 'swiper-active-switch', //CSS class of the Swiper's active pagination switch.
        paginationVisibleClass : 'swiper-visible-switch', //CSS class of the Swiper's visible pagination switch. .

        //Callbacks
        //---------
        queueStartCallbacks : false, //Set to "true" if you want to queue "slideChangeStart" callbacks. In this case callback will be fired only once during fast multiple swipes/transitions. .
        queueEndCallbacks   : false  //Set to "true" if you want to queue "slideChangeEnd" callbacks. In this case callback will be fired only once after fast multiple swipes/transitions. .
      }
    };

    this.$get = function($q, $http, $templateCache, $compile) {

      function SwiperFactory(element, config, $rootScope) {
        var $swiper = {};

        // Common vars
        var tdFlow = angular.copy(defaults.swiper.tdFlow);
        var options = angular.extend({}, defaults, config);
        options.swiper.tdFlow = tdFlow;
        var scope   = $swiper.$scope = options.scope;

        //init
        $swiper = new Swiper(element, options.swiper);

        scope.$swiper = $swiper;

        return $swiper;
      }
      SwiperFactory.defaults = defaults;
      return SwiperFactory;
    };
  })
  .directive('swiper', function($swiper, $timeout) {

    var defaults = $swiper.defaults;

    return {
      restrict: 'EAC',
      replace: true,
      transclude : true,
      require: '?ngModel',
      templateUrl: function(element, options) {
        var attr = options.$attr;
        return attr.template || defaults.template;
      },
      link: function postLink(scope, element, attr, controller) {

        // Directive options
        var options = {scope: scope, swiper : {}};
        angular.forEach(['autoplay'], function(key) {
          if(angular.isDefined(attr[key])) options.swiper[key] = attr[key];
        });

        // Support scope as an object
        attr.swiper && scope.$watch(attr.swiper, function(newValue, oldValue) {
          scope.content = newValue;
        }, true);

        //Initialize Swiper
        var swiper;
        $timeout(function() {
          swiper = $swiper(element[0], options);
          swiper.addCallback('SlideChangeEnd', function(swiper) {
            // View -> Model
            if(controller) {
              controller.$setViewValue(swiper.activeIndex);
              scope.$digest();
            }
          });
        });

        // Model -> View
        if(controller) {
          controller.$formatters.push(function(modelValue) {
            swiper && swiper.swipeTo(modelValue);
            return modelValue;
          });
        }

       // Garbage collection
        scope.$on('$destroy', function() {
          swiper.destroy();
        });

      }
    };
  });

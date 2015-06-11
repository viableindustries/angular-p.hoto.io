'use strict';

angular.module('angularPhotoio', [])
  .directive('photoio', function () {
    return {
      restrict: 'A',
      replace: true,
      template: '<img class="" src="{{ render }}" alt="" width="{{ photoioW }}" />',
      scope: {
        render: '=?',
        photoioClass: '=?',
        photoioU: '=?',
        photoioW: '=?',
        photoioH: '=?',
        photoioMode: '=?',
        photoioQuality: '=?'
      },
      link: function(scope, element, attrs) {
      
        scope.photoioMode = (scope.photoioMode) ? scope.photoioMode : 'crop';

        scope.render = 'http://p.hoto.io/img?u=' + encodeURI(scope.photoioU) + '&w=' + scope.photoioW + '&w=' + scope.photoioH + '&w=' + scope.photoioMode;
 
      }
    };
  });
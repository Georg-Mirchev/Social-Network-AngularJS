socialNetworkApp.directive('hoverIntent', ['$timeout', function($timeout){
    return {
        restrict: 'A',
        link: function(scope, element, attributes){
            var hoverIntentPromise;
            element.bind('mouseenter', function(event){
                var delay = scope.$eval(attributes.hoverIntentDelay);
                if(delay === undefined){
                    delay = 500;
                }

                hoverIntentPromise = $timeout(function(){
                    scope.$eval(attributes.hoverIntent, { $event: event });
                }, delay);
            });
            element.bind('mouseleave', function(){
                $timeout.cancel(hoverIntentPromise);
            });
        }
    };
}]);
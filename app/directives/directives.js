/*
Copyright (c) 2013

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function () {
	"use strict";

	angular.module('pot.directives', [])
		.directive('foodBtnPanel', function() {
			return {
				restrict: 'E',
				scope: {
					items: '=',
					showFilter: '=',
					clickHandler: '&'
				},
				templateUrl: 'app/partials/food_btn_panel.html'
			};
		})
		.directive('foodbtn', function(food, $compile) {
			var tplBtn        = '<a class="btn btn-default" ng-click="clickHandler({item:item.id})" title="Add {{ item.name }} to the pot"><img ng-src="{{ item.img }}"><span>{{ item.name }}</span></a> ';
			var tplBtnCooked  = '<a class="btn btn-default" ng-click="clickHandler({item:cookedItem.id})" title="Add {{ cookedItem.name }} to the pot"><img ng-src="{{ cookedItem.img }}"></a>';
			var tplBtnDried   = '<a class="btn btn-default" ng-click="clickHandler({item:driedItem.id})" title="Add {{ driedItem.name }} to the pot"><img ng-src="{{ driedItem.img }}"></a>';
			var tplGroupOpen  = '<div class="food-btn-group btn-group">';
			var tplGroupClose = '</div>';

			return {
				restrict: 'E',
				replace: true,
				link: function(scope, element, attrs) {
					var template = '<div class="food-btn-group btn-group">' + tplBtn;
					var f = scope.item;
					scope.clickHandler = scope.$parent.clickHandler;

					// deprecated
					if (f.hasOwnProperty('cookable')) {
						scope.cookedItem = food[f.cookable.product];
						template += tplBtnCooked;
					}
					if (f.hasOwnProperty('cooked')) {
						scope.cookedItem = food[f.cooked];
						template += tplBtnCooked;
					}

					// deprecated
					if (f.hasOwnProperty('dryable')) {
						scope.driedItem = food[f.dryable.product];
						template += tplBtnDried;
					}
					if (f.hasOwnProperty('dried')) {
						scope.driedItem = food[f.dried];
						template += tplBtnDried;
					}


					template += '</div>';

					element.html(template);
					$compile(element.contents())(scope);
				}
			}
		});
}());

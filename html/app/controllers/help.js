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

	angular.module('pot.controllers')
		.controller('HelpController', function($scope, gameVariables) {
			var g = gameVariables;

			$scope.stalehealth = Math.round(g.STALE_FOOD_HEALTH * 1000) / 10 + '%';
			$scope.stalehunger = Math.round(g.STALE_FOOD_HUNGER * 1000) / 10 + '%';
			$scope.spoiledhunger = Math.round(g.SPOILED_FOOD_HUNGER * 1000) / 10 + '%';
			$scope.spoiledsanity = g.SANITY_SMALL;
			$scope.perishground = Math.round(g.PERISH_GROUND_MULT * 1000) / 10 + '%';
			$scope.perishwinter = Math.round(g.PERISH_WINTER_MULT * 1000) / 10 + '%';
			$scope.perishfridge = Math.round(g.PERISH_FRIDGE_MULT * 1000) / 10 + '%';
		});
}());

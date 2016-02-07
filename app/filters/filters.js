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

	angular.module('pot.filters', [])
		.filter('foodFilter', function() {
			var compareStr = function(stra, strb) {
				stra = ("" + stra).toLowerCase();
				strb = ("" + strb).toLowerCase();
				return stra.indexOf(strb) !== -1;
			};

			return function(foodList, queryString) {
				if(!queryString) {
					return foodList;
				}

				var food = [];

				angular.forEach(foodList, function(value, key) {
					if (queryString !== "" && (value.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)) {
						food.push(value);
					}
				});

				return food;
			};
		})
		.filter('days', function(gameVariables) {
			var g = gameVariables;
			var total_day_time = g.TOTAL_DAY_TIME;

			return function(perishTime) {
				return (isNaN(perishTime) || perishTime === 0) ? 'Never' : (perishTime / total_day_time) + ' days';
			};
		})
		.filter('signed', function() {
			return function(input) {
				if (isNaN(input)) {
					return "";
				}

				if (input > 0) {
					return "+" + input;
				}

				return input;
			};
		});
}());

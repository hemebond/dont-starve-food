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
'use strict';

angular.module('pot.controllers')
	.controller('RecipeListController', function($scope, $filter, ngTableParams, utils, food, recipes) {
		var recipeList = [];

		angular.forEach(recipes, function(recipe, id) {
			recipeList.push(recipe);
		});

		$scope.tableParams = new ngTableParams({
			page: 1,				// show first page
			total: 1,		// length of data
			count: recipeList.length,
			counts: [],
			sorting: {
				name: 'asc'			// initial sorting
			}
		});

		// watch for changes of parameters
		$scope.$watch('tableParams', function(params) {
			// use build-in angular filter
			var orderedData = params.sorting ? $filter('orderBy')(recipeList, params.orderBy()) : recipeList;

			// slice array food on pages
			$scope.recipes = orderedData.slice(
				(params.page - 1) * params.count,
				params.page * params.count
			);
		}, true);

		$scope.makeRecipeTags = utils.makeRecipeTags;
	});

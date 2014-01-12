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
		.controller('DiscoveryController', function($scope, $filter, ngTableParams, utils, gameVariables, food, recipes) {
			var g = gameVariables;
			var ingredients = [];

			angular.forEach(food, function(item, id) {
				// must be cookable
				if (!item.tags.hasOwnProperty('uncookable') || !item.tags.uncookable) {
					// no cooked items
					if (!item.tags.hasOwnProperty('cooked') || !item.tags.cooked) {
						// no dried items
						if (!item.tags.hasOwnProperty('dried') || !item.tags.dried) {
							// add to list of ingredients
							ingredients.push(item);
						}
					}
				}
			});

			$scope.ingredients = ingredients;
			$scope.potItems = [];
			$scope.potItemTotals = {};
			$scope.possibleRecipes = [];

			/*
			 * add an ingredient to the crock pot
			 */
			$scope.addToPot = function(foodId) {
				if (foodId) {
					$scope.potItems.push(food[foodId]);
				}
			};

			/*
			 * remove an item from the crock pot
			 */
			$scope.removeFromPot = function(slotId) {
				if (slotId !== undefined) {
					if ($scope.potItems[slotId]) {
						$scope.potItems.splice(slotId, 1);
					}
				}
			};

			$scope.$watch('potItems', function(items) {
				// update the list of suggested recipes
				updateRecipeLists(items);
			}, true);


			var calculateItemTotals = function(foodItems) {
				var health = 0;
				var hunger = 0;
				var sanity = 0;
				var perish = g.PERISH_PRESERVED;

				angular.forEach(foodItems, function(item, index) {
					health += (item.health || 0);
					hunger += (item.hunger || 0);
					sanity += (item.sanity || 0);

					if (item.hasOwnProperty('perish')) {
						perish  = Math.min(perish, item.perish || g.PERISH_PRESERVED);
					}
				});

				return {
					health: health,
					hunger: hunger,
					sanity: sanity,
					perish: perish
				};
			};


			/*
			 * update the list of valid recipes
			 */
			var updateRecipeLists = function(foodItems) {
				var names = {};
				var tags = {};

				possibleRecipes = []; // reset the list of possible recipes

				if (foodItems.length > 0) {
					// Populate the names and tags objects
					utils.getNamesAndTags(foodItems, names, tags);

					// update the list of valid recipes
					angular.forEach(recipes, function(recipe, id) {
						// Calculate possible recipes
						var valid = false;

						for (var i = 0; i < recipe.requirements.length; i++) {
							var requirement = recipe.requirements[i];

							if (requirement.test(null, names, tags)) {
								if (!requirement.cancel) {
									valid = true;
								}
							}
						}

						valid && possibleRecipes.push(recipe);
					});
				}

				$scope.potItemTotals = calculateItemTotals(foodItems);
				$scope.possibleRecipes = applyTableParams($scope.tableParams.possibleRecipes, possibleRecipes);
			};


			/*
			 * Suggestions table
			 */
			var possibleRecipes = []; // list of recipes that can be made with current

			$scope.tableParams = {
				possibleRecipes: new ngTableParams({
					counts: [],
					sorting: {
						name: 'asc' // initial sorting
					}
				})
			};

			$scope.$watch('tableParams.possibleRecipes', function(params) {
				$scope.possibleRecipes = applyTableParams(params, possibleRecipes);
			}, true);

			var applyTableParams = function(params, list) {
				return params.sorting ? $filter('orderBy')(list, params.orderBy()) : list;
			};

			/*
			 * Utils
			 */
			$scope.makeRecipeTags = utils.makeRecipeTags;
			$scope.makeFoodTags = utils.makeFoodTags;
		});
}());

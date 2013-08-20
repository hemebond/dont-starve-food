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

	angular.module('pot.controllers', [])
		.controller('SimulatorController', function($rootScope, $scope, $filter, ngTableParams, gameVariables, food, recipes, utils) {
			/*
			 * List of ingredients
			 */
			var ingredients = {
				all: [],
				veggies: [],
				meats: [],
				fruits: [],
				other: []
			};

			angular.forEach(food, function(item, id) {
				// hide any uncookable ingredients
				if (!item.tags.hasOwnProperty('uncookable') || !item.tags.uncookable) {

					if (!item.tags.hasOwnProperty('cooked') || !item.tags.cooked) {

						if (!item.tags.hasOwnProperty('dried') || !item.tags.dried) {
							// full list of cookable ingredients
							ingredients.all.push(item);

							// list of vegetable ingredients
							if (item.tags.hasOwnProperty('veggie') && item.tags.veggie > 0) {
								ingredients.veggies.push(item);
							}
							// list of meat ingredients
							else if (item.tags.hasOwnProperty('meat') && item.tags.meat > 0) {
								ingredients.meats.push(item);
							}
							// list of fruit ingredients
							else if (item.tags.hasOwnProperty('fruit') && item.tags.fruit > 0) {
								ingredients.fruits.push(item);
							}
							// other ingredients like decorations, etc
							else {
								ingredients.other.push(item);
							}
						}
					}
				}
			});

			$scope.ingredients = ingredients;


			/*
			 * Crockpot and ingredient list
			 */
			$scope.potSize = 4;
			$scope.potItems = []; // the items in the crockpot
			$scope.potItemTotals = {}; // the total health, hunger and sanity gained (or lost)
			                        // by eating each item without the crockpot

			var calculateItemTotals = function(foodItems) {
				var health = 0;
				var hunger = 0;
				var sanity = 0;
				var perish = gameVariables.perish_preserved;

				angular.forEach(foodItems, function(item, index) {
					health += (item.health || 0);
					hunger += (item.hunger || 0);
					sanity += (item.sanity || 0);

					if (item.hasOwnProperty('perish')) {
						perish  = Math.min(perish, item.perish || gameVariables.perish_preserved);
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
			 * add an ingredient to the crock pot
			 */
			$scope.addToPot = function(foodId) {
				if ($scope.potItems.length < $scope.potSize) {
					$scope.potItems.push(food[foodId]);
				}
			};

			/*
			 * remove an item from the crock pot
			 */
			$scope.removeFromPot = function(slotId) {
				if ($scope.potItems[slotId]) {
					$scope.potItems.splice(slotId, 1);
				}
			};

			$scope.$watch('potItems', function(items) {
				// update the list of suggested recipes
				updateRecipeLists(items);
			}, true);

			/*
			 * update the list of valid recipes
			 */
			var updateRecipeLists = function(foodItems) {
				var names = {};
				var tags = {};

				var validRecipe = null;
				var validRecipes = [];
				var recipeSuggestions = [];

				if (foodItems.length > 0) {
					// Populate the names and tags objects
					getNamesAndTags(foodItems, names, tags);

					// update the list of valid recipes
					angular.forEach(recipes, function(recipe, id) {

						// Four items in the crockpot? What will be made?
						if ($scope.potItems.length == 4) {
							if (recipe.test(null, names, tags)) {
								// is this the highest priority recipe?
								if (validRecipe && validRecipe !== null) {
									if (recipe.priority > validRecipe.priority) {
										validRecipe = recipe;
									}
								}
								else {
									validRecipe = recipe;
								}

								validRecipes.push(recipe);
							}
						}

						// Recipe Suggestions
						var valid = false;

						//angular.forEach(recipe.requirements, function(requirement) {
						for (var i = 0; i < recipe.requirements.length; i++) {
							var requirement = recipe.requirements[i];

							if (requirement.test(null, names, tags)) {
								if (!requirement.cancel) {
									valid = true;
								}
							}
							else if (requirement.cancel) {
								valid = false;
								break;
							}
						}

						valid && recipeSuggestions.push(recipe);
					});
				}

				$scope.validRecipe = validRecipe;
				$scope.potItemTotals = calculateItemTotals(foodItems);
				$scope.recipeSuggestions = applyTableParams($scope.suggestionTableParams, recipeSuggestions);
			};


			/*
			 * Populates the `names` and `tags` objects
			 * `names` will have food item names as keys, value being a tally of that name of each item
			 * `tags` will have tag names as keys, values will be the sum of that tag for all items
			 */
			var getNamesAndTags = function(foodItems, names, tags) {
				angular.forEach(foodItems, function(item, idx) {
					names[item.id] = 1 + (names[item.id] || 0);

					if (item.hasOwnProperty('perish')) {
						tags['perish'] = Math.min(tags['perish'] || gameVariables.perish_preserved, item['perish']);
					}

					angular.forEach(item.tags, function(tag, tagName) {
						tags[tagName] = tag + (tags[tagName] || 0);
					});
				});
			};


			/*
			 * Suggestions table
			 */
			var recipeSuggestions = [];

			$scope.suggestionTableParams = new ngTableParams({
				page: 1, // show first page
				total: 1, // length of data
				count: recipes,
				counts: [],
				sorting: {
					name: 'asc' // initial sorting
				}
			});

			$scope.$watch('suggestionTableParams', function(params) {
				$scope.recipeSuggestions = applyTableParams(params, recipeSuggestions);
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

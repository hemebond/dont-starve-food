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
			var potSize = 4;
			var potItems = []; // the items in the crockpot
			var potItemTotals = {}; // the combined ingredients

			$scope.potItems = potItems;
			$scope.potItemTotals = potItemTotals;

			var calculateCombinedItems = function(foodItems) {
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
				if ($scope.potItems.length < potSize) {
					$scope.potItems.push(food[foodId]);

					updateRecipeLists($scope.potItems);
				}
			};

			/*
			 * remove an item from the crock pot
			 */
			$scope.removeFromPot = function(slotId) {
				if ($scope.potItems[slotId]) {
					$scope.potItems.splice(slotId, 1);

					updateRecipeLists($scope.potItems);
				}
			};

			/*
			 * update the list of valid recipes
			 */
			var updateRecipeLists = function(foodItems) {
				var namesAndTags = getNamesAndTags(foodItems);
				var names = namesAndTags.names;
				var tags = namesAndTags.tags;

				var validRecipes = [];

				// update the list of valid recipes
				angular.forEach(recipes, function(recipe, id) {
					if (recipe.test(null, names, tags)) {
						// is this the highest priority recipe?
						if ($scope.validRecipe) {
							if (recipe.priority > $scope.validRecipe.priority) {
								$scope.validRecipe = recipe;
							}
						}
						else {
							$scope.validRecipe = recipe;
						}

						validRecipes.push(recipe);
					}
				});

				recipeSuggestions = getSuggestions(names, tags, recipes);

				$scope.validRecipes = validRecipes;
				$scope.combinedItems = calculateCombinedItems(foodItems);
			};

			var getNamesAndTags = function(foodItems) {
				var names = {};
				var tags = {};

				angular.forEach(foodItems, function(item, idx) {
					names[item.id] = 1 + (names[item.id] || 0);

					if (item.hasOwnProperty('perish')) {
						tags['perish'] = Math.min(tags['perish'] || gameVariables.perish_preserved, item['perish']);
					}

					angular.forEach(item.tags, function(tag, tagName) {
						tags[tagName] = tag + (tags[tagName] || 0);
					});
				});

				return {
					names: names,
					tags: tags
				};
			};

			/*
			var setIngredientValues = function(items, names, tags) {
				var i, key, item;

				angular.forEach(items, function(item, id) {
					names[item.id] = 1 + (names[item.id] || 0);

					if (item.hasOwnProperty('perish')) {
						tags['perish'] = Math.min(tags['perish'] || gameVariables.perish_preserved, item['perish']);
					}

					for (var tag in item.tags) {
						if (item.tags.hasOwnProperty(tag) && !isNaN(item.tags[tag])) {
							tags[tag] = item.tags[tag] + (tags[tag] || 0);
						}
					}
				});
			};
			*/

			/*
			 * Tests recipes against list of ingredients (names and tags)
			 * Returns a list of recipes that pass the tests
			 */
			var getSuggestions = function(names, tags, recipes) {
				var suggestions = [];

				// update the list of possible recipes
				angular.forEach(recipes, function(recipe, id) {
					var valid = false;

					for (var i = 0; i < recipe.requirements.length; i++) {
						var requirement = recipe.requirements[i];

						if (requirement.test(null, names, tags)) {
							if (!requirement.cancel) {
								valid = true;
							}
						}
					}

					valid && suggestions.push(recipe);

				});

				return suggestions;
			};
/*
			var getSuggestions = function() {
				var items = $scope.pot.items;

				var itemComplete = false;	// don't know what this does

				var recipeList = [];	// hold the list of suggested recipes
				var names = {};			// will hold the names of items in the pot
				var tags = {};			// will hold the tags of items in the pot

				setIngredientValues(items, names, tags);	// calculates the

				angular.forEach(recipes, function(recipe, id) {
					var valid = false;

					for (var i = 0; i < recipe.requirements.length; i++) {
						var requirement = recipe.requirements[i];

						if (requirement.test(null, names, tags)) {
							if (!requirement.cancel) {
								valid = true;
							}
						} else if (!itemComplete && requirement.cancel) {
							valid = false;
							break;
						} else if (itemComplete && !requirement.cancel) {
							valid = false;
							break;
						}
					}

					valid && (!exclude || exclude.indexOf(recipe) === -1) && recipeList.push(recipe);
				});

				tags.img = '';
				tags.name = 'Combined';

				return recipeList;
			};
*/
			/*
			 * Suggestions table
			 */
			var recipeSuggestions = [];

			$scope.suggestionTableParams = new ngTableParams({
				page: 1, // show first page
				total: 1, // length of data
				count: recipeSuggestions.length,
				counts: [],
				sorting: {
					name: 'asc' // initial sorting
				}
			});

			// watch for changes of parameters
			$scope.$watch('suggestionTableParams', function(params) {
				// use build-in angular filter
				var orderedData = params.sorting ? $filter('orderBy')(recipeSuggestions, params.orderBy()) : recipeSuggestions;

				// slice array food on pages
				$scope.suggestions = orderedData.slice(
					(params.page - 1) * params.count,
					params.page * params.count
				);
			}, true);


			/*
			 * Utils
			 */
			$scope.makeRecipeTags = utils.makeRecipeTags;
			$scope.makeFoodTags = utils.makeFoodTags;
		});
}());

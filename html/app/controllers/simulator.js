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
		.controller('SimulatorController', function($rootScope, $scope, gameVariables, food, recipes) {
			// the crock pot
			var potSize = 4;

			$scope.potItems = []; // the items in the crockpot
			$scope.combinedItems = {}; // the combined ingredients

			// lists of ingredients
			$scope.food = {
				all: [],
				veggies: [],
				meats: [],
				fruits: [],
				other: []
			};

			// recipes that can be made with the ingredients in the crock pot
			$scope.validRecipes = [];
			$scope.validRecipesTable = {
				sortField: 'priority',
				sortReverse: true,
				sortBy: function(fieldName, reverse) {
					if (fieldName == this.sortField) {
						this.sortReverse = !this.sortReverse;
					}
					else {
						this.sortField = fieldName;
						this.sortReverse = reverse || false;
					}
				}
			};

			$scope.validRecipe = null;

			// table sorting
			$scope.sortField = 'priority';
			$scope.sortReversed = true;

			angular.forEach(food, function(item, id) {
				// hide any uncookable ingredients
				if (!item.tags.hasOwnProperty('uncookable') || !item.tags.uncookable) {

					if (!item.tags.hasOwnProperty('cooked') || !item.tags.cooked) {

						if (!item.tags.hasOwnProperty('dried') || !item.tags.dried) {
							// full list of cookable ingredients
							$scope.food.all.push(item);

							// list of vegetable ingredients
							if (item.tags.hasOwnProperty('veggie') && item.tags.veggie > 0) {
								$scope.food.veggies.push(item);
							}
							// list of meat ingredients
							else if (item.tags.hasOwnProperty('meat') && item.tags.meat > 0) {
								$scope.food.meats.push(item);
							}
							// list of fruit ingredients
							else if (item.tags.hasOwnProperty('fruit') && item.tags.fruit > 0) {
								$scope.food.fruits.push(item);
							}
							// other ingredients like decorations, etc
							else {
								$scope.food.other.push(item);
							}
						}
					}
				}
			});

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

			// add an ingredient to the crock pot
			$scope.addToPot = function(foodId) {
				if ($scope.potItems.length < potSize) {
					$scope.potItems.push(food[foodId]);

					updateRecipeLists($scope.potItems);
				}
			};

			// remove an item from the crock pot
			$scope.removeFromPot = function(slotId) {
				if ($scope.potItems[slotId]) {
					$scope.potItems.splice(slotId, 1);

					updateRecipeLists($scope.potItems);
				}
			};

			// update the list of valid recipes
			var updateRecipeLists = function(foodItems) {
				var validRecipes = [];
				var suggestions = [];
				var names = {};
				var tags = {};

				setIngredientValues(foodItems, names, tags);

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

				// update the list of possible recipes
				angular.forEach(recipes, function(recipe, id) {
					var itemComplete = false;
					var exclude = null; //[$scope.validRecipe];
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

					if (valid) {
						recipe.requires = recipe.requirements.join('; ');
						// console.log(recipe.requires);
					}

					valid && (!exclude || exclude.indexOf(recipe) === -1) && suggestions.push(recipe);
				});

				$scope.validRecipes = validRecipes;
				$scope.suggestions = suggestions;
				$scope.combinedItems = calculateCombinedItems(foodItems);
			};

			var getNamesAndTags = function(foodItems) {

			};

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
						/*else if (tag === 'perish') {
							tags[tag] = Math.min(tags[tag] || gameVariables.perish_preserved, item.tags[tag]);
						}*/
					}
				});
			};

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
		});
}());

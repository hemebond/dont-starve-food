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

angular.module('pot.controllers', [])
	.controller('SimulatorController', function($rootScope, $scope, gameVariables, food, recipes) {
		// the crock pot
		$scope.pot = {
			size: 4,
			items: [],	// the items in the crockpot
			result: {}	// the combined ingredients
		};

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

		// table sorting
		$scope.sortBy = 'priority';
		$scope.sortReverse = true;

		for (var i = 0; i < food.length; i++) {
			var item = food[i];

			if ((
					// hide any uncookable ingredients
					!item.tags.hasOwnProperty('uncookable') ||
					!item.tags.uncookable
				) && (
					// hide all cooked versions
					item.id.substr(-7) !== '_cooked'
				)
			) {
				// full list of cookable ingredients
				$scope.food.all.push(item);

				// list of vegetable ingredients
				if (item.hasOwnProperty('veggie') && item.veggie > 0) {
					$scope.food.veggies.push(item);
				}
				// list of meat ingredients
				else if (item.hasOwnProperty('meat') && item.meat > 0) {
					$scope.food.meats.push(item);
				}
				// list of fruit ingredients
				else if (item.hasOwnProperty('fruit') && item.fruit > 0) {
					$scope.food.fruits.push(item);
				}
				// other ingredients like decorations, etc
				else {
					$scope.food.other.push(item);
				}
			}
		}

		// add an ingredient to the crock pot
		$scope.addToPot = function(foodId) {
			var pot = $scope.pot;
			var food = $scope.food.all;

			if (pot.items.length < pot.size) {
				for (var i = 0; i < food.length; i++) {
					if (food[i].id == foodId) {
						pot.items.push(food[i]);
						updateRecipeLists();
						return;
					}
				}
			}

		};

		// remove an item from the crock pot
		$scope.removeFromPot = function(slotId) {
			var pot = $scope.pot;

			if (pot.items[slotId]) {
				pot.items.splice(slotId, 1);
			}

			updateRecipeLists();
		};

		// update the list of valid recipes
		var updateRecipeLists = function() {
			var validRecipes = [];
			var suggestions = [];
			var names = {};
			var tags = {};

			setIngredientValues($scope.pot.items, names, tags);

			for (var i = 0; i < recipes.length; i++) {
				var recipe = recipes[i];

				if (recipe.test(null, names, tags)) {
					validRecipes.push(recipe);
				}
			}

			$scope.validRecipes = validRecipes;

			angular.forEach(recipes, function(recipe, index) {
				var itemComplete = false;
				var exclude = validRecipes;
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

				valid && (!exclude || exclude.indexOf(recipe) === -1) && suggestions.push(recipe);
			});

			$scope.suggestions = suggestions;
		};

		var setIngredientValues = function(items, names, tags) {
			var i, key, item;

			for (i = 0; i < items.length; i++) {
				item = items[i];

				names[item.id] = 1 + (names[item.id] || 0);

				for (var tag in item.tags) {
					if (item.tags.hasOwnProperty(tag) && tag !== 'perish' && !isNaN(item.tags[tag])) {
						tags[tag] = item.tags[tag] + (tags[tag] || 0);
					}
					else if (tag === 'perish') {
						tags[tag] = Math.min(tags[tag] || gameVariables.perish_preserved, item.tags[tag]);
					}
				}
			}
		};

		var getSuggestions = function() {
			var items = $scope.pot.items;

			var itemComplete = false;	// don't know what this does

			var recipeList = [];	// hold the list of suggested recipes
			var names = {};			// will hold the names of items in the pot
			var tags = {};			// will hold the tags of items in the pot

			setIngredientValues(items, names, tags);	// calculates the

			angular.forEach(recipes, function(recipe, index) {
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
	})
	.controller('FoodListController', function($scope, food) {
		$scope.food = food;
		$scope.sortBy = 'name';
		$scope.sortReverse = false;
	})
	.controller('RecipeListController', function($scope, recipes) {
		$scope.recipes = recipes;
		$scope.sortBy = 'name';
		$scope.sortReverse = false;
	});

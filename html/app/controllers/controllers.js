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
	.controller('SimulatorController', function($rootScope, $scope, constantsService, foodFactory) {
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

		$scope.sortBy = 'priority';
		$scope.sortReverse = true;

		angular.forEach(foodFactory.food, function(item, key) {
			if (
				(
					// hide any uncookable ingredients
					!item.hasOwnProperty('uncookable') ||
					!item.uncookable
				) &&
				(
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
		});

		// add an ingredient to the crock pot
		$scope.addToPot = function(foodId) {
			var pot = $scope.pot;
			var food = $scope.food.all;

			if (pot.items.length < pot.size) {
				for (var i = 0; i < food.length; i++) {
					if (food[i].id == foodId) {
						pot.items.push(food[i]);
						updateRecipeList();
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

			updateRecipeList();
		};

		// update the list of valid recipes
		var updateRecipeList = function() {
			var validRecipes = [];
			var names = {};
			var tags = {};

			setIngredientValues($scope.pot.items, names, tags);

			angular.forEach(foodFactory.recipes, function(recipe, id) {
				if (recipe.test(null, names, tags)) {
					validRecipes.push(recipe);
				}
			});

			$scope.validRecipes = validRecipes;
		}

		var setIngredientValues = function(items, names, tags) {
			var i, key, item;

			for (i = 0; i < items.length; i++) {
				item = items[i];

				names[item.id] = 1 + (names[item.id] || 0);

				for (key in item) {
					if (item.hasOwnProperty(key) && key !== 'perish' && !isNaN(item[key])) {
						tags[key] = item[key] + (tags[key] || 0);
					}
					else if (key === 'perish') {
						tags[key] = Math.min(tags[key] || constantsService.perish_preserved, item[key]);
					}
				}
			}
		};

		var getSuggestions = function() {
			var recipes = foodFactory.recipes;
			var items = $scope.pot.items;

			var itemComplete = false;	// don't know what this does

			var recipeList = [];	// hold the list of suggested recipes
			var names = {};			// will hold the names of items in the pot
			var tags = {};			// will hold the tags of items in the pot

			setIngredientValues(items, names, tags);	// calculates the

			for (var i = 0; i < recipes.length; i++) {
				var recipe = recipes[i];
				var valid = false;

				for (var ii = 0; ii < recipe.requirements.length; ii++) {
					var requirement = recipe.requirements[ii];

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
			}
			tags.img = '';
			tags.name = 'Combined';

			return recipeList;
		};
	})
	.controller('FoodListController', function($scope, foodFactory) {
		$scope.food = foodFactory.food;
		$scope.sortBy = 'name';
		$scope.sortReverse = false;
	})
	.controller('RecipeListController', function($scope, foodFactory) {
		$scope.recipes = foodFactory.recipes;
		$scope.sortBy = 'name';
		$scope.sortReverse = false;
	});

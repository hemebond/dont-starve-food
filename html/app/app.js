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

var app = angular.module(
	'pot',
	[
		'ui.bootstrap',
		'ngTable',
		'pot.services',
		'pot.filters',
		'pot.directives',
		'pot.controllers'
	]
);

app.run(function ($rootScope, food, recipes) {
	angular.forEach(food, function(item, id) {
		// add an img property (URL) to each food item
		// pointing to the food icon
		item.id = id;
		item.img = 'static/img/food/' + id + '.png';

		if (!item.hasOwnProperty('health')) item.health = 0;
		if (!item.hasOwnProperty('hunger')) item.hunger = 0;
		if (!item.hasOwnProperty('sanity')) item.sanity = 0;
		if (!item.hasOwnProperty('perish')) item.perish = 0;
	});

	angular.forEach(recipes, function(recipe, id) {
		// add an img property (URL) to each recipe
		// pointing to the recipe icon
		recipe.id = id;
		recipe.img = 'static/img/recipes/' + id + '.png';
	});
});

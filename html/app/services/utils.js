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
angular.module('pot.services')
	.factory('utils', function(food) {
		var service = {
			makeRecipeTags: function(requirements) {
				var s = '';	// html string

				angular.forEach(requirements, function(requirement, index) {
					switch(requirement.fnName) {
						case "OR":
							s += '<span class="label label-default">';
							s += service.makeRecipeTags([requirement.item1]);
							s += ' or ';
							s += service.makeRecipeTags([requirement.item2]);
							s += '</span>';
							break;
						case "NOT":
							s += '<span class="label label-danger">';
							s += 'No ' + String(requirement);
							s += '</span>';
							break;
						case "SPECIFIC":
							s += '<span class="label label-info">';
							s += '<img src="' + food[requirement.name].img + '">';
							s += String(requirement);
							s += '</span>';
							break;
						case "NAME":
							s += '<span class="label label-info">';
							s += '<img src="' + food[requirement.name].img + '">';
							if (food[requirement.name].hasOwnProperty('cookable')) {
								var cooked = food[food[requirement.name].cookable.product];

								s += '<img src="' + cooked.img + '">';
							}
							s += String(requirement);
							s += '</span>';
							break;
						default:
							s += '<span class="label label-info">';
							s += String(requirement);
							s += '</span>';
							break;
					}
				});

				return s;
			},

			makeFoodTags: function(food) {
				return "";
			}
		};

		return service;
	});
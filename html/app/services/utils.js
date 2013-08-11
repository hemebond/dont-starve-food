angular.module('pot.services')
	.factory('utils', function(food) {
		var service = {
			makeRecipeTags: function(requirements) {
				var s = '';	// html string

				angular.forEach(requirements, function(requirement, index) {
					switch(requirement.fnName) {
						case "OR":
							s += '<span class="label label-default">';
							s += service.makeTags([requirement.item1]);
							s += ' or ';
							s += service.makeTags([requirement.item2]);
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
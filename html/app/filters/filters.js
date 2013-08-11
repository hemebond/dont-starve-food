angular.module('pot.filters', [])
	.filter('foodFilter', function() {
		var compareStr = function(stra, strb) {
			stra = ("" + stra).toLowerCase();
			strb = ("" + strb).toLowerCase();
			return stra.indexOf(strb) !== -1;
		};

		return function(foodList, queryString) {
			if(!queryString) {
				return foodList;
			}

			var food = [];

			angular.forEach(foodList, function(value, key) {
				if (queryString !== "" && (value.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)) {
					food.push(value);
				}
			});

			return food;
		};
	})
	.filter('days', function(gameVariables) {
		var total_day_time = gameVariables.total_day_time;

		return function(perishTime) {
			return (isNaN(perishTime) || perishTime == 0) ? 'Never' : (perishTime / total_day_time) + ' days';
		};
	})
	.filter('cooktime', function(gameVariables) {
		var base_cook_time = gameVariables.base_cook_time;

		return function(cooktime) {
			return (cooktime * base_cook_time + 0.5 | 0) + ' secs';
		};
	})
	.filter('signed', function() {
		return function(input) {
			if (isNaN(input)) {
				return "";
			}

			if (input > 0) {
				return "+" + input;
			}

			return input;
		};
	})
	/*.filter('requirements', function(requirements) {
		return function(input) {

		}
	})*/;

angular.module('crockpot.filter', [])
	.filter('foodFilter', function() {
		var compareStr = function(stra, strb) {
			stra = ("" + stra).toLowerCase();
			strb = ("" + strb).toLowerCase();
			return stra.indexOf(strb) !== -1;
		}

		return function(input, query) {
			if(!query) {
				return input;
			}

			var result = [];

			angular.forEach(input, function(food) {
				if(
					compareStr(food.name, query) ||
					compareStr(food.tags, query)
				) {
					result.push(food);
				}
			});
			return result;
		};
	});

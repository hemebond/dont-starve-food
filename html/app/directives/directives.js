angular.module('pot.directives', [])
	.directive('reciperow', function(utils) {
		return {
			templateUrl: 'reciperow.html',
			link: function(scope, element, attrs) {
				scope.makeRecipeTags = utils.makeRecipeTags;

				scope.$watch(attrs.recipe, function(value) {
					scope.recipe = value;
				});
			}
		};
	})
	.directive('foodbtn', function(food, $compile) {
		var tplBtn =           '<a class="btn btn-default" data-ng-click="addToPot(item.id)" title="Add {{ item.name }} to the pot"><img data-ng-src="{{ item.img }}"><span>{{ item.name }}</span></a> ';
		var tplBtnCooked =     '<a class="btn btn-default" data-ng-click="addToPot(cookedItem.id)" title="Add {{ cookedItem.name }} to the pot"><img data-ng-src="{{ cookedItem.img }}"></a>';
		var tplBtnDried =      '<a class="btn btn-default" data-ng-click="addToPot(driedItem.id)" title="Add {{ driedItem.name }} to the pot"><img data-ng-src="{{ driedItem.img }}"></a>';
		var tplGroupOpen =     '<div class="food-btn-group btn-group">';
		var tplGroupClose =    '</div>';

		return {
			restrict: 'E',
			replace: true,
			link: function(scope, element, attrs) {
				var template = '<div class="food-btn-group btn-group">' + tplBtn;
				var f = scope.item;

				if (f.hasOwnProperty('cookable')) {
					scope.cookedItem = food[f.cookable.product];
					template += tplBtnCooked;

					if (f.hasOwnProperty('dryable')) {
						scope.driedItem = food[f.dryable.product];
						template += tplBtnDried;
					}
				}

				template += '</div>';

				element.html(template);
				$compile(element.contents())(scope);
			}
		}
	});
/*
[tag:meat|meat],[*Twigs|static/img/food/twigs.png Twigs],[tag:monster|monster|strike] or [tag:monster|monster]<=1,[tag:inedible|inedible],[tag:inedible|inedible]<=1
[
	{
		"fnName":"TAG",
		"tag":"fruit",
		"qty":{}
	},
	{
		"fnName":"NOT",
		"item":{
			"fnName":"TAG",
			"tag":"meat",
			"qty":{}
		},
		"cancel":true
	},
	{
		"fnName":"NOT",
		"item":{
			"fnName":"TAG",
			"tag":"veggie",
			"qty":{}
		},
		"cancel":true
	},
	{
		"fnName":"NOT",
		"item":{
			"fnName":"TAG",
			"tag":"inedible",
			"qty":{}
		},
		"cancel":true
	}
]

<span class="label">meat</span>
<span class="label">
[
	{
		"fnName":"TAG",
		"tag":"meat",
		"qty":{}
	},
	{
		"fnName":"SPECIFIC",
		"name":"twigs",
		"qty":{}
	},
	{
		"fnName":"OR",
		"item1":{
			"fnName":"NOT",
			"item":{
				"fnName":"TAG",
				"tag":"monster",
				"qty":{}
			},
			"cancel":true
		},
		"item2":{
			"fnName":"TAG",
			"tag":"monster",
			"qty":{
				"fnName":"COMPARE",
				"op":"<=",
				"qty":1
			}
		},
		"cancel":true
	},
	{
		"fnName":"TAG",
		"tag":"inedible",
		"qty":{}
	},
	{
		"fnName":"TAG",
		"tag":"inedible",
		"qty":{
			"fnName":"COMPARE",
			"op":"<=",
			"qty":1
		}
	}
]
*/
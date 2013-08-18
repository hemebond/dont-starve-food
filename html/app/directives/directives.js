angular.module('pot.directives', [])
	/*.directive('addFood', function() {
		return {
			restrict: 'A',
			template:
				'<a>'
				'   class="btn"'
				'   data-ng-click="addToPot(f.id)">'
				'	<img data-ng-src="{{ f.img }}"><span>{{ f.name }}</span>''
				'</a>'
		}
	});*/
	.directive('reciperow', function($compile, utils, recipes) {
		return {
			scope: {
				recipe: '='
			},
			template: '<td><img data-ng-src="{{ recipe.img }}"></td>'+
			          '<td>{{ recipe.name }}</td>'+
			          '<td data-ng-class="{ negative: recipe.health < 0 }">{{ recipe.health | number:0 | signed }}</td>'+
			          '<td data-ng-class="{ negative: recipe.hunger < 0 }">{{ recipe.hunger | number:0 | signed }}</td>'+
			          '<td data-ng-class="{ negative: recipe.sanity < 0 }">{{ recipe.sanity | number:0 | signed }}</td>'+
			          '<td>{{ recipe.perish | days }}</td>'+
			          '<td ng-bind-html-unsafe="makeTags(recipe.requirements)"></td>',
			link: function($scope, $element, $attrs, $controller) {
				$scope.makeTags = utils.makeRecipeTags;
			}
		};
	})
	.directive('foodbtn', function(food, $compile) {
		var tplBtn =           '<a class="btn btn-default" data-ng-click="addToPot(item.id)" title="Add {{ item.name }} to the pot"><img data-ng-src="{{ item.img }}"><span>{{ item.name }}</span></a> ';
		//var tplBtn =           '<a class="btn btn-default" data-ng-click="$emit(\'foodButtonClicked\', item.id)" title="Add {{ item.name }} to the pot"><img data-ng-src="{{ item.img }}"><span>{{ item.name }}</span></a> ';
		var tplBtnCooked =     '<a class="btn btn-default" data-ng-click="addToPot(cookedItem.id)" title="Add {{ cookedItem.name }} to the pot"><img data-ng-src="{{ cookedItem.img }}"></a>';
		var tplBtnDried =      '<a class="btn btn-default" data-ng-click="addToPot(driedItem.id)" title="Add {{ driedItem.name }} to the pot"><img data-ng-src="{{ driedItem.img }}"></a>';
		var tplGroupOpen =     '<div class="food-btn-group btn-group">';
		var tplGroupClose =    '</div>';

		return {
			restrict: 'E',
			replace: true,
			link: function($scope, element, attrs) {
				var template = '<div class="food-btn-group btn-group">' + tplBtn;
				var f = food[attrs.item];

				$scope.item = f;

				if (f.hasOwnProperty('cookable')) {
					$scope.cookedItem = food[f.cookable.product];
					template += tplBtnCooked;

					if (f.hasOwnProperty('dryable')) {
						$scope.driedItem = food[f.dryable.product];
						template += tplBtnDried;
					}
				}

				template += '</div>';

				element.html(template);
				$compile(element.contents())($scope);
			}
		}
	});
	/*.directive('sortable', function($compile) {
		return {
			restrict: 'A',
			transclude: true,
			template: '<th>{{ tablename }}<span ng-transclude></span><span class="label">Default</span></th>',
			link: function($scope, element, attrs) {
				$scope.tablename = attrs.tablename;
				element.html(this.template);
				$compile(element.contents())($scope);
			}
		};
	})*/;
/*
<th ng-class="{
        sortable: column.sortable,
        'sort-asc': params.sorting[column.sortable]=='asc',
        'sort-desc': params.sorting[column.sortable]=='desc'
    }"
    ng-click="sortBy(column)"
    ng-repeat="column in columns"
    ng-show="column.show(this)"
    class="header">
	<span ng-transclude></span>
	<span class="glyphicon"
</th>
*/
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
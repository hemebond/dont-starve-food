angular.module('pot.services', [])
	.service('constantsService', function() {
		this.calories_per_day = 75;
		this.seg_time = 30;
		this.total_day_time = this.seg_time * 16;
		this.seg_time = this.total_day_time / 16;
		this.day_segs = 10;
		this.dusk_segs = 4;
		this.night_segs = 2;
		this.day_time = this.seg_time * this.day_segs;
		this.dusk_time = this.seg_time * this.dusk_segs;
		this.night_time = this.seg_time * this.night_segs;
		this.perish_warp = 1;
		this.stack_size_largeitem = 10;
		this.stack_size_meditem = 20;
		this.stack_size_smallitem = 40;

		this.healing_tiny = 1;
		this.healing_small = 3;
		this.healing_medsmall = 8;
		this.healing_med = 20;
		this.healing_medlarge = 30;
		this.healing_large = 40;
		this.healing_huge = 60;
		this.healing_superhuge = 100;

		this.sanity_supertiny = 1;
		this.sanity_tiny = 5;
		this.sanity_small = 10;
		this.sanity_med = 15;
		this.sanity_medlarge = 20;
		this.sanity_large = 33;
		this.sanity_huge = 50;

		this.perish_superfast = 3 * this.total_day_time * this.perish_warp;
		this.perish_fast = 6 * this.total_day_time * this.perish_warp;
		this.perish_med = 10 * this.total_day_time * this.perish_warp;
		this.perish_slow = 15 * this.total_day_time * this.perish_warp;
		this.perish_preserved = 20 * this.total_day_time * this.perish_warp;
		this.perish_superslow = 40 * this.total_day_time * this.perish_warp;

		this.dry_fast = this.total_day_time;
		this.dry_med = 2 * this.total_day_time;

		this.calories_tiny = this.calories_per_day / 8; // berries
		this.calories_small = this.calories_per_day / 6; // veggies
		this.calories_medsmall = this.calories_per_day / 4;
		this.calories_med = this.calories_per_day / 3; // meat
		this.calories_large = this.calories_per_day / 2; // cooked meat
		this.calories_huge = this.calories_per_day; // crockpot foods?
		this.calories_superhuge = this.calories_per_day * 2; // crockpot foods?

		this.spoiled_health = -1;
		this.spoiled_hunger = -10;
		this.perish_fridge_mult = 0.5;
		this.perish_ground_mult = 1.5;
		this.perish_global_mult = 1;
		this.perish_winter_mult = 0.75;

		this.stale_food_hunger = 0.667;
		this.spoiled_food_hunger = 0.5;

		this.stale_food_health = 0.333;
		this.spoiled_food_health = 0;

		this.base_cook_time = this.night_time * 0.3333;
	})
	.service('foodFactory', function(constantsService) {
		var c = constantsService;

		var food = angular.forEach({
			butter: {
				name: "Butter",
				health: c.healing_large,
				hunger: c.calories_med,
				perish: c.perish_superslow,
				stack: c.stack_size_smallitem,
				tags: {
					fat: 1,
					dairy: 1
				}
			},
			butterfly_wings: {
				name: "Butterfly Wings",
				health: c.healing_medsmall,
				hunger: c.calories_tiny,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem,
				tags: {
					isveggie: true,
					decoration: 2
				}
			},
			deerclops_eyeball: {
				name: 'Deerclops Eyeball',
				health: c.healing_huge,
				hunger: c.calories_huge,
				sanity: -c.sanity_med,
				tags: {
					uncookable: true
				}
			},
			bird_egg: {
				name: 'Egg',
				egg: 1,
				health: 0,
				hunger: c.calories_tiny,
				sanity: 0,
				perish: c.perish_med,
				stack: c.stack_size_smallitem,
				rot: 'rottenegg'
			},
			bird_egg_cooked: {
				name: 'Cooked Egg',
				egg: 1,
				precook: 1,
				health: 0,
				hunger: c.calories_small,
				sanity: 0,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem
			},
			bird_egg_rotten: {
				name: 'Rotten Egg',
				uncookable: true,
				health: c.spoiled_health,
				hunger: c.spoiled_hunger,
				stack: c.stack_size_smallitem
			},
			fish: {
				name: 'Fish',
				ismeat: true,
				meat: 0.5,
				fish: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_superfast,
				stack: c.stack_size_smallitem
			},
			fish_cooked: {
				name: 'Cooked Fish',
				ismeat: true,
				meat: 0.5,
				fish: 1,
				precook: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem
			},
			frog_legs: {
				name: 'Frog Legs',
				ismeat: true,
				meat: 0.5,
				health: 0,
				hunger: c.calories_small,
				perish: c.perish_fast,
				sanity: -c.sanity_small,
				stack: c.stack_size_smallitem
			},
			frog_legs_cooked: {
				name: 'Cooked Frog Legs',
				ismeat: true,
				meat: 0.5,
				precook: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_med,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			flower_hat: {
				name: 'Garland',
				health: c.healing_small,
				hunger: 0,
				sanity: c.sanity_small,
				perish: c.perish_fast,
				stack: 1,
				uncookable: true
			},
			hambat: {
				name: 'Ham Bat',
				health: -c.healing_medsmall,
				hunger: c.calories_med,
				sanity: -c.sanity_med,
				perish: c.perish_med,
				stack: 1,
				uncookable: true
			},
			honey: {
				name: 'Honey',
				sweetener: true,
				health: c.healing_small,
				hunger: c.calories_tiny,
				perish: c.perish_superslow,
				stack: c.stack_size_smallitem
			},
			honeycomb: {
				name: 'Honeycomb',
				sweetener: true
			},
			lightbulb: {
				name: 'Light Bulb',
				health: c.healing_tiny,
				hunger: 0,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem,
				uncookable: true
			},
			mandrake: {
				name: 'Mandrake',
				veggie: 1,
				magic: 1,
				health: c.healing_huge,
				hunger: c.calories_huge,
				stack: c.stack_size_smallitem
			},
			mandrake_cooked: {
				name: 'Cooked Mandrake',
				uncookable: true,
				veggie: 1,
				magic: 1,
				precook: 1,
				health: c.healing_superhuge,
				hunger: c.calories_superhuge,
				stack: c.stack_size_smallitem
			},
			plant_meat: {
				name: 'Leafy Meat',
				uncookable: true,
				health: 0,
				hunger: c.calories_small,
				sanity: -c.sanity_small,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem
			},
			plant_meat_cooked: {
				name: 'Cooked Leafy Meat',
				uncookable: true,
				health: c.healing_tiny,
				hunger: c.calories_medsmall,
				sanity: 0,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			monster_meat: {
				name: 'Monster Meat',
				ismeat: true,
				meat: 1,
				monster: true,
				health: -c.healing_med,
				hunger: c.calories_medsmall,
				sanity: -c.sanity_med,
				perish: c.perish_fast,
				stack: c.stack_size_meditem,
				dry: 'monstermeat_dried',
				drytime: c.dry_fast
			},
			monster_meat_cooked: {
				name: 'Cooked Monster Meat',
				ismeat: true,
				meat: 1,
				monster: true,
				precook: 1,
				health: -c.healing_small,
				hunger: c.calories_medsmall,
				sanity: -c.sanity_small,
				perish: c.perish_slow,
				stack: c.stack_size_meditem
			},
			monster_meat_dried: {
				name: 'Monster Jerky',
				ismeat: true,
				meat: 1,
				monster: true,
				dried: 1,
				health: -c.healing_small,
				hunger: c.calories_medsmall,
				sanity: -c.sanity_tiny,
				perish: c.perish_preserved,
				stack: c.stack_size_meditem
			},
			meat: {
				name: 'Meat',
				ismeat: true,
				meat: 1,
				health: c.healing_tiny,
				hunger: c.calories_med,
				sanity: -c.sanity_small,
				perish: c.perish_fast,
				stack: c.stack_size_meditem,
				dry: 'meat_dried',
				drytime: c.dry_med
			},
			meat_cooked: {
				name: 'Cooked Meat',
				ismeat: true,
				meat: 1,
				precook: 1,
				health: c.healing_small,
				hunger: c.calories_med,
				sanity: 0,
				perish: c.perish_med,
				stack: c.stack_size_meditem
			},
			meat_dried: {
				name: 'Jerky',
				ismeat: true,
				meat: 1,
				dried: 1,
				health: c.healing_med,
				hunger: c.calories_med,
				sanity: c.sanity_med,
				perish: c.perish_preserved,
				stack: c.stack_size_meditem
			},
			morsel: {
				name: 'Morsel',
				ismeat: true,
				meat: 0.5,
				health: 0,
				hunger: c.calories_small,
				sanity: -c.sanity_small,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem,
				drytime: c.dry_fast,
				dry: 'smallmeat_dried'
			},
			morsel_cooked: {
				name: 'Cooked Morsel',
				ismeat: true,
				meat: 0.5,
				precook: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				sanity: 0,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			morsel_dried: {
				name: 'Small Jerky',
				ismeat: true,
				meat: 0.5,
				dried: 1,
				health: c.healing_medsmall,
				hunger: c.calories_small,
				sanity: c.sanity_small,
				perish: c.perish_preserved,
				stack: c.stack_size_smallitem
			},
			drumstick: {
				name: 'Drumstick',
				ismeat: true,
				ideal: true,
				meat: 0.5,
				health: 0,
				hunger: c.calories_small,
				sanity: -c.sanity_small,
				perish: c.perish_fast,
				stack: c.stack_size_meditem,
				drytime: c.dry_fast,
				dry: 'smallmeat_dried'
			},
			drumstick_cooked: {
				name: 'Fried Drumstick',
				ismeat: true,
				meat: 0.5,
				precook: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_med,
				stack: c.stack_size_meditem
			},
			batwing: {
				name: 'Batilisk Wing',
				ismeat: true,
				health: c.healing_small,
				hunger: c.calories_small,
				sanity: -c.sanity_small,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem,
				drytime: c.dry_med,
				dry: 'smallmeat_dried',
				uncookable: true
			},
			batwing_cooked: {
				name: 'Cooked Batilisk Wing',
				ismeat: true,
				health: c.healing_medsmall,
				hunger: c.calories_medsmall,
				sanity: 0,
				perish: c.perish_med,
				uncookable: true
			},
			red_mushroom: {
				name: 'Red Cap',
				veggie: 0.5,
				ideal: true,
				health: -c.healing_med,
				hunger: c.calories_small,
				sanity: 0,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			red_mushroom_cooked: {
				name: 'Cooked Red Cap',
				veggie: 0.5,
				health: c.healing_tiny,
				hunger: 0,
				sanity: -c.sanity_small,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			green_mushroom: {
				name: 'Green Cap',
				veggie: 0.5,
				ideal: true,
				health: 0,
				hunger: c.calories_small,
				sanity: -c.sanity_huge,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			green_mushroom_cooked: {
				name: 'Cooked Green Cap',
				veggie: 0.5,
				health: -c.healing_tiny,
				hunger: 0,
				sanity: c.sanity_med,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			blue_mushroom: {
				name: 'Blue Cap',
				veggie: 0.5,
				ideal: true,
				health: c.healing_med,
				hunger: c.calories_small,
				sanity: -c.sanity_med,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			blue_mushroom_cooked: {
				name: 'Cooked Blue Cap',
				veggie: 0.5,
				health: -c.healing_small,
				hunger: 0,
				sanity: c.sanity_small,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			petals: {
				name: 'Petals',
				uncookable: true,
				health: c.healing_tiny,
				hunger: 0,
				sanity: -c.sanity_tiny / 2,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem
			},
			petals_evil: {
				name: 'Dark Petals',
				uncookable: true,
				health: 0,
				hunger: 0,
				sanity: -c.sanity_tiny,
				perish: c.perish_fast,
				stack: c.stack_size_smallitem
			},
			seeds: {
				name: 'Seeds',
				uncookable: true,
				health: 0,
				hunger: c.calories_tiny / 2,
				perish: c.perish_superslow,
				stack: c.stack_size_smallitem
			},
			seeds_cooked: {
				name: 'Toasted Seeds',
				uncookable: true,
				health: c.healing_tiny,
				hunger: c.calories_tiny / 2,
				perish: c.perish_med,
				stack: c.stack_size_smallitem
			},
			spoiled_food: {
				name: 'Rot',
				uncookable: true,
				health: c.spoiled_health,
				hunger: c.spoiled_hunger,
				stack: c.stack_size_smallitem
			},
			tallbird_egg: {
				name: 'Tallbird Egg',
				egg: 4,
				health: c.healing_small,
				hunger: c.calories_med
			},
			tallbird_egg_cooked: {
				name: 'Fried Tallbird Egg',
				egg: 4,
				precook: 1,
				health: 0,
				hunger: c.calories_large,
				perish: c.perish_fast
			},
			trunk_summer: {
				name: 'Koalefant Trunk',
				uncookable: true,
				ismeat: true,
				health: c.healing_medlarge,
				hunger: c.calories_large,
				sanity: 0,
				perish: c.perish_fast,
				stack: c.stack_size_meditem
			},
			trunk_summer_cooked: {
				name: 'Koalefant Trunk Steak',
				uncookable: true,
				ismeat: true,
				health: c.healing_large,
				hunger: c.calories_huge,
				sanity: 0,
				perish: c.perish_slow,
				stack: c.stack_size_meditem
			},
			twigs: {
				name: 'Twigs',
				inedible: 1
			},
			cave_banana: {
				name: 'Cave Banana',
				isfruit: true,
				fruit: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				sanity: 0,
				perish: c.perish_med
			},
			cave_banana_cooked: {
				name: 'Cooked Banana',
				isfruit: true,
				fruit: 1,
				precook: 1,
				health: c.healing_small,
				hunger: c.calories_small,
				sanity: 0,
				perish: c.perish_fast
			},
			carrot: {
				name: 'Carrot',
				isveggie: true,
				veggie: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_med,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			carrot_cooked: {
				name: 'Roasted Carrot',
				isveggie: true,
				veggie: 1,
				precook: 1,
				health: c.healing_small,
				hunger: c.calories_small,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			corn: {
				name: 'Corn',
				ideal: true,
				isveggie: true,
				veggie: 1,
				health: c.healing_small,
				hunger: c.calories_med,
				perish: c.perish_med,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			corn_cooked: {
				name: 'Popcorn',
				isveggie: true,
				veggie: 1,
				precook: 1,
				health: c.healing_small,
				hunger: c.calories_small,
				perish: c.perish_slow,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			pumpkin: {
				name: 'Pumpkin',
				isveggie: true,
				veggie: 1,
				health: c.healing_small,
				hunger: c.calories_large,
				perish: c.perish_med,
				sanity: 0,
				stack: c.stack_size_meditem
			},
			pumpkin_cooked: {
				name: 'Hot Pumpkin',
				isveggie: true,
				veggie: 1,
				precook: 1,
				health: c.healing_medsmall,
				hunger: c.calories_large,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_meditem
			},
			eggplant: {
				name: 'Eggplant',
				isveggie: true,
				veggie: 1,
				health: c.healing_medsmall,
				hunger: c.calories_med,
				perish: c.perish_med,
				sanity: 0,
				stack: c.stack_size_meditem
			},
			eggplant_cooked: {
				name: 'Braised Eggplant',
				isveggie: true,
				veggie: 1,
				precook: 1,
				health: c.healing_med,
				hunger: c.calories_med,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_meditem
			},
			durian: {
				name: 'Durian',
				isfruit: true,
				monster: 1,
				fruit: 1,
				health: -c.healing_small,
				hunger: c.calories_med,
				perish: c.perish_med,
				sanity: -c.sanity_tiny,
				stack: c.stack_size_meditem
			},
			durian_cooked: {
				name: 'Extra Smelly Durian',
				isfruit: true,
				monster: 1,
				fruit: 1,
				precook: 1,
				health: 0,
				hunger: c.calories_med,
				perish: c.perish_fast,
				sanity: -c.sanity_tiny,
				stack: c.stack_size_meditem
			},
			pomegranate: {
				name: 'Pomegranate',
				isfruit: true,
				fruit: 1,
				health: c.healing_small,
				hunger: c.calories_tiny,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			pomegranate_cooked: {
				name: 'Sliced Pomegranate',
				isfruit: true,
				fruit: 1,
				precook: 1,
				health: c.healing_med,
				hunger: c.calories_small,
				perish: c.perish_superfast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			dragonfruit: {
				name: 'Dragon Fruit',
				isfruit: true,
				fruit: 1,
				health: c.healing_small,
				hunger: c.calories_tiny,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			dragonfruit_cooked: {
				name: 'Prepared Dragon Fruit',
				isfruit: true,
				fruit: 1,
				precook: 1,
				health: c.healing_med,
				hunger: c.calories_small,
				perish: c.perish_superfast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			berries: {
				name: 'Berries',
				isfruit: true,
				fruit: 0.5,
				health: 0,
				hunger: c.calories_tiny,
				perish: c.perish_fast,
				sanity: 0,
				stack: c.stack_size_smallitem
			},
			berries_cooked: {
				name: 'Roasted Berries',
				isfruit: true,
				fruit: 0.5,
				precook: 1,
				health: c.healing_tiny,
				hunger: c.calories_small,
				perish: c.perish_superfast,
				sanity: 0,
				stack: c.stack_size_smallitem
			}
		}, function(item, key) {
			item.id = key;
			item.img = "img/food/" + key + ".png";
		});

		//note: qty not used yet, this is for rapid summation
		var COMPAREString = function () {
			return this.op + this.qty;
		};

		var COMPARISONS = {
			'=': function (qty) { return qty === this.qty; },
			'>': function (qty) { return qty > this.qty; },
			'<': function (qty) { return qty < this.qty; },
			'>=': function (qty) { return qty >= this.qty; },
			'<=': function (qty) { return qty <= this.qty; }
		};

		var NOQTY = {
			test: function (qty) {
				return !!qty;
			},
			toString: function () {
				return '';
			}
		};

		var COMPARE = function (op, qty) {
			return {
				op: op,
				qty: qty,
				test: COMPARISONS[op],
				toString: COMPAREString
			};
		};

		var ORTest = function (cooker, names, tags) {
			return this.item1.test(cooker, names, tags) || this.item2.test(cooker, names, tags);
		};

		var ORString = function () {
			return this.item1 + ' or ' + this.item2;
		};

		var OR = function (item1, item2) {
			return {
				item1: item1,
				item2: item2,
				test: ORTest,
				toString: ORString,
				cancel: item1.cancel || item2.cancel
			};
		};

		var NOTTest = function (cooker, names, tags) {
			return !this.item.test(cooker, names, tags);
		};

		var NOTString = function () {
			return this.item.toString().substring(0, this.item.toString().length - 1) + '|strike]';
		};

		var NOT = function (item) {
			return {
				item: item,
				test: NOTTest,
				toString: NOTString,
				cancel: true
			};
		};

		var NAMETest = function (cooker, names, tags) {
			return (names[this.name] || 0) + (names[this.name + '_cooked'] || 0);
		};

		var NAMEString = function () {
			return '[*' + food[this.name].name + '|' + food[this.name].img + ' ' + food[this.name].name + ']' + (food[this.name].cook ? '[*' + food[this.name].cook.name + '|' + food[this.name].cook.img + ']' : '') + (food[this.name].raw ? '[*' + food[this.name].raw.name + '|' + food[this.name].raw.img + ']' : '') + (this.qty ? this.qty : '');
		};

		//permits cooked variant
		var NAME = function (name, qty) {
			return {
				name: name,
				qty: qty || NOQTY,
				test: NAMETest,
				toString: NAMEString
			};
		};

		var SPECIFICTest = function (cooker, names, tags) {
			return names[this.name];
		};

		var SPECIFICString = function () {
			return '[*' + food[this.name].name + '|' + food[this.name].img + ' ' + food[this.name].name + ']' + (this.qty ? this.qty : '');
		};

		//disallows cooked/uncooked variant
		var SPECIFIC = function (name, qty) {
			return {
				name: name,
				qty: qty || NOQTY,
				test: SPECIFICTest,
				toString: SPECIFICString
			};
		};

		var TAGTest = function (cooker, names, tags) {
			return tags[this.tag];
		};

		var TAGString = function () {
			return '[tag:' + this.tag + '|' + this.tag + ']' + (this.qty ? this.qty : '');
		};

		var TAG = function (tag, qty) {
			return {
				tag: tag,
				qty: qty || NOQTY,
				test: TAGTest,
				toString: TAGString
			};
		};

		var recipes = angular.forEach({
			butterflymuffin: {
				name: 'Butter Muffin',
				test: function(cooker, names, tags) {
					return names.butterfly_wings && !tags.meat && tags.veggie;
				},
				requires: 'Butterfly Wings, veggie',
				requirements: [NAME('butterfly_wings'), NOT(TAG('meat')), TAG('veggie')],
				priority: 1,
				weight: 1,
				foodtype: "veggie",
				health: c.healing_med,
				hunger: c.calories_large,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			frogglebunwich: {
				name: 'Froggle Bunwich',
				test: function(cooker, names, tags) {
					return (names.frog_legs || names.frog_legs_cooked) && tags.veggie;
				},
				requirements: [NAME('froglegs'), TAG('veggie')],
				priority: 1,
				foodtype: "meat",
				health: c.healing_med,
				hunger: c.calories_large,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			taffy: {
				name: "Taffy",
				test: function(cooker, names, tags) {
					return tags.sweetener && tags.sweetener >= 3 && !tags.meat;
				},
				requirements: [TAG('sweetener', COMPARE('>=', 3)), NOT(TAG('meat'))],
				priority: 10,
				foodtype: "veggie",
				health: -c.healing_small,
				hunger: c.calories_small * 2,
				perish: c.perish_slow,
				sanity: c.sanity_med,
				cooktime: 2
			},
			pumpkincookie: {
				name: "Pumpkin Cookie",
				test: function(cooker, names, tags) {
					return (names.pumpkin || names.pumpkin_cooked) && tags.sweetener && tags.sweetener >= 2;
				},
				requirements: [NAME('pumpkin'), TAG('sweetener', COMPARE('>=', 2))],
				priority: 10,
				foodtype: "veggie",
				health: 0,
				hunger: c.calories_large,
				perish: c.perish_med,
				sanity: c.sanity_med,
				cooktime: 2
			},
			stuffedeggplant: {
				name: 'Stuffed Eggplant',
				test: function(cooker, names, tags) {
					return (names.eggplant || names.eggplant_cooked) && tags.veggie && tags.veggie > 1;
				},
				requirements: [NAME('eggplant'), TAG('veggie', COMPARE('>', 1))],
				priority: 1,
				foodtype: "veggie",
				health: c.healing_small,
				hunger: c.calories_large,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			fishsticks: {
				name: 'Fishsticks',
				test: function(cooker, names, tags) {
					return tags.fish && names.twigs && (tags.inedible && tags.inedible <= 1);
				},
				requirements: [TAG('fish'), SPECIFIC('twigs'), TAG('inedible'), TAG('inedible', COMPARE('<=', 1))],
				priority: 10,
				foodtype: "meat",
				health: c.healing_large,
				hunger: c.calories_large,
				perish: c.perish_med,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			honeynuggets: {
				name: 'Honey Nuggets',
				test: function(cooker, names, tags) {
					return names.honey && tags.meat && tags.meat <= 1.5 && !tags.inedible;
				},
				requirements: [SPECIFIC('honey'), TAG('meat', COMPARE('<=', 1.5)), NOT(TAG('inedible'))],
				priority: 2,
				foodtype: "meat",
				health: c.healing_med,
				hunger: c.calories_large,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			honeyham: {
				name: 'Honey Ham',
				test: function(cooker, names, tags) {
					return names.honey && tags.meat && tags.meat > 1.5 && !tags.inedible;
				},
				requirements: [SPECIFIC('honey'), TAG('meat', COMPARE('>', 1.5)), NOT(TAG('inedible'))],
				priority: 2,
				foodtype: "meat",
				health: c.healing_medlarge,
				hunger: c.calories_huge,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			dragonpie: {
				name: 'Dragonpie',
				test: function(cooker, names, tags) {
					return (names.dragonfruit || names.dragonfruit_cooked) && !tags.meat;
				},
				requirements: [NAME('dragonfruit'), NOT(TAG('meat'))],
				priority: 1,
				foodtype: "veggie",
				health: c.healing_large,
				hunger: c.calories_huge,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			kabobs: {
				name: 'Kabobs',
				test: function(cooker, names, tags) {
					return tags.meat && names.twigs && (!tags.monster || tags.monster <= 1) && (tags.inedible && tags.inedible <= 1);
				},
				requirements: [TAG('meat'), SPECIFIC('twigs'), OR(NOT(TAG('monster')), TAG('monster', COMPARE('<=', 1))), TAG('inedible'), TAG('inedible', COMPARE('<=', 1))],
				priority: 5,
				foodtype: "meat",
				health: c.healing_small,
				hunger: c.calories_large,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			mandrakesoup: {
				name: 'Mandrake Soup',
				test: function(cooker, names, tags) {
					return names.mandrake;
				},
				requirements: [SPECIFIC('mandrake')],
				priority: 10,
				foodtype: "veggie",
				health: c.healing_superhuge,
				hunger: c.calories_superhuge,
				perish: c.perish_fast,
				sanity: c.sanity_tiny,
				cooktime: 3
			},
			baconeggs: {
				name: 'Bacon and Eggs',
				test: function(cooker, names, tags) {
					return tags.egg && tags.egg > 1 && tags.meat && tags.meat > 1 && !tags.veggie;
				},
				requirements: [TAG('egg', COMPARE('>', 1)), TAG('meat', COMPARE('>', 1)), NOT(TAG('veggie'))],
				priority: 10,
				foodtype: "meat",
				health: c.healing_med,
				hunger: c.calories_huge,
				perish: c.perish_preserved,
				sanity: c.sanity_tiny,
				cooktime: 2
			},
			meatballs: {
				name: 'Meatballs',
				test: function(cooker, names, tags) {
					return tags.meat && !tags.inedible;
				},
				requirements: [TAG('meat'), NOT(TAG('inedible'))],
				priority: -1,
				foodtype: "meat",
				health: c.healing_small,
				hunger: c.calories_small * 5,
				perish: c.perish_med,
				sanity: c.sanity_tiny,
				cooktime: 0.75
			},
			bonestew: {
				name: 'Meaty Stew',
				test: function(cooker, names, tags) {
					return tags.meat && tags.meat >= 3 && !tags.inedible;
				},
				requirements: [TAG('meat', COMPARE('>=', 3)), NOT(TAG('inedible'))],
				priority: 0,
				foodtype: "meat",
				health: c.healing_small * 4,
				hunger: c.calories_large * 4,
				perish: c.perish_med,
				sanity: c.sanity_tiny,
				cooktime: 0.75
			},
			perogies: {
				name: 'Pierogi',
				test: function(cooker, names, tags) {
					return tags.egg && tags.meat && tags.veggie && !tags.inedible;
				},
				requirements: [TAG('egg'), TAG('meat'), TAG('veggie'), NOT(TAG('inedible'))],
				priority: 5,
				foodtype: "meat",
				health: c.healing_large,
				hunger: c.calories_large,
				perish: c.perish_preserved,
				sanity: c.sanity_tiny,
				cooktime: 1
			},
			turkeydinner: {
				name: 'Turkey Dinner',
				test: function(cooker, names, tags) {
					return names.drumstick && names.drumstick > 1 && tags.meat && tags.meat > 1 && (tags.veggie || tags.fruit);
				},
				requirements: [SPECIFIC('drumstick', COMPARE('>', 1)), TAG('meat', COMPARE('>', 1)), OR(TAG('veggie'), TAG('fruit'))],
				priority: 10,
				foodtype: "meat",
				health: c.healing_med,
				hunger: c.calories_huge,
				perish: c.perish_fast,
				sanity: c.sanity_tiny,
				cooktime: 3
			},
			ratatouille: {
				name: 'Ratatouille',
				test: function(cooker, names, tags) {
					return !tags.meat && tags.veggie && !tags.inedible;
				},
				requirements: [NOT(TAG('meat')), TAG('veggie'), NOT(TAG('inedible'))],
				priority: 0,
				foodtype: "veggie",
				health: c.healing_small,
				hunger: c.calories_med,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 1
			},
			jammypreserves: {
				name: 'Fist Full of Jam',
				test: function(cooker, names, tags) {
					return tags.fruit && !tags.meat && !tags.veggie && !tags.inedible;
				},
				requirements: [TAG('fruit'), NOT(TAG('meat')), NOT(TAG('veggie')), NOT(TAG('inedible'))],
				priority: 0,
				foodtype: "veggie",
				health: c.healing_small,
				hunger: c.calories_small * 3,
				perish: c.perish_slow,
				sanity: c.sanity_tiny,
				cooktime: 0.5
			},
			fruitmedley: {
				name: 'Fruit Medley',
				test: function(cooker, names, tags) {
					return tags.fruit && tags.fruit >= 3 && !tags.meat && !tags.veggie;
				},
				requirements: [TAG('fruit', COMPARE('>=', 3)), NOT(TAG('meat')), NOT(TAG('veggie'))],
				priority: 0,
				foodtype: "veggie",
				health: c.healing_med,
				hunger: c.calories_med,
				perish: c.perish_fast,
				sanity: c.sanity_tiny,
				cooktime: 0.5
			},
			fishtacos: {
				name: 'Fish Tacos',
				test: function(cooker, names, tags) {
					return tags.fish && (names.corn || names.corn_cooked);
				},
				requirements: [TAG('fish'), NAME('corn')],
				priority: 10,
				foodtype: "meat",
				health: c.healing_med,
				hunger: c.calories_large,
				perish: c.perish_fast,
				sanity: c.sanity_tiny,
				cooktime: 0.5
			},
			waffles: {
				name: 'Waffles',
				test: function(cooker, names, tags) {
					return names.butter && (names.berries || names.berries_cooked) && tags.egg;
				},
				requirements: [SPECIFIC('butter'), NAME('berries'), TAG('egg')],
				priority: 10,
				foodtype: "veggie",
				health: c.healing_huge,
				hunger: c.calories_large,
				perish: c.perish_fast,
				sanity: c.sanity_tiny,
				cooktime: 0.5
			},
			monsterlasagna: {
				name: 'Monster Lasagna',
				test: function(cooker, names, tags) {
					return tags.monster && tags.monster >= 2 && !tags.inedible;
				},
				requirements: [TAG('monster', COMPARE('>=', 2)), NOT(TAG('inedible'))],
				priority: 10,
				foodtype: "meat",
				health: -c.healing_med,
				hunger: c.calories_large,
				perish: c.perish_fast,
				sanity: -c.sanity_medlarge,
				cooktime: 0.5
			},
			powcake: {
				name: 'Powdercake',
				test: function(cooker, names, tags) {
					return names.twigs && names.honey && (names.corn || names.corn_cooked);
				},
				requirements: [SPECIFIC('twigs'), SPECIFIC('honey'), NAME('corn')],
				priority: 10,
				foodtype: "veggie",
				health: -c.healing_small,
				hunger: 0,
				perishtime: 9000000,
				sanity: 0,
				cooktime: 0.5
			},
			wetgoop: {
				name: 'Wet Goop',
				test: function(cooker, names, tags) {
					return true;
				},
				requirements: [],
				trash: true,
				priority: -2,
				health: 0,
				hunger: 0,
				perish: c.perish_fast,
				sanity: 0,
				cooktime: 0.25
			}
		}, function(item, key) {
			item.id = key;
			item.img = "img/recipes/" + key + ".png";
		});

		var foodList = [];

		/*for (item in food) {
			foodList.push({
				id: item,
				item: item
			});
		};*/

		return {
			food: food,
			foodList: foodList,
			recipes: recipes
		};
	})
	.factory('recipeFactory', function(foodFactory) {
		//
	});

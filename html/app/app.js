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
		'pot.services',
		'pot.filters',
		'pot.directives',
		'pot.controllers'
	]
);

app.run(function ($rootScope) {
/*
	$rootScope.food = {
		butter: {
			name: 'Butter',
			fat: 1,
			dairy: 1,
			health: healing_large,
			hunger: calories_med,
			perish: perish_superslow,
			stack: stack_size_smallitem
		},
		butterflywings: {
			name: 'Butterfly Wings',
			isveggie: true,
			decoration: 2,
			health: healing_medsmall,
			hunger: calories_tiny,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		deerclopseyeball: {
			name: 'Deerclops Eyeball',
			uncookable: true,
			health: healing_huge,
			hunger: calories_huge,
			sanity: -sanity_med
		},
		bird_egg: {
			name: 'Egg',
			egg: 1,
			health: 0,
			hunger: calories_tiny,
			sanity: 0,
			perish: perish_med,
			stack: stack_size_smallitem,
			rot: 'rottenegg'
		},
		bird_egg_cooked: {
			name: 'Cooked Egg',
			egg: 1,
			precook: 1,
			health: 0,
			hunger: calories_small,
			sanity: 0,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		rottenegg: {
			name: 'Rotten Egg',
			uncookable: true,
			health: spoiled_health,
			hunger: spoiled_hunger,
			stack: stack_size_smallitem
		},
		fish: {
			name: 'Fish',
			ismeat: true,
			meat: 0.5,
			fish: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_superfast,
			stack: stack_size_smallitem
		},
		fish_cooked: {
			name: 'Cooked Fish',
			ismeat: true,
			meat: 0.5,
			fish: 1,
			precook: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		froglegs: {
			name: 'Frog Legs',
			ismeat: true,
			meat: 0.5,
			health: 0,
			hunger: calories_small,
			perish: perish_fast,
			sanity: -sanity_small,
			stack: stack_size_smallitem
		},
		froglegs_cooked: {
			name: 'Cooked Frog Legs',
			ismeat: true,
			meat: 0.5,
			precook: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_med,
			sanity: 0,
			stack: stack_size_smallitem
		},
		flowerhat: {
			name: 'Garland',
			health: healing_small,
			hunger: 0,
			sanity: sanity_small,
			perish: perish_fast,
			stack: 1,
			uncookable: true
		},
		hambat: {
			name: 'Ham Bat',
			health: -healing_medsmall,
			hunger: calories_med,
			sanity: -sanity_med,
			perish: perish_med,
			stack: 1,
			uncookable: true
		},
		honey: {
			name: 'Honey',
			sweetener: true,
			health: healing_small,
			hunger: calories_tiny,
			perish: perish_superslow,
			stack: stack_size_smallitem
		},
		honeycomb: {
			name: 'Honeycomb',
			sweetener: true
		},
		lightbulb: {
			name: 'Light Bulb',
			health: healing_tiny,
			hunger: 0,
			perish: perish_fast,
			stack: stack_size_smallitem,
			uncookable: true
		},
		mandrake: {
			name: 'Mandrake',
			veggie: 1,
			magic: 1,
			health: healing_huge,
			hunger: calories_huge,
			stack: stack_size_smallitem
		},
		mandrake_cooked: {
			name: 'Cooked Mandrake',
			uncookable: true,
			veggie: 1,
			magic: 1,
			precook: 1,
			health: healing_superhuge,
			hunger: calories_superhuge,
			stack: stack_size_smallitem
		},
		plantmeat: {
			name: 'Leafy Meat',
			uncookable: true,
			health: 0,
			hunger: calories_small,
			sanity: -sanity_small,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		plantmeat_cooked: {
			name: 'Cooked Leafy Meat',
			uncookable: true,
			health: healing_tiny,
			hunger: calories_medsmall,
			sanity: 0,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		monstermeat: {
			name: 'Monster Meat',
			ismeat: true,
			meat: 1,
			monster: true,
			health: -healing_med,
			hunger: calories_medsmall,
			sanity: -sanity_med,
			perish: perish_fast,
			stack: stack_size_meditem,
			dry: 'monstermeat_dried',
			drytime: dry_fast
		},
		monstermeat_cooked: {
			name: 'Cooked Monster Meat',
			ismeat: true,
			meat: 1,
			monster: true,
			precook: 1,
			health: -healing_small,
			hunger: calories_medsmall,
			sanity: -sanity_small,
			perish: perish_slow,
			stack: stack_size_meditem
		},
		monstermeat_dried: {
			name: 'Monster Jerky',
			ismeat: true,
			meat: 1,
			monster: true,
			dried: 1,
			health: -healing_small,
			hunger: calories_medsmall,
			sanity: -sanity_tiny,
			perish: perish_preserved,
			stack: stack_size_meditem
		},
		meat: {
			name: 'Meat',
			ismeat: true,
			meat: 1,
			health: healing_tiny,
			hunger: calories_med,
			sanity: -sanity_small,
			perish: perish_fast,
			stack: stack_size_meditem,
			dry: 'meat_dried',
			drytime: dry_med
		},
		meat_cooked: {
			name: 'Cooked Meat',
			ismeat: true,
			meat: 1,
			precook: 1,
			health: healing_small,
			hunger: calories_med,
			sanity: 0,
			perish: perish_med,
			stack: stack_size_meditem
		},
		meat_dried: {
			name: 'Jerky',
			ismeat: true,
			meat: 1,
			dried: 1,
			health: healing_med,
			hunger: calories_med,
			sanity: sanity_med,
			perish: perish_preserved,
			stack: stack_size_meditem
		},
		morsel: {
			name: 'Morsel',
			ismeat: true,
			meat: 0.5,
			health: 0,
			hunger: calories_small,
			sanity: -sanity_small,
			perish: perish_fast,
			stack: stack_size_smallitem,
			drytime: dry_fast,
			dry: 'smallmeat_dried'
		},
		morsel_cooked: {
			name: 'Cooked Morsel',
			ismeat: true,
			meat: 0.5,
			precook: 1,
			health: healing_tiny,
			hunger: calories_small,
			sanity: 0,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		smallmeat_dried: {
			name: 'Small Jerky',
			ismeat: true,
			meat: 0.5,
			dried: 1,
			health: healing_medsmall,
			hunger: calories_small,
			sanity: sanity_small,
			perish: perish_preserved,
			stack: stack_size_smallitem
		},
		drumstick: {
			name: 'Drumstick',
			ismeat: true,
			ideal: true,
			meat: 0.5,
			health: 0,
			hunger: calories_small,
			sanity: -sanity_small,
			perish: perish_fast,
			stack: stack_size_meditem,
			drytime: dry_fast,
			dry: 'smallmeat_dried'
		},
		drumstick_cooked: {
			name: 'Fried Drumstick',
			ismeat: true,
			meat: 0.5,
			precook: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_med,
			stack: stack_size_meditem
		},
		batwing: {
			name: 'Batilisk Wing',
			ismeat: true,
			health: healing_small,
			hunger: calories_small,
			sanity: -sanity_small,
			perish: perish_fast,
			stack: stack_size_smallitem,
			drytime: dry_med,
			dry: 'smallmeat_dried',
			uncookable: true
		},
		batwing_cooked: {
			name: 'Cooked Batilisk Wing',
			ismeat: true,
			health: healing_medsmall,
			hunger: calories_medsmall,
			sanity: 0,
			perish: perish_med,
			uncookable: true
		},
		red_mushroom: {
			name: 'Red Cap',
			veggie: 0.5,
			ideal: true,
			health: -healing_med,
			hunger: calories_small,
			sanity: 0,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		red_mushroom_cooked: {
			name: 'Cooked Red Cap',
			veggie: 0.5,
			health: healing_tiny,
			hunger: 0,
			sanity: -sanity_small,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		green_mushroom: {
			name: 'Green Cap',
			veggie: 0.5,
			ideal: true,
			health: 0,
			hunger: calories_small,
			sanity: -sanity_huge,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		green_mushroom_cooked: {
			name: 'Cooked Green Cap',
			veggie: 0.5,
			health: -healing_tiny,
			hunger: 0,
			sanity: sanity_med,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		blue_mushroom: {
			name: 'Blue Cap',
			veggie: 0.5,
			ideal: true,
			health: healing_med,
			hunger: calories_small,
			sanity: -sanity_med,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		blue_mushroom_cooked: {
			name: 'Cooked Blue Cap',
			veggie: 0.5,
			health: -healing_small,
			hunger: 0,
			sanity: sanity_small,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		petals: {
			name: 'Petals',
			uncookable: true,
			health: healing_tiny,
			hunger: 0,
			sanity: -sanity_tiny / 2,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		petals_evil: {
			name: 'Dark Petals',
			uncookable: true,
			health: 0,
			hunger: 0,
			sanity: -sanity_tiny,
			perish: perish_fast,
			stack: stack_size_smallitem
		},
		seeds: {
			name: 'Seeds',
			uncookable: true,
			health: 0,
			hunger: calories_tiny / 2,
			perish: perish_superslow,
			stack: stack_size_smallitem
		},
		seeds_cooked: {
			name: 'Toasted Seeds',
			uncookable: true,
			health: healing_tiny,
			hunger: calories_tiny / 2,
			perish: perish_med,
			stack: stack_size_smallitem
		},
		spoiled_food: {
			name: 'Rot',
			uncookable: true,
			health: spoiled_health,
			hunger: spoiled_hunger,
			stack: stack_size_smallitem
		},
		tallbirdegg: {
			name: 'Tallbird Egg',
			egg: 4,
			health: healing_small,
			hunger: calories_med
		},
		tallbirdegg_cooked: {
			name: 'Fried Tallbird Egg',
			egg: 4,
			precook: 1,
			health: 0,
			hunger: calories_large,
			perish: perish_fast
		},
		trunk_summer: {
			name: 'Koalefant Trunk',
			uncookable: true,
			ismeat: true,
			health: healing_medlarge,
			hunger: calories_large,
			sanity: 0,
			perish: perish_fast,
			stack: stack_size_meditem
		},
		trunk_summer_cooked: {
			name: 'Koalefant Trunk Steak',
			uncookable: true,
			ismeat: true,
			health: healing_large,
			hunger: calories_huge,
			sanity: 0,
			perish: perish_slow,
			stack: stack_size_meditem
		},
		twigs: {
			name: 'Twigs',
			inedible: 1
		},
		cavebanana: {
			name: 'Cave Banana',
			isfruit: true,
			fruit: 1,
			health: healing_tiny,
			hunger: calories_small,
			sanity: 0,
			perish: perish_med
		},
		cavebanana_cooked: {
			name: 'Cooked Banana',
			isfruit: true,
			fruit: 1,
			precook: 1,
			health: healing_small,
			hunger: calories_small,
			sanity: 0,
			perish: perish_fast
		},
		carrot: {
			name: 'Carrot',
			isveggie: true,
			veggie: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_med,
			sanity: 0,
			stack: stack_size_smallitem
		},
		carrot_cooked: {
			name: 'Roasted Carrot',
			isveggie: true,
			veggie: 1,
			precook: 1,
			health: healing_small,
			hunger: calories_small,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		corn: {
			name: 'Corn',
			ideal: true,
			isveggie: true,
			veggie: 1,
			health: healing_small,
			hunger: calories_med,
			perish: perish_med,
			sanity: 0,
			stack: stack_size_smallitem
		},
		corn_cooked: {
			name: 'Popcorn',
			isveggie: true,
			veggie: 1,
			precook: 1,
			health: healing_small,
			hunger: calories_small,
			perish: perish_slow,
			sanity: 0,
			stack: stack_size_smallitem
		},
		pumpkin: {
			name: 'Pumpkin',
			isveggie: true,
			veggie: 1,
			health: healing_small,
			hunger: calories_large,
			perish: perish_med,
			sanity: 0,
			stack: stack_size_meditem
		},
		pumpkin_cooked: {
			name: 'Hot Pumpkin',
			isveggie: true,
			veggie: 1,
			precook: 1,
			health: healing_medsmall,
			hunger: calories_large,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_meditem
		},
		eggplant: {
			name: 'Eggplant',
			isveggie: true,
			veggie: 1,
			health: healing_medsmall,
			hunger: calories_med,
			perish: perish_med,
			sanity: 0,
			stack: stack_size_meditem
		},
		eggplant_cooked: {
			name: 'Braised Eggplant',
			isveggie: true,
			veggie: 1,
			precook: 1,
			health: healing_med,
			hunger: calories_med,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_meditem
		},
		durian: {
			name: 'Durian',
			isfruit: true,
			monster: 1,
			fruit: 1,
			health: -healing_small,
			hunger: calories_med,
			perish: perish_med,
			sanity: -sanity_tiny,
			stack: stack_size_meditem
		},
		durian_cooked: {
			name: 'Extra Smelly Durian',
			isfruit: true,
			monster: 1,
			fruit: 1,
			precook: 1,
			health: 0,
			hunger: calories_med,
			perish: perish_fast,
			sanity: -sanity_tiny,
			stack: stack_size_meditem
		},
		pomegranate: {
			name: 'Pomegranate',
			isfruit: true,
			fruit: 1,
			health: healing_small,
			hunger: calories_tiny,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		pomegranate_cooked: {
			name: 'Sliced Pomegranate',
			isfruit: true,
			fruit: 1,
			precook: 1,
			health: healing_med,
			hunger: calories_small,
			perish: perish_superfast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		dragonfruit: {
			name: 'Dragon Fruit',
			isfruit: true,
			fruit: 1,
			health: healing_small,
			hunger: calories_tiny,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		dragonfruit_cooked: {
			name: 'Prepared Dragon Fruit',
			isfruit: true,
			fruit: 1,
			precook: 1,
			health: healing_med,
			hunger: calories_small,
			perish: perish_superfast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		berries: {
			name: 'Berries',
			isfruit: true,
			fruit: 0.5,
			health: 0,
			hunger: calories_tiny,
			perish: perish_fast,
			sanity: 0,
			stack: stack_size_smallitem
		},
		berries_cooked: {
			name: 'Roasted Berries',
			isfruit: true,
			fruit: 0.5,
			precook: 1,
			health: healing_tiny,
			hunger: calories_small,
			perish: perish_superfast,
			sanity: 0,
			stack: stack_size_smallitem
		}
	};

	//note: qty not used yet, this is for rapid summation
	COMPAREString = function () {
		return this.op + this.qty;
	};

	COMPARISONS = {
		'=': function (qty) { return qty === this.qty; },
		'>': function (qty) { return qty > this.qty; },
		'<': function (qty) { return qty < this.qty; },
		'>=': function (qty) { return qty >= this.qty; },
		'<=': function (qty) { return qty <= this.qty; }
	};

	NOQTY = {
		test: function (qty) {
			return !!qty;
		},
		toString: function () {
			return '';
		}
	};

	COMPARE = function (op, qty) {
		return {
			op: op,
			qty: qty,
			test: COMPARISONS[op],
			toString: COMPAREString
		};
	};

	ORTest = function (cooker, names, tags) {
		return this.item1.test(cooker, names, tags) || this.item2.test(cooker, names, tags);
	};

	ORString = function () {
		return this.item1 + ' or ' + this.item2;
	};

	OR = function (item1, item2) {
		return {
			item1: item1,
			item2: item2,
			test: ORTest,
			toString: ORString,
			cancel: item1.cancel || item2.cancel
		};
	};

	NOTTest = function (cooker, names, tags) {
		return !this.item.test(cooker, names, tags);
	};

	NOTString = function () {
		return this.item.toString().substring(0, this.item.toString().length - 1) + '|strike]';
	};

	NOT = function (item) {
		return {
			item: item,
			test: NOTTest,
			toString: NOTString,
			cancel: true
		};
	};

	NAMETest = function (cooker, names, tags) {
		return (names[this.name] || 0) + (names[this.name + '_cooked'] || 0);
	};

	NAMEString = function () {
		return '[*' + food[this.name].name + '|' + food[this.name].img + ' ' + food[this.name].name + ']' + (food[this.name].cook ? '[*' + food[this.name].cook.name + '|' + food[this.name].cook.img + ']' : '') + (food[this.name].raw ? '[*' + food[this.name].raw.name + '|' + food[this.name].raw.img + ']' : '') + (this.qty ? this.qty : '');
	};

	//permits cooked variant
	NAME = function (name, qty) {
		return {
			name: name,
			qty: qty || NOQTY,
			test: NAMETest,
			toString: NAMEString
		};
	};

	SPECIFICTest = function (cooker, names, tags) {
		return names[this.name];
	};

	SPECIFICString = function () {
		return '[*' + food[this.name].name + '|' + food[this.name].img + ' ' + food[this.name].name + ']' + (this.qty ? this.qty : '');
	};

	//disallows cooked/uncooked variant
	SPECIFIC = function (name, qty) {
		return {
			name: name,
			qty: qty || NOQTY,
			test: SPECIFICTest,
			toString: SPECIFICString
		};
	};

	TAGTest = function (cooker, names, tags) {
		return tags[this.tag];
	};

	TAGString = function () {
		return '[tag:' + this.tag + '|' + this.tag + ']' + (this.qty ? this.qty : '');
	};

	TAG = function (tag, qty) {
		return {
			tag: tag,
			qty: qty || NOQTY,
			test: TAGTest,
			toString: TAGString
		};
	};

	$rootScope.recipes = {
		butterflymuffin: {
			name: 'Butter Muffin',
			test: function(cooker, names, tags) {
				return names.butterflywings && !tags.meat && tags.veggie;
			},
			requires: 'Butterfly Wings, veggie',
			requirements: [NAME('butterflywings'), NOT(TAG('meat')), TAG('veggie')],
			priority: 1,
			weight: 1,
			foodtype: "veggie",
			health: healing_med,
			hunger: calories_large,
			perish: perish_slow,
			sanity: sanity_tiny,
			cooktime: 2
		},
		frogglebunwich: {
			name: 'Froggle Bunwich',
			test: function(cooker, names, tags) {
				return (names.froglegs || names.froglegs_cooked) && tags.veggie;
			},
			requirements: [NAME('froglegs'), TAG('veggie')],
			priority: 1,
			foodtype: "meat",
			health: healing_med,
			hunger: calories_large,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: -healing_small,
			hunger: calories_small * 2,
			perish: perish_slow,
			sanity: sanity_med,
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
			hunger: calories_large,
			perish: perish_med,
			sanity: sanity_med,
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
			health: healing_small,
			hunger: calories_large,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_large,
			hunger: calories_large,
			perish: perish_med,
			sanity: sanity_tiny,
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
			health: healing_med,
			hunger: calories_large,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_medlarge,
			hunger: calories_huge,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_large,
			hunger: calories_huge,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_small,
			hunger: calories_large,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_superhuge,
			hunger: calories_superhuge,
			perish: perish_fast,
			sanity: sanity_tiny,
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
			health: healing_med,
			hunger: calories_huge,
			perish: perish_preserved,
			sanity: sanity_tiny,
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
			health: healing_small,
			hunger: calories_small * 5,
			perish: perish_med,
			sanity: sanity_tiny,
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
			health: healing_small * 4,
			hunger: calories_large * 4,
			perish: perish_med,
			sanity: sanity_tiny,
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
			health: healing_large,
			hunger: calories_large,
			perish: perish_preserved,
			sanity: sanity_tiny,
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
			health: healing_med,
			hunger: calories_huge,
			perish: perish_fast,
			sanity: sanity_tiny,
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
			health: healing_small,
			hunger: calories_med,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_small,
			hunger: calories_small * 3,
			perish: perish_slow,
			sanity: sanity_tiny,
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
			health: healing_med,
			hunger: calories_med,
			perish: perish_fast,
			sanity: sanity_tiny,
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
			health: healing_med,
			hunger: calories_large,
			perish: perish_fast,
			sanity: sanity_tiny,
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
			health: healing_huge,
			hunger: calories_large,
			perish: perish_fast,
			sanity: sanity_tiny,
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
			health: -healing_med,
			hunger: calories_large,
			perish: perish_fast,
			sanity: -sanity_medlarge,
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
			health: -healing_small,
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
			perish: perish_fast,
			sanity: 0,
			cooktime: 0.25
		}
	};*/
});

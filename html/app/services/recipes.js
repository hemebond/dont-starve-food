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
(function () {
	"use strict";

	angular.module('pot.services')
		.service('recipes', function(gameVariables, food) {
			var g = gameVariables;

			//note: qty not used yet, this is for rapid summation
			var COMPAREString = function () {
				return this.op + ' ' + this.qty;
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
					fnName: 'COMPARE',
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
					fnName: 'OR',
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
				return String(this.item);
			};

			var NOT = function (item) {
				return {
					fnName: 'NOT',
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
				return String(food[this.name].name + (this.qty ? ' ' + this.qty : ''));
			};

			//permits cooked variant
			var NAME = function (name, qty) {
				return {
					fnName: 'NAME',
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
				return String(food[this.name].name + (this.qty ? ' ' + this.qty : ''));
			};

			//disallows cooked/uncooked variant
			var SPECIFIC = function (name, qty) {
				return {
					fnName: 'SPECIFIC',
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
				//return '[tag:' + this.tag + '|' + this.tag + ']' + (this.qty ? this.qty : '');
				return String(this.tag + (this.qty ? ' ' + this.qty : ''));
			};

			var TAG = function (tag, qty) {
				return {
					fnName: 'TAG',
					tag: tag,
					qty: qty || NOQTY,
					test: TAGTest,
					toString: TAGString
				};
			};

			return {
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
					health: g.healing_med,
					hunger: g.calories_large,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
					cooktime: 2
				},
				frogglebunwich: {
					name: 'Froggle Bunwich',
					test: function(cooker, names, tags) {
						return (names.frog_legs || names.frog_legs_cooked) && tags.veggie;
					},
					requirements: [NAME('frog_legs'), TAG('veggie')],
					priority: 1,
					foodtype: "meat",
					health: g.healing_med,
					hunger: g.calories_large,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: -g.healing_small,
					hunger: g.calories_small * 2,
					perish: g.perish_slow,
					sanity: g.sanity_med,
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
					hunger: g.calories_large,
					perish: g.perish_med,
					sanity: g.sanity_med,
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
					health: g.healing_small,
					hunger: g.calories_large,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_large,
					hunger: g.calories_large,
					perish: g.perish_med,
					sanity: g.sanity_tiny,
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
					health: g.healing_med,
					hunger: g.calories_large,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_medlarge,
					hunger: g.calories_huge,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_large,
					hunger: g.calories_huge,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_small,
					hunger: g.calories_large,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_superhuge,
					hunger: g.calories_superhuge,
					perish: g.perish_fast,
					sanity: g.sanity_tiny,
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
					health: g.healing_med,
					hunger: g.calories_huge,
					perish: g.perish_preserved,
					sanity: g.sanity_tiny,
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
					health: g.healing_small,
					hunger: g.calories_small * 5,
					perish: g.perish_med,
					sanity: g.sanity_tiny,
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
					health: g.healing_small * 4,
					hunger: g.calories_large * 4,
					perish: g.perish_med,
					sanity: g.sanity_tiny,
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
					health: g.healing_large,
					hunger: g.calories_large,
					perish: g.perish_preserved,
					sanity: g.sanity_tiny,
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
					health: g.healing_med,
					hunger: g.calories_huge,
					perish: g.perish_fast,
					sanity: g.sanity_tiny,
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
					health: g.healing_small,
					hunger: g.calories_med,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_small,
					hunger: g.calories_small * 3,
					perish: g.perish_slow,
					sanity: g.sanity_tiny,
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
					health: g.healing_med,
					hunger: g.calories_med,
					perish: g.perish_fast,
					sanity: g.sanity_tiny,
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
					health: g.healing_med,
					hunger: g.calories_large,
					perish: g.perish_fast,
					sanity: g.sanity_tiny,
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
					health: g.healing_huge,
					hunger: g.calories_large,
					perish: g.perish_fast,
					sanity: g.sanity_tiny,
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
					health: -g.healing_med,
					hunger: g.calories_large,
					perish: g.perish_fast,
					sanity: -g.sanity_medlarge,
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
					health: -g.healing_small,
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
					perish: g.perish_fast,
					sanity: 0,
					cooktime: 0.25
				}
			};
		});
}());

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
				return tags[this.tag] && this.qty.test(tags[this.tag]);
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
			/*
				: {
					name: '',
					requirements: [],
					priority: ,
					foodtype: '',
					health: g.,
					hunger: g.,
					perish: g.,
					sanity: g.,
					games: [
						'sw'
					]
				},
			*/

			return {
				baconeggs: {
					name: 'Bacon and Eggs',
					test: function(cooker, names, tags) {
						return tags.egg && tags.egg > 1 && tags.meat && tags.meat > 1 && !tags.veggie;
					},
					requirements: [TAG('egg', COMPARE('>', 1)), TAG('meat', COMPARE('>', 1)), NOT(TAG('veggie'))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_HUGE,
					perish: g.PERISH_PRESERVED,
					sanity: g.SANITY_TINY
				},
				bananapop: {
					name: 'Banana Pop',
					test: function(cooker, names, tags) {
						return names.cave_banana && tags.frozen && !tags.meat && !tags.fish;
					},
					requirements: [NAME('cave_banana'), TAG('frozen'), NOT(TAG('meat')), NOT(TAG('fish'))],
					priority: 20,
					foodtype: 'veggie',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: g.SANITY_LARGE,
					games: [
						'sw'
					]
				},
				bisque: {
					name: 'Bisque',
					test: function(cooker, names, tags) {
						return names.limpets && names.limpets == 3 && tags.frozen;
					},
					requirements: [NAME('limpets', COMPARE('=', 3)), TAG('frozen')],
					priority: 30,
					foodtype: 'meat',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_MEDSMALL,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY,
					games: [
						'sw'
					]
				},
				bonestew: {
					name: 'Meaty Stew',
					test: function(cooker, names, tags) {
						return tags.meat && tags.meat >= 3 && !tags.inedible;
					},
					requirements: [TAG('meat', COMPARE('>=', 3)), NOT(TAG('inedible'))],
					priority: 0,
					foodtype: 'meat',
					health: g.HEALING_SMALL * 4,
					hunger: g.CALORIES_LARGE * 4,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY
				},
				butterflymuffin: {
					name: 'Butter Muffin',
					test: function(cooker, names, tags) {
						return names.butterfly_wings && !tags.meat && tags.veggie;
					},
					requires: 'Butterfly Wings, veggie',
					requirements: [NAME('butterfly_wings'), NOT(TAG('meat')), TAG('veggie')],
					priority: 1,
					weight: 1,
					foodtype: 'veggie',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				californiaroll: {
					name: 'California Roll',
					test: function(cooker, names, tags) {
						return names.seaweed && names.seaweed == 2 && tags.fish && tags.fish >= 1;
					},
					requirements: [NAME('seaweed', COMPARE('=', 2)), TAG('fish', COMPARE('>=', 1))],
					priority: 20,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED * 2,
					perish: g.PERISH_MED,
					sanity: g.SANITY_SMALL,
					games: [
						'sw'
					]
				},
				ceviche: {
					name: 'Ceviche',
					test: function(cooker, names, tags) {
						return tags.fish && tags.fish >= 2 && tags.frozen;
					},
					requirements: [TAG('fish', COMPARE('>=', 2)), TAG('frozen')],
					priority: 20,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY,
					games: [
						'sw'
					]
				},
				coffee: {
					name: 'Coffee',
					test: function(cooker, names, tags) {
						return (names.coffeebeans_cooked && (names.coffeebeans_cooked == 4)) || (names.coffeebeans_cooked && names.coffeebeans_cooked == 3 && (tags.dairy || tags.sweetener));
					},
					requirements: [NAME('coffeebeans', COMPARE('>=', 3)), TAG('dairy', COMPARE('<=', 1)), TAG('sweetener', COMPARE('<=', 1))],
					priority: 30,
					foodtype: 'veggie',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY,
					games: [
						'sw'
					]
				},
				dragonpie: {
					name: 'Dragonpie',
					test: function(cooker, names, tags) {
						return (names.dragonfruit || names.dragonfruit_cooked) && !tags.meat;
					},
					requirements: [NAME('dragonfruit'), NOT(TAG('meat'))],
					priority: 1,
					foodtype: 'veggie',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_HUGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				fishsticks: {
					name: 'Fishsticks',
					test: function(cooker, names, tags) {
						return tags.fish && names.twigs && (tags.inedible && tags.inedible <= 1);
					},
					requirements: [TAG('fish'), SPECIFIC('twigs'), TAG('inedible'), TAG('inedible', COMPARE('<=', 1))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY
				},
				fishtacos: {
					name: 'Fish Tacos',
					test: function(cooker, names, tags) {
						return tags.fish && (names.corn || names.corn_cooked);
					},
					requirements: [TAG('fish'), NAME('corn')],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY,
					tags: ['monstermeat']
				},
				flowersalad: {
					name: 'Flower Salad',
					test: function(cooker, names, tags) {
						return names.cactus_flower && tags.veggie && tags.veggie >= 2 && !tags.meat && !tags.inedible && !tags.egg && !tags.sweetener && !tags.fruit;
					},
					requirements: [SPECIFIC('cactus_flower'), TAG('veggie', COMPARE('>=', 2)), NOT(TAG('meat')), NOT(TAG('inedible')), NOT(TAG('egg')), NOT(TAG('sweetener')), NOT(TAG('fruit'))],
					priority: 10,
					foodtype: 'veggie',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY,
					games: [
						'rog',
						'sw',
						'dst'
					]
				},
				frogglebunwich: {
					name: 'Froggle Bunwich',
					test: function(cooker, names, tags) {
						return (names.frog_legs || names.frog_legs_cooked) && tags.veggie;
					},
					requirements: [NAME('frog_legs'), TAG('veggie')],
					priority: 1,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				fruitmedley: {
					name: 'Fruit Medley',
					test: function(cooker, names, tags) {
						return tags.fruit && tags.fruit >= 3 && !tags.meat && !tags.veggie;
					},
					requirements: [TAG('fruit', COMPARE('>=', 3)), NOT(TAG('meat')), NOT(TAG('veggie'))],
					priority: 0,
					foodtype: 'veggie',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY
				},
				guacamole: {
					name: 'Guacamole',
					test: function(cooker, names, tags) {
						return names.mole && names.cactus_meat && !tags.fruit;
					},
					requirements: [SPECIFIC('mole'), SPECIFIC('cactus_meat'), NOT(TAG('fruit'))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: 0,
					games: [
						'rog',
						'sw',
						'dst'
					]
				},
				honeyham: {
					name: 'Honey Ham',
					test: function(cooker, names, tags) {
						return names.honey && tags.meat && tags.meat > 1.5 && !tags.inedible;
					},
					requirements: [SPECIFIC('honey'), TAG('meat', COMPARE('>', 1.5)), NOT(TAG('inedible'))],
					priority: 2,
					foodtype: 'meat',
					health: g.HEALING_MEDLARGE,
					hunger: g.CALORIES_HUGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				honeynuggets: {
					name: 'Honey Nuggets',
					test: function(cooker, names, tags) {
						return names.honey && tags.meat && tags.meat <= 1.5 && !tags.inedible;
					},
					requirements: [SPECIFIC('honey'), TAG('meat', COMPARE('<=', 1.5)), NOT(TAG('inedible'))],
					priority: 2,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				hotchili: {
					name: 'Spicy Chili',
					test: function(cooker, names, tags) {
						return tags.meat && tags.veggie && tags.meat >= 1.5 && tags.veggie >= 1.5;
					},
					requirements: [TAG('meat', COMPARE('>=', 1.5)), TAG('veggie', COMPARE('>=', 1.5))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: 0,
					games: [
						'rog',
						'sw',
						'dst'
					]
				},
				icecream: {
					name: 'Ice Cream',
					test: function(cooker, names, tags) {
						return tags.frozen && tags.dairy && tags.sweetener && !tags.meat && !tags.veggie && !tags.inedible && !tags.egg;
					},
					requirements: [TAG('frozen'), TAG('dairy'), TAG('sweetener'), NOT(TAG('meat')), NOT(TAG('veggie')), NOT(TAG('inedible')), NOT(TAG('egg'))],
					priority: 10,
					foodtype: 'veggie',
					health: 0,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERFAST,
					sanity: g.SANITY_HUGE,
					games: [
						'rog',
						'sw',
						'dst'
					]
				},
				jammypreserves: {
					name: 'Fist Full of Jam',
					test: function(cooker, names, tags) {
						return tags.fruit && !tags.meat && !tags.veggie && !tags.inedible;
					},
					requirements: [TAG('fruit'), NOT(TAG('meat')), NOT(TAG('veggie')), NOT(TAG('inedible'))],
					priority: 0,
					foodtype: 'veggie',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL * 3,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				jellyopop: {
					name: 'Jelly-O Pop',
					test: function(cooker, names, tags) {
						return tags.jellyfish && tags.frozen && tags.inedible;
					},
					requirements: [TAG('jellyfish'), TAG('frozen'), TAG('inedible')],
					priority: 20,
					foodtype: 'meat',
					health: g.HEALING_MED,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					games: [
						'sw'
					]
				},
				kabobs: {
					name: 'Kabobs',
					test: function(cooker, names, tags) {
						return tags.meat && names.twigs && (!tags.monster || tags.monster <= 1) && (tags.inedible && tags.inedible <= 1);
					},
					requirements: [TAG('meat'), SPECIFIC('twigs'), OR(NOT(TAG('monster')), TAG('monster', COMPARE('<=', 1))), TAG('inedible'), TAG('inedible', COMPARE('<=', 1))],
					priority: 5,
					foodtype: 'meat',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				lobsterbisque: {
					name: 'Lobster Bisque',
					test: function(cooker, names, tags) {
						return names.lobster && tags.frozen;
					},
					requirements: [NAME('lobster'), TAG('frozen')],
					priority: 30,
					foodtype: 'meat',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: g.SANITY_SMALL,
					games: [
						'sw'
					]
				},
				lobsterdinner: {
					name: 'Lobster Dinner',
					test: function(cooker, names, tags) {
						return names.lobster && names.butter && !tags.meat && !tags.frozen;
					},
					requirements: [NAME('lobster'), NAME('butter'), NOT(TAG('meat')), NOT(TAG('frozen'))],
					priority: 25,
					foodtype: 'meat',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_HUGE,
					games: [
						'sw'
					]
				},
				mandrakesoup: {
					name: 'Mandrake Soup',
					test: function(cooker, names, tags) {
						return names.mandrake;
					},
					requirements: [SPECIFIC('mandrake')],
					priority: 10,
					foodtype: 'veggie',
					health: g.HEALING_SUPERHUGE,
					hunger: g.CALORIES_SUPERHUGE,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY
				},
				meatballs: {
					name: 'Meatballs',
					test: function(cooker, names, tags) {
						return tags.meat && !tags.inedible;
					},
					requirements: [TAG('meat'), NOT(TAG('inedible'))],
					priority: -1,
					foodtype: 'meat',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL * 5,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY
				},
				monsterlasagna: {
					name: 'Monster Lasagna',
					test: function(cooker, names, tags) {
						return tags.monster && tags.monster >= 2 && !tags.inedible;
					},
					requirements: [TAG('monster', COMPARE('>=', 2)), NOT(TAG('inedible'))],
					priority: 10,
					foodtype: 'meat',
					health: -g.HEALING_MED,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					sanity: -g.SANITY_MEDLARGE
				},
				perogies: {
					name: 'Pierogi',
					test: function(cooker, names, tags) {
						return tags.egg && tags.meat && tags.veggie && !tags.inedible;
					},
					requirements: [TAG('egg'), TAG('meat'), TAG('veggie'), NOT(TAG('inedible'))],
					priority: 5,
					foodtype: 'meat',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_PRESERVED,
					sanity: g.SANITY_TINY
				},
				powcake: {
					name: 'Powdercake',
					test: function(cooker, names, tags) {
						return names.twigs && names.honey && (names.corn || names.corn_cooked);
					},
					requirements: [SPECIFIC('twigs'), SPECIFIC('honey'), NAME('corn')],
					priority: 10,
					foodtype: 'veggie',
					health: -g.HEALING_SMALL,
					hunger: 0,
					perish: 9000000,
					sanity: 0
				},
				pumpkincookie: {
					name: "Pumpkin Cookie",
					test: function(cooker, names, tags) {
						return (names.pumpkin || names.pumpkin_cooked) && tags.sweetener && tags.sweetener >= 2;
					},
					requirements: [NAME('pumpkin'), TAG('sweetener', COMPARE('>=', 2))],
					priority: 10,
					foodtype: 'veggie',
					health: 0,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: g.SANITY_MED
				},
				ratatouille: {
					name: 'Ratatouille',
					test: function(cooker, names, tags) {
						return !tags.meat && tags.veggie && !tags.inedible;
					},
					requirements: [NOT(TAG('meat')), TAG('veggie'), NOT(TAG('inedible'))],
					priority: 0,
					foodtype: 'veggie',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				seafoodgumbo: {
					name: 'Seafood Gumbo',
					test: function(cooker, names, tags) {
						return tags.fish && tags.fish > 2;
					},
					requirements: [TAG('fish', COMPARE('>', 2))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: g.SANITY_MEDLARGE,
					games: [
						'sw'
					]
				},
				sharkfinsoup: {
					name: 'Shark Fin Soup',
					test: function(cooker, names, tags) {
						return names.shark_fin;
					},
					requirements: [NAME('shark_fin')],
					priority: 20,
					foodtype: 'meat',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					sanity: g.SANITY_SMALL,
					games: [
						'sw'
					]
				},
				stuffedeggplant: {
					name: 'Stuffed Eggplant',
					test: function(cooker, names, tags) {
						return (names.eggplant || names.eggplant_cooked) && tags.veggie && tags.veggie > 1;
					},
					requirements: [NAME('eggplant'), TAG('veggie', COMPARE('>', 1))],
					priority: 1,
					foodtype: 'veggie',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY
				},
				surfnturf: {
					name: 'Surf \'n\' Turf',
					test: function(cooker, names, tags) {
						return tags.meat && tags.meat >= 2.5 && tags.fish && tags.fish >= 1.5 && !tags.frozen;
					},
					requirements: [TAG('meat', COMPARE('>=', 2.5)), TAG('fish', COMPARE('>=', 1.5)), NOT(TAG('frozen'))],
					priority: 30,
					foodtype: 'meat',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: g.SANITY_LARGE,
					games: [
						'sw'
					]
				},
				taffy: {
					name: "Taffy",
					test: function(cooker, names, tags) {
						return tags.sweetener && tags.sweetener >= 3 && !tags.meat;
					},
					requirements: [TAG('sweetener', COMPARE('>=', 3)), NOT(TAG('meat'))],
					priority: 10,
					foodtype: 'veggie',
					health: -g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL * 2,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_MED
				},
				trailmix: {
					name: 'Trail Mix',
					test: function(cooker, names, tags) {
						return names.birchnut_cooked && tags.seed && tags.seed >= 1 && (names.berries || names.berries_cooked) && tags.fruit && tags.fruit >= 1 && !tags.meat && !tags.veggie && !tags.egg && !tags.dairy;
					},
					requirements: [SPECIFIC('birchnut_cooked'), TAG('seed', COMPARE('>=', 1)), NAME('berries'), TAG('fruit', COMPARE('>=', 1)), NOT(TAG('meat')), NOT(TAG('veggie')), NOT(TAG('egg')), NOT(TAG('dairy'))],
					priority: 10,
					foodtype: 'veggie',
					health: g.HEALING_MEDLARGE,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SLOW,
					sanity: g.SANITY_TINY,
					games: [
						'rog',
						'sw',
						'dst'
					]
				},
				turkeydinner: {
					name: 'Turkey Dinner',
					test: function(cooker, names, tags) {
						return names.drumstick && names.drumstick > 1 && tags.meat && tags.meat > 1 && (tags.veggie || tags.fruit);
					},
					requirements: [SPECIFIC('drumstick', COMPARE('>', 1)), TAG('meat', COMPARE('>', 1)), OR(TAG('veggie'), TAG('fruit'))],
					priority: 10,
					foodtype: 'meat',
					health: g.HEALING_MED,
					hunger: g.CALORIES_HUGE,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY
				},
				unagi: {
					name: "Unagi",
					test: function(cooker, names, tags) {
						return names.cutlichen && (names.eel || names.eel_cooked);
					},
					requirements: [SPECIFIC('cutlichen'), NAME('eel')],
					priority: 20,
					foodtype: 'veggie',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MEDSMALL,
					perish: g.PERISH_MED,
					sanity: g.SANITY_TINY
				},
				waffles: {
					name: 'Waffles',
					test: function(cooker, names, tags) {
						return names.butter && (names.berries || names.berries_cooked) && tags.egg;
					},
					requirements: [SPECIFIC('butter'), NAME('berries'), TAG('egg')],
					priority: 10,
					foodtype: 'veggie',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY
				},
				watermelonicle: {
					name: 'Melonsicle',
					test: function(cooker, names, tags) {
						return names.watermelon && tags.frozen && names.twigs && !tags.meat && !tags.veggie && !tags.egg;
					},
					requirements: [SPECIFIC('watermelon'), TAG('frozen'), SPECIFIC('twigs'), NOT(TAG('meat')), NOT(TAG('veggie')), NOT(TAG('egg'))],
					priority: 10,
					foodtype: 'veggie',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: g.SANITY_MEDLARGE,
					games: [
						'rog',
						'sw',
						'dst'
					]
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
					perish: g.PERISH_FAST,
					sanity: 0
				}
			};
		});
}());

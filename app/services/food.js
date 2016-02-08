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
		.service('food', function(gameVariables) {
			var g = gameVariables;

			/*
				Food Properties
				===============

				tags.cooked		Already been cooked over a fire
				tags.nocrockpot	Can not be used in the crock pot
				tags.games      List of game codes the item appears in: ds, dst, rog, sw
			*/

			return {
				batwing: {
					name: 'Batilisk Wing',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'batwing_cooked',
					dried: 'morsel_dried',
					tags: {
						nocrockpot: true
					}
				},
				batwing_cooked: {
					name: 'Cooked Batilisk Wing',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						nocrockpot: true,
						cooked: true
					}
				},
				berries: {
					name: 'Berries',
					health: 0,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					cooked: 'berries_cooked',
					tags: {
						fruit: 0.5
					}
				},
				berries_cooked: {
					name: 'Roasted Berries',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					tags: {
						fruit: 0.5,
						cooked: true
					}
				},
				birchnut: {
					name: 'Birchnut',
					perish: g.PERISH_PRESERVED,
					cooked: 'birchnut_cooked',
					tags: {
						seed: 1
					},
					games: [
						'rog'
					]
				},
				birchnut_cooked: {
					name: 'Roasted Birchnut',
					hunger: g.CALORIES_TINY,
					health: g.HEALING_TINY,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						seed: 1
					},
					games: [
						'rog'
					]
				},
				bird_egg: {
					name: 'Egg',
					health: 0,
					hunger: g.CALORIES_TINY,
					sanity: 0,
					perish: g.PERISH_MED,
					rot: 'rottenegg',
					cooked: 'bird_egg_cooked',
					tags: {
						egg: 1
					}
				},
				bird_egg_cooked: {
					name: 'Cooked Egg',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						egg: 1
					}
				},
				bird_egg_rotten: {
					name: 'Rotten Egg',
					health: g.SPOILED_HEALTH,
					hunger: g.SPOILED_HUNGER,
					tags: {
						nocrockpot: true
					}
				},
				blubber: {
					name: 'Blubber',
					health: g.HEALING_DEFAULT,
					hunger: g.CALORIES_DEFAULT,
					perish: g.PERISH_MED,
					tags: {
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				blue_mushroom: {
					name: 'Blue Cap',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_MED,
					perish: g.PERISH_MED,
					cooked: 'blue_mushroom_cooked',
					tags: {
						veggie: 0.5,
						ideal: true
					}
				},
				blue_mushroom_cooked: {
					name: 'Cooked Blue Cap',
					health: -g.HEALING_SMALL,
					hunger: 0,
					sanity: g.SANITY_SMALL,
					perish: g.PERISH_MED,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				butter: {
					name: "Butter",
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERSLOW,
					tags: {
						fat: 1,
						dairy: 1
					}
				},
				butterfly_wings: {
					name: "Butterfly Wings",
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					tags: {
						decoration: 2
					}
				},
				cactus_flower: {
					name: 'Cactus Flower',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_MEDSMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: g.SANITY_TINY,
					tags: {
						veggie: 0.5
					},
					games: [
						'rog',
						'sw'
					]
				},
				cactus_meat: {
					name: 'Cactus Flesh',
					hunger: g.CALORIES_SMALL,
					health: -g.HEALING_SMALL,
					perish: g.PERISH_MED,
					sanity: -g.SANITY_TINY,
					cooked: 'cactus_meat_cooked',
					tags: {
						veggie: 1
					},
					games: [
						'rog'
					]
				},
				cactus_meat_cooked: {
					name: 'Cooked Cactus Flesh',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_TINY,
					perish: g.PERISH_MED,
					sanity: g.SANITY_MED,
					tags: {
						veggie: 1,
						cooked: true
					},
					games: [
						'rog'
					]
				},
				carrot: {
					name: 'Carrot',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					sanity: 0,
					cooked: 'carrot_cooked',
					tags: {
						veggie: 1
					}
				},
				carrot_cooked: {
					name: 'Roasted Carrot',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: 0,
					tags: {
						veggie: 1,
						cooked: true
					}
				},
				cave_banana: {
					name: 'Cave Banana',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					cooked: 'cave_banana_cooked',
					tags: {
						fruit: 1
					}
				},
				cave_banana_cooked: {
					name: 'Cooked Banana',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_FAST,
					tags: {
						fruit: 1,
						cooked: true
					}
				},
				coconut: {
					name: 'Coconut',
					tags: {
						fruit: 1,
						fat: 1,
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				coconut_halved: {
					name: 'Halved Coconut',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_TINY / 2,
					perish: g.PERISH_MED,
					cooked: 'coconut_cooked',
					tags: {
						fruit: 1,
						fat: 1
					},
					games: [
						'sw'
					]
				},
				coconut_cooked: {
					name: 'Roasted Coconut',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_MED,
					tags: {
						fruit: 1,
						fat: 1,
						cooked: true
					},
					games: [
						'sw'
					]
				},
				coffeebeans: {
					name: 'Coffe Beans',
					health: g.CALORIES_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					sanity: 0,
					cooked: 'coffeebeans_cooked',
					tags: {
						fruit: 0.5
					},
					games: [
						'sw'
					]
				},
				coffeebeans_cooked: {
					name: 'Roasted Coffee Beans',
					health: 0,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_SLOW,
					sanity: -g.SANITY_TINY,
					tags: {
						fruit: 1,
						cooked: true
					},
					games: [
						'sw'
					]
				},
				coral_brain: {
					name: 'Brainy Matter',
					health: -10,
					hunger: 10,
					sanity: 50,
					perish: g.PERISH_ONE_DAY,
					tags: {
						nocrockpot: true
					}
				},
				corn: {
					name: 'Corn',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: 0,
					cooked: 'corn_cooked',
					tags: {
						ideal: true,
						veggie: 1
					}
				},
				corn_cooked: {
					name: 'Popcorn',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SLOW,
					sanity: 0,
					tags: {
						veggie: 1,
						cooked: true
					}
				},
				cutlichen: {
					name: "Lichen",
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_TINY,
					perish: g.PERISH_TWO_DAY,
					tags: {
						veggie: 1
					}
				},
				deerclops_eyeball: {
					name: 'Deerclops Eyeball',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					sanity: -g.SANITY_MED,
					tags: {
						nocrockpot: true
					},
					games: [
						'rog'
					]
				},
				doydoyegg: {
					name: 'Doydoy Egg',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					cooked: 'doydoyegg_cooked',
					tags: {
						egg: 1
					},
					games: [
						'sw'
					]
				},
				doydoyegg_cooked: {
					name: 'Doydoy Egg',
					health: 0,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						egg: 1
					},
					games: [
						'sw'
					]
				},
				dragonfruit: {
					name: 'Dragon Fruit',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					cooked: 'dragonfruit_cooked',
					tags: {
						fruit: 1
					}
				},
				dragonfruit_cooked: {
					name: 'Prepared Dragon Fruit',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					tags: {
						fruit: 1,
						cooked: true
					}
				},
				dragoon_heart: {
					name: 'Dragoon Heart',
					health: g.HEALING_MEDSMALL + g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_MED,
					tags: {
						nocrockpot: true
					}
				},
				drumstick: {
					name: 'Drumstick',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'drumstick_cooked',
					dried: 'morsel_dried',
					tags: {
						ideal: true,
						meat: 0.5
					}
				},
				drumstick_cooked: {
					name: 'Fried Drumstick',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					tags: {
						meat: 0.5,
						cooked: true
					}
				},
				durian: {
					name: 'Durian',
					health: -g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: -g.SANITY_TINY,
					cooked: 'durian_cooked',
					tags: {
						monster: 1,
						fruit: 1
					}
				},
				durian_cooked: {
					name: 'Extra Smelly Durian',
					health: 0,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_FAST,
					sanity: -g.SANITY_TINY,
					tags: {
						monster: 1,
						fruit: 1,
						cooked: true
					}
				},
				eel: {
					name: "Eel",
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_SUPERFAST,
					cooked: 'eel_cooked',
					dried: 'morsel_dried',
					tags: {
						meat: 0.5,
						fish: 1
					}
				},
				eel_cooked: {
					name: "Cooked Eel",
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true
					}
				},
				eggplant: {
					name: 'Eggplant',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: 0,
					cooked: 'eggplant_cooked',
					tags: {
						veggie: 1
					}
				},
				eggplant_cooked: {
					name: 'Braised Eggplant',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_FAST,
					sanity: 0,
					tags: {
						veggie: 1,
						cooked: true
					}
				},
				electric_milk: {
					name: 'Electric Milk',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						dairy: 1
					},
					games: [
						'rog'
					]
				},
				fish: {
					name: 'Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					cooked: 'fish_cooked',
					dried: 'morsel_dried',
					tags: {
						fish: 1,
						meat: 0.5
					}
				},
				fish_cooked: {
					name: 'Cooked Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						meat: 0.5,
						fish: 1
					}
				},
				fish_med: {
					name: 'Dead Dogfish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERFAST,
					cooked: 'fish_med_cooked',
					dried: 'meat_dried',
					tags: {
						meat: 0.5,
						fish: 1
					},
					games: [
						'sw'
					]
				},
				fish_med_cooked: {
					name: 'Fish Steak',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						meat: 0.5,
						fish: 1
					},
					games: [
						'sw'
					]
				},
				fish_raw: {
					name: 'Raw Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERFAST,
					cooked: 'fish_med_cooked',
					dried: 'meat_dried',
					tags: {
						meat: 0.5,
						fish: 1
					},
					games: [
						'sw'
					]
				},
				fish_raw_small: {
					name: 'Fish Morsel',
					cooked: 'fish_raw_small_cooked',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					tags: {
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				fish_raw_small_cooked: {
					name: 'Cooked Fish Morsel',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						cooked: true,
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				foliage: {
					name: "Foliage",
					health: g.HEALING_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					tags: {
						nocrockpot: true
					}
				},
				frog_legs: {
					name: 'Frog Legs',
					health: 0,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: -g.SANITY_SMALL,
					cooked: 'frog_legs_cooked',
					dried: 'morsel_dried',
					tags: {
						meat: 0.5
					}
				},
				frog_legs_cooked: {
					name: 'Cooked Frog Legs',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					sanity: 0,
					tags: {
						cooked: true,
						meat: 0.5
					}
				},
				glommer_fuel: {
					name: 'Glommer\'s Goop',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_MED,
					sanity: -g.SANITY_HUGE,
					tags: {
						nocrockpot: true
					},
					games: [
						'rog'
					]
				},
				green_mushroom: {
					name: 'Green Cap',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_HUGE,
					perish: g.PERISH_MED,
					cookecd: 'green_mushroom_cooked',
					tags: {
						veggie: 0.5,
						ideal: true
					}
				},
				green_mushroom_cooked: {
					name: 'Cooked Green Cap',
					health: -g.HEALING_TINY,
					hunger: 0,
					sanity: g.SANITY_MED,
					perish: g.PERISH_MED,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				honey: {
					name: 'Honey',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_SUPERSLOW,
					tags: {
						sweetener: true
					}
				},
				honeycomb: {
					name: 'Honeycomb',
					tags: {
						sweetener: true
					}
				},
				ice: {
					name: 'Ice',
					perish: g.PERISH_SUPERFAST,
					tags: {
						frozen: 1
					},
					games: [
						'rog'
					]
				},
				jellyfish: {
					name: 'Jellyfish',
					cooked: 'jellyfish_cooked',
					dried: 'jellyfish_dried',
					tags: {
						fish: 1,
						jellyfish: 1,
						monster: 1,
						inedible: true
					},
					games: [
						'sw'
					]
				},
				jellyfish_dead: {
					name: 'Dead Jellyfish',
					health: g.HEALING_DEFAULT,
					hunger: g.CALORIES_DEFAULT,
					perish: g.PERISH_FAST,
					cooked: 'jellyfish_cooked',
					dried: 'jellyfish_dried',
					tags: {
						fish: 1,
						jellyfish: 1,
						monster: 1,
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				jellyfish_cooked: {
					name: 'Cooked Jellyfish',
					health: g.HEALING_DEFAULT,
					hunger: g.CALORIES_MEDSMALL,
					perish: g.PERISH_MED,
					tags: {
						fish: 1,
						jellyfish: 1,
						monster: 1,
						cooked: true
					},
					games: [
						'sw'
					]
				},
				jellyfish_dried: {
					name: 'Dried Jellyfish',
					health: g.HEALING_DEFAULT,
					hunger: g.CALORIES_MEDSMALL,
					perish: g.PERISH_PRESERVED,
					cooked: 'jellyfish_cooked',
					tags: {
						fish: 1,
						jellyfish: 1,
						monster: 1,
						dried: true
					},
					games: [
						'sw'
					]
				},
				lightbulb: {
					name: 'Light Bulb',
					health: g.HEALING_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					tags: {
						nocrockpot: true
					}
				},
				limpets: {
					name: 'Limpets',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'limpets_cooked',
					tags: {
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				limpets_cooked: {
					name: 'Cooked Limpets',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					tags: {
						cooked: true,
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				lobster: {
					name: 'Wobster',
					cooked: 'lobster_cooked',
					tags: {
						inedible: true
					},
					games: [
						'sw'
					]
				},
				lobster_dead: {
					name: 'Dead Wobster',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					cooked: 'lobster_cooked',
					tags: {
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				lobster_cooked: {
					name: 'Cooked Wobster',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						fish: 2,
						cooked: true,
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				mandrake: {
					name: 'Mandrake',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					cooked: 'mandrake_cooked',
					tags: {
						veggie: 1,
						magic: 1
					}
				},
				mandrake_cooked: {
					name: 'Cooked Mandrake',
					health: g.HEALING_SUPERHUGE,
					hunger: g.CALORIES_SUPERHUGE,
					tags: {
						cooked: true,
						nocrockpot: true,
						veggie: 1,
						magic: 1
					}
				},
				meat: {
					name: 'Meat',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MED,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'meat_cooked',
					dried: 'meat_dried',
					tags: {
						meat: 1
					}
				},
				meat_cooked: {
					name: 'Cooked Meat',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						meat: 1,
						cooked: true
					}
				},
				meat_dried: {
					name: 'Jerky',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					sanity: g.SANITY_MED,
					perish: g.PERISH_PRESERVED,
					tags: {
						meat: 1,
						dried: true
					}
				},
				minotaurhorn: {
					name: "Guardian's Horn",
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					sanity: -g.SANITY_MED,
					tags: {
						nocrockpot: true,
						ismeat: true
					}
				},
				mole: {
					name: 'Moleworm',
					tags: {
						meat: 0.5
					},
					games: [
						'rog'
					]
				},
				monster_meat: {
					name: 'Monster Meat',
					health: -g.HEALING_MED,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_MED,
					perish: g.PERISH_FAST,
					cooked: 'monster_meat_cooked',
					dried: 'monster_meat_dried',
					tags: {
						meat: 1,
						monster: true
					}
				},
				monster_meat_cooked: {
					name: 'Cooked Monster Meat',
					health: -g.HEALING_SMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_SLOW,
					tags: {
						meat: 1,
						monster: true,
						cooked: true
					}
				},
				monster_meat_dried: {
					name: 'Monster Jerky',
					health: -g.HEALING_SMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_TINY,
					perish: g.PERISH_PRESERVED,
					tags: {
						meat: 1,
						monster: true,
						dried: 1
					}
				},
				morsel: {
					name: 'Morsel',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'morsel_cooked',
					dried: 'morsel_dried',
					tags: {
						meat: 0.5
					}
				},
				morsel_cooked: {
					name: 'Cooked Morsel',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						meat: 0.5,
						cooked: true
					}
				},
				morsel_dried: {
					name: 'Small Jerky',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_SMALL,
					sanity: g.SANITY_SMALL,
					perish: g.PERISH_PRESERVED,
					tags: {
						meat: 0.5,
						dried: true
					}
				},
				mussel: {
					name: 'Mussel',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_SUPERFAST,
					cooked: 'mussel_cooked',
					tags: {
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				mussel_cooked: {
					name: 'Cooked Mussel',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					tags: {
						cooked: true,
						fish: 0.5
					},
					games: [
						'sw'
					]
				},
				mystery_meat: {
					name: 'Bile-Covered Slop',
					health: g.SPOILED_HEALTH,
					hunger: g.SPOILED_HUNGER,
					tags: {
						nocrockpot: true
					}
				},
				petals: {
					name: 'Petals',
					health: g.HEALING_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					tags: {
						nocrockpot: true
					}
				},
				petals_evil: {
					name: 'Dark Petals',
					health: 0,
					hunger: 0,
					sanity: -g.SANITY_TINY,
					perish: g.PERISH_FAST,
					tags: {
						nocrockpot: true
					}
				},
				plant_meat: {
					name: 'Leafy Meat',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					tags: {
						nocrockpot: true
					}
				},
				plant_meat_cooked: {
					name: 'Cooked Leafy Meat',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MEDSMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						cooked: true,
						nocrockpot: true
					}
				},
				pomegranate: {
					name: 'Pomegranate',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					cooked: 'pomegranate_cooked',
					tags: {
						fruit: 1
					}
				},
				pomegranate_cooked: {
					name: 'Sliced Pomegranate',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					tags: {
						fruit: 1,
						cooked: true
					}
				},
				pumpkin: {
					name: 'Pumpkin',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: 0,
					cooked: 'pumpkin_cooked',
					tags: {
						veggie: 1
					}
				},
				pumpkin_cooked: {
					name: 'Hot Pumpkin',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					sanity: 0,
					tags: {
						veggie: 1,
						cooked: true
					}
				},
				red_mushroom: {
					name: 'Red Cap',
					health: -g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					cooked: 'red_mushroom_cooked',
					tags: {
						veggie: 0.5,
						ideal: true
					}
				},
				red_mushroom_cooked: {
					name: 'Cooked Red Cap',
					health: g.HEALING_TINY,
					hunger: 0,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_MED,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				seaweed: {
					name: 'Seaweed',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_TINY,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'seaweed_cooked',
					dried: 'seaweed_dried',
					tags: {
						veggie: 1
					},
					games: [
						'sw'
					]
				},
				seaweed_cooked: {
					name: 'Roasted Seaweed',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						veggie: 1,
						cooked: true
					},
					games: [
						'sw'
					]
				},
				seaweed_dried: {
					name: 'Dried Seaweed',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_PRESERVED,
					tags: {
						vaggie: 1,
						dried: true
					},
					games: [
						'sw'
					]
				},
				seeds: {
					name: 'Seeds',
					health: 0,
					hunger: g.CALORIES_TINY / 2,
					perish: g.PERISH_SUPERSLOW,
					cooked: 'seeds_cooked',
					tags: {
						nocrockpot: true
					}
				},
				seeds_cooked: {
					name: 'Toasted Seeds',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_TINY / 2,
					perish: g.PERISH_MED,
					tags: {
						nocrockpot: true,
						cooked: true
					}
				},
				shark_fin: {
					name: 'Shark Fin',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					sanity: -g.SANITY_MED,
					perish: g.PERISH_FAST,
					tags: {
						meat: 0.5,
						fish: 1
					},
					games: [
						'sw'
					]
				},
				spoiled_food: {
					name: 'Rot',
					health: g.SPOILED_HEALTH,
					hunger: g.SPOILED_HUNGER,
					tags: {
						nocrockpot: true
					}
				},
				sweet_potato: {
					name: 'Sweet Potato',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_TINY,
					perish: g.PERISH_MED,
					sanity: 0,
					tags: {
						veggie: 1
					},
					games: [
						'sw'
					]
				},
				sweet_potato_cooked: {
					name: 'Cooked Sweet Potato',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_SMALL,
					perish: g.PERISH_FAST,
					sanity: 0,
					tags: {
						cooked: true,
						veggie: 1
					},
					games: [
						'sw'
					]
				},
				swordfish: {
					name: 'Swordfish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERFAST,
					cooked: 'fish_med_cooked',
					dried: 'meat_dried',
					tags: {
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				tallbird_egg: {
					name: 'Tallbird Egg',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					cooked: 'tallbird_egg_cooked',
					tags: {
						egg: 4
					}
				},
				tallbird_egg_cooked: {
					name: 'Fried Tallbird Egg',
					health: 0,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					tags: {
						egg: 4,
						cooked: true
					}
				},
				tigereye: {
					name: 'Eye of the Tiger Shark',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					sanity: -g.SANITY_MED,
					tags: {
						nocrockpot: true
					}
				},
				tropical_fish: {
					name: 'Tropical Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					cooked: 'fish_raw_small_cooked',
					dried: 'morsel_dried',
					tags: {
						nocrockpot: true
					},
					games: [
						'sw'
					]
				},
				trunk_summer: {
					name: 'Koalefant Trunk',
					health: g.HEALING_MEDLARGE,
					hunger: g.CALORIES_LARGE,
					sanity: 0,
					perish: g.PERISH_FAST,
					cooked: 'trunk_summer_cooked',
					tags: {
						nocrockpot: true,
					}
				},
				trunk_summer_cooked: {
					name: 'Koalefant Trunk Steak',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_HUGE,
					sanity: 0,
					perish: g.PERISH_SLOW,
					tags: {
						nocrockpot: true,
						cooked: true
					}
				},
				twigs: {
					name: 'Twigs',
					tags: {
						inedible: 1
					}
				},
				wormlight: {
					name: "Glow Berry",
					health: g.HEALING_MEDSMALL + g.HEALING_SMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_SMALL,
					tags: {
						nocrockpot: true
					}
				},
				watermelon: {
					name: 'Watermelon',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: g.SANITY_TINY,
					cooked: 'watermelon_cooked',
					tags: {
						fruit: 1
					},
					games: [
						'rog'
					]
				},
				watermelon_cooked: {
					name: 'Grilled Watermelon',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: g.SANITY_TINY * 1.5,
					tags: {
						fruit: 1,
						cooked: true
					},
					games: [
						'rog'
					]
				}
			};
		});
}());


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
				tags.uncookable	Can not be used in the crock pot
			*/

			return {
				butter: {
					name: "Butter",
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_SUPERSLOW,
					stack: g.STACK_SIZE_SMALLITEM,
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isveggie: true,
						decoration: 2
					}
				},
				deerclops_eyeball: {
					name: 'Deerclops Eyeball',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					sanity: -g.SANITY_MED,
					tags: {
						uncookable: true
					}
				},
				birchnut_cooked: {
					name: 'Roasted Birchnut',
					hunger: g.CALORIES_TINY,
					health: g.HEALING_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					tags: {
						uncookable: true,
						cooked: true
					}
				},
				bird_egg: {
					name: 'Egg',
					health: 0,
					hunger: g.CALORIES_TINY,
					sanity: 0,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					rot: 'rottenegg',
					cookable: {
						product: 'bird_egg_cooked'
					},
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						cooked: true,
						egg: 1
					}
				},
				bird_egg_rotten: {
					name: 'Rotten Egg',
					health: g.SPOILED_HEALTH,
					hunger: g.SPOILED_HUNGER,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				cactus_meat: {
					name: 'Cactus Flesh',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_SMALL,
					perish: g.PERISH_MED,
					sanity: -g.SANITY_TINY,
					cookable: {
						product: 'cactus_meat_cooked'
					},
					tags: {
						isveggie: true,
						veggie: 1,
						dlc: true
					}
				},
				cactus_meat_cooked: {
					name: 'Cooked Cactus Flesh',
					hunger: g.CALORIES_SMALL,
					health: g.HEALING_TINY,
					perish: g.PERISH_MED,
					sanity: g.SANITY_MED,
					tags: {
						isveggie: true,
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
						isveggie: true,
						veggie: 1
					}
				},
				eel: {
					name: "Eel",
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_SUPERFAST,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'eel_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
						meat: 0.5,
						fish: 1
					}
				},
				eel_cooked: {
					name: "Cooked Eel",
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						ismeat: true,
						cooked: true
					}
				},
				fish: {
					name: 'Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'fish_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
						fish: 1,
						meat: 0.5
					}
				},
				fish_cooked: {
					name: 'Cooked Fish',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						cooked: true,
						ismeat: true,
						meat: 0.5,
						fish: 1
					}
				},
				foliage: {
					name: "Foliage",
					health: g.HEALING_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				frog_legs: {
					name: 'Frog Legs',
					health: 0,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: -g.SANITY_SMALL,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'frog_legs_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
						meat: 0.5
					}
				},
				frog_legs_cooked: {
					name: 'Cooked Frog Legs',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						cooked: true,
						ismeat: true,
						meat: 0.5
					}
				},
				honey: {
					name: 'Honey',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_SUPERSLOW,
					stack: g.STACK_SIZE_SMALLITEM,
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
				lightbulb: {
					name: 'Light Bulb',
					health: g.HEALING_TINY,
					hunger: 0,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				mandrake: {
					name: 'Mandrake',
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'mandrake_cooked'
					},
					tags: {
						veggie: 1,
						magic: 1
					}
				},
				mandrake_cooked: {
					name: 'Cooked Mandrake',
					health: g.HEALING_SUPERHUGE,
					hunger: g.CALORIES_SUPERHUGE,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						cooked: true,
						uncookable: true,
						veggie: 1,
						magic: 1
					}
				},
				minotaurhorn: {
					name: "Guardian's Horn",
					health: g.HEALING_HUGE,
					hunger: g.CALORIES_HUGE,
					sanity: -g.SANITY_MED,
					tags: {
						uncookable: true,
						ismeat: true
					}
				},
				plant_meat: {
					name: 'Leafy Meat',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				plant_meat_cooked: {
					name: 'Cooked Leafy Meat',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MEDSMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						cooked: true,
						uncookable: true
					}
				},
				monster_meat: {
					name: 'Monster Meat',
					health: -g.HEALING_MED,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_MED,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'monster_meat_cooked'
					},
					dryable: {
						product: 'monster_meat_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
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
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						ismeat: true,
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
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						ismeat: true,
						meat: 1,
						monster: true,
						dried: 1
					}
				},
				meat: {
					name: 'Meat',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_MED,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'meat_cooked'
					},
					dryable: {
						product: 'meat_dried',
						time: g.DRY_MED
					},
					tags: {
						ismeat: true,
						meat: 1
					}
				},
				meat_cooked: {
					name: 'Cooked Meat',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					sanity: 0,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						ismeat: true,
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
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						ismeat: true,
						meat: 1,
						dried: true
					}
				},
				morsel: {
					name: 'Morsel',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'morsel_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
						meat: 0.5
					}
				},
				morsel_cooked: {
					name: 'Cooked Morsel',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						ismeat: true,
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						ismeat: true,
						meat: 0.5,
						dried: true
					}
				},
				drumstick: {
					name: 'Drumstick',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'drumstick_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_FAST
					},
					tags: {
						ismeat: true,
						ideal: true,
						meat: 0.5
					}
				},
				drumstick_cooked: {
					name: 'Fried Drumstick',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						ismeat: true,
						meat: 0.5,
						cooked: true
					}
				},
				batwing: {
					name: 'Batilisk Wing',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_SMALL,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'batwing_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.DRY_MED
					},
					tags: {
						ismeat: true,
						uncookable: true
					}
				},
				batwing_cooked: {
					name: 'Cooked Batilisk Wing',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					tags: {
						ismeat: true,
						uncookable: true,
						cooked: true
					}
				},
				red_mushroom: {
					name: 'Red Cap',
					health: -g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'red_mushroom_cooked'
					},
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				green_mushroom: {
					name: 'Green Cap',
					health: 0,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_HUGE,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'green_mushroom_cooked'
					},
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				blue_mushroom: {
					name: 'Blue Cap',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					sanity: -g.SANITY_MED,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'blue_mushroom_cooked'
					},
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
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				petals: {
					name: 'Petals',
					health: g.HEALING_TINY,
					hunger: 0,
					//sanity: -g.SANITY_TINY / 2,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				petals_evil: {
					name: 'Dark Petals',
					health: 0,
					hunger: 0,
					sanity: -g.SANITY_TINY,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				seeds: {
					name: 'Seeds',
					health: 0,
					hunger: g.CALORIES_TINY / 2,
					perish: g.PERISH_SUPERSLOW,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'seeds_cooked'
					},
					tags: {
						uncookable: true
					}
				},
				seeds_cooked: {
					name: 'Toasted Seeds',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_TINY / 2,
					perish: g.PERISH_MED,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true,
						cooked: true
					}
				},
				spoiled_food: {
					name: 'Rot',
					health: g.SPOILED_HEALTH,
					hunger: g.SPOILED_HUNGER,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						uncookable: true
					}
				},
				tallbird_egg: {
					name: 'Tallbird Egg',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					cookable: {
						product: 'tallbird_egg_cooked'
					},
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
				trunk_summer: {
					name: 'Koalefant Trunk',
					health: g.HEALING_MEDLARGE,
					hunger: g.CALORIES_LARGE,
					sanity: 0,
					perish: g.PERISH_FAST,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'trunk_summer_cooked'
					},
					tags: {
						uncookable: true,
						ismeat: true,
					}
				},
				trunk_summer_cooked: {
					name: 'Koalefant Trunk Steak',
					health: g.HEALING_LARGE,
					hunger: g.CALORIES_HUGE,
					sanity: 0,
					perish: g.PERISH_SLOW,
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						uncookable: true,
						ismeat: true,
						cooked: true
					}
				},
				twigs: {
					name: 'Twigs',
					tags: {
						inedible: 1
					}
				},
				cave_banana: {
					name: 'Cave Banana',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					sanity: 0,
					perish: g.PERISH_MED,
					cookable: {
						product: 'cave_banana_cooked'
					},
					tags: {
						isfruit: true,
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
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				carrot: {
					name: 'Carrot',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_MED,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'carrot_cooked'
					},
					tags: {
						isveggie: true,
						veggie: 1
					}
				},
				carrot_cooked: {
					name: 'Roasted Carrot',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				corn: {
					name: 'Corn',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'corn_cooked'
					},
					tags: {
						ideal: true,
						isveggie: true,
						veggie: 1
					}
				},
				corn_cooked: {
					name: 'Popcorn',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SLOW,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				pumpkin: {
					name: 'Pumpkin',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_MED,
					sanity: 0,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'pumpkin_cooked'
					},
					tags: {
						isveggie: true,
						veggie: 1
					}
				},
				pumpkin_cooked: {
					name: 'Hot Pumpkin',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_LARGE,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				eggplant: {
					name: 'Eggplant',
					health: g.HEALING_MEDSMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: 0,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'eggplant_cooked'
					},
					tags: {
						isveggie: true,
						veggie: 1
					}
				},
				eggplant_cooked: {
					name: 'Braised Eggplant',
					health: g.HEALING_MED,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				durian: {
					name: 'Durian',
					health: -g.HEALING_SMALL,
					hunger: g.CALORIES_MED,
					perish: g.PERISH_MED,
					sanity: -g.SANITY_TINY,
					stack: g.STACK_SIZE_MEDITEM,
					cookable: {
						product: 'durian_cooked'
					},
					tags: {
						isfruit: true,
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
					stack: g.STACK_SIZE_MEDITEM,
					tags: {
						isfruit: true,
						monster: 1,
						fruit: 1,
						cooked: true
					}
				},
				pomegranate: {
					name: 'Pomegranate',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'pomegranate_cooked'
					},
					tags: {
						isfruit: true,
						fruit: 1
					}
				},
				pomegranate_cooked: {
					name: 'Sliced Pomegranate',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				dragonfruit: {
					name: 'Dragon Fruit',
					health: g.HEALING_SMALL,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'dragonfruit_cooked'
					},
					tags: {
						isfruit: true,
						fruit: 1
					}
				},
				dragonfruit_cooked: {
					name: 'Prepared Dragon Fruit',
					health: g.HEALING_MED,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				berries: {
					name: 'Berries',
					health: 0,
					hunger: g.CALORIES_TINY,
					perish: g.PERISH_FAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					cookable: {
						product: 'berries_cooked'
					},
					tags: {
						isfruit: true,
						fruit: 0.5
					}
				},
				berries_cooked: {
					name: 'Roasted Berries',
					health: g.HEALING_TINY,
					hunger: g.CALORIES_SMALL,
					perish: g.PERISH_SUPERFAST,
					sanity: 0,
					stack: g.STACK_SIZE_SMALLITEM,
					tags: {
						isfruit: true,
						fruit: 0.5,
						cooked: true
					}
				},
				wormlight: {
					name: "Glow Berry",
					health: g.HEALING_MEDSMALL + g.HEALING_SMALL,
					hunger: g.CALORIES_MEDSMALL,
					sanity: -g.SANITY_SMALL,
					tags: {
						uncookable: true
					}
				}
			};
		});
}());

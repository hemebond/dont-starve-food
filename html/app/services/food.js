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
					health: g.healing_large,
					hunger: g.calories_med,
					perish: g.perish_superslow,
					stack: g.stack_size_smallitem,
					tags: {
						fat: 1,
						dairy: 1
					}
				},
				butterfly_wings: {
					name: "Butterfly Wings",
					health: g.healing_medsmall,
					hunger: g.calories_tiny,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						isveggie: true,
						decoration: 2
					}
				},
				deerclops_eyeball: {
					name: 'Deerclops Eyeball',
					health: g.healing_huge,
					hunger: g.calories_huge,
					sanity: -g.sanity_med,
					tags: {
						uncookable: true
					}
				},
				bird_egg: {
					name: 'Egg',
					health: 0,
					hunger: g.calories_tiny,
					sanity: 0,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
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
					hunger: g.calories_small,
					sanity: 0,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						cooked: true,
						egg: 1
					}
				},
				bird_egg_rotten: {
					name: 'Rotten Egg',
					health: g.spoiled_health,
					hunger: g.spoiled_hunger,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				cutlichen: {
					name: "Lichen",
					health: g.healing_small,
					hunger: g.calories_small,
					sanity: -g.sanity_tiny,
					perish: g.perish_two_day,
					tags: {
						isveggie: true,
						veggie: 1
					}
				},
				eel: {
					name: "Eel",
					health: g.healing_small,
					hunger: g.calories_tiny,
					perish: g.perish_superfast,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'eel_cooked',
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						meat: 0.5,
						fish: 1
					}
				},
				eel_cooked: {
					name: "Cooked Eel",
					health: g.healing_medsmall,
					hunger: g.calories_small,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						ismeat: true,
						cooked: true
					}
				},
				fish: {
					name: 'Fish',
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_superfast,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'fish_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						fish: 1,
						meat: 0.5
					}
				},
				fish_cooked: {
					name: 'Cooked Fish',
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						cooked: true,
						ismeat: true,
						meat: 0.5,
						fish: 1
					}
				},
				foliage: {
					name: "Foliage",
					health: g.healing_tiny,
					hunger: 0,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				frog_legs: {
					name: 'Frog Legs',
					health: 0,
					hunger: g.calories_small,
					perish: g.perish_fast,
					sanity: -g.sanity_small,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'frog_legs_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						meat: 0.5
					}
				},
				frog_legs_cooked: {
					name: 'Cooked Frog Legs',
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_med,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						cooked: true,
						ismeat: true,
						meat: 0.5
					}
				},
				honey: {
					name: 'Honey',
					health: g.healing_small,
					hunger: g.calories_tiny,
					perish: g.perish_superslow,
					stack: g.stack_size_smallitem,
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
					health: g.healing_tiny,
					hunger: 0,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				mandrake: {
					name: 'Mandrake',
					health: g.healing_huge,
					hunger: g.calories_huge,
					stack: g.stack_size_smallitem,
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
					health: g.healing_superhuge,
					hunger: g.calories_superhuge,
					stack: g.stack_size_smallitem,
					tags: {
						cooked: true,
						uncookable: true,
						veggie: 1,
						magic: 1
					}
				},
				minotaurhorn: {
					name: "Guardian's Horn",
					health: g.healing_huge,
					hunger: g.calories_huge,
					sanity: -g.sanity_med,
					tags: {
						uncookable: true,
						ismeat: true
					}
				},
				plant_meat: {
					name: 'Leafy Meat',
					health: 0,
					hunger: g.calories_small,
					sanity: -g.sanity_small,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				plant_meat_cooked: {
					name: 'Cooked Leafy Meat',
					health: g.healing_tiny,
					hunger: g.calories_medsmall,
					sanity: 0,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						cooked: true,
						uncookable: true
					}
				},
				monster_meat: {
					name: 'Monster Meat',
					health: -g.healing_med,
					hunger: g.calories_medsmall,
					sanity: -g.sanity_med,
					perish: g.perish_fast,
					stack: g.stack_size_meditem,
					cookable: {
						product: 'monster_meat_cooked'
					},
					dryable: {
						product: 'monster_meat_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						meat: 1,
						monster: true
					}
				},
				monster_meat_cooked: {
					name: 'Cooked Monster Meat',
					health: -g.healing_small,
					hunger: g.calories_medsmall,
					sanity: -g.sanity_small,
					perish: g.perish_slow,
					stack: g.stack_size_meditem,
					tags: {
						ismeat: true,
						meat: 1,
						monster: true,
						cooked: true
					}
				},
				monster_meat_dried: {
					name: 'Monster Jerky',
					health: -g.healing_small,
					hunger: g.calories_medsmall,
					sanity: -g.sanity_tiny,
					perish: g.perish_preserved,
					stack: g.stack_size_meditem,
					tags: {
						ismeat: true,
						meat: 1,
						monster: true,
						dried: 1
					}
				},
				meat: {
					name: 'Meat',
					health: g.healing_tiny,
					hunger: g.calories_med,
					sanity: -g.sanity_small,
					perish: g.perish_fast,
					stack: g.stack_size_meditem,
					cookable: {
						product: 'meat_cooked'
					},
					dryable: {
						product: 'meat_dried',
						time: g.dry_med
					},
					tags: {
						ismeat: true,
						meat: 1
					}
				},
				meat_cooked: {
					name: 'Cooked Meat',
					health: g.healing_small,
					hunger: g.calories_med,
					sanity: 0,
					perish: g.perish_med,
					stack: g.stack_size_meditem,
					tags: {
						ismeat: true,
						meat: 1,
						cooked: true
					}
				},
				meat_dried: {
					name: 'Jerky',
					health: g.healing_med,
					hunger: g.calories_med,
					sanity: g.sanity_med,
					perish: g.perish_preserved,
					stack: g.stack_size_meditem,
					tags: {
						ismeat: true,
						meat: 1,
						dried: true
					}
				},
				morsel: {
					name: 'Morsel',
					health: 0,
					hunger: g.calories_small,
					sanity: -g.sanity_small,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'morsel_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						meat: 0.5
					}
				},
				morsel_cooked: {
					name: 'Cooked Morsel',
					health: g.healing_tiny,
					hunger: g.calories_small,
					sanity: 0,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						ismeat: true,
						meat: 0.5,
						cooked: true
					}
				},
				morsel_dried: {
					name: 'Small Jerky',
					health: g.healing_medsmall,
					hunger: g.calories_small,
					sanity: g.sanity_small,
					perish: g.perish_preserved,
					stack: g.stack_size_smallitem,
					tags: {
						ismeat: true,
						meat: 0.5,
						dried: true
					}
				},
				drumstick: {
					name: 'Drumstick',
					health: 0,
					hunger: g.calories_small,
					sanity: -g.sanity_small,
					perish: g.perish_fast,
					stack: g.stack_size_meditem,
					cookable: {
						product: 'drumstick_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_fast
					},
					tags: {
						ismeat: true,
						ideal: true,
						meat: 0.5
					}
				},
				drumstick_cooked: {
					name: 'Fried Drumstick',
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_med,
					stack: g.stack_size_meditem,
					tags: {
						ismeat: true,
						meat: 0.5,
						cooked: true
					}
				},
				batwing: {
					name: 'Batilisk Wing',
					health: g.healing_small,
					hunger: g.calories_small,
					sanity: -g.sanity_small,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'batwing_cooked'
					},
					dryable: {
						product: 'morsel_dried',
						time: g.dry_med
					},
					tags: {
						ismeat: true,
						uncookable: true
					}
				},
				batwing_cooked: {
					name: 'Cooked Batilisk Wing',
					health: g.healing_medsmall,
					hunger: g.calories_medsmall,
					sanity: 0,
					perish: g.perish_med,
					tags: {
						ismeat: true,
						uncookable: true,
						cooked: true
					}
				},
				red_mushroom: {
					name: 'Red Cap',
					health: -g.healing_med,
					hunger: g.calories_small,
					sanity: 0,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
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
					health: g.healing_tiny,
					hunger: 0,
					sanity: -g.sanity_small,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				green_mushroom: {
					name: 'Green Cap',
					health: 0,
					hunger: g.calories_small,
					sanity: -g.sanity_huge,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
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
					health: -g.healing_tiny,
					hunger: 0,
					sanity: g.sanity_med,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				blue_mushroom: {
					name: 'Blue Cap',
					health: g.healing_med,
					hunger: g.calories_small,
					sanity: -g.sanity_med,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
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
					health: -g.healing_small,
					hunger: 0,
					sanity: g.sanity_small,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						veggie: 0.5,
						cooked: true
					}
				},
				petals: {
					name: 'Petals',
					health: g.healing_tiny,
					hunger: 0,
					sanity: -g.sanity_tiny / 2,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				petals_evil: {
					name: 'Dark Petals',
					health: 0,
					hunger: 0,
					sanity: -g.sanity_tiny,
					perish: g.perish_fast,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				seeds: {
					name: 'Seeds',
					health: 0,
					hunger: g.calories_tiny / 2,
					perish: g.perish_superslow,
					stack: g.stack_size_smallitem,
					cookable: {
						product: 'seeds_cooked'
					},
					tags: {
						uncookable: true
					}
				},
				seeds_cooked: {
					name: 'Toasted Seeds',
					health: g.healing_tiny,
					hunger: g.calories_tiny / 2,
					perish: g.perish_med,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true,
						cooked: true
					}
				},
				spoiled_food: {
					name: 'Rot',
					health: g.spoiled_health,
					hunger: g.spoiled_hunger,
					stack: g.stack_size_smallitem,
					tags: {
						uncookable: true
					}
				},
				tallbird_egg: {
					name: 'Tallbird Egg',
					health: g.healing_small,
					hunger: g.calories_med,
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
					hunger: g.calories_large,
					perish: g.perish_fast,
					tags: {
						egg: 4,
						cooked: true
					}
				},
				trunk_summer: {
					name: 'Koalefant Trunk',
					health: g.healing_medlarge,
					hunger: g.calories_large,
					sanity: 0,
					perish: g.perish_fast,
					stack: g.stack_size_meditem,
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
					health: g.healing_large,
					hunger: g.calories_huge,
					sanity: 0,
					perish: g.perish_slow,
					stack: g.stack_size_meditem,
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
					health: g.healing_tiny,
					hunger: g.calories_small,
					sanity: 0,
					perish: g.perish_med,
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
					health: g.healing_small,
					hunger: g.calories_small,
					sanity: 0,
					perish: g.perish_fast,
					tags: {
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				carrot: {
					name: 'Carrot',
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_med,
					sanity: 0,
					stack: g.stack_size_smallitem,
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
					health: g.healing_small,
					hunger: g.calories_small,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				corn: {
					name: 'Corn',
					health: g.healing_small,
					hunger: g.calories_med,
					perish: g.perish_med,
					sanity: 0,
					stack: g.stack_size_smallitem,
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
					health: g.healing_small,
					hunger: g.calories_small,
					perish: g.perish_slow,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				pumpkin: {
					name: 'Pumpkin',
					health: g.healing_small,
					hunger: g.calories_large,
					perish: g.perish_med,
					sanity: 0,
					stack: g.stack_size_meditem,
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
					health: g.healing_medsmall,
					hunger: g.calories_large,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_meditem,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				eggplant: {
					name: 'Eggplant',
					health: g.healing_medsmall,
					hunger: g.calories_med,
					perish: g.perish_med,
					sanity: 0,
					stack: g.stack_size_meditem,
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
					health: g.healing_med,
					hunger: g.calories_med,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_meditem,
					tags: {
						isveggie: true,
						veggie: 1,
						cooked: true
					}
				},
				durian: {
					name: 'Durian',
					health: -g.healing_small,
					hunger: g.calories_med,
					perish: g.perish_med,
					sanity: -g.sanity_tiny,
					stack: g.stack_size_meditem,
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
					hunger: g.calories_med,
					perish: g.perish_fast,
					sanity: -g.sanity_tiny,
					stack: g.stack_size_meditem,
					tags: {
						isfruit: true,
						monster: 1,
						fruit: 1,
						cooked: true
					}
				},
				pomegranate: {
					name: 'Pomegranate',
					health: g.healing_small,
					hunger: g.calories_tiny,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_smallitem,
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
					health: g.healing_med,
					hunger: g.calories_small,
					perish: g.perish_superfast,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				dragonfruit: {
					name: 'Dragon Fruit',
					health: g.healing_small,
					hunger: g.calories_tiny,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_smallitem,
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
					health: g.healing_med,
					hunger: g.calories_small,
					perish: g.perish_superfast,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						isfruit: true,
						fruit: 1,
						cooked: true
					}
				},
				berries: {
					name: 'Berries',
					health: 0,
					hunger: g.calories_tiny,
					perish: g.perish_fast,
					sanity: 0,
					stack: g.stack_size_smallitem,
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
					health: g.healing_tiny,
					hunger: g.calories_small,
					perish: g.perish_superfast,
					sanity: 0,
					stack: g.stack_size_smallitem,
					tags: {
						isfruit: true,
						fruit: 0.5,
						cooked: true
					}
				},
				wormlight: {
					name: "Glow Berry",
					health: g.healing_medsmall + g.healing_small,
					hunger: g.calories_medsmall,
					sanity: -g.sanity_small,
					tags: {
						uncookable: true
					}
				}
			};
		});
}());

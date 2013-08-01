angular.module('pot.services')
	.service('food', function(gameVariables) {
		var g = gameVariables;

		return [
			{
				id: 'butter',
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
			{
				id: 'butterfly_wings',
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
			{
				id: 'deerclops_eyeball',
				name: 'Deerclops Eyeball',
				health: g.healing_huge,
				hunger: g.calories_huge,
				sanity: -g.sanity_med,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'bird_egg',
				name: 'Egg',
				health: 0,
				hunger: g.calories_tiny,
				sanity: 0,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				rot: 'rottenegg',
				tags: {
					egg: 1
				}
			},
			{
				id: 'bird_egg_cooked',
				name: 'Cooked Egg',
				precook: 1,
				health: 0,
				hunger: g.calories_small,
				sanity: 0,
				perish: g.perish_fast,
				stack: g.stack_size_smallitem,
				tags: {
					egg: 1
				}
			},
			{
				id: 'bird_egg_rotten',
				name: 'Rotten Egg',
				health: g.spoiled_health,
				hunger: g.spoiled_hunger,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'fish',
				name: 'Fish',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_superfast,
				stack: g.stack_size_smallitem,
				cookable: {
					product: 'fish_cooked'
				},
				dryable: {
					product: 'smallmeat_dried',
					time: g.dry_fast
				},
				tags: {
					ismeat: true,
					fish: 1,
					meat: 0.5
				}
			},
			{
				id: 'fish_cooked',
				name: 'Cooked Fish',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_fast,
				stack: g.stack_size_smallitem,
				tags: {
					ismeat: true,
					meat: 0.5,
					fish: 1,
					precook: true
				}
			},
			{
				id: 'frog_legs',
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
					product: 'smallmeat_dried',
					time: g.dry_fast
				},
				tags: {
					ismeat: true,
					meat: 0.5
				}
			},
			{
				id: 'frog_legs_cooked',
				name: 'Cooked Frog Legs',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_med,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					ismeat: true,
					meat: 0.5,
					precook: true
				}
			},
			{
				id: 'flower_hat',
				name: 'Garland',
				health: g.healing_small,
				hunger: 0,
				sanity: g.sanity_small,
				perish: g.perish_fast,
				stack: 1,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'hambat',
				name: 'Ham Bat',
				health: -g.healing_medsmall,
				hunger: g.calories_med,
				sanity: -g.sanity_med,
				perish: g.perish_med,
				stack: 1,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'honey',
				name: 'Honey',
				health: g.healing_small,
				hunger: g.calories_tiny,
				perish: g.perish_superslow,
				stack: g.stack_size_smallitem,
				tags: {
					sweetener: true
				}
			},
			{
				id: 'honeycomb',
				name: 'Honeycomb',
				tags: {
					sweetener: true
				}
			},
			{
				id: 'lightbulb',
				name: 'Light Bulb',
				health: g.healing_tiny,
				hunger: 0,
				perish: g.perish_fast,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'mandrake',
				name: 'Mandrake',
				health: g.healing_huge,
				hunger: g.calories_huge,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 1,
					magic: 1
				}
			},
			{
				id: 'mandrake_cooked',
				name: 'Cooked Mandrake',
				health: g.healing_superhuge,
				hunger: g.calories_superhuge,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true,
					veggie: 1,
					magic: 1,
					precook: 1
				}
			},
			{
				id: 'plant_meat',
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
			{
				id: 'plant_meat_cooked',
				name: 'Cooked Leafy Meat',
				health: g.healing_tiny,
				hunger: g.calories_medsmall,
				sanity: 0,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'monster_meat',
				name: 'Monster Meat',
				health: -g.healing_med,
				hunger: g.calories_medsmall,
				sanity: -g.sanity_med,
				perish: g.perish_fast,
				stack: g.stack_size_meditem,
				dry: 'monstermeat_dried',
				drytime: g.dry_fast,
				tags: {
					ismeat: true,
					meat: 1,
					monster: true
				}
			},
			{
				id: 'monster_meat_cooked',
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
					precook: 1
				}
			},
			{
				id: 'monster_meat_dried',
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
			{
				id: 'meat',
				name: 'Meat',
				health: g.healing_tiny,
				hunger: g.calories_med,
				sanity: -g.sanity_small,
				perish: g.perish_fast,
				stack: g.stack_size_meditem,
				dry: 'meat_dried',
				drytime: g.dry_med,
				tags: {
					ismeat: true,
					meat: 1
				}
			},
			{
				id: 'meat_cooked',
				name: 'Cooked Meat',
				health: g.healing_small,
				hunger: g.calories_med,
				sanity: 0,
				perish: g.perish_med,
				stack: g.stack_size_meditem,
				tags: {
					ismeat: true,
					meat: 1,
					precook: 1
				}
			},
			{
				id: 'meat_dried',
				name: 'Jerky',
				health: g.healing_med,
				hunger: g.calories_med,
				sanity: g.sanity_med,
				perish: g.perish_preserved,
				stack: g.stack_size_meditem,
				tags: {
					ismeat: true,
					meat: 1,
					dried: 1
				}
			},
			{
				id: 'morsel',
				name: 'Morsel',
				health: 0,
				hunger: g.calories_small,
				sanity: -g.sanity_small,
				perish: g.perish_fast,
				stack: g.stack_size_smallitem,
				drytime: g.dry_fast,
				dry: 'smallmeat_dried',
				tags: {
					ismeat: true,
					meat: 0.5
				}
			},
			{
				id: 'morsel_cooked',
				name: 'Cooked Morsel',
				health: g.healing_tiny,
				hunger: g.calories_small,
				sanity: 0,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					ismeat: true,
					meat: 0.5,
					precook: 1
				}
			},
			{
				id: 'morsel_dried',
				name: 'Small Jerky',
				health: g.healing_medsmall,
				hunger: g.calories_small,
				sanity: g.sanity_small,
				perish: g.perish_preserved,
				stack: g.stack_size_smallitem,
				tags: {
					ismeat: true,
					meat: 0.5,
					dried: 1
				}
			},
			{
				id: 'drumstick',
				name: 'Drumstick',
				health: 0,
				hunger: g.calories_small,
				sanity: -g.sanity_small,
				perish: g.perish_fast,
				stack: g.stack_size_meditem,
				drytime: g.dry_fast,
				dry: 'smallmeat_dried',
				tags: {
					ismeat: true,
					ideal: true,
					meat: 0.5
				}
			},
			{
				id: 'drumstick_cooked',
				name: 'Fried Drumstick',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_med,
				stack: g.stack_size_meditem,
				tags: {
					ismeat: true,
					meat: 0.5,
					precook: 1
				}
			},
			{
				id: 'batwing',
				name: 'Batilisk Wing',
				health: g.healing_small,
				hunger: g.calories_small,
				sanity: -g.sanity_small,
				perish: g.perish_fast,
				stack: g.stack_size_smallitem,
				drytime: g.dry_med,
				dry: 'smallmeat_dried',
				tags: {
					ismeat: true,
					uncookable: true
				}
			},
			{
				id: 'batwing_cooked',
				name: 'Cooked Batilisk Wing',
				health: g.healing_medsmall,
				hunger: g.calories_medsmall,
				sanity: 0,
				perish: g.perish_med,
				tags: {
					ismeat: true,
					uncookable: true
				}
			},
			{
				id: 'red_mushroom',
				name: 'Red Cap',
				health: -g.healing_med,
				hunger: g.calories_small,
				sanity: 0,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5,
					ideal: true
				}
			},
			{
				id: 'red_mushroom_cooked',
				name: 'Cooked Red Cap',
				health: g.healing_tiny,
				hunger: 0,
				sanity: -g.sanity_small,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5
				}
			},
			{
				id: 'green_mushroom',
				name: 'Green Cap',
				health: 0,
				hunger: g.calories_small,
				sanity: -g.sanity_huge,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5,
					ideal: true
				}
			},
			{
				id: 'green_mushroom_cooked',
				name: 'Cooked Green Cap',
				health: -g.healing_tiny,
				hunger: 0,
				sanity: g.sanity_med,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5
				}
			},
			{
				id: 'blue_mushroom',
				name: 'Blue Cap',
				health: g.healing_med,
				hunger: g.calories_small,
				sanity: -g.sanity_med,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5,
					ideal: true
				}
			},
			{
				id: 'blue_mushroom_cooked',
				name: 'Cooked Blue Cap',
				health: -g.healing_small,
				hunger: 0,
				sanity: g.sanity_small,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					veggie: 0.5
				}
			},
			{
				id: 'petals',
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
			{
				id: 'petals_evil',
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
			{
				id: 'seeds',
				name: 'Seeds',
				health: 0,
				hunger: g.calories_tiny / 2,
				perish: g.perish_superslow,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'seeds_cooked',
				name: 'Toasted Seeds',
				health: g.healing_tiny,
				hunger: g.calories_tiny / 2,
				perish: g.perish_med,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'spoiled_food',
				name: 'Rot',
				health: g.spoiled_health,
				hunger: g.spoiled_hunger,
				stack: g.stack_size_smallitem,
				tags: {
					uncookable: true
				}
			},
			{
				id: 'tallbird_egg',
				name: 'Tallbird Egg',
				health: g.healing_small,
				hunger: g.calories_med,
				tags: {
					egg: 4
				}
			},
			{
				id: 'tallbird_egg_cooked',
				name: 'Fried Tallbird Egg',
				health: 0,
				hunger: g.calories_large,
				perish: g.perish_fast,
				tags: {
					egg: 4,
					precook: 1
				}
			},
			{
				id: 'trunk_summer',
				name: 'Koalefant Trunk',
				health: g.healing_medlarge,
				hunger: g.calories_large,
				sanity: 0,
				perish: g.perish_fast,
				stack: g.stack_size_meditem,
				tags: {
					uncookable: true,
					ismeat: true
				}
			},
			{
				id: 'trunk_summer_cooked',
				name: 'Koalefant Trunk Steak',
				health: g.healing_large,
				hunger: g.calories_huge,
				sanity: 0,
				perish: g.perish_slow,
				stack: g.stack_size_meditem,
				tags: {
					uncookable: true,
					ismeat: true
				}
			},
			{
				id: 'twigs',
				name: 'Twigs',
				tags: {
					inedible: 1
				}
			},
			{
				id: 'cave_banana',
				name: 'Cave Banana',
				health: g.healing_tiny,
				hunger: g.calories_small,
				sanity: 0,
				perish: g.perish_med,
				tags: {
					isfruit: true,
					fruit: 1
				}
			},
			{
				id: 'cave_banana_cooked',
				name: 'Cooked Banana',
				health: g.healing_small,
				hunger: g.calories_small,
				sanity: 0,
				perish: g.perish_fast,
				tags: {
					isfruit: true,
					fruit: 1,
					precook: 1
				}
			},
			{
				id: 'carrot',
				name: 'Carrot',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_med,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isveggie: true,
					veggie: 1
				}
			},
			{
				id: 'carrot_cooked',
				name: 'Roasted Carrot',
				health: g.healing_small,
				hunger: g.calories_small,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isveggie: true,
					veggie: 1,
					precook: 1
				}
			},
			{
				id: 'corn',
				name: 'Corn',
				health: g.healing_small,
				hunger: g.calories_med,
				perish: g.perish_med,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					ideal: true,
					isveggie: true,
					veggie: 1
				}
			},
			{
				id: 'corn_cooked',
				name: 'Popcorn',
				health: g.healing_small,
				hunger: g.calories_small,
				perish: g.perish_slow,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isveggie: true,
					veggie: 1,
					precook: 1
				}
			},
			{
				id: 'pumpkin',
				name: 'Pumpkin',
				health: g.healing_small,
				hunger: g.calories_large,
				perish: g.perish_med,
				sanity: 0,
				stack: g.stack_size_meditem,
				tags: {
					isveggie: true,
					veggie: 1
				}
			},
			{
				id: 'pumpkin_cooked',
				name: 'Hot Pumpkin',
				health: g.healing_medsmall,
				hunger: g.calories_large,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_meditem,
				tags: {
					isveggie: true,
					veggie: 1,
					precook: 1
				}
			},
			{
				id: 'eggplant',
				name: 'Eggplant',
				health: g.healing_medsmall,
				hunger: g.calories_med,
				perish: g.perish_med,
				sanity: 0,
				stack: g.stack_size_meditem,
				tags: {
					isveggie: true,
					veggie: 1
				}
			},
			{
				id: 'eggplant_cooked',
				name: 'Braised Eggplant',
				health: g.healing_med,
				hunger: g.calories_med,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_meditem,
				tags: {
					isveggie: true,
					veggie: 1,
					precook: 1
				}
			},
			{
				id: 'durian',
				name: 'Durian',
				health: -g.healing_small,
				hunger: g.calories_med,
				perish: g.perish_med,
				sanity: -g.sanity_tiny,
				stack: g.stack_size_meditem,
				tags: {
					isfruit: true,
					monster: 1,
					fruit: 1
				}
			},
			{
				id: 'durian_cooked',
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
					precook: 1
				}
			},
			{
				id: 'pomegranate',
				name: 'Pomegranate',
				health: g.healing_small,
				hunger: g.calories_tiny,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 1
				}
			},
			{
				id: 'pomegranate_cooked',
				name: 'Sliced Pomegranate',
				health: g.healing_med,
				hunger: g.calories_small,
				perish: g.perish_superfast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 1,
					precook: 1
				}
			},
			{
				id: 'dragonfruit',
				name: 'Dragon Fruit',
				health: g.healing_small,
				hunger: g.calories_tiny,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 1
				}
			},
			{
				id: 'dragonfruit_cooked',
				name: 'Prepared Dragon Fruit',
				health: g.healing_med,
				hunger: g.calories_small,
				perish: g.perish_superfast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 1,
					precook: 1
				}
			},
			{
				id: 'berries',
				name: 'Berries',
				health: 0,
				hunger: g.calories_tiny,
				perish: g.perish_fast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 0.5
				}
			},
			{
				id: 'berries_cooked',
				name: 'Roasted Berries',
				health: g.healing_tiny,
				hunger: g.calories_small,
				perish: g.perish_superfast,
				sanity: 0,
				stack: g.stack_size_smallitem,
				tags: {
					isfruit: true,
					fruit: 0.5,
					precook: 1
				}
			}
		];
	});
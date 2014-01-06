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

	angular.module('pot.services', [])
		.service('gameVariables', function() {
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

			this.perish_one_day = 1 * this.total_day_time * this.perish_warp;
			this.perish_two_day = 2 * this.total_day_time * this.perish_warp;
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
		});
}());

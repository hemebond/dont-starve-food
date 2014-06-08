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
			this.SEG_TIME = 30;
			this.DAY_SEGS = 10;
			this.DUSK_SEGS = 4;
			this.NIGHT_SEGS = 2;
			this.TOTAL_DAY_TIME = this.SEG_TIME * 16;
			//this.SEG_TIME = this.TOTAL_DAY_TIME / 16;
			this.DAY_TIME = this.SEG_TIME * this.DAY_SEGS;
			this.DUSK_TIME = this.SEG_TIME * this.DUSK_SEGS;
			this.NIGHT_TIME = this.SEG_TIME * this.NIGHT_SEGS;
			this.BASE_COOK_TIME = this.NIGHT_TIME * 0.3333;

			// Stacks
			this.STACK_SIZE_LARGEITEM = 10;
			this.STACK_SIZE_MEDITEM = 20;
			this.STACK_SIZE_SMALLITEM = 40;

			// Healing
			this.HEALING_TINY = 1;
			this.HEALING_SMALL = 3;
			this.HEALING_MEDSMALL = 8;
			this.HEALING_MED = 20;
			this.HEALING_MEDLARGE = 30;
			this.HEALING_LARGE = 40;
			this.HEALING_HUGE = 60;
			this.HEALING_SUPERHUGE = 100;

			// Sanity
			this.SANITY_SUPERTINY = 1;
			this.SANITY_TINY = 5;
			this.SANITY_SMALL = 10;
			this.SANITY_MED = 15;
			this.SANITY_MEDLARGE = 20;
			this.SANITY_LARGE = 33;
			this.SANITY_HUGE = 50;

			// Perish
			this.PERISH_WARP = 1;
			this.PERISH_FRIDGE_MULT = 0.5;
			this.PERISH_WINTER_MULT = 0.75;
			this.PERISH_GLOBAL_MULT = 1;
			this.PERISH_SUMMER_MULT = 1.25;
			this.PERISH_GROUND_MULT = 1.5;

			this.PERISH_ONE_DAY = 1 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_TWO_DAY = 2 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_SUPERFAST = 3 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_FAST = 6 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_MED = 10 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_SLOW = 15 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_PRESERVED = 20 * this.TOTAL_DAY_TIME * this.PERISH_WARP;
			this.PERISH_SUPERSLOW = 40 * this.TOTAL_DAY_TIME * this.PERISH_WARP;

			// Drying
			this.DRY_FAST = this.TOTAL_DAY_TIME;
			this.DRY_MED = 2 * this.TOTAL_DAY_TIME;

			// Hunger
			this.CALORIES_PER_DAY = 75;

			this.CALORIES_TINY = this.CALORIES_PER_DAY / 8; // berries
			this.CALORIES_SMALL = this.CALORIES_PER_DAY / 6; // veggies
			this.CALORIES_MEDSMALL = this.CALORIES_PER_DAY / 4;
			this.CALORIES_MED = this.CALORIES_PER_DAY / 3; // meat
			this.CALORIES_LARGE = this.CALORIES_PER_DAY / 2; // cooked meat
			this.CALORIES_HUGE = this.CALORIES_PER_DAY; // crockpot foods?
			this.CALORIES_SUPERHUGE = this.CALORIES_PER_DAY * 2; // crockpot foods?

			// Temperature
			this.HOT_FOOD_BONUS_TEMP = 40;
			this.COLD_FOOD_BONUS_TEMP = -40;
			this.FOOD_TEMP_BRIEF = 5;
			this.FOOD_TEMP_AVERAGE = 10;
			this.FOOD_TEMP_LONG = 15;

			// Stale and spoiled
			this.SPOILED_HEALTH = -1;
			this.SPOILED_HUNGER = -10;

			this.STALE_FOOD_HUNGER = 0.667;
			this.SPOILED_FOOD_HUNGER = 0.5;

			this.STALE_FOOD_HEALTH = 0.333;
			this.SPOILED_FOOD_HEALTH = 0;
		});
}());

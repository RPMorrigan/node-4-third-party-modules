/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

import moment from 'moment';

let year = process.argv[2];

console.log(moment(year).isLeapYear());
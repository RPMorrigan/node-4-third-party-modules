/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

import horoscope from 'horoscope';

let userMonth = Number(process.argv[2]);
let userDay = Number(process.argv[3]);
// let userYear = Number(process.argv[4])

console.log(userDay, userMonth);

console.log(horoscope.getSign({ Month: userMonth, Day: userDay }));
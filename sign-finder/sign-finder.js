/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

import horoscope from 'horoscope';

let horoMode = process.argv[2]

function hMode() {
    if (!horoMode) {
        return console.log('Please select a valid mode. i.e. [horoscope or zodiac');
    }

    if (horoMode === 'horoscope') {
        return tropical();
    }

    if (horoMode === 'zodiac') {
        return chiZodiac();
    }
}

function tropical() {

    let userMonth = Number(process.argv[3]);
    let userDay = Number(process.argv[4]);

    try {
        if (!userDay || userMonth) {
        return console.log('Invalid month and day. Try again!');
    }

    if (userDay && userMonth) {
        console.log(horoscope.getSign({ month: userMonth, day: userDay }));
        }
    } catch (error) {
        console.log(error);
    }
};

function chiZodiac() {

    let userYear = Number(process.argv[3]);

    try {
        if (!userYear) {
            return console.log('Invalid Year. Try again!')
        }

        if (userYear) {
            return console.log(horoscope.getZodiac(userYear));
        }
    } catch (error) {
        console.log(error);
    }
}

userHoroscope();
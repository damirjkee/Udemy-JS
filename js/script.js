"use strict";

// const number0fFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
    
// let retry = 0;

// while (retry < 2) {
//     retry++;

//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
    

//     if (a != null && b != null && a != ''&& b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies [a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console('Произошла ошибка');
// }

// console.log(personalMovieDB);

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello world');
console.log(num);

// function calc (a, b){
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello world');
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
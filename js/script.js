"use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
    
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
                  
//             if (a != null && b != null && a != ''&& b != '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies [a] = b;
//                 console.log('Done');
//             } else {
//                 console.log('Error');
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hiddan) {
//         if (!hiddan) {
//         console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if(personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
    
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


// [ ] + false - null + true
// console.log([] + false - null + true); //NaN

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2); //12

// alert('1'[0]);

// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи &&
// ИЛИ запинается на правде ||  

// console.log(!!(1 &&  2) == (1 && 2));

// alert(null || 2 && 3 || 4);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);

// alert(+'Infinity');

// console.log('Ёжик' > 'яблоко');

console.log(0 || '' || 2 || undefined || true || false);
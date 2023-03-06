'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films are you watch?', 1);

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films are you watch?', 1);
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

function rememberMyFilms() {
  for (let i = 0; i < personalMovieDB.count; i++) {
    const lastFilm = prompt('What was the last movie you watched?', '');
    const ratingFilm = prompt('Rating of this movie?', '');

    if (lastFilm !== null && ratingFilm !== null && lastFilm !== '' && ratingFilm !== '' && lastFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = ratingFilm;
    } else {
      i--;
    }
  }
}

rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(personalMovieDB) {
  personalMovieDB.private === false ? console.log(personalMovieDB) : null;
}

showMyDB(personalMovieDB);


function writeYourGenres() {
  let i = 1;

  while (i <= 3) {

    const YourFavoriteGanre = prompt(`What is your favorite ganres ${i}?`, '');

    if (YourFavoriteGanre !== null && YourFavoriteGanre !== '') {
      personalMovieDB.genres[i - 1] = YourFavoriteGanre;
    }

    i++;
  }
}

writeYourGenres();


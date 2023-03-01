'use strict';

const numberOfFilms = prompt('How much films are you watch?', null);

const personalMovieDB = {
  coutn: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const questionOne = prompt('Your last film?', null);
const questionTwo = prompt('Rating?', null);
const questionThree = prompt('Your last film?', null);
const questionFour = prompt('Rating?', null);

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

// const ProfilesResult = profiles
//           .filter(profiles =>  profiles.userID >= 1)
//           .map(profiles => `${profiles.userID}`);

// profiles
const profileID = profiles.map(profile => users[profile.userID]);
const favoriteMovieID = profiles.filter(movie => movie.favoriteMovieID >= 4).map(movie => movie.favoriteMovieID);
const unFavoriteMovieID = profiles.filter(movie => movie.favoriteMovieID <= 4).map(movie => movie.favoriteMovieID);
console.log(profileID);
console.log(unFavoriteMovieID);
console.log(favoriteMovieID);

// users
const userID = profiles.map(profile => users[profile.userID])
console.log(userID);

const userName = profiles.map(users => users[users.name])
console.log(userName);


// const UsersResults = users
//           .filter(users => users.id >=1)
//           .map(users => `${users.name}`)

// const MoviesResult = movies.map(movies => `${movies.name}`);

// console.log(ProfilesResult);
// console.log(UsersResults);
// console.log(MoviesResult);


// const users = {
//   1: {
//     id: 0101,
//     name: 'Laura Nizam',
//     userName: 'laura'
//   },
//   2: {
//     id: 0102,
//     name: 'Maya Lee',
//     userName: 'maya'
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          
          <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> ReactND - Coding Practice</h1>
        </header>
        <h1 className="app-tittle">Favorite Movies</h1>

      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import Products from './Products';
import React from 'react';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
  }


function App() {

  const user = {
    firstName:'Donovan',
    lastName:'Lemos',
    imageUrl:'https://picsum.photos/200/300'
};

  return (
    <div>
      <h1>
        Hello, {formatName(user)}
        <br />
        <img src={user.imageUrl}></img>
        <Products />
      </h1>
    </div>
  );
};

export default App;

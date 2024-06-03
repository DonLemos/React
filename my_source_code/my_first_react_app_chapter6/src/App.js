import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
import { Button } from 'react-bootstrap';
import Rating from './Rating';


class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.LastName;
  }
  render() {
    const isValid = false;
    const user = {
      firstName: "Donovan",
      LastName: "Lemos"
    };
    return <UserForm/>;
    
    (
      <div>
        {/* <h1>Hello, {this.formatName(user)}</h1>
        <Products />
        <Button>Default</Button>
        <Button variant='danger'>Default</Button>
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" /> */}
      </div>
    );
  }
}

export default App;

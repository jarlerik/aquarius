import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar/NavBar';
import ContentContainer from './ContentContainer';

const appContent = [
  {id: 'home', content: 'Home page content'},
  {is: 'about', content: 'About page content'}
];

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar appContent={appContent}/>
          <ContentContainer />
      </div>
    );
  }
}

export default App;

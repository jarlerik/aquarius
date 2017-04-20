import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar/NavBar';
import ContentContainer from './ContentContainer';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locale: 'fi'
    }
  }

  setLocale(locale) {
    this.setState({locale});
  }

  render() {
    return (
      <div className="App">
          <NavBar
            {...this.state}
            setLocale={this.setLocale.bind(this)}
          />
          <ContentContainer {...this.state}/>
      </div>
    );
  }
}

export default App;

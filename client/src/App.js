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
          <div className="footer">
            <div style={{textAlign: 'center'}}>
              <h3>{`Aquarius sporting club`}</h3>
            </div>
              <div className="flex">

                <div id="contacts" className="flex-1">
                  <div>
                    <h4>{`Yhteystiedot`}</h4>
                  </div>

                  <div>
                    <i className="fa fa-map-marker" /><span>{`Rantatie 3 10210 Inkoo`}</span>
                  </div>

                  <div>
                    <i className="fa fa-phone" /> <span>{`+358 9 2230 9402`}</span>
                  </div>

                  <div>
                    <i className="fa fa-envelope" /><span>{`aquarius@aquariussporting.fi`}</span>
                  </div>
                </div>

                <div id="open" className="flex-1">
                  <div>
                    <h4>{`Avoinna`}</h4>
                  </div>

                  <div className="flex">
                    <div style={{margin: '0 10px 10px 0'}}>{`MA-TO 07.00 - 21.00`}</div>
                    <div>{`PE 07.00 - 20.00`}</div>
                  </div>

                  <div className="flex">
                    <div style={{marginRight: '10px'}}>{`LA 09.00 - 18.00`}</div>
                    <div>{`SU 14.00 - 20.00`}</div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

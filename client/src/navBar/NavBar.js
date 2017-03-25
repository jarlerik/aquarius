import React from 'react';
import {Navbar, Nav, DropdownButton, MenuItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {Events, scrollSpy, Link} from'react-scroll';

import ContentContainer from '../ContentContainer';
import './NavBar.css';

export default class NavBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			naviOpen: false
		}
	}

	componentDidMount() {

    Events.scrollEvent.register('begin', this.closeNavi.bind(this));

    // Events.scrollEvent.register('end',(to, element) => {
    //   console.log("end", arguments);
    // });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log("Handle Active nav");
  }

  onToggle() {
  	const naviOpen = this.state.naviOpen;
  	this.setState({naviOpen: !naviOpen})
  }

  onSelect() {
  	this.setState({naviOpen: false});
  }

  closeNavi() {
  	this.setState({naviOpen: false});
  }

	render() {
		return (
			<div className="navBar-container">
				<div className="topBar flex">
					<div id="site-name" className="flex-5">
						<h1>Aquarius sporting club</h1>
					</div>
					<div className="flex-1">
						<div className="flex">
							<i className="fa fa-facebook fa-2x flex-1"/>
							<div id="language-options" className="flex" style={{marginRight: '15px'}}>
								<div style={{marginRight: '10px', borderTop: '3px solid #32c5d2'}}>Suomeksi</div>
								<div style={{marginTop: '3px'}}>Svenska</div>
							</div>
						</div>
						
					</div>
				</div>
				<Navbar expanded={this.state.naviOpen} onToggle={this.onToggle.bind(this)}>
				    <Navbar.Header>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
					    <Nav>
					    	<li>
						    	<Link activeClass="active" to="test1" spy={true} smooth={true} offset={200} duration={1000} onSetActive={this.handleSetActive}>
						          Test 1
						        </Link>
						    </li>
					    	<li onClick={this.onSelect.bind(this)}><NavLink activeClassName="active" to="/ajankohtaista">Ajankohtaista</NavLink></li>
			                <li><NavLink activeClassName="active" to="/ryhmäliikunta">Ryhmäliikunta</NavLink></li>
			                <li><NavLink activeClassName="active" to="/aikataulut">Aikataulut</NavLink></li>
			                <li><NavLink activeClassName="active" to="/personal-training">Personal-training</NavLink></li>
					    </Nav>
					</Navbar.Collapse>
				  </Navbar>
	        </div>
		);
	}
}
import React from 'react';
import {Events, scrollSpy, Link, scroller} from'react-scroll';

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

    Events.scrollEvent.register('begin', (args) => {
    	console.log("scrollEvent started..", args)
    });

    Events.scrollEvent.register('end', this.setActiveNavi.bind(this));

    scrollSpy.update();

  }

  setActiveNavi(section) {
  	this.setState({activeSection: section})
  	scroller.setActiveLink(section);
  	console.log("getActiveLink::", scroller.getActiveLink());
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
					<div className="flex navlinks">
				    	<div style={{cursor: 'pointer'}}>
					    	<Link activeClass="active" className="ajankohtaista" to="ajankohtaista" spy={true} smooth={true} offset={-250} duration={1000}>
					          Ajankohtaista
					        </Link>
					    </div>
					    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "ryhmaliikunta" ? "active-section" : "unactive-section"}>
					    	<Link activeClass="active" className="ryhmaliikunta" to="ryhmaliikunta" spy={true} smooth={true} offset={-150} duration={1000}>
					          Ryhmäliikunta
					        </Link>
					    </div>
					    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "aikataulut" ? "active-section" : "unactive-section"}>
					    	<Link activeClass="active" className="aikataulut" to="aikataulut" spy={true} smooth={true} offset={-150} duration={1000}>
					          Aikataulut
					        </Link>
					    </div>
					    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "yrityspalvelut" ? "active-section" : "unactive-section"}>
					    	<Link activeClass="active" className="yrityspalvelut" to="yrityspalvelut" spy={true} smooth={true} offset={-150} duration={1000}>
					          Yrityspalvelut
					        </Link>
					    </div>
					    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "yhteystiedot-hinnasto" ? "active-section" : "unactive-section"}>
					    	<Link activeClass="active" className="yhteystiedot-hinnasto" to="yhteystiedot-hinnasto" spy={true} smooth={true} offset={-150} duration={1000}>
					          Yhteystiedot ja hinnasto
					        </Link>
					    </div>
				    </div>
	        </div>
		);
	}
}
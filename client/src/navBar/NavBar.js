import React from 'react';
import {Events, scrollSpy, Link, scroller} from'react-scroll';
import {Button, Collapse, Image} from 'react-bootstrap';
import ContentContainer from '../ContentContainer';
import './NavBar.css';
import logo from '../images/logo.png';

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
						<div className="flex" style={{justifyContent: 'center'}}>
							<div>
								<Image height={75} src={logo} />
							</div>
							{/*<div id="language-options" className="flex" style={{marginRight: '15px'}}>
								<div style={{marginRight: '10px', borderTop: '3px solid #32c5d2'}}>Suomeksi</div>
								<div style={{marginTop: '3px'}}>Svenska</div>
							</div>*/}
						</div>
						
					</div>
				</div>
					<div className="flex navlinks medium-visible">
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
					    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "personal_training" ? "active-section" : "unactive-section"}>
					    	<Link activeClass="active" className="personal_training" to="personal_training" spy={true} smooth={true} offset={-150} duration={1000}>
					          Personal trainer
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
				    <div className="small-visible">
				    	<div>
					        <i className="fa fa-bars fa-2x NavBar-toggle" onClick={ ()=> this.setState({ naviOpen: !this.state.naviOpen })} />
					        <Collapse in={this.state.naviOpen}>
					          <div>
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
									</div>

									<div className="flex navlinks">
									    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "aikataulut" ? "active-section" : "unactive-section"}>
									    	<Link activeClass="active" className="aikataulut" to="aikataulut" spy={true} smooth={true} offset={-150} duration={1000}>
									          Aikataulut
									        </Link>
									    </div>
									     <div style={{cursor: 'pointer'}} className={this.state.activeSection === "personal_training" ? "active-section" : "unactive-section"}>
									    	<Link activeClass="active" className="personal_training" to="personal_training" spy={true} smooth={true} offset={-150} duration={1000}>
									          Personal trainer
									        </Link>
									    </div>
									</div>

									<div className="flex navlinks">
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
					        </Collapse>
					    </div>
				    </div>
	        </div>
		);
	}
}
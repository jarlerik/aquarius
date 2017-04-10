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
			naviOpen: false,
			activeSection: 'ajankohtaista'
		}
	}

	componentDidMount() {

    Events.scrollEvent.register('begin', this.closeNavi.bind(this));

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
				<div>
					<div id="language-options" className="flex" style={{marginRight: '15px', justifyContent: 'flex-end'}}>
						<div className="language-options-active" >Suomeksi</div>
						<div  className="language-options-unactive" style={{marginTop: '3px'}}>Svenska</div>
					</div>
					<div className="flex">
						<div className="flex-1">
							<Image height={100} src={logo} />
						</div>
						<div className="flex flex-3 navlinks medium-visible">
					    	<div style={{cursor: 'pointer'}}>
						    	<Link activeClass="active" to="ajankohtaista" spy={true}  offset={-200} smooth={true} duration={1000}>
						          Ajankohtaista
						        </Link>
						    </div>
						    <div style={{cursor: 'pointer'}}>
						    	<Link activeClass="active" to="ryhmaliikunta" spy={true} offset={-200} smooth={true} duration={1000}>
						          Ryhmäliikunta
						        </Link>
						    </div>
						    <div style={{cursor: 'pointer'}}>
						    	<Link activeClass="active" className="personal_training" to="personal_training" spy={true} offset={-200} smooth={true} duration={1000}>
						          Personal trainer
						        </Link>
						    </div>
						    <div style={{cursor: 'pointer'}}>
						    	<Link activeClass="active" className="yrityspalvelut" to="yrityspalvelut" spy={true} offset={-200} smooth={true} duration={1000}>
						          Yrityspalvelut
						        </Link>
						    </div>
						    <div style={{cursor: 'pointer'}}>
						    	<Link activeClass="active" className="yhteystiedot-hinnasto" to="yhteystiedot-hinnasto" spy={true} offset={-200} smooth={true} duration={1000}>
						          Yhteystiedot ja hinnasto
						        </Link>
						    </div>
						    <div style={{cursor: 'pointer'}}>
						    	<a href="https://aquarius.bypolar.fi/web/1/webPage.html" target="new">
						          Aikataulut
						        </a>
						    </div>
					    </div>
						<div className="flex-1 flex-end small-visible">
							<div id="toggler">
						        { this.state.naviOpen && <i className="fa fa-times fa-3x NavBar-toggle" onClick={ ()=> this.setState({ naviOpen:  false})} />}
						        { !this.state.naviOpen && <i className="fa fa-bars fa-3x NavBar-toggle" onClick={ ()=> this.setState({ naviOpen:  true})} />}
						    </div>
					    </div>
					    <div style={{margin: 'auto', padding: '10px'}}>
							  <a style={{color: '#5ba5b2'}} href="https://www.facebook.com/aquariussporting"><i className="fa fa-facebook fa-3x"></i></a>
					    </div>
					</div>
				    <div className="small-visible">
				    	<div class="flex">
				    		<div>
						        <Collapse in={this.state.naviOpen}>
						          	<div>
						          		<div className="navlinks">
									    	<div style={{cursor: 'pointer'}}>
										    	<Link activeClass="active" className="ajankohtaista" to="ajankohtaista" spy={true} smooth={true} duration={1000}>
										          Ajankohtaista
										        </Link>
										    </div>
										    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "ryhmaliikunta" ? "active-section" : "unactive-section"}>
										    	<Link activeClass="active" className="ryhmaliikunta" to="ryhmaliikunta" spy={true} smooth={true} duration={1000}>
										          Ryhmäliikunta
										        </Link>
										    </div>
										     <div style={{cursor: 'pointer'}} className={this.state.activeSection === "personal_training" ? "active-section" : "unactive-section"}>
										    	<Link activeClass="active" className="personal_training" to="personal_training" spy={true} smooth={true} duration={1000}>
										          Personal trainer
										        </Link>
										    </div>
										    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "yrityspalvelut" ? "active-section" : "unactive-section"}>
										    	<Link activeClass="active" className="yrityspalvelut" to="yrityspalvelut" spy={true} smooth={true} duration={1000}>
										          Yrityspalvelut
										        </Link>
										    </div>
										    <div style={{cursor: 'pointer'}} className={this.state.activeSection === "yhteystiedot-hinnasto" ? "active-section" : "unactive-section"}>
										    	<Link activeClass="active" className="yhteystiedot-hinnasto" to="yhteystiedot-hinnasto" spy={true} smooth={true} duration={1000}>
										          Yhteystiedot ja hinnasto
										        </Link>
										    </div>
										    <div style={{cursor: 'pointer'}}>
										    	<a href="https://aquarius.bypolar.fi/web/1/webPage.html" target="new">
										          Aikataulut
										        </a>
										    </div>
										</div>
								    </div>
						        </Collapse>
						    </div>
					    </div>
					</div>
			    </div>
	        </div>
		);
	}
}
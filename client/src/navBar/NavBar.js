import React from "react";
import { Events, scrollSpy, Link, scroller } from "react-scroll";
import { Collapse, Image } from "react-bootstrap";
import "./NavBar.css";
import logo from "../images/logo.png";
import classnames from "classnames";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      naviOpen: false,
      activeSection: "ajankohtaista"
    };
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", this.closeNavi.bind(this));

    Events.scrollEvent.register("end", this.setActiveNavi.bind(this));

    scrollSpy.update();
  }

  setActiveNavi(section) {
    this.setState({ activeSection: section });
    scroller.setActiveLink(section);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
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
    this.setState({ naviOpen: !naviOpen });
  }

  onSelect() {
    this.setState({ naviOpen: false });
  }

  closeNavi() {
    this.setState({ naviOpen: false });
  }

  render() {
    const navigation = {
      updates: {
        fi: "Ajankohtaista",
        sv: "Aktuellt"
      },
      groupExercise: {
        fi: "Ryhmäliikunta",
        sv: "Gruppmotion"
      },
      personalTrainer: {
        fi: "Personal trainer",
        sv: "Personal trainer"
      },
      enterpriseServices: {
        fi: "Yrityspalvelut",
        sv: "Företagsservice"
      },
      contactAndPrices: {
        fi: "Hinnasto ja yhteystiedot",
        sv: "Priser och kontaktuppgifter"
      },
      open: {
        fi: "Aikataulut",
        sv: "Tidtabeller"
      }
    };
    return (
      <div className="navBar-container">
        <div>
          <div
            id="language-options"
            className="flex"
            style={{ marginRight: "15px", justifyContent: "flex-end" }}
          >
            <div
              onClick={() => {
                this.props.setLocale("fi");
              }}
              className={classnames({
                "language-options-first": true,
                "language-options-active": this.props.locale === "fi",
                "language-options-unactive": this.props.locale !== "fi"
              })}
              style={{ cursor: "pointer" }}
            >
              Suomeksi
            </div>
            <div
              onClick={() => {
                this.props.setLocale("sv");
              }}
              className={classnames({
                "language-options-active": this.props.locale === "sv",
                "language-options-unactive": this.props.locale !== "sv"
              })}
              style={{ cursor: "pointer" }}
            >
              Svenska
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-3 navlinks medium-visible">
              <div style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="ajankohtaista"
                  spy={true}
                  offset={-200}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
                  {navigation.updates[this.props.locale]}
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="ryhmaliikunta"
                  spy={true}
                  offset={-200}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
                  {navigation.groupExercise[this.props.locale]}
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  className="personal_training"
                  to="personal_training"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
                  {navigation.personalTrainer[this.props.locale]}
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  className="yrityspalvelut"
                  to="yrityspalvelut"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
                  {navigation.enterpriseServices[this.props.locale]}
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  className="yhteystiedot-hinnasto"
                  to="yhteystiedot-hinnasto"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
                  {navigation.contactAndPrices[this.props.locale]}
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <a
                  href="https://aquarius.clubmanagement.fi/web/1/webPage.html"
                  target="new"
                >
                  {navigation.open[this.props.locale]}
                </a>
              </div>
            </div>
            <div className="flex-1 flex-end small-visible">
              <div id="toggler">
                {this.state.naviOpen && (
                  <i
                    className="fa fa-times fa-3x NavBar-toggle"
                    onClick={() => this.setState({ naviOpen: false })}
                  />
                )}
                {!this.state.naviOpen && (
                  <i
                    className="fa fa-bars fa-3x NavBar-toggle"
                    onClick={() => this.setState({ naviOpen: true })}
                  />
                )}
              </div>
            </div>
            <div style={{ margin: "auto", padding: "10px" }}>
              <a
                target="_blank"
                className="facebook-link"
                href="https://www.facebook.com/aquariussporting"
              >
                <i className="fa fa-facebook fa-3x" />
              </a>
            </div>
          </div>
          <div className="small-visible">
            <div className="flex">
              <div>
                <Collapse in={this.state.naviOpen}>
                  <div>
                    <div className="navlinks">
                      <div style={{ cursor: "pointer" }}>
                        <Link
                          activeClass="active"
                          className="ajankohtaista"
                          to="ajankohtaista"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-140}
                        >
                          {navigation.updates[this.props.locale]}
                        </Link>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          this.state.activeSection === "ryhmaliikunta"
                            ? "active-section"
                            : "unactive-section"
                        }
                      >
                        <Link
                          activeClass="active"
                          className="ryhmaliikunta"
                          to="ryhmaliikunta"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-140}
                        >
                          {navigation.groupExercise[this.props.locale]}
                        </Link>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          this.state.activeSection === "personal_training"
                            ? "active-section"
                            : "unactive-section"
                        }
                      >
                        <Link
                          activeClass="active"
                          className="personal_training"
                          to="personal_training"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-140}
                        >
                          {navigation.personalTrainer[this.props.locale]}
                        </Link>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          this.state.activeSection === "yrityspalvelut"
                            ? "active-section"
                            : "unactive-section"
                        }
                      >
                        <Link
                          activeClass="active"
                          className="yrityspalvelut"
                          to="yrityspalvelut"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-140}
                        >
                          {navigation.enterpriseServices[this.props.locale]}
                        </Link>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          this.state.activeSection === "yhteystiedot-hinnasto"
                            ? "active-section"
                            : "unactive-section"
                        }
                      >
                        <Link
                          activeClass="active"
                          className="yhteystiedot-hinnasto"
                          to="yhteystiedot-hinnasto"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-140}
                        >
                          {navigation.contactAndPrices[this.props.locale]}
                        </Link>
                      </div>
                      <div style={{ cursor: "pointer" }}>
                        <a
                          href="https://aquarius.clubmanagement.fi/web/1/webPage.html"
                          target="new"
                        >
                          {navigation.open[this.props.locale]}
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

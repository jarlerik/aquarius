import React from "react";
import { Link } from "react-router-dom";
import "./ContentContainer.css";
import { Element } from "react-scroll";
import { Col, Image, Row, Button, Table } from "react-bootstrap";
import { utils } from "react-bootstrap";
import ticket1Img from "./images/ticket1.png";
import ticket2Img from "./images/ticket2.png";
import ticket3Img from "./images/ticket3.png";
import ticket4Img from "./images/ticket4.png";
import ticket5Img from "./images/ticket5.png";
import ticket6Img from "./images/ticket6.png";
import ticket7Img from "./images/ticket7.png";
import ticket8Img from "./images/ticket8.png";
import logo from "./images/logo.png";
import hmkLogo  from "./images/hmk_logo2.png";
import moment from "moment";

//content
import news from "./data/news.js";
import groupExercise from "./data/groupExercise.js";
import personalTrainer from "./data/personalTrainer.js";
import hmkFysio from "./data/hmkFysio.js";
import enterpriseService from "./data/enterpriseService.js";
import prices from "./data/prices.js";
//import open from "./data/open.js";
import contact from "./data/contact.js";
import InstagramFeed from "./instagram/InstagramFeed";

utils.bootstrapUtils.addStyle(Button, "custom");

const ContentContainer = props => {
  const getTitle = exercise => {
    const { locale } = props;
    switch (locale) {
      case "sv":
        return exercise.title_sv;
      default:
        return exercise.title;
    }
  };

  const getDescription = exercise => {
    const { locale } = props;
    switch (locale) {
      case "sv":
        return exercise.description_sv;
      default:
        return exercise.description;
    }
  };

  const getMessage = post => {
    const locale = props.locale;
    if (locale === "sv" && post.message_sv) {
      return post.message_sv;
    } else {
      return post.message;
    }
  };

  const getPostTitle = post => {
    const locale = props.locale;
    if (locale === "sv" && post.title_sv) {
      return post.title_sv;
    } else {
      return post.title;
    }
  };
  const getWeekday = openTime => {
    const { locale } = props;
    if (locale === "sv") {
      return openTime.weekday_sv || "Not available";
    } else {
      return openTime.weekday || "Not available";
    }
  };
  moment.locale(props.locale);
  const { instagram_edges } = props;
  return (
    <div className="contentContainer">
      <Row className="Content-element">
        <Element name="ajankohtaista">
          <div id="ajankohtaista-element-begin">
            <div id="ajankohtaista-element-wrapper">
              <div className="first-image-container">
                <div>
                  <h1 className="Image-container-element-header">
                    {news[props.locale].header}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="ajankohtaista-element">
            <div className="presentation-element">
              <Row style={{ marginBottom: "50px" }}>
                <Col xs={12} md={12}>
                  <div>
                    <p>{news[props.locale].p1}</p>
                  </div>
                  <div>
                    <p>{news[props.locale].p2}</p>
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <Row>
              <Col xs={12} md={6} lg={6}>
                <div className="post-item-list">
                  <Row>
                    {props.posts &&
                      props.posts.map(post => {
                        return (
                          <Col xs={12} md={6} lg={6}>
                            <div className="post-item">
                              <Row>
                                <Col xs={12} className="flex-8">
                                  <p
                                    style={{ color: "#5ba5b2" }}
                                    className="post-header"
                                  >
                                    {getPostTitle(post)}
                                  </p>
                                </Col>
                                <Col xs={6} className="flex-2" />
                              </Row>
                              <div className="post-item-content">
                                <Row>
                                  <Col xs={12} md={12}>
                                    <p style={{ color: "#848484" }}>
                                      {getMessage(post)}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={6} style={{ color: "#ccc" }}>
                                    <p>{post.author}</p>
                                  </Col>
                                  <Col
                                    xs={6}
                                    style={{ margin: "auto 0", color: "#ccc" }}
                                  >
                                    <p>
                                      {moment(post.updated_at).format("LL")}
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                  <div
                  class="fb-like-box fb_iframe_widget"
                  data-href="https://www.facebook.com/aquariussporting"
                  data-width="306"
                  data-show-faces="true"
                  data-stream="true"
                  data-header="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306">
                  <iframe
                    name="f3d9bbdd3d41fe8"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    title="fb:like_box Facebook Social Plugin"
                    src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F1FegrZjPbq3.js%3Fversion%3D42%23cb%3Df749e3b0a8094c%26domain%3Dwww.aquariussporting.fi%26origin%3Dhttp%253A%252F%252Fwww.aquariussporting.fi%252Ff36784c8d998ee8%26relation%3Dparent.parent&amp;container_width=310&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faquariussporting&amp;locale=fi_FI&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=306"
                    style={{
                      border: "none",
                      visibility: "visible",
                      width: "306px",
                      height: "540px"
                    }}/>
                </div>
              </Col>
            </Row>
            <div>
              <div>
                <InstagramFeed edges={instagram_edges}/>
              </div>
             
            </div>
          </div>
        </Element>
      </Row>
      <Row className="Content-element">
        <Element
          id="ryhmaliikunta-element"
          name="ryhmaliikunta"
          className="Image-container"
        >
          <div className="Image-container-element">
            <h1 className="Image-container-element-header">
              {groupExercise[props.locale].header}
            </h1>
            <div className="Image-container-element-content">
              <p className="ingress">{groupExercise[props.locale].text}</p>
              <a
                target="_blank"
                href="https://aquarius.clubmanagement.fi/web/1/webPage.html"
              >
                <Button bsSize="large" bsStyle="custom">
                  {groupExercise[props.locale].button}
                </Button>
              </a>
            </div>
          </div>
        </Element>
      </Row>
      <Row className="Content-element">
        <div className="element harjoitukset-content">
          <Row>
            <div>
              <h3>{groupExercise.exercises.header[props.locale]}</h3>
            </div>
            <div>
              {props.exercises &&
                props.exercises.map(exercise => {
                  return (
                    <Col xs={6} md={4}>
                      <div className="exercise exercise-border-top">
                        <p className="exercise-name">{getTitle(exercise)}</p>
                        <p className="exercice-description">
                          {getDescription(exercise)}
                        </p>
                      </div>
                    </Col>
                  );
                })}
            </div>
          </Row>
        </div>
      </Row>
      <Row className="Content-element">
        <Element
          className="Image-container"
          id="personal-trainer-element"
          name="personal_training"
        >
          <div className="Image-container-element">
            <h1 className="Image-container-element-header">{`Personal trainer`}</h1>
            <div className="Image-container-element-content">
              <p className="ingress">
                {personalTrainer.pt[props.locale].content}
              </p>
            </div>
          </div>
        </Element>
        <div id="personal-trainer-content">
          <Row>
            <Col xs={12} md={6}>
              <div className="personal-trainer-service">
                <Image responsive src={hmkLogo} />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="personal-trainer-service">
                <h2>{hmkFysio[props.locale].h2_1}</h2>
                <h2>{hmkFysio[props.locale].h2_2}</h2>
                <h2>{hmkFysio[props.locale].h2_3}</h2>
                <h3>{hmkFysio[props.locale].h3_1}</h3>
                <h3>{hmkFysio[props.locale].h3_2}</h3>
                <h2>{hmkFysio[props.locale].h2_4}</h2>
                <p>{hmkFysio[props.locale].p_1}</p>
                <p>{hmkFysio[props.locale].p_2}</p>
                <p>{hmkFysio[props.locale].p_3}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row className="Content-element">
        <Element
          className="Image-container"
          id="yrityspalvelut-element"
          name="yrityspalvelut"
        >
          <div className="Image-container-element">
            <div>
              <h1 className="Image-container-element-header">
                {enterpriseService[props.locale].header.h1}
              </h1>
              <p className="ingress">
                {enterpriseService[props.locale].header.text}
              </p>
            </div>
          </div>
        </Element>
        <div id="yrityspalvelut-content">
          <Row>
            <Col xs={12} md={6}>
              <div className="yrityspavelut-content-item ">
                <p>{enterpriseService[props.locale].paragraphs[0].text}</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="yrityspavelut-content-item">
                <p>{enterpriseService[props.locale].paragraphs[1].text}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="yrityspavelut-content-item">
                <p>{enterpriseService[props.locale].paragraphs[2].text}</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="yrityspavelut-content-item">
                <p>{enterpriseService[props.locale].paragraphs[3].text}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row className="Content-element footer">
        <Element name="yhteystiedot-hinnasto">
          <div>
            <div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ textTransform: "uppercase" }}>
                  {prices[props.locale].h4}
                </h2>
              </div>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th className="first-row" style={{ textAlign: "center" }}>
                      {prices[props.locale].tableHeader}
                    </th>
                    <th className="first-row" />
                    <th className="first-row" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{prices[props.locale].tr1td1}</td>
                    <td>{prices[props.locale].tr1td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr2td1}</td>
                    <td>{prices[props.locale].tr2td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr3td1}</td>
                    <td>{prices[props.locale].tr3td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr4td1}</td>
                    <td>{prices[props.locale].tr4td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr11td1}</td>
                    <td>{prices[props.locale].tr11td2}</td>
                    <td />
                  </tr>
                  <tr />
                  <tr className="table-split" style={{ textAlign: "center" }}>
                    <td className="first-row">
                      <span style={{ fontWeight: "bold" }}>
                        {prices[props.locale].tr5td1}
                      </span>
                    </td>
                    <td className="first-row" />
                    <td className="first-row">{prices[props.locale].tr5td2}</td>
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr6td1}</td>
                    <td>{prices[props.locale].tr6td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr7td1}</td>
                    <td>{prices[props.locale].tr7td2}</td>
                    <td>{prices[props.locale].tr7td3}</td>
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr8td1}</td>
                    <td>{prices[props.locale].tr8td2}</td>
                    <td>{prices[props.locale].tr8td3}</td>
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr9td1}</td>
                    <td>{prices[props.locale].tr9td2}</td>
                    <td>{prices[props.locale].tr9td3}</td>
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr10td1}</td>
                    <td>{prices[props.locale].tr10td2}</td>
                    <td />
                  </tr>
                  <tr>
                    <td>{prices[props.locale].tr12td1}</td>
                    <td>{prices[props.locale].tr12td2}</td>
                    <td />
                  </tr>
                </tbody>
              </Table>
              <div className="ticket-container">
                {/*Missing svenska content */}
                <div>
                  <h5>{prices[props.locale].h5}</h5>
                </div>
                <div>
                  <div className="ticketImage">
                    <Image responsive src={ticket1Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket2Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket3Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket4Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket5Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket6Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket7Img} />
                  </div>

                  <div className="ticketImage">
                    <Image responsive src={ticket8Img} />
                  </div>
                </div>
                {/* Missing svenska content */}
                <div>
                  <p>{prices[props.locale].p}</p>
                </div>
              </div>
            </div>
            <Col xs={12} md={6}>
              <div>
                {props.openTimes &&
                  props.openTimes.map(openTime => {
                    return (
                      <Row className="open-at">
                        <Col xs={6}>{getWeekday(openTime)}</Col>
                        <Col xs={6}>
                          <span style={{ fontWeight: "bold" }}>
                            {openTime.opentime}
                          </span>
                        </Col>
                      </Row>
                    );
                  })}
              </div>
              <div style={{ textAlign: "center" }}>
                <Image height={200} src={logo} />
              </div>
            </Col>
            <Col style={{ borderLeft: "3px solid #666666" }} xs={12} md={6}>
              <div className="yhteystiedot" style={{ textAlign: "center" }}>
                <div
                  className="contact-item flex"
                  style={{ marginBottom: "10px" }}
                >
                  <div className="flex-1 flex-center">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-map-marker fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                  <div className="flex flex-5">
                    <p style={{ textAlign: "start" }}>
                      {contact[props.locale].address}
                    </p>
                  </div>
                </div>
                <div className="contact-item flex">
                  <div className="flex-1 flex-center">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-phone fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                  <div className="flex flex-5">
                    <p style={{ textAlign: "start" }}>
                      {contact[props.locale].phone}
                    </p>
                  </div>
                </div>
                <div className="contact-item flex">
                  <div className="flex-1 flex-center">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                  <div className="flex flex-5">
                    <p style={{ textAlign: "start" }}>
                      {contact[props.locale].email}
                    </p>
                  </div>
                </div>
                <div className="contact-item flex">
                  <div className="flex-1 flex-center">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-address-card fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                  <div className="flex flex-5">
                    <p style={{ textAlign: "start" }}>
                      <Link to="/rekisteriseloste">{`rekisteriseloste`}</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "0px 0px 10px 5px #dcd4d4",
                  marginTop: "10px"
                }}
              >
                <iframe
                  height="250"
                  frameborder="0"
                  style={{ border: "0", width: "100%" }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDvEwZdj-ooYqqMqDOKdUHQ2XuD46sN1xg&q=place_id:ChIJmdm2GWqYjUYRwNgrVXo47Bo"
                  allowfullscreen
                />
              </div>
            </Col>
          </div>
        </Element>
      </Row>
    </div>
  );
};

export default ContentContainer;

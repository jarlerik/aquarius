import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row, ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import registerFile from "./images/rekisteriseloste.pdf";

export default class Register extends React.Component {
  state = {
    numPages: null,
    pageNumber: null
  };
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages, pageNumber: 1 });
  };

  nextPage = () => {
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber + 1 };
    });
  };

  hasNotPrevPage = () => {
    return this.state.pageNumber === 1;
  };
  hasNotNextPage = () => {
    return this.state.pageNumber === this.state.numPages;
  };

  prevPage = () => {
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber - 1 };
    });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div className="registerControlsContainer">
          <Row>
            <Link
              className="registerControl"
              to="/"
            >{`Takaisin Aquariussporting sivulle`}</Link>
          </Row>
          <Row>
            <ButtonGroup vertical>
              <Button
                className="registerControl"
                onClick={this.prevPage}
                bsStyle="link"
                disabled={this.hasNotPrevPage()}
              >
                Edellinen sivu
              </Button>
              <Button
                className="registerControl"
                onClick={this.nextPage}
                bsStyle="link"
                disabled={this.hasNotNextPage()}
              >
                Seuraava sivu
              </Button>
            </ButtonGroup>
          </Row>
        </div>
        <div className="registerDocument">
          <Document file={registerFile} onLoadSuccess={this.onDocumentLoad}>
            <Page scale={1.5} pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import NavBar from "./navBar/NavBar";
import ContentContainer from "./ContentContainer";
import { getPosts, getExercises, getOpenTimes } from "./ApiClient";

class App extends Component {
  static displayName = "App";
  constructor(props) {
    super(props);

    this.state = {
      locale: "fi"
    };
  }

  componentDidMount() {
    this.getPosts();
    this.getExercises();
    this.getOpenTimes();
  }
  getOpenTimes = async () => {
    const resp = await getOpenTimes();
    if (resp.data) {
      this.setState({ openTimes: resp.data });
    }
  };

  getExercises = async () => {
    const resp = await getExercises();
    if (resp.data) {
      this.setState({ exercises: resp.data });
    }
  };

  getPosts = async () => {
    const resp = await getPosts();
    if (resp.data) {
      this.setState({ posts: resp.data });
    }
  };

  setLocale(locale) {
    this.setState({ locale });
  }

  render() {
    return (
      <div className="App">
        <NavBar {...this.state} setLocale={this.setLocale.bind(this)} />
        <ContentContainer {...this.state} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./navBar/NavBar";
import ContentContainer from "./ContentContainer";
import Register from "./Register";
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
    this.getInstafeed();
  }
  getInstafeed = async () => {
    try {
      const response = await axios.get("https://www.instagram.com/aquariussportingclubinkoo/?__a=1")
      const instagram_edges  = response.data.graphql.user.edge_owner_to_timeline_media.edges;
      this.setState({ instagram_edges });
    }
    catch(e) {
      console.log("Failed to get instagram feed:", e);
    }
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
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <NavBar {...this.state} setLocale={this.setLocale.bind(this)} />
                <ContentContainer {...this.state} />;
              </div>
            );
          }}
        />
        <Route
          path="/rekisteriseloste"
          render={() => {
            return <Register />;
          }}
        />
      </div>
    );
  }
}

export default App;

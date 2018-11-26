import React, { Component } from "react";
import MapCTC from "./MapCTC";
import axios from "axios";

const gm = window.gm;

class App extends Component {
  state = {
    // vin: "pending...",
    // message: ""
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
    axios
      .get("http://localhost:53833/api/test?message=woot")
      .then(resp => {
        this.setState({ message: resp.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <React.Fragment>
        <MapCTC />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Register from "./Register";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    login: false,
    showRegister: false
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

  showRegister = () => {
    this.setState({ showRegister: true, login: false });
  };

  register = () => {
    this.setState({
      showRegister: false,
      login: true
    });
  };

  render() {
    return (
      <div className={styles.root}>
        {this.state.login ? "Welcome John Doe!" : null}
        <br />
        {this.state.showRegister ? (
          <Register register={this.register} />
        ) : (
          <button onClick={this.showRegister}>Register for CarToCar</button>
        )}
      </div>
    );
  }
}

export default App;

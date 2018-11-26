import React, { Component } from "react";
import styles from "./App.module.css";
import Register from "./Register";
import Container from "./maps/Container";

const gm = window.gm;

class App extends Component {
  state = {
    login: false,
    showRegister: false
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
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
        <div />
        <Container />
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

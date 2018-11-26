import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import MapCTC from "./MapCTC";
import axios from "axios";
import styles from "./App.module.css";
import Register from "./Register";

import CurrentLocation from "./Map";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    login: false,
    showRegister: false
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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
      <React.Fragment>
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={"current location"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
          </CurrentLocation>
      <div className={styles.root}>
      {this.state.login ? "Welcome John Doe!" : null}
      <br />
      {this.state.showRegister ? (
        <Register register={this.register} />
      ) : (
        <button onClick={this.showRegister}>Register for CarToCar</button>
      )}
    </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCnSGSVwMPCkmk4jxgo7GnfPKiKnaVvz6Y"
})(MapContainer);

import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";
import uber from "./untitled.png";

const mapStyles = {
  width: "100%",
  height: "90%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    movingLongitude: [34.164226],
    movingLatitude: [-118.624627],
    lat: 34.164225,
    long: -118.624626,
    requestGranted: false
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
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    if (this.state.long < -118.62441) {
      this.setState({
        long: (Number.parseFloat(this.state.long) + 0.000001).toPrecision(9)
      });
    } else {
      clearInterval(this.timerID);
      axios
        .post("http://localhost:51757/visa/test")
        .then(res => console.log("success"))
        .catch(err => console.error(err));
    }
  }

  makeRequest = () => {
    this.setState({ requestGranted: true });
  };
  sendCar = () => {
    this.setState({ requestGranted: false });
    this.timerID = setInterval(() => this.tick(), 50);
  };
  render() {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={19}
          style={mapStyles}
          initialCenter={{ lat: 34.164176, lng: -118.624557 }}
        >
          <Marker
            position={{ lat: 34.164176, lng: -118.624557 }}
            onClick={this.onMarkerClick}
            name="hello"
            icon={uber}
          />
          <Marker
            position={{
              lat: 34.164225,
              lng: this.state.long
            }}
            onClick={this.onMarkerClick}
            name={"Second Marker"}
            icon={uber}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          />
        </Map>
        {this.state.requestGranted && (
          <div
            style={{
              width: "29%",
              height: "100%",
              position: "relative",
              top: "15rem",
              left: "2rem",
              background: "lightblue",
              textAlign: "center",
              paddingTop: ".5px",
              borderRadius: "22px"
            }}
          >
            <h1>Request Granted</h1>
            <button type="button" onClick={this.sendCar}>
              Awesome!
            </button>
          </div>
        )}
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
        <button
          type="button"
          style={{
            width: "29%",
            height: "100%",
            position: "relative",
            top: "23rem",
            left: "2rem"
          }}
          onClick={this.makeRequest}
        >
          {"May I pass for $5.00?"}
        </button>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCnSGSVwMPCkmk4jxgo7GnfPKiKnaVvz6Y"
})(MapContainer);

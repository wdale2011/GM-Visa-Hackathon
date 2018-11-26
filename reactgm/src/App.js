import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    movingLongitude: [34.164226],
    movingLatitude: [-118.624627],
    lat: 34.164225,
    long: -118.624626
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
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 50);
    // console.log(this.state.lat, this.state.long);
    // this.setState({ lat: this.state.lat++, long: this.state.long++ });
  }

  // class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {date: new Date()};
  //   }

  // componentDidMount() {

  // }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log(this.state.long);
    if (this.state.long < -118.62441) {
      this.setState({
        long: (Number.parseFloat(this.state.long) + 0.000001).toPrecision(9)
      });
    } else {
      console.log("clear");
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={19}
        style={mapStyles}
        initialCenter={{ lat: 34.164176, lng: -118.624557 }}
      >
        <Marker
          position={{ lat: 34.164176, lng: -118.624557 }}
          onClick={this.onMarkerClick}
          name={"firstmarker"}
        />
        <Marker
          position={{
            lat: 34.164225,
            lng: this.state.long
          }}
          onClick={this.onMarkerClick}
          name={"Second Marker"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCnSGSVwMPCkmk4jxgo7GnfPKiKnaVvz6Y"
})(MapContainer);

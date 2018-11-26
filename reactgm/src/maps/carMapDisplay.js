import React from "react";
import CarMap from "./carMap";

import styles from "./carMapStyles.scss";

class CarMapDisplay extends React.Component {
  state = {
    lat: 33,
    lng: -118
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.valueAsNumber;
    this.setState({ [name]: value });
  };

  handleMapChange = ({ lat, lng }) => {
    this.setState({ lat, lng });
  };

  render() {
    const { lat, lng } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.latLng}>
          <span>
            Lat:
            <input
              type="number"
              name="lat"
              value={lat}
              onChange={this.handleInputChange}
            />
          </span>
          <span className={styles.lng}>
            Lng:
            <input
              type="number"
              name="lng"
              value={lng}
              onChange={this.handleInputChange}
            />
          </span>
        </div>
        {/* <GoogleMap key={lat + " " + lng} lat={lat} lng={lng} /> */}
        <CarMap lat={lat} lng={lng} onChange={this.handleMapChange} />
      </div>
    );
  }
}

export default CarMapDisplay;

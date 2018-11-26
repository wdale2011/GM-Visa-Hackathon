import React from "react";
import PropTypes from "prop-types";

const google = window.google;

class CarMap extends React.Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  containerRef = React.createRef(); // creates the empty box that React will fill with an element

  componentDidMount() {
    console.log("GoogleMap componentDidMount");

    const { lat, lng } = this.props;
    const mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 5
    };

    this.lat = lat;
    this.lng = lng;

    this.map = new google.maps.Map(this.containerRef.current, mapProp);
    this.map.addListener("center_changed", () => {
      if (this.props.onChange) {
        const latLng = this.map.getCenter();
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.lat = lat;
        this.lng = lng;
        this.props.onChange({ lat, lng });
      }
    });
  }

  shouldComponentUpdate(nextProps) {
    return this.lat !== nextProps.lat || this.lng !== nextProps.lng;
  }

  componentDidUpdate() {
    console.log("GoogleMap componentDidUpdate");

    const { lat, lng } = this.props;
    this.map.setCenter({ lat, lng });
  }

  componentWillUnmount() {
    console.log("GoogleMap componentWillUnmount");
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={this.containerRef} />
    );
  }
}

export default CarMap;

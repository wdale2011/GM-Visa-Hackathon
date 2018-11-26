import { MapContainer } from "./Container";

export default GoogleApiWrapper(props => ({
  apiKey: props.apiKey
}))(MapContainer);

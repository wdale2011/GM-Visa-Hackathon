import axios from "axios";

let url = "http://localhost:51757/visa/test";

export default function postMessage() {
  return axios.post(url);
}

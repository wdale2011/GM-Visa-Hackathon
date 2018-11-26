import React from "react";

class Success extends React.Component {
  componentDidMount = () => {
    this.successFunction();
  };

  successFunction = () => {
    alert("Payment Sent");
  };
  render() {
    return <div>{this.successFunction}</div>;
  }
}

export default Success;

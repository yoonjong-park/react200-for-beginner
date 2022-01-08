import React, { Component } from "react";

class R006_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    // constructor 함수 다음으로 실행된다.
    console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}

export default R006_LifecycleEx;

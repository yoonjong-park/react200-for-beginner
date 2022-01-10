/* App.js
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx prop_value="FromApp.js" />
    </div>
  );
}
*/

import React, { Component } from "react";

class R008_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call :" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  constructor(props) {
    // 제일 먼저 실행 됨.
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  componentDidMount() {
    // 작성된 함수들 중 가장 마지막에 실행함.
    // Mount가 되었다는 것은 DOM구조를 생성했다는 뜻으로, Render까지 1차로 실행한 상태를 말한다.
    // 이 상태에서 ReactDOM에 조작을 가하기 시작할 준비를 마친 상태를 의미한다.
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
    this.setState({ tmp_state: true });
  }

  shouldComponentUpdate(props, state) {
    // 리액트 생성 주기 중 가장 마지막 - Hook에서 useEffect에 해당
    console.log(
      "6. shouldComponentUpdate Call / tmp_state2 = " + state.tmp_state
    );
    return state.tmp_state2 ? true : false;
    // return이 true 이면, render를 한번 더 실행한다.
    // state.tmp_state2가 없기 때문에 false를 return. render()가 실행이 안됨.
  }

  render() {
    console.log("3. render Call");
    return <h2>[ THIS IS shouldComponentUpdate FUNCTION ]</h2>;
  }
}

export default R008_LifecycleEx;

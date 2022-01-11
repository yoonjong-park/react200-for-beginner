import React, { Component } from "react";

class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let jsString1 = "자바스크립트";
    let jsString2 = "입니다\n다음 줄입니다.";
    console.log(jsString1 + " 문자열" + jsString2 + "~");

    let Es6string1 = "ES6";
    let Es6String2 = "입니다";
    console.log(`${Es6string1} 문자열${Es6String2}`);

    let LongString = "ES6에 추가된 String 함수들입니다.";
    console.log("startsWith : " + LongString.startsWith("ES6에 추가")); // true, 문자열 앞에 동일한 String이 있으면 return true
    console.log("endsWith : " + LongString.endsWith("함수들입니다.")); // true, 문자열 뒤에 동일한 ...
    console.log("includes : " + LongString.includes("추가된 String")); // true, 문자열 전체에 동일한...
  }

  render() {
    return <h2>[THIS IS ES6 STRING]</h2>;
  }
}
export default R009_Es6;

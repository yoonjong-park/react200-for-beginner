import React, { Component } from "react";

class R012_ClassPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
    // ES5 Prototype
    var ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function () {
        console.log("1. react_" + this.number);
      };
      return ExamCount;
    })();

    var cnt = new ExamCountFunc("200"); // 객체 생성
    cnt.showNum();

    //
    //
    //
    // 되도록 ES6 class -> 이 것을 사용하도록 한다.
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }
    var cnt2 = new ExamCountClass("2hundred");
    cnt2.showNum();
  }

  render() {
    return <h2>[ THIS IS Class]</h2>;
  }
}

export default R012_ClassPrototype;

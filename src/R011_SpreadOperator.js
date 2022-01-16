import React, { Component } from "react";

class R011_SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // javascript Array
    var varArray1 = ["num1", "num2"];
    var varArray2 = ["num3", "num4"];
    var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    // var sumVarArr = [].concat(varArray1, varArray2);
    console.log("1. sumVarArr : " + sumVarArr);

    // ES6 Array
    let sumLetArr = [...varArray1, ...varArray2];
    console.log("2. sumLetArr : " + sumLetArr);
    const [sum1, sum2, ...remain] = sumLetArr;
    console.log(
      "3. sum1 : " + sum1 + ", sum2 : " + sum2 + ", remain(나머지) : " + remain
    );

    var varObj1 = { key1: "val1", key2: "val2" };
    var varObj2 = { key2: "new2", key3: "val3" };
    // javascript Object
    var sumVarObj = Object.assign({}, varObj1, varObj2); // assign : 맡기다. target : {}, obj, obj, ... 첫번째 타겟에다 나머지를 차례대로 덮어쓰기 함.
    console.log("4. sumVarObj : " + JSON.stringify(sumVarObj));
    // JSON.stringify( = 객체를 string으로 만듬
    // ES6 Object
    var sumLetObj = { ...varObj1, ...varObj2 };
    console.log("5. sumLetObj : " + JSON.stringify(sumLetObj));
    var { key1, key3, ...others } = sumLetObj; // key1, key2, 나머지는 객체 형태로 key:value로 넣는다.
    console.log(
      "6. key1 : " +
        key1 +
        ", key3 : " +
        key3 +
        ", others : " +
        JSON.stringify(others)
    );
  }

  render() {
    return <h2>[ THIS IS SpreadOperator ]</h2>;
  }
}

export default R011_SpreadOperator;

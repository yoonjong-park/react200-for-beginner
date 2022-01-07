import React, { Component } from "react";

class R005_LifeCycleEx extends Component {
  // Component가 부모 클래스.  부모객체를 class로 연장/확대한다는 의미이다.  *extend : 확대하다/연장하다.
  constructor(props) {
    // constructor 함수는 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출된다.
    super(props);
    /*
      super의 2가지 용법
        1. super() : 부모클래스의 생성자가 호출이 된다.
          1.1 super()함수는 가장 위에 호출해야 한다. 부모 클래스인 Component에 있는 constructor를 선언하는 것이다. 지금 같은 경우는 react 패키지 중, Component 클래스에 속한 contstructor(props); 를 선언하는 것이다.
        2. super. : 부모클래스 자체를 뜻함.
          2.1 super.sum(); 과 같은 형태로 Component 클래스의 함수를 호출해서 쓸 수도 있다. 이러면, 부모의 constructor의 값을 공유해서 사용하기 때문에 리액트의 합성 같은 것을 할 수 있는 것이다.(오호...?)
        *참고1 : 생활코딩 https://opentutorials.org/module/4047/24620
        *참고2 : MDN, protoType을 활용한 메소드 간 연결방법도 안내되어 있다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super   
    */
    this.state = {}; // 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용한다.
    console.log("1. constructor Call");
  }

  render() {
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}

export default R005_LifeCycleEx;

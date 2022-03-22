// for using useState, let's remember first the 2 RULES OF HOOKS:
// 1) you can use React Hooks just in functional components
// 2) you must use React Hooks always at the top level of your component,
// before the return statement and outside of any function, loop, condition

import { useEffect, useState } from "react";

// useEffect is a replacement for lifecycle functionalities in Functional Components
// it's a direct replacement of render(), componentDidMount() and componentDidUpdate()

const UseEffectComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("Michael");

  // a perfect spot for a react hook :)
  useEffect(
    () => {
      // your logic goes here
      console.log("Let's replace componentDidMount");
    },
    [
      // this array is called a "dependency array"
      // everything you put into this array will be a valid condition to invoke
      // the callback again
    ]
  );
  // the useEffect we just wrote is a DIRECT REPLACEMENT of componentDidMount,
  // because we set an EMPTY dependency array (so it means the callback will
  // be executed once, and we're NOT listening on ANYTHING for re-invoking it)

  useEffect(() => {
    console.log("generic componentDidUpdate!");
    // setIsVisible(isVisible === true ? false : true);
    // beware of setting a state variable inside a useEffect with no array of deps
    // it will break your app, it's just like componentDidUpdate with no condition inside
  });
  // a useEffect WITHOUT an array of dependencies will have NO CONSTRAINTS on
  // re-invoking the function --> so the function will be invoked at EVERY UPDATE
  // --> this is just like componentDidUpdate

  useEffect(() => {
    console.log("componentDidUpdate just for name");
  }, [name]);

  return (
    <div>
      <h1>USE EFFECT NOW!</h1>
      {isVisible && <div>HIDDEN CONTENT</div>}
      <button onClick={() => setIsVisible(isVisible === true ? false : true)}>
        CLICK ME FOR HIDING THE CONTENT
      </button>
      <p>{name}</p>
      <button onClick={() => setName(name === "Yoji" ? "Michael" : "Yoji")}>
        CHANGE NAME
      </button>
    </div>
  );
};

export default UseEffectComponent;

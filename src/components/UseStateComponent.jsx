import { useState } from "react";

// a state object:
// {
//     counter: 0
// }

// for using useState, let's remember first the 2 RULES OF HOOKS:
// 1) you can use React Hooks just in functional components
// 2) you must use React Hooks always at the top level of your component,
// before the return statement and outside of any function, loop, condition

const UseStateComponent = ({ subTitle }) => {
  // this is a perfect place!
  // useState allows you to create a SINGLE STATE VARIABLE
  // let's say we want to keep track of a counter
  const [counter, setCounter] = useState(0);
  // const [isLoading, setIsLoading] = useState(true)
  // useState returns a value: an array with two elements
  // we're effectively de-structuring the array useState returns to us
  // counter is our state variable, and setCounter is a function capable
  // of JUST updating the value of counter (like a setState, but JUST for counter)
  // for assigning an iniital value on counter, pass that value as the argument of useState

  return (
    <div>
      <h1>STATE HOOK EXAMPLE!</h1>
      <h2>{subTitle}</h2>
      <p>{counter}</p>
    </div>
  );
};

export default UseStateComponent;

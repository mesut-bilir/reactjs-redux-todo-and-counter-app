import React from "react";
import { connect } from "react-redux";
import { incCounter, decCounter } from "../Redux/actionCreator";

const Counter = (props) => {
  const { sayi, arSayi, azSayi } = props;
  return (
    <>
      <h1>Counter</h1>
      <h3>{sayi}</h3>
      <button onClick={() => arSayi()}>Artir</button>
      <button onClick={() => azSayi()}>Azalt</button>
    </>
  );
};

function mapStateToProps(state) {
  console.log("hat3")
  return {
    sayi: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  console.log("hat4")
  return {
    arSayi: () => dispatch(incCounter(2)),
    azSayi: () => dispatch(decCounter(2))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

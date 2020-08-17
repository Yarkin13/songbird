import React, { useState } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import RoundList from "./components/RoundList/RoundList";
import UnknownBirdContainer from "./components/UnknownBirdConatiner/UnknownBirdContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import Button from "./components/Button";
import Result from "./components/Result";
import { connect } from "react-redux";

function App(props) {
  if (props.round === 6) {
    return (
      <div className={classes.wrapper}>
        <Header />
        <RoundList />
        <Result />
      </div>
    );
  } else {
    return (
      <div className={classes.wrapper}>
        <Header />
        <RoundList />
        <UnknownBirdContainer />
        <MainContainer />
        <Button />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.round.round,
  };
};

export default connect(mapStateToProps, null)(App);

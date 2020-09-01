import React from "react";
import classes from "./Quiz.module.scss";
import Header from "./Header/Header";
import RoundList from "./RoundList/RoundList";
import UnknownBirdContainer from "./UnknownBirdConatiner/UnknownBirdContainer";
import MainContainer from "./MainContainer/MainContainer";
import Button from "./Button";
import Result from "./Result";
import { connect } from "react-redux";


function Quiz(props) {
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


export default connect(mapStateToProps, null)(Quiz);
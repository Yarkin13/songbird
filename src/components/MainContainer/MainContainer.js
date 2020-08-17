import React from "react";
import classes from "./MainContainer.module.scss";
import BirdsList from "./BirdsList";
import BirdDescription from "./BirdDescription";
import PropTypes from "prop-types";

function MainContainer() {
  return (
    <div className={classes.wrapper}>
      <BirdsList></BirdsList>
      <BirdDescription></BirdDescription>
    </div>
  );
}

MainContainer.propTypes = {
  currentRound: PropTypes.number,
  checkBird: PropTypes.func,
  chosenBird: PropTypes.object,
  isStart: PropTypes.bool,
};

export default MainContainer;

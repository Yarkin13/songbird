import React from "react";
import PropTypes from "prop-types";
import classes from "./UnknownBirdTitle.module.scss";

function UnknownBirdTitle(props) {
  if (props.unknownBird.completed) {
    return <div className={classes.birdTitle}>{props.unknownBird.name}</div>;
  } else {
    return <div className={classes.birdTitle}>***</div>;
  }
}

UnknownBirdTitle.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default UnknownBirdTitle;

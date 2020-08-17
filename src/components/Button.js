import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";
import { connect } from "react-redux";
import { incrementRound, addUnknownBird, choseBird } from "../redux/actions";

function Button(props) {
  const nextRound = () => {
    props.incrementRound();
    props.choseBird({})
    if (props.round < 5) props.addUnknownBird(props.round + 1);
    document.querySelectorAll("#indicator").forEach((el) => {
      el.className = classes.indicator;
      el.className = classes.indicator;
    });
  };

  if (props.unknownBird.completed) {
    return (
      <div className={classes.wrapper}>
        <button className={classes.show} onClick={nextRound}>
          Следующий вопрос
        </button>
      </div>
    );
  } else {
    return (
      <div className={classes.wrapper}>
        <button className={classes.hide}>Следующий вопрос</button>
      </div>
    );
  }
}

Button.propTypes = {
  currentBird: PropTypes.object,
  nextRound: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    unknownBird: state.unknownBird.unknownBird,
    round: state.round.round,
  };
};

const mapDispatchToProps = {
  incrementRound,
  addUnknownBird,
  choseBird,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

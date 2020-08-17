import React from "react";
import PropTypes from "prop-types";
import classes from "./BirdListItem.module.scss";
import { connect } from "react-redux";
import {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  removeScore,
  addAttempts,
  addScore,
} from "../../redux/actions";
import birdsData from "../../data/birds";
import correctSound from "../../assets/audio/correct.mp3";
import incorrectSound from "../../assets/audio/error.mp3";

function BirdListItem(props) {
  console.log(props.unknownBird.name)
  const checkBird = (event) => {
    props.choseBird({
      ...birdsData[props.currentRound].find(
        (bird) => bird.name === props.title
      ),
      completed: true,
    });
    if (!props.unknownBird.completed) {
      if (event.target.textContent === props.unknownBird.name) {
        event.target.childNodes[1].classList.add(classes.correct);
        getCorrectSound();
        props.addScore(props.attempts);
        props.chosenCorrectBird();
        props.removeAttempts()
      } else {
        event.target.childNodes[1].classList.add(classes.incorrect);
        getIncorrectSound();
        props.addAttempts();
      }
    }
  };

  const getCorrectSound = () => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = correctSound;
    audio.play();
  };

  const getIncorrectSound = () => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = incorrectSound;
    audio.play();
  };

  return (
    <li className={classes.bird} onClick={checkBird} id="bird">
      {props.title}
      <span className={classes.indicator} id="indicator"></span>
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    currentRound: state.round.round,
    chosenBird: state.chosenBird,
    unknownBird: state.unknownBird.unknownBird,
    attempts: state.score.attempts,
  };
};

const mapDispatchToProps = {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  removeScore,
  addAttempts,
  addScore,
};

BirdListItem.propTypes = {
  checkBird: PropTypes.func,
  title: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdListItem);

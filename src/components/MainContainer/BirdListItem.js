import React from 'react'
import classes from './BirdListItem.module.scss'
import { connect } from 'react-redux'
import {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  removeScore,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
} from '../../redux/actions'
import birdsData from '../../data/birds'
import correctSound from '../../assets/audio/correct.mp3'
import incorrectSound from '../../assets/audio/error.mp3'
import classNames from 'classnames'

function BirdListItem(props) {
  console.log(props.unknownBird.name)
  const checkBird = (event) => {
    props.choseBird({
      ...birdsData[props.currentRound].find(
        (bird) => bird.name === props.title
      ),
      completed: true,
    })
    if (!props.unknownBird.completed) {
      if (event.target.textContent === props.unknownBird.name) {
        getCorrectSound()
        props.addScore(props.attempts)
        props.chosenCorrectBird()
        props.removeAttempts()
        props.correctAnswer(props.index)
      } else {
        getIncorrectSound()
        props.addAttempts()
        props.incorrectAnswer(props.index)
      }
    }
  }

  const getCorrectSound = () => {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = correctSound
    audio.play()
  }

  const getIncorrectSound = () => {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = incorrectSound
    audio.play()
  }

  switch (props.answersResult[props.index]) {
    case true:
      return (
        <li className={classes.bird} onClick={checkBird}>
          {props.title}
          <span
            className={classNames(classes.indicator, classes.correct)}></span>
        </li>
      )
    case false:
      return (
        <li className={classes.bird} onClick={checkBird}>
          {props.title}
          <span
            className={classNames(classes.indicator, classes.incorrect)}></span>
        </li>
      )
    case '':
      return (
        <li className={classes.bird} onClick={checkBird}>
          {props.title}
          <span className={classes.indicator}></span>
        </li>
      )
    default:
      return
  }
}

const mapStateToProps = (state) => {
  return {
    currentRound: state.round.round,
    unknownBird: state.unknownBird.unknownBird,
    attempts: state.score.attempts,
    answersResult: state.answersResult.answersResult,
  }
}

const mapDispatchToProps = {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  removeScore,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdListItem)

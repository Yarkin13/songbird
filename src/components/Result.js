import React from 'react'
import classes from './Result.module.scss'
import absoluteWin from '../assets/image/absolute-win.gif'
import { connect } from 'react-redux'
import { removeRound, addUnknownBird, removeScore } from '../redux/actions'

function Result(props) {
  const startAgain = () => {
    props.removeRound()
    props.addUnknownBird(0)
    props.removeScore()
  }

  if (props.score === 30) {
    return (
      <div className={classes.wrapper}>
        <h1>Поздравляем c абсолютной победой</h1>
        <h3>
          Вы прошли викторину и заработали {props.score} из 30 возможных балов
        </h3>
        <div className={classes.absoluteWin}>
          <img src={absoluteWin} alt={absoluteWin}></img>
        </div>
        <button className={classes.btn} onClick={startAgain}>
          Попробывать еще раз
        </button>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <h1>Поздравляем!</h1>
        <h3>
          Вы прошли викторину и заработали {props.score} из 30 возможных балов
        </h3>
        <button className={classes.btn} onClick={startAgain}>
          Попробывать еще раз
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.round.round,
    score: state.score.score,
  }
}

const mapDispatchToProps = {
  removeRound,
  addUnknownBird,
  removeScore,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

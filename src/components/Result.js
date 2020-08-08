import React from 'react'
import classes from './Result.module.scss'
import absoluteWin from '../assets/image/absolute-win.gif'
import PropTypes from 'prop-types'

function Result(props) {
  if (props.score === 30) {
    return (
      <div className={classes.wrapper}>
        <h1>Поздравляем c абсолютной победой</h1>
        <h3>
          Вы прошли викторину и заработали {props.score} из 30 возможных балов
        </h3>
        <div className={classes.absoluteWin}><img src={absoluteWin} alt={absoluteWin}></img></div>
        <button className={classes.btn} onClick={props.startAgain}>
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
        <button className={classes.btn} onClick={props.startAgain}>
          Попробывать еще раз
        </button>
      </div>
    )
  }
}

Result.propTypes = {
  score: PropTypes.number,
  startAgain: PropTypes.func
}

export default Result

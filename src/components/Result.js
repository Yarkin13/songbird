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
    createStatistic()
  }

  const createStatistic = () => {
    let statisticArray
    if (JSON.parse(localStorage.getItem('statistic')) == undefined) {
      statisticArray= []
    } else {
      statisticArray = JSON.parse(localStorage.getItem('statistic'))
    }
    const dateNow = new Date()
    const statistic = {
      score: props.score,
      date: `${dateNow.getDate().toString().padStart(2, 0)}.${(
        dateNow.getMonth() + 1
      )
        .toString()
        .padStart(2, 0)}.${dateNow
        .getFullYear()
        .toString()
        .padStart(2, 0)} ${dateNow
        .getHours()
        .toString()
        .padStart(2, 0)}:${dateNow
        .getMinutes()
        .toString()
        .padStart(2, 0)}:${dateNow.getSeconds().toString().padStart(2, 0)}`,
    }
    statisticArray.push(statistic)
    localStorage.setItem('statistic', JSON.stringify(statisticArray))
  }

  if (props.score === 30) {
    return (
      <div className={classes.wrapper}>
        <h1>Поздравляем c абсолютной победой</h1>
        <h3>
          Вы прошли викторину и заработали {props.score} из 30 возможных баллов
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
          Вы прошли викторину и заработали {props.score} из 30 возможных баллов
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

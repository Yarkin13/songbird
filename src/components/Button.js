import React from 'react'
import classes from './Button.module.scss'
import { connect } from 'react-redux'
import {
  incrementRound,
  addUnknownBird,
  choseBird,
  removeAnswers,
} from '../redux/actions'

function Button(props) {
  const nextRound = () => {
    props.incrementRound()
    props.choseBird({})
    if (props.round < 5) props.addUnknownBird(props.round + 1)
    props.removeAnswers()
  }

  if (props.unknownBird.completed) {
    return (
      <div className={classes.wrapper}>
        <button className={classes.show} onClick={nextRound}>
          Следующий вопрос
        </button>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <button className={classes.hide}>Следующий вопрос</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    unknownBird: state.unknownBird.unknownBird,
    round: state.round.round,
  }
}

const mapDispatchToProps = {
  incrementRound,
  addUnknownBird,
  choseBird,
  removeAnswers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

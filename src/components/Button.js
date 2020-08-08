import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.scss'

function Button(props) {
  if (props.currentBird.completed) {
    return (
      <div className={classes.wrapper}>
        <button className={classes.show} onClick={props.nextRound}>
        Следующий вопрос
        </button>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <button
          className={classes.hide}
          onClick={props.nextRound}>
            Следующий вопрос
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  currentBird: PropTypes.object,
  nextRound: PropTypes.func
}

export default Button

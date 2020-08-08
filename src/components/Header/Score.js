import React from 'react'
import PropTypes from 'prop-types'
import classes from './Score.module.scss'

function Score(props) {
  return <span className={classes.title}>Score:{props.score}</span>
}

Score.propTypes = {
  score: PropTypes.number
}

export default Score
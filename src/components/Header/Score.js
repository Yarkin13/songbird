import React from 'react'
import PropTypes from 'prop-types'
import classes from './Score.module.scss'
import { connect } from 'react-redux'

function Score(props) {
return <span className={classes.title}>Score:{props.score}</span>
}

const mapStateToProps = state => {
  return {
    score: state.score.score
  }
}

Score.propTypes = {
  score: PropTypes.number
}

export default connect(mapStateToProps, null)(Score)
import React from 'react'
import PropTypes from 'prop-types'
import classes from './UnknownBirdTitle.module.scss'

function UnknownBirdTitle(props) {
  let title = '***'
  if(props.completed) {
    title = props.title
  }
  return <div className={classes.birdTitle}>{title}</div>
}

UnknownBirdTitle.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}


export default UnknownBirdTitle

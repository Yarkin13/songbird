import React from 'react'
import classes from './UnknownBirdTitle.module.scss'

function UnknownBirdTitle(props) {
  if (props.unknownBird.completed) {
    return <div className={classes.birdTitle}>{props.unknownBird.name}</div>
  } else {
    return <div className={classes.birdTitle}>***</div>
  }
}

export default UnknownBirdTitle

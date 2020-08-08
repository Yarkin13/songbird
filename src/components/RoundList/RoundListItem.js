import React from 'react'
import PropTypes from 'prop-types'
import classes from './RoundListItem.module.scss'
import classNames from 'classnames'


function RoundListItem(props) {
  if(props.id === props.currentRound) {
    return <li className={classNames(classes.item, classes.active)}>{props.title}</li>
  } else {
    return <li className={classes.item}>{props.title}</li>
  }
  
}

RoundListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  currentRound: PropTypes.number
}

export default RoundListItem

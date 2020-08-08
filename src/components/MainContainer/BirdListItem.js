import React from 'react'
import PropTypes from 'prop-types'
import classes from './BirdListItem.module.scss'

function BirdListItem(props) {
  return (
    <li className={classes.bird} onClick={props.checkBird} id="bird">
      {props.title}
      <span className={classes.indicator} id="indicator"></span>
    </li>
  )
}

BirdListItem.propTypes = {
  checkBird: PropTypes.func,
  title: PropTypes.string
}

export default BirdListItem

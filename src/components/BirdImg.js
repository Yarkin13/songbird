import React from 'react'
import classes from './BirdImg.module.scss'
import unknownBird from '../assets/image/unknownBird.jpg'
import PropTypes from 'prop-types'

function BirdImg(props) {
  if (props.currentBird.completed) {
    return <img src={props.currentBird.image} className={classes.img} alt={props.currentBird.name}></img>
  } else {
    return <img src={unknownBird} className={classes.img} alt={'unknownBird'}></img>
  }
}

BirdImg.propTypes = {
  currentBird: PropTypes.object
}

export default BirdImg

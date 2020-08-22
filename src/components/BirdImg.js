import React from 'react'
import classes from './BirdImg.module.scss'
import unknownBird from '../assets/image/unknownBird.jpg'

function BirdImg(props) {
  if (props.bird.completed) {
    return <img src={props.bird.image} className={classes.img}></img>
  } else {
    return (
      <img src={unknownBird} className={classes.img} alt={'unknownBird'}></img>
    )
  }
}

export default BirdImg

import React from 'react'
import classes from './BirdDescription.module.scss'
import BirdImg from '../BirdImg'
import BirdPlayer from '../BirdPlayer'
import PropTypes from 'prop-types'

function BirdsDescription(props) {
  if (props.isStart) {
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
            <BirdImg currentBird={props.chosenBird}></BirdImg>
          </div>
          <div className={classes.wrapper__description}>
            <p className={classes.title}>{props.chosenBird.name}</p>
            <p className={classes.title}>{props.chosenBird.species}</p>
            <BirdPlayer audioSrc={props.chosenBird.audio}></BirdPlayer>
          </div>
        </div>
        <p className={classes.description}>{props.chosenBird.description}</p>
      </div>
    )
  } else {
    return (
      <div className={classes.container}>
        <p className={classes.begin}>
          Послушайте плеер и выберите птицу из списка
        </p>
      </div>
    )
  }
}

BirdsDescription.propTypes = {
  isStart: PropTypes.bool,
  chosenBird: PropTypes.object,
}

export default BirdsDescription

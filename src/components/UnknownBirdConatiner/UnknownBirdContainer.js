import React from 'react'
import BirdImg from '../BirdImg'
import UnknownBirdTitle from './UnknownBirdTitle'
import BirdPlayer from '../BirdPlayer'
import classes from './UnknownBirdContainer.module.scss'
import PropTypes from 'prop-types'

function UnknownBirdContainer(props) {
  console.log(props.currentBird.name)
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <BirdImg currentBird={props.currentBird}></BirdImg>
      </div>
      <div className={classes.wrapperPlayer}>
        <UnknownBirdTitle
          completed={props.currentBird.completed}
          title={props.currentBird.name}
        />
        <BirdPlayer audioSrc={props.currentBird.audio}></BirdPlayer>
      </div>
    </div>
  )
}

UnknownBirdContainer.propTypes = {
  currentBird: PropTypes.object,
}

export default UnknownBirdContainer

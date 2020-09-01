import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import classes from './BirdPlayer.module.scss'

function UnknownBirdPlayer(props) {
  return (
    <ReactAudioPlayer
      src={props.bird.audio}
      controls
      className={classes.player}
    />
  )
}

export default UnknownBirdPlayer

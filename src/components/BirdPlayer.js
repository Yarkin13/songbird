import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import PropTypes from 'prop-types'
import classes from './BirdPlayer.module.scss'

function UnknownBirdPlayer(props) {
  return <ReactAudioPlayer src={props.bird.audio} controls  className={classes.player}/>
}

UnknownBirdPlayer.propTypes = {
  audioSrc: PropTypes.string
}


export default UnknownBirdPlayer

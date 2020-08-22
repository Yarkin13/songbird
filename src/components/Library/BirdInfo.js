import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import classes from './BirdInfo.module.scss'
import classnames from 'classnames'

function BirdInfo(props) {
  console.log(props)
  if (props.show) {
    return (
      <li className={classnames(classes.item, classes.show)}>
        <div className={classes.mainWrapper}>
          <div>
            <img src={props.image} alt={props.name}></img>
          </div>
          <div>
            <p>{props.title}</p>
            <p>{props.species}</p>
            <p>{props.description}</p>
            <ReactAudioPlayer
              src={props.audio}
              controls
              className={classes.player}></ReactAudioPlayer>
          </div>
        </div>
      </li>
    )
  } else {
    return (
      <li className={classnames(classes.item, classes.hide)}>
        <div className={classes.mainWrapper}>
          <div>
            <img src={props.image} alt={props.name}></img>
          </div>
          <div>
            <p>{props.title}</p>
            <p>{props.species}</p>
            <p>{props.description}</p>
            <ReactAudioPlayer
              src={props.audio}
              controls
              className={classes.player}></ReactAudioPlayer>
          </div>
        </div>
      </li>
    )
  }
}

export default BirdInfo

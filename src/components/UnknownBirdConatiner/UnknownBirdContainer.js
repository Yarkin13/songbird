import React from 'react'
import BirdImg from '../BirdImg'
import UnknownBirdTitle from './UnknownBirdTitle'
import BirdPlayer from '../BirdPlayer'
import classes from './UnknownBirdContainer.module.scss'
import { connect } from 'react-redux'

function UnknownBirdContainer(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <BirdImg bird={props.unknownBird}></BirdImg>
      </div>
      <div className={classes.wrapperPlayer}>
        <UnknownBirdTitle unknownBird={props.unknownBird} />
        <BirdPlayer bird={props.unknownBird}></BirdPlayer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    unknownBird: state.unknownBird.unknownBird,
  }
}

export default connect(mapStateToProps, null)(UnknownBirdContainer)

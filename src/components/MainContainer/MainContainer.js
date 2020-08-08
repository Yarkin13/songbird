import React from 'react'
import classes from './MainContainer.module.scss'
import BirdsList from './BirdsList'
import BirdDescription from './BirdDescription'
import PropTypes from 'prop-types'

function MainContainer(props) {
  return (
    <div className={classes.wrapper}>
      <BirdsList currentRound={props.currentRound} checkBird={props.checkBird} chosenBird={props.chosenBird}></BirdsList>
      <BirdDescription chosenBird={props.chosenBird} isStart={props.isStart}></BirdDescription>
    </div>
  )
}

MainContainer.propTypes = {
  currentRound: PropTypes.number,
  checkBird: PropTypes.func,
  chosenBird: PropTypes.object,
  isStart: PropTypes.bool
}

export default MainContainer
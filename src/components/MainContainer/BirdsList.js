import React from 'react'
import classes from './BirdsList.module.scss'
import birdsData from '../../data/birds'
import BirdListItem from './BirdListItem'
import PropTypes from 'prop-types'

function BirdsList(props) {
  return (
    <ul className={classes.birdList}>
      {birdsData[props.currentRound].map((bird) => {
        return <BirdListItem key={bird.id} title={bird.name} checkBird={props.checkBird}></BirdListItem>
      })}
    </ul>
  )
}

BirdsList.propTypes = {
  currentRound: PropTypes.number,
  checkBird: PropTypes.func
}

export default BirdsList

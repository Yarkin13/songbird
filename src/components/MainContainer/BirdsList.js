import React from 'react'
import classes from './BirdsList.module.scss'
import birdsData from '../../data/birds'
import BirdListItem from './BirdListItem'
import { connect } from 'react-redux'

function BirdsList(props) {
  return (
    <ul className={classes.birdList}>
      {birdsData[props.round].map((bird) => {
        return (
          <BirdListItem
            key={bird.id}
            title={bird.name}
            index={bird.id}></BirdListItem>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    round: state.round.round,
  }
}

export default connect(mapStateToProps, null)(BirdsList)

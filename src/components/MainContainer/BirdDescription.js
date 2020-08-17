import React from 'react'
import classes from './BirdDescription.module.scss'
import BirdImg from '../BirdImg'
import BirdPlayer from '../BirdPlayer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function BirdsDescription(props) {
  if (Object.keys(props.chosenBird).length !== 0) {
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
            <BirdImg bird={props.chosenBird}></BirdImg>
          </div>
          <div className={classes.wrapper__description}>
            <p className={classes.title}>{props.chosenBird.name}</p>
            <p className={classes.title}>{props.chosenBird.species}</p>
            <BirdPlayer bird={props.chosenBird}></BirdPlayer>
          </div>
        </div>
        <p className={classes.description}>{props.chosenBird.description}</p>
      </div>
    )
  } else {
    return (
      <div className={classes.container}>
        <p className={classes.begin}>
          Прослушайте плеер и выберите птицу из списка
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chosenBird: state.chosenBird.chosenBird
  }
} 

BirdsDescription.propTypes = {
  isStart: PropTypes.bool,
  chosenBird: PropTypes.object,
}

export default connect(mapStateToProps, null)(BirdsDescription)

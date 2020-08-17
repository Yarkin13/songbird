import React from 'react'
import PropTypes from 'prop-types'
import classes from './RoundListItem.module.scss'
import classNames from 'classnames'
import {connect} from 'react-redux'


function RoundListItem(props) {
  if(props.id === props.round) {
    return <li className={classNames(classes.item, classes.active)}>{props.title}</li>
  } else {
    return <li className={classes.item}>{props.title}</li>
  }
  
}

const mapStateToProps = state => {
  return {
    round: state.round.round
  }
}

RoundListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  currentRound: PropTypes.number
}

export default connect(mapStateToProps, null)(RoundListItem)

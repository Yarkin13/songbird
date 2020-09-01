import React from 'react'
import classes from './StatisticItem.module.scss'

function StatisticItem(props) {
  return (
    <li className={classes.item}>
      <p className={classes.title}>{props.score}</p>
      <p className={classes.title}>{props.date}</p>
    </li>
  )
}

export default StatisticItem

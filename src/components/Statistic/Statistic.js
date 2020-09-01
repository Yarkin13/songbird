import React from 'react'
import StatisticItem from './StatisticItem'
import classes from './Statistic.module.scss'

function Statistic() {
  const statistic = JSON.parse(localStorage.getItem('statistic'))
  if (statistic == undefined) {
    return <h3>Вы пока не сыграли ни одной игры</h3>
  } else {
    return (
      <div>
        <h3>Статистика сыгранных игр</h3>
        <ul>
          <li className={classes.item}>
            <p className={classes.title}>Очки</p>
            <p className={classes.title}>Дата игры</p>
          </li>
          {statistic.map((el, index) => {
            return (
              <StatisticItem
                score={el.score}
                date={el.date}
                key={index}></StatisticItem>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Statistic

import React from 'react'
import RoundListItem from './RoundListItem'
import classes from './RoundList.module.scss'
import PropTypes from 'prop-types'

function RoundList(props) {
  const modes = [
    {
      id: 0,
      title: 'Разминка',
    },
    {
      id: 1,
      title: 'Воробьиные',
    },
    {
      id: 2,
      title: 'Лесные птицы',
    },
    {
      id: 3,
      title: 'Певчие птицы',
    },
    {
      id: 4,
      title: 'Хищные птицы',
    },
    {
      id: 5,
      title: 'Морские птицы',
    },
  ]
  return (
    <ul className={classes.wrapper}>
      {modes.map((bird) => {
        return <RoundListItem title={bird.title} key={bird.id } id={bird.id}></RoundListItem>
      })}
    </ul>
  )
}

RoundList.propTypes = {
  currentRound: PropTypes.number
}

export default RoundList

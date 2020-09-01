import React from 'react'
import classes from './MainContainer.module.scss'
import BirdsList from './BirdsList'
import BirdDescription from './BirdDescription'

function MainContainer() {
  return (
    <div className={classes.wrapper}>
      <BirdsList></BirdsList>
      <BirdDescription></BirdDescription>
    </div>
  )
}

export default MainContainer

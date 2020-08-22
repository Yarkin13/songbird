import React from 'react'
import classes from './Header.module.scss'
import Logo from './Logo'
import Score from './Score'

function Header(props) {
  return (
    <header className={classes.wrapper}>
      <Logo></Logo>
      <Score></Score>
    </header>
  )
}

export default Header

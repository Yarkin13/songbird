import React from 'react'
import PropTypes from 'prop-types'
import classes from './Header.module.scss'
import Logo from './Logo'
import Score from './Score'

function Header(props) {
  return (
    <header className={classes.wrapper}>
      <Logo></Logo>
      <Score score={props.score}></Score>
    </header>
  )
}

Header.propTypes = {
  score: PropTypes.number
}

export default Header

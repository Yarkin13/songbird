import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.scss'
import burgerMenu from '../assets/image/burger-menu.png'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { showMenu, hideMenu } from '../redux/actions'

function NavBar(props) {
  const changeMenuState = (event) => {
    if (props.showMenuFlag) {
      props.hideMenu()
    } else {
      props.showMenu()
    }
  }

  if (props.showMenuFlag) {
    return (
      <div className={classes.wrapper}>
        <img
          src={burgerMenu}
          alt="burger-menu"
          className={classnames(classes.menu, classes.rotate)}
          onClick={changeMenuState}></img>
        <ul className={classnames(classes.list, classes.show)}>
          <li>
            <Link onClick={changeMenuState} to="/">
              <p className={classes.item}>Викторина</p>
            </Link>
          </li>
          <li>
            <Link onClick={changeMenuState} to="/library">
              <p className={classes.item}>Библиотека</p>
            </Link>
          </li>
          <li>
            <Link onClick={changeMenuState} to="/statistic">
              <p className={classes.item}>Статистика</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <img
          src={burgerMenu}
          alt="burger-menu"
          className={classes.menu}
          onClick={changeMenuState}></img>
        <ul className={classnames(classes.list, classes.hide)}>
          <li>
            <Link onClick={changeMenuState} to="/">
              <p className={classes.item}>Викторина</p>
            </Link>
          </li>
          <li>
            <Link onClick={changeMenuState} to="/library">
              <p className={classes.item}>Библиотека</p>
            </Link>
          </li>
          <li>
            <Link onClick={changeMenuState} to="/statistic">
              <p className={classes.item}>Статистика</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showMenuFlag: state.showMenu.showMenuFlag,
  }
}

const mapDispatchToProps = {
  showMenu,
  hideMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

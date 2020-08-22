import React from 'react'
import { connect } from 'react-redux'
import Quiz from './components/Quiz'
import Statistic from './components/Statistic'
import Library from './components/Library/Library'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import classes from './App.module.scss'
import { hideMenu } from './redux/actions'

function App(props) {
  const hideMenuHandler = () => {
    if (props.showMenuFlag) {
      props.hideMenu()
    }
  }
  return (
    <BrowserRouter>
      <div className={classes.wrapper} onClick={hideMenuHandler}>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Quiz></Quiz>
          </Route>
          <Route exact path="/statistic">
            <Statistic></Statistic>
          </Route>
          <Route exact path="/library">
            <Library></Library>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    showMenuFlag: state.showMenu.showMenuFlag,
  }
}

const mapDispatchToProps = {
  hideMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

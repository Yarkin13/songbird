import React, { useState } from 'react'
import classes from './App.module.scss'
import Header from './components/Header/Header'
import RoundList from './components/RoundList/RoundList'
import UnknownBirdContainer from './components/UnknownBirdConatiner/UnknownBirdContainer'
import MainContainer from './components/MainContainer/MainContainer'
import Button from './components/Button'
import Result from './components/Result'
import birdsData from './data/birds'
import correctSound from './assets/audio/correct.mp3'
import incorrectSound from './assets/audio/error.mp3'

function App() {
  const [isStart, setIsStart] = useState(false)
  let [currentRound, setCurrentRound] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const rnd = Math.round(0 + Math.random() * (5 - 0))
  const [score, setScore] = useState(0)
  const [currentBird, setCurrentBird] = useState({
    id: birdsData[currentRound][rnd].id,
    name: birdsData[currentRound][rnd].name,
    species: birdsData[currentRound][rnd].species,
    description: birdsData[currentRound][rnd].description,
    image: birdsData[currentRound][rnd].image,
    audio: birdsData[currentRound][rnd].audio,
    completed: false,
  })
  const [completedGame, setCompletedGame] = useState(false)
  const [chosenBird, setChosenBird] = useState({})
  const nextRound = () => {
    setIsStart(false)
    setAttempts(0)
    if (currentRound === 5) {
      setCurrentRound(0)
      setCompletedGame(true)
    } else {
      setCurrentRound((currentRound += 1))
    }

    const rnd = Math.round(0 + Math.random() * (5 - 0))
    setCurrentBird({
      id: birdsData[currentRound][rnd].id,
      name: birdsData[currentRound][rnd].name,
      species: birdsData[currentRound][rnd].species,
      description: birdsData[currentRound][rnd].description,
      image: birdsData[currentRound][rnd].image,
      audio: birdsData[currentRound][rnd].audio,
      completed: false,
    })
    document.querySelectorAll('#bird').forEach((bird) => {
      bird.classList.remove(classes.noactive)
    })
    document.querySelectorAll('#indicator').forEach((bird) => {
      bird.classList.remove(classes.correct)
      bird.classList.remove(classes.incorrect)
    })
  }

  const checkBird = (event) => {
    if (event.target.tagName === 'SPAN') return
    setIsStart(true)
    const target = birdsData[currentRound].find(
      (bird) => bird.name === event.target.textContent
    )
    target.completed = true
    if (event.target.textContent === currentBird.name) {
      if(!currentBird.completed) {
        setScore(score + 5 + attempts)
      }
      console.log(currentBird)
      setChosenBird(target)
      setCurrentBird(target)
      event.target.querySelector('#indicator').classList.add(classes.correct)
      getCorrectSound()
    } else {
      setChosenBird(target)
      setAttempts(attempts - 1)
      event.target.classList.add(classes.noactive)
      if (!currentBird.completed) {
        getIncorrectSound()
        event.target
          .querySelector('#indicator')
          .classList.add(classes.incorrect)
      }
    }
  }

  const startAgain = () => {
    const rnd = Math.round(0 + Math.random() * (5 - 0))
    setScore(0)
    setCurrentBird({
      id: birdsData[currentRound][rnd].id,
      name: birdsData[currentRound][rnd].name,
      species: birdsData[currentRound][rnd].species,
      description: birdsData[currentRound][rnd].description,
      image: birdsData[currentRound][rnd].image,
      audio: birdsData[currentRound][rnd].audio,
      completed: false,
    })
    setCompletedGame(false)
  }

  const getCorrectSound = () => {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = correctSound
    audio.play()
  }

  const getIncorrectSound = () => {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = incorrectSound
    audio.play()
  }

  if (completedGame) {
    return (
      <div className={classes.wrapper}>
        <Header score={score}></Header>
        <RoundList currentRound={currentRound}></RoundList>
        <Result score={score} startAgain={startAgain}></Result>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <Header score={score}></Header>
        <RoundList currentRound={currentRound}></RoundList>
        <UnknownBirdContainer currentBird={currentBird}></UnknownBirdContainer>
        <MainContainer
          isStart={isStart}
          currentRound={currentRound}
          checkBird={checkBird}
          chosenBird={chosenBird}></MainContainer>
        <Button nextRound={nextRound} currentBird={currentBird}></Button>
      </div>
    )
  }
}

export default App

import React from 'react'
import birdsData from '../../data/birds'
import BirdInfo from './BirdInfo'
import classes from './KindBird.module.scss'
import { connect } from 'react-redux'
import { showBirdList } from '../../redux/actions'

function KindBird(props) {
  const toggleBirdList = () => {
    if (props.id === props.idKind) {
      props.showBirdList('')
    } else {
      window.scroll(0, props.id * 83)
      props.showBirdList(props.id)
    }
  }
  if (props.id === props.idKind) {
    return (
      <li className={classes.item}>
        <p className={classes.title} onClick={toggleBirdList}>
          {props.id}.{' ' + props.title}
        </p>
        <ul className={classes.show}>
          {birdsData[props.id].map((bird) => {
            return (
              <BirdInfo
                title={bird.name}
                image={bird.image}
                audio={bird.audio}
                species={bird.species}
                description={bird.description}
                show={true}></BirdInfo>
            )
          })}
        </ul>
      </li>
    )
  } else {
    return (
      <li className={classes.item}>
        <p className={classes.title} onClick={toggleBirdList}>
          {props.id}.{' ' + props.title}
        </p>
        <ul className={classes.show}>
          {birdsData[props.id].map((bird) => {
            return (
              <BirdInfo
                title={bird.name}
                image={bird.image}
                audio={bird.audio}
                species={bird.species}
                description={bird.description}
                show={false}></BirdInfo>
            )
          })}
        </ul>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showBirdListFlag: state.showLibraryBirdList.libraryShowFlag,
    idKind: state.showLibraryBirdList.idKind,
  }
}

const mapDispatchToProps = {
  showBirdList,
}

export default connect(mapStateToProps, mapDispatchToProps)(KindBird)

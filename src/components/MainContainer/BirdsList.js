import React from "react";
import classes from "./BirdsList.module.scss";
import birdsData from "../../data/birds";
import BirdListItem from "./BirdListItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function BirdsList(props) {
  return (
    <ul className={classes.birdList}>
      {birdsData[props.round].map((bird) => {
        return <BirdListItem key={bird.id} title={bird.name}></BirdListItem>;
      })}
    </ul>
  );
}

BirdsList.propTypes = {
  currentRound: PropTypes.number,
  checkBird: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    round: state.round.round,
  };
};

export default connect(mapStateToProps, null)(BirdsList);

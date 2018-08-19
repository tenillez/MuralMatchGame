import React from "react";
import "./MuralCard.css";

const MuralCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectMural(props.name)}
        className={props.score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
      >
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default MuralCard;

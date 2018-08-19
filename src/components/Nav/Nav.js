import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-justified">
            <li><a href="/">Austin Murals' Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "purple"}}>{props.score}</span> | Top Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Nav;
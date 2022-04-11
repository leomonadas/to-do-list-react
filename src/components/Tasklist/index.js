import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Tasklist(props) {
    const [count, setcount] = useState();

    return(
        <div className="tasklist">
            <div className="title">{props.title}</div>
            <div className="content"></div>
        </div>
    )
}

Tasklist.propTypes = {
    title: PropTypes.string,

}
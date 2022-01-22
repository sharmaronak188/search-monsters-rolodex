import React from "react";

import './cardlist.styles.css'

export const CardList = (props) => {
    return <div className="card-list">{props.children}</div>;
}
import React from "react";
import "./Food.css";


export default function Food(props) {
  return (
    <>
        <div className="food_details">
            <div>{props.date}</div>
                <h2>{props.title}</h2>
                <div>${props.price}</div>
        </div>
    </>
  );
}

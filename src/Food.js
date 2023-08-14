import React,{useState} from "react";
import "./Food.css";


const Food =(props) =>{
   
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

export default Food;
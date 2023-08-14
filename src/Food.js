import React,{useState} from "react";
import "./Food.css";


export default function Food(props) {
    const [title, settitle] = useState(props.title);
    const [newTitle, setnewTitle] = useState("Hi");

    const ChangeHandler = (event)=>{
      setnewTitle(event.target.value);
    } 

    const ClickHandler = ()=>{
      settitle(newTitle);
    }
  return (
    <>
        <div className="food_details">
            <div>{props.date}</div>
                <h2>{title}</h2>
                <div>${props.price}</div>
                <input type="text" value={newTitle}  onChange={ChangeHandler} />
                <button className="btn btn-primary" onClick={ClickHandler}>Change Title</button>
        </div>
    </>
  );
}

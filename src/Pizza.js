import React, { useState } from "react";

export default function Pizza(props) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const changeTitle=(event)=>{
    setTitle(event.target.value);
  }

  const changePrice=(event)=>{
    setPrice(event.target.value);
  }

  const changeDate=(event)=>{
    setDate(event.target.value);
  }
  
  const formSubmited=(event)=>{
    event.preventDefault();

    const FoodData ={
      title: title,
      price: price,
      date: date
    }
    props.secondFoodData(FoodData);
    console.log(FoodData);
    setTitle('');
    setPrice('');
    setDate('');
  }
  return (
   <div className="container">
    <form onSubmit={formSubmited}>
      <div className="row">
      <div className="form-group col-md-6">
        <input type="text" value={title} onChange={changeTitle} className="form-control form-control-sm" placeholder="Title" />
      </div>
      <div className="form-group col-md-6">
        <input type="number" value={price} onChange={changePrice} placeholder="Price" className="form-control form-control-sm"  />
      </div>
      <div className="form-group col-md-6 mt-2">
        <input type="date" value={date} onChange={changeDate} placeholder="Date" className="form-control form-control-sm" />
      </div>
      </div>
      <center className="mt-2">
      <button type="submit" className="btn btn-sm btn-primary">Submit</button>
      <button type="reset" className="btn btn-sm btn-light" style={{marginLeft:'5px'}}>Reset</button>
      </center>
    </form>
   </div>
  );
}

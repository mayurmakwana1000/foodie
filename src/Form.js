import React,{useState} from 'react';

export default function Form(props) {

        const [entredtitle, setEnteredTitle] = useState('');
        const [entreddate, setEnteredDate] = useState('');
        const [entredprice, setEnteredPrice] = useState('');

        const changeTitle = (e)=>{
            setEnteredTitle(e.target.value);
        }

        const changePrice=(e)=>{
            setEnteredDate(e.target.value);
        }

        const changeDate=(e)=>{
            setEnteredDate(e.target.value);
        }

        const EnteredData=()=>{
            setEnteredDate(entreddate);
            setEnteredPrice(entredprice);
            setEnteredTitle(entredtitle);
        }

        const submitHandler =(e)=>{
            e.preventDefault();

            const foodData ={
                title: entredtitle,
                date: entreddate,
                price: entredprice,
            }
            console.log(foodData);
            setEnteredTitle('');
            setEnteredPrice('');
            setEnteredDate('');

        }
  return (
    <div className='container'>
       <form onSubmit={submitHandler} style={{backgroundColor:'red', padding:'20px', borderRadius: '20px'}}>
        <div className="form-inline row">
        <div className="form-group col-md-6">
                <input type="text" className='form-control form-control-sm' value={entredtitle} onChange={changeTitle} placeholder='title' />
            </div> 
            <div className="form-group col-md-6">
                <input type="number" min={1} max={500} value={entredprice} onChange={changePrice} className='form-control form-control-sm' placeholder='price' />
            </div>
            <div className="form-group col-md-6">
                <input type="date" value={entreddate}  onChange={changeDate} className='form-control form-control-sm mt-2'  />
            </div>
        </div>
        <center>
        <button type='submit' className="btn btn-sm btn-success mt-2" onClick={EnteredData}>Submit</button>
        <button type='reset' className="btn btn-sm btn-light mx-2 mt-2">Reset</button>
        </center>
       </form>
    </div>
  )
}

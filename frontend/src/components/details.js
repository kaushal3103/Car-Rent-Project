
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const Details = ()=>{
  const {id} = useParams();
  const [data,setData] = useState({});


 useEffect(()=>{
    const fetchcar = async()=>{
        try{
           const res = await axios.get(`http://localhost:3000/api/v1/car/getcar/${id}`);
            setData(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    fetchcar();
 },[])
    return (
       <div className='details'>

        <div className='imgcontainer'>
           <img src={data.img} />
        </div>
        
        <div className='moreinfo'>
        <h1>{data.name}</h1>
        <div className='modelandnumber'>
          <h3>Model: {data.model}</h3>
        <h3>Vechile Number: {data.vechileNumber}</h3>
        </div>
       
        <p>{data.description}</p>
        <div className='capcolorcost'>
         <h2>Capacity: {data.capacity}</h2>
        <h2>Color: {data.color}</h2>
        <h2>Rent/Day: {data.rentcost}</h2>
        </div>
        
        <div className='bookbtn'>
           <Link to = "/"><button className='btn'>Back</button></Link>
           {
            data.currentbooking === 'available' ?  <Link to ={`/bookform/${data._id}`}><button className='btn1'>Book</button></Link> :<button className='btn1' style={{cursor:'not-allowed',opacity:'0.65'}}>Book</button>
            }
                        
         
        </div>
        
        </div>
       
       </div>
    )
}

export default Details;
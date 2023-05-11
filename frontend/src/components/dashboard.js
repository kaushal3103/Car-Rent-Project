
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard =()=>{
    
    const [cardata,setCardata] = useState([]);

    useEffect(()=>{
      const fetchdata =async()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/v1/car/dashboard");
             setCardata(res.data);
        }catch(error){
            console.log(error);
        }
       
      }
       fetchdata();
    },[]);
  

    return (
        <div className='dashboard'>
            <h1 style={{fontSize:'40px'}}>Dashboard</h1>
            {
                cardata.length > 1 && cardata.map((data)=>{
                    return (
                       <div className='carcard'> 
                         <div className='imgcontainer'>
                         <img src = {data.img} style={{height:'250px'}}></img>
                         </div>
                         <div className='info'>
                         <h3> {data.name}</h3> 
                         <div className='shortable'>
                          <table>
                            <thead>
                                <tr>
                                    <th>Color</th>
                                    <th>Seat Capacity</th>
                                    <th>Rent/Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.color}</td>
                                    <td>{data.capacity}</td>
                                    <td>{data.rentcost}</td>
                                </tr>
                            </tbody>
                          </table>
                         </div>
                             
                        <div className='twobtn'>
                         <Link to ={`details/${data._id}`}><button className='btn'>Details</button></Link>
                          <div>
                            {
                                data.currentbooking === 'available' ?  <Link to ={`/bookform/${data._id}`}><button className='btn2'>Book</button></Link> :<button className='btn2' style={{cursor:'not-allowed',opacity:'0.65'}}>Book</button>
                            }
                        
                         {
                            data.currentbooking === 'available' ? <p style={{marginLeft:'70px',fontSize:'20px'}}>{data.currentbooking}</p> : <p style={{marginLeft:'70px',fontSize:'20px',color:'red'}}>{data.currentbooking}</p>
                         }
                         
                         </div>
                         </div>
                         
                          <div className='line'> </div>
                         </div>
                         
                       </div>
                       
                    
                    )
                })
            }
        </div>
    )
}

export default Dashboard;
import axios from 'axios';
import React ,{useState}from 'react';
import { useParams } from "react-router";
import { useNavigate,Link } from 'react-router-dom';
const Bookform =()=>{
   const navigate = useNavigate();
  
    const {id} = useParams();
    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [issueDate,setIssueDate] = useState("");
    const [returnDate,setReturnDate] = useState("");
   
    const createuser = async(e)=>{
        e.preventDefault();

       

        try{
             const user = {name,number:contact,issuedate:issueDate,returndate:returnDate,carRented:id};
             const currentbooking = {currentbooking:'unavailable'};
             const res = await axios.post(`http://localhost:3000/api/v1/user/book/${id}`,user);
             const res1 = await axios.patch(`http://localhost:3000/api/v1/car/carupdate/${id}`,currentbooking);
              
             window.alert("Successfully Booked");

              navigate("/");
        }catch(error){
             console.log(error);
        }
    }

 return (
    <div className='bookform'>
        
        <h1>Book Now Form</h1>

        <div className='alldetails'>
        <div>
         <img src = "https://www.shutterstock.com/image-vector/happy-family-traveling-together-by-260nw-289057403.jpg" style={{height:'250px',marginTop:'20px'}}/>
        </div>
       
       <form className='bookformdetails'>
       
         
          <div>
            <label for="name" style={{float:'left',fontSize:'30px'}}>Name</label>
        <input type="text" name="name" className="bookip" onChange={(e)=>setName(e.target.value)}/>
          </div>
       
        

        
        <div>
         <label for="contact" style={{float:'left',fontSize:'30px'}}>Contact Number</label>
        <input type="tel" name="contact" className="bookip" placeholder='+91' onChange={(e)=>setContact(e.target.value)}/>
        
        </div>
       

        <div>
             <label for="issue-date" style={{float:'left',fontSize:'30px'}}>Issue Date</label>
        <input type="date" name="issuedate" className="bookip" onChange={(e)=>setIssueDate(e.target.value)} />
       
        </div>
       

          <div>
    <label for="return-date" style={{float:'left',fontSize:'30px'}}>Return Date</label>
        <input type="date" name="returndate" className="bookip" onChange={(e)=>setReturnDate(e.target.value)}/>
       
          </div>
        
         
       </form>
   
   </div>


       <div>
         <Link to = "/"><button className='btn'>Back</button></Link>
          <button className='btn' onClick={createuser}>Book Now</button>
       </div>
       
    </div>
 )
}


export default Bookform ;
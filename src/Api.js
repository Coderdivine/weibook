import React, { useEffect, useState } from 'react'
import axios from "axios";
function Api() {
    const[search,setSearch]=useState("");
    const[data_,setData_]=useState([]);
    const options =
     { method: 'GET',
      url: 'https://filepursuit.p.rapidapi.com/',
      params: {q:{search}},
       headers: { 'x-rapidapi-host': 'filepursuit.p.rapidapi.com', 'x-rapidapi-key': '2c2d2c930bmsh34aba5ca3857f41p13773fjsn95f9d1e0ed98' 
    } };
    const GetData_=async()=>{
     await axios.request(options)
        .then(function (response) { 
            	console.log(response.data); 
                setData_(response.data);
            })
            .catch(function (error)
            { 	console.error(error); 
            });
    }
    useEffect(()=>{
        GetData_()
    },[])
        
  return (
    <div>

<div className='input_board'>
  <input value={search} placeholder='Search for e-books,files,audio using our sponsored api'
    onChange={(e)=>setSearch(e.target.value)}
    type='search'
  />  
    </div>  
    <div>
    
    </div> 
    </div>
  )
}

export default Api
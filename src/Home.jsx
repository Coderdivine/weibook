import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Axios } from './Contact';
import {Link} from "react-router-dom";
import Api from './Api';

function Home() {
    const[data,setData]=useState("");
    const[search,setSearch]=useState("");
    const GetData = async()=>{
       await Axios.get("/books").then((response)=>{
           setData(response.data)
       })
    }
    useEffect(()=>{
        GetData();
    },[])
    //name,url,img
    const mapped_=data && data.filter((lists)=>{
        if(search==""){return lists}else if(lists.name.toLowerCase().includes(search.toLowerCase())){return lists}
      }).map(x=><div key={x.id}>

<div class="box">
<Link to={{pathname:`/${x.name}`}}>
<img src={x.img} alt={x.name} />
</Link>
        <div class="content">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>
        </div>
        <Link to={{pathname:`/${x.name}`}}>
            <a href="#" class="title">{x.name}</a>
            </Link>
        <p>This book is gotten from www.pdfdrive.com</p>
        <div class="info">
            <h3> <i class="far fa-clock"></i>E-book</h3>
            <h3> <i class="far fa-calendar-alt"></i>Full download</h3>
            <h3> <i class="fas fa-book"></i>click to get </h3>
        </div>
    </div>
</div>

    </div>)
  return (<div>

<section class="course" id="course">

<div className='input_board'>
  <input value={search} placeholder='What is the book on your mind...'
    onChange={(e)=>setSearch(e.target.value)}
    type='search'
  />  
    </div>   

<div class="box-container">
    {mapped_}

</div>

</section>



  </div>
  )
}

export default Home
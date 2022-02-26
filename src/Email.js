import React,{useState,useEffect} from 'react'
import {Axios} from "./Contact"
import {useParams} from "react-router-dom";

function Email() {
    const {names} = useParams()
    const[email,setEmail]=useState("");
    const[isActive,setIsActive]=useState(false);
    const[data,setData]=useState(null);
const locals = localStorage.getItem("localIsActive");
const GetData=async()=>{
await Axios.get("/books").then((response)=>{
    setData(response.data);
})
}
useEffect(() => {
 GetData()
}, [names])
useEffect(()=>{
  if(locals){
    setIsActive(true);

  }

},[])


const HandleR=(URL)=>{
  if(isActive){
    window.location = URL;
  }
  else{
   alert("Please suscribe to Book shelf \n berfore accessing any book!")
  console.log(URL)
  }
}

const sendData= async(links)=>{
  //localStorage.setItem("localIsActive",email);

   await Axios.post("/emails",{type:"ebook",email:email})
   .then((response)=>{
 localStorage.setItem("localIsActive",email);
        alert("Succesfull \n You can search for books.");
    window.location = links;
    })
   
}
const setLocal=(links)=>{
  if(email.length >= 7){
   
      sendData(links)
}else{
alert("Please insert Correct input")
}

}
    return (
        <div>
            
        
    {
  data && data.filter(x=>{
      if(x.name=== names){
          return x.name
      }
  }).map(({name,des,img,url})=><div>
      

    <main role="main">
      <section class="ui-section-hero">
        <div class="ui-layout-container">
          <div class="ui-layout-column-6 ui-layout-column-center">
            
            <a href="#" role="link" aria-label="#" class="ui-section-hero--logo">

              <svg viewBox="0 0 48 48" height="48" width="48">
                <rect fill="#353535" height="48" width="48" rx="8"/>
                <path fill="#FFF" d="M12 13h6v12a6 6 000 012 0v-4h6v4c9 11.627-5.373 12-12 12s-12-15.373-12-122V13zm24 6v-6h-7v6h6z"/>
              </svg>
            </a>
            
            <div class="ui-section-hero--content">
              <h1>{name} Book(PDF) for free!</h1>
              <p class="ui-text-intro">{des}
              </p>
             
              <div class="ui-component-cta ui-layout-flex">
                <form action='#' class="ui-component-form ui-layout-grid ui-layout-column-4" onSubmit={()=>setLocal(url)}>
                  <input id="email" type="email" placeholder="Email" class="ui-component-input ui-component-input-medium" onChange={(e)=>setEmail(e.target.value)} required />
                  <button type="submit" class="ui-component-button ui-component-button-medium ui-component-button-primary">Download Now</button>
                </form>
                <p class="ui-text-note"><small>We give out ebook for free suscribe now !</small></p>
              </div>
            </div>
            
            <img src={img} loading="lazy" alt={name} />
          </div>
        </div>
      </section>
    </main>
</div>)
     }



  


        </div>
    )
}

export default Email;

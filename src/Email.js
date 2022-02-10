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
console.log(data)
useEffect(() => {
 GetData()
}, [names])
if(locals){
setIsActive(true);
}
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
   await Axios.post("/emails",{type:"ebook",email:email}).then((response)=>{
 localStorage.setItem("localIsActive",email)
        alert("Succesfull \n You can search for books.");
    window.location = links;
    })
}
const setLocal=(links)=>{
if(email.length >= 7){
    console.log(links)
    sendData(links)
}else{
alert("Please insert Correct input")
}

}
    return (
        <div>
            <header role="banner" class="ui-section-header">
      <div class="ui-layout-container">
        <div class="ui-section-header__layout ui-layout-flex">
          <a href="#" role="link" aria-label="#">
            <svg viewBox="0 0 18 18" height="18" width="18" role="img" aria-label="#">
              <path fill="#353535" d="M16 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com/Chimdi.xo/" role="link" aria-label="#">
            <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="#353535" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
        <div>
        </div>
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
                <form class="ui-component-form ui-layout-grid ui-layout-column-4" onSubmit={()=>setLocal(url)}>
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



    <footer role="contentinfo" class="ui-section-footer">
      <div class="ui-layout-container">
        <div class="ui-section-footer__layout ui-layout-flex">
          
          <p class="ui-section-footer--copyright ui-text-note"><small>&copy; Copyright - 2022 We book</small></p>
          
          <a href="https://www.facebook.com/roydnxcy" role="link" aria-label="#" class="ui-text-note"><small>Facebook</small></a>
          <a href="https://www.pdfdrive.com" role="link" aria-label="#" class="ui-text-note"><small>Drive</small></a>
        </div>
      </div>
    </footer>



        </div>
    )
}

export default Email;

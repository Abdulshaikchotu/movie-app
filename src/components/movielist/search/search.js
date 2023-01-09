import { useState,useEffect } from "react"

let Search=()=>{

    let [posters1,setposters1]=useState("")
    let [posters2,setposters2]=useState("")
    let [posters3,setposters3]=useState("")
    let [posters4,setposters4]=useState("")
    let [posters5,setposters5]=useState("")
    let [posters6,setposters6]=useState("")
    let [posters7,setposters7]=useState("")
    let [posters8,setposters8]=useState("")
    let [posters9,setposters9]=useState("")
    let [posters10,setposters10]=useState("")
    let[sea1,setsea1]=useState(false)
    let[sea2,setsea2]=useState(false)
    let[sea3,setsea3]=useState(false)
    let[sea4,setsea4]=useState(false)
    let[sea5,setsea5]=useState(false)
    let[sea6,setsea6]=useState(false)
    let[sea7,setsea7]=useState(false)
    let[sea8,setsea8]=useState(false)
    let[sea9,setsea9]=useState(false)
    let[sea10,setsea10]=useState(false)
  
    useEffect(()=>{
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters1(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0944947&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters2(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0944948&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters3(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0800901&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters4(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0800902&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters5(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0800903&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters6(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0810922&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters7(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0810900&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters8(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0810910&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters9(res.Poster))
        fetch("http://www.omdbapi.com/?i=tt0810920&apikey=ad432592")
        .then((res)=> {return res.json()})
        .then((res)=>setposters10(res.Poster))


    },[])
    // console.log(posters);

   function searchmovie(e){
    if(e.target.value==="Gurdians"){
        setsea1(true)
    }
    if(e.target.value==="Game"){
        setsea2(true)
    }
    if(e.target.value==="before"){
        setsea3(true)
    }
    if(e.target.value==="kung"){
        setsea4(true)
    }
    if(e.target.value==="cartoon-1"){
        setsea5(true)
    }
    if(e.target.value==="cartoon2"){
        setsea6(true)
    }
    if(e.target.value==="Take ME"){
        setsea7(true)
    }
    if(e.target.value==="HIGH"){
        setsea8(true)
    }
    if(e.target.value==="INDUSTRY"){
        setsea9(true)
    }
    if(e.target.value==="Spy"){
        setsea10(true)
    }
   }
    return(
    <>
    
    <div className="movielist">
        <h1>search movie in the box as exact shown in homepage posters</h1>
     <h3><input type="text" onChange={(e)=>{searchmovie(e)}}/></h3>
   {sea1?<h1>Gurdians of Galaxy<img src={posters1} alt="movie poster" /></h1>:""} 
   {sea2?  <h1>Game of thrones<img src={posters2} alt="movie poster"/></h1>:""} 
   {sea3?  <h1>before the big game<img src={posters3} alt="movie poster"/></h1>:""} 
   {sea4?  <img src={posters4} alt="movie poster"/>:""} 
   {sea5?  <img src={posters5} alt="movie poster"/>:""} 
   {sea6?  <img src={posters6} alt="movie poster"/>:""} 
   {sea7?  <img src={posters7} alt="movie poster"/>:""} 
   {sea8?  <img src={posters8} alt="movie poster"/>:""} 
   {sea9?  <img src={posters9} alt="movie poster"/>:""} 
   {sea10?  <img src={posters10} alt="movie poster"/>:""} 
   
    
    </div>
    </>
    )
   
}
export default Search
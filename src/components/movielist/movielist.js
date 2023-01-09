import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./main.css"
let Movielist=()=>{
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
    let [add1,setadd1]=useState(false)
    let [add2,setadd2]=useState(false)
    let [add3,setadd3]=useState(false)
    let [add4,setadd4]=useState(false)
    let [add5,setadd5]=useState(false)
    let [add6,setadd6]=useState(false)
    let [add7,setadd7]=useState(false)
    let [add8,setadd8]=useState(false)
    let [add9,setadd9]=useState(false)
    let [add10,setadd10]=useState(false)
  
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
function addme(e){
    if(e.target.alt==="movie poster1"){
      setadd1(true)
    }
    if(e.target.alt==="movie poster2"){
      setadd2(true)
    }
    if(e.target.alt==="movie poster3"){
      setadd3(true)
    }
    if(e.target.alt==="movie poster4"){
      setadd4(true)
    }
    if(e.target.alt==="movie poster5"){
      setadd5(true)
    }
    if(e.target.alt==="movie poster6"){
      setadd6(true)
    }
    if(e.target.alt==="movie poster7"){
      setadd7(true)
    }
    if(e.target.alt==="movie poster8"){
      setadd8(true)
    }
    if(e.target.alt==="movie poster9"){
      setadd9(true)
    }
    if(e.target.alt==="movie poster10"){
      setadd10(true)
    }
}
   
    return(
    <>
    
    <div className="movielist">
    <h1 style={{selfAlign:"center"}}>movielist</h1>
    <h3>click on search to go search page<Link to="/search">search</Link></h3> 
    
    <img src={posters1} alt="movie poster1" onClick={(e)=>{addme(e)}} />
     <img src={posters2} alt="movie poster2" onClick={(e)=>{addme(e)}}/>
     <img src={posters3} alt="movie poster3"onClick={(e)=>{addme(e)}}/>
     <img src={posters4} alt="movie poster4"onClick={(e)=>{addme(e)}}/>
     <img src={posters5} alt="movie poster5"onClick={(e)=>{addme(e)}}/>
     <img src={posters6} alt="movie poster6"onClick={(e)=>{addme(e)}}/>
     <img src={posters7} alt="movie poster7"onClick={(e)=>{addme(e)}}/>
     <img src={posters8} alt="movie poster8"onClick={(e)=>{addme(e)}}/>
     <img src={posters9} alt="movie poster9"onClick={(e)=>{addme(e)}}/>
     <img src={posters10} alt="movie poster10"onClick={(e)=>{addme(e)}}/>
    </div>
    <hr></hr>
    <div className="favirote">
      <h1>favourites</h1>
      <p>click to add your favourite movies on the movielist section</p>
      {add1? <img src={posters1} alt=""/>:""}
      {add2? <img src={posters2} alt=""/>:""}
      {add3? <img src={posters3} alt=""/>:""}
      {add4? <img src={posters4} alt=""/>:""}
      {add5? <img src={posters5} alt=""/>:""}
      {add6? <img src={posters6} alt=""/>:""}
      {add7? <img src={posters7} alt=""/>:""}
      {add8? <img src={posters8} alt=""/>:""}
      {add9? <img src={posters9} alt=""/>:""}
      {add10? <img src={posters10} alt=""/>:""}
    </div>  
    </>
    )
    
}

export default Movielist
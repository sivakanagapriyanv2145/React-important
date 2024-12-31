// import {useState,useEffect} from 'react';
// function App(){
//     let[count,setCount]=useState(0)
//     useEffect(()=>{
//       console.log("value updated");
//       // return(()=>{
//       //   setCount(count+15);}  
//       // )
       
//     },[count])
//     return(
//         <div>
//             <h1> count : {count}</h1>
//             <button onClick={()=> setCount(count+1)}>increment</button>
//             <button onClick={()=> setCount(count-1)}>decrement</button>
//         </div>
//     )
// }
// export default App;
import React, { useState } from 'react'
import Hen from './Hen'
import{createContext}from"react";
export let nameContext=createContext();
export let colorchange=createContext();

const App = () => {
//   return (
//     <div>
//       <Hen name="water"/>
//     </div>//This is props drilling
// )
let [back,setback]=useState("true");
let increment=()=>{
 

  
}

return(
  <colorchange.Provider value={increment}>
    <Hen/>
  </colorchange.Provider>
)
}
export default App


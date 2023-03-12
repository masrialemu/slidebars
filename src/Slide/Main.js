import React, { useState } from 'react'
import './Main.css'
import img1 from '../Img/p3.jpg'
import img2 from '../Img/p1.jpg'
import img3 from '../Img/p2.jpg'
import img4 from '../Img/p4.jpg'
import {AiOutlineMessage, AiOutlineCaretRight,AiOutlineCaretLeft } from "react-icons/ai";
function Main() { 
    const [use,setUse]=useState(0)
    const List=[
        {
            id:1,
            img:img1,
            name:"Masri Alemu",
            job:"Web dev",
            info:"the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages"
        },
        {
            id:2,
            img:img2,
            name:"Henok Alemu",
            job:"Apk dev",
            info:"the file format for applications used on the Android operating system. APK files are compiled with Android Studio, which is the official integrated development environment (IDE) for building Android software. An APK file includes all of the software program's code and assets."
        },
        {
            id:3,
            img:img3,
            name:"Lidiya Alemu",
            job:"Softwer dev",
            info:"a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable."
        },
        {
            id:4,
            img:img4,
            name:"Bob Terefe",
            job:"IT Manager",
            info:"oversees all computer-related tasks, problems, and solutions within a business. Depending on the sector they work in and the organization they work for, they may also be referred to as IT directors or computer and information systems managers."
        },
        {
            id:5,
            img:img4,
            name:"Jons Akelo",
            job:"IT Support",
            info:"a team or department in a company or organization that provides technical help to people who have problems with its computer systems: Call IT support to see if they can fix it."
        },
        {
            id:6,
            img:img4,
            name:"Meron Achame",
            job:"Secretary",
            info:" works in an office and prepares letters, keeps records, schedules meetings, and makes other arrangements for a particular person or for an organization"
        },
    ]
const Style={
    right:`${use}px`
}
const Right=()=>{
    if(use>(List.length-2)*600){
        setUse(0)
    }
    else{
        setUse(use+1*600)
    }
}
const Lefts=()=>{
   if(use===0){
    setUse((List.length-2)*600)
   }
   else{
    setUse(use-1*600)
   }
}
  return (
    <div className='main'>
      <div className="rr">
      <h1>Reviews</h1>
      </div>
      <div className="pp">
      <p className='PP'></p>
      </div>
     <div className="Mains">
     <div className="mains">
     <div className="ff">
      <button><h2 onClick={Lefts}><AiOutlineCaretLeft/></h2></button>
     </div>
     <div className="ss">
     
     {List.map((e,v)=>  <div className="ssa" key={v} style={Style}>
         <div className="imgs">
         <img src={e.img} alt={e.name} srcset="" />
         </div>
         <div className="nm">
         <h3>{e.name}</h3>
         <h4>{e.job}</h4>
         </div>
         <div className="pp">
         <p className="p">
         {e.info}
         </p>
         </div>

         <div className="msg">
         <h1 ><AiOutlineMessage/></h1>
         </div>
       </div>)}
     

     
     </div>
     <div className="tt">
     <button><h2 onClick={Right}><AiOutlineCaretRight/></h2></button>
     </div>
       </div>
     </div>
    </div>
  )
}

export default Main

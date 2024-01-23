import React from "react";
import Photo1 from "./poster1";

const Heropage = ()=>{
    return (
        <>
        
        <div className="w-[828px] h-[201px] p-[10px] text-8xl font-extrabold mt-[99px] ml-[306px]">
            <div className="flex gap-2.5 justify-center">
            <p className="color4">Your</p><p className="color3">UI/UX</p><p className="color4">&</p>
            </div>
       <div className="flex gap-2.5 justify-center"> 
       <p className="color3">Branding</p><p className="color4">Partner</p>
       </div>
       </div>
       <div className="text-center w-[603px] h-[75px] size font-medium mt-[50px] p-[10px] ml-[433.5px]">
        <div className="flex justify-center gap-2.5 color4">
            <p>Designing</p><p className="color3">Easy-To-Use</p> <p>Interfaces And Memorable </p></div>
     
    <p>Brands For Your Success</p>
    </div>
    <div>
    <div className="mrl justify-center border">
        <p className="all">Get Started</p>
    </div>
   <Photo1/>
   </div>
    </>
    )
};

export default Heropage;
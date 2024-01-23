import React from "react";
import '../styles/navbar.css';

const Navbar = () =>{
    return (
    <>
    <div className="w-[1181px] h-[80px] flex border-[1px] rounded-[50px] justify-around mt-[61px] ml-[129px] colour font-medium text-xl bg-[#FFFFFF]">
          <div className=" text-[20px] pd pl-12"> Review </div>
            <div className="text-[20px] pd"> Our work</div>
            <div className="text-[20px] pd"> Services </div>
            <div className="text-4xl font-bold flex pd1">
            <p>Dezign</p><p class="colour2">Plex</p>
            </div> 
            <div className="text-[20px] pd"> Portfolio </div>
            <div className=" text-[20px] pd"> Contacts </div>
            <div className=" text-[20px] pd pr-12">FAQa</div>
          </div>
    </>
   )
    
}
export default Navbar;
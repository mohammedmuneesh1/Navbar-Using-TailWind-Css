import React, { useState } from "react";
import { Button } from "./button";
export default function Navbar() {

  let [open,setOpen] = useState(false);
  let links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: `BLOG'S`, link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-screen fixed top-0 left-0">
        {/* md:flex md:px-10 px-7 md:px-10*/}
        <div className="md:flex bg-blue-200 py-4 items-center justify-between md:px-9 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
            <span className=" text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="accessibility-outline"></ion-icon>
            </span>
            <span>Designer</span>
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name= {open? "close-outline": "menu-outline" }></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-8 md:static absolute md:bg-transparent  md:z-auto z-[-1] left-0 md:w-auto w-full md:pl-0 pl-9 transparent-all  ease-in-out ${open ? 'top-5 bg-white' : 'top-[-490px]'}`}>
            {links.map((value,index) => {
              return <li key={index} className="md:ml-8 md:my-0 my-7">
                <a href={value.link} className="text-grey-800 hover:text-gray-400 duration-500 ">{value.name}</a></li>;
            })}
            <Button	Monacoon children="Get Started"/>
          </ul>
        </div>
      </div>
    </>
  );
}


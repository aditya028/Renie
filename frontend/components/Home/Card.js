import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
// import { CiCloudOff } from "react-icons/ci";


export default function Card({ title, description, Icon , bgColor}) {
  return (
    <div className={`${bgColor} flex justify-between items-center gap-5 rounded-3xl py-3 px-6 text-white`}>
      <Icon size={50}/> 
      <div className="flex flex-col justify-center">
        <h1 className="text-[20px] ">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
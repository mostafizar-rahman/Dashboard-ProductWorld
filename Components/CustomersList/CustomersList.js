import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CustomersList = ({id, image, name, email, number, district, habdleCustomerDelete }) => {
  return (
    <div className="mb-3 text-[13px]">
      <div>
        <div className=" flex justify-between items-center bg-slate-200 bg-opacity-20 ">
          <div className="basis-[15%]">
            <Image src={image} width={50} height={50} className="w-12 h-12 rounded-full" />
          </div>
          <div className="basis-[15%] ">
            <p className="font-Montserrat">12456222365</p>
          </div>
          <div className="basis-[20%]">
            <p>{name}</p>
          </div>
          <div className="basis-[21%]">
            <p>{email}</p>
          </div>
          <div className="basis-[12%] ">
            <p className="font-Montserrat">{number}</p>
          </div>
          <div className="basis-[12%]">
            <p>{district}</p>
          </div>
          <div className="basis-[5%]">
            <p>
              <AiOutlineDelete onClick={()=>habdleCustomerDelete(id)} className="text-xl hover:text-red-600 cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersList;

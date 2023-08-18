import CustomersList from "@/Components/CustomersList/CustomersList";
import React from "react";
import { useState } from "react";

const customersListData = [
  {
    id: 1,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "Itlay",
  },
  {
    id: 2,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Mostafizur",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "Bangladesh",
  },
  {
    id: 3,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Sagor",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "india",
  },
  {
    id: 4,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "Japan",
  },
  {
    id: 5,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "Dubai",
  },
  {
    id: 6,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "India",
  },
  {
    id: 7,
    customarID: "123456789",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    email: "mostafizur@gmail.com",
    number: "01575699193",
    district: "Bangladesh",
  },
];
const Customers = () => {
  const [customers, setCustomaer] = useState(customersListData)
  const habdleCustomerDelete = (deleteId) => {
    const withOutDelete = customers.filter(({ id }) => id !== deleteId)
    setCustomaer(withOutDelete)
  }
  
  return (
    <div className="mt-10 overflow-x-auto   ">
      <div className="min-w-[750px]">
        <div className="flex justify-between bg-slate-400 bg-opacity-10 py-4 mb-3 text-[13px] ">
          <div className="basis-[15%]">Image</div>
          <div className="basis-[15%]">Customar ID</div>
          <div className="basis-[20%]">Name</div>
          <div className="basis-[21%]">Email</div>
          <div className="basis-[12%]">Number</div>
          <div className="basis-[12%]">District</div>
          <div className="basis-[5%]">Delete</div>
        </div>
        <div>
          {customers.map(
            ({ image, name, email, number, district, customarID, id }) => {
              return (
                <CustomersList
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  email={email}
                  number={number}
                  district={district}
                  customarID={customarID}
                  habdleCustomerDelete={habdleCustomerDelete}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;

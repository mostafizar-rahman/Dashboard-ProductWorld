import AreaChart from "@/Components/Chart/AreaChart";
import BarChart from "@/Components/Chart/BarChart";
import React from "react";
import DoughnutChart from "@/Components/Chart/DoughnutChart";
import { FaUserFriends, FaUsers, FaShoppingCart } from "react-icons/fa";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import OrderList from "@/Components/OrderList/OrderList";
import { ordersListData } from "@/Utlits/OrderListData";
import PieChart from "@/Components/Chart/PieChart";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="">
      <div className="grid xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-5 my-10">
        <div className=" rounded-xl p-5 bg-white flex justify-between shadow-slate-300 shadow-md ">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-Montserrat">
              <small className="text-sm text-orange-600 ">$</small>32000
            </h3>
            <b className="mt-1 inline-block text-black/60 text-[13px] sm:text-sm">
              Total Earning
            </b>
          </div>
          <BsFillBarChartLineFill className="sm:text-4xl text-2xl text-orange-600" />
        </div>
        <div className=" rounded-xl p-5 bg-white flex justify-between shadow-slate-300 shadow-md">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-Montserrat">
              32000
            </h3>
            <b className="mt-1 inline-block text-black/60 text-[13px] sm:text-sm">
              Total Selles
            </b>
          </div>
          <BiSelectMultiple className="sm:text-4xl text-2xl text-orange-600" />
        </div>
        <div className=" rounded-xl p-5 bg-white flex justify-between shadow-slate-300 shadow-md">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-Montserrat">
              32000
            </h3>
            <b className="mt-1 inline-block text-black/60 text-[13px] sm:text-sm">
              Total Customar
            </b>
          </div>
          <FaUserFriends className="sm:text-4xl text-2xl text-orange-600" />
        </div>
        <div className=" rounded-xl p-5 bg-white flex justify-between shadow-slate-300 shadow-md">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-Montserrat">
              32000
            </h3>
            <b className="mt-1 inline-block text-black/60 text-[13px] sm:text-sm">
              Today Order
            </b>
          </div>
          <FaShoppingCart className="sm:text-4xl text-2xl text-orange-600" />
        </div>
        <div className=" rounded-xl p-5 bg-white flex justify-between shadow-slate-300 shadow-md">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-Montserrat">
              32000
            </h3>
            <b className="mt-1 inline-block text-black/60 text-[13px] sm:text-sm">
              Today Visetor
            </b>
          </div>
          <FaUsers className="sm:text-4xl text-2xl text-orange-600" />
        </div>
      </div>
      {/* -------- 2nd Section */}
      <div className="grid md:grid-cols-2 gap-16 mt-20">
        <div>
          <div className="mb-5">
            <h4 className="font-semibold text-lg">Monthly Earning</h4>
            <small className="text-black/60">
              Compare the running month and the previous year this month How much earnings between this month.
            </small>
          </div>
          <BarChart />
        </div>
        <div>
          <div className="mb-5">
            <h4 className="font-semibold text-lg">Monthly Sales</h4>
            <small className="text-black/60">
              How many product sales every month this year
            </small>
          </div>
          <AreaChart />
        </div>
      </div>
      {/* -------- 3rd Section */}
      <div className="grid md:grid-cols-[70%_auto] gap-16 mt-20">
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-orange-500 text-xl sm:text-2xl font-bold">
              Resent Oreder
            </h3>
            <Link href={"/orders"} className="btn bg-orange-500 border-none text-white font-semibold text-base px-5 sm:px-7 py-1 sm:py-2 rounded-sm cursor-pointer hover:bg-orange-600 transition-all">
              View All
            </Link>
          </div>
          <div className=" min-w-[500px] ">
            <div className="flex justify-between bg-slate-400 bg-opacity-10 py-4 mt-5 text-[13px]">
              <div className=" font-semibold basis-[25%] ">Name</div>
              <div className=" font-semibold basis-[10%]">Price</div>
              <div className=" font-semibold basis-[10%]">Payment</div>
              <div className=" font-semibold basis-[30%]">Email</div>
              <div className=" font-semibold basis-[15%]">Number</div>
            </div>
            {ordersListData.slice(0, 10).map(({ id, name, price, email, payment, number }) => (
              <OrderList
                id={id}
                name={name}
                price={price}
                email={email}
                payment={payment}
                number={number}
              />
            ))}
          </div>
        </div>
        <div className="overflow-y-hidden">
          <div className="mb-5">
            <h4 className="font-semibold text-lg">Customar</h4>
            <small className="text-black/60 mb-3 inline-block">
              Compare the running month and the previous year this month How many customers were added between this month
            </small>
            <DoughnutChart />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Devices</h4>
            <small className="text-black/60 mb-3 inline-block">
              Here's a look at what devices customers are connecting with us the most
            </small>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

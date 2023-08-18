import Link from "next/link";
import React from "react";

const OrderList = ({id, name, price, email, payment, number }) => {
  return (
    <div>
      <div className="mt-2">
        <div className="overflow-x-auto">
          <div className="min-w-full text-xs ">
            <div className="">
              <Link
                href={`/orders/${id}`}
                key={id}
                className="flex justify-between flex-wrap text-left py-3 bg-slate-200 bg-opacity-20 "
              >
                <div className=" text-slate-800 basis-[25%]">
                  <p>{name}</p>
                </div>
                <div className=" text-slate-800 basis-[10%]">
                  <p>{price}</p>
                </div>

                <div className=" text-slate-800 basis-[10%]">
                  <p>{payment}</p>
                </div>
                <div className=" text-slate-800 basis-[30%]">
                  <p>{email}</p>
                </div>
                <div className=" text-slate-800 basis-[15%]">
                  <p>{number}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

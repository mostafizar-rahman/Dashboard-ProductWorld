import OrderList from "@/Components/OrderList/OrderList";
import { ordersListData } from "@/Utlits/OrderListData";
import React, { useMemo, useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";


const index = () => {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  let itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(ordersListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(ordersListData.length / itemsPerPage));

  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % ordersListData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-10 h-full ">
      <div className="flex justify-between bg-slate-400 bg-opacity-10 py-4 mb-3 text-[13px]">
        <div className=" font-semibold basis-[25%]">Name</div>
        <div className=" font-semibold basis-[10%]">Price</div>
        <div className=" font-semibold basis-[10%]">Payment</div>
        <div className=" font-semibold basis-[30%]">Email</div>
        <div className=" font-semibold basis-[15%]">Number</div>
        <div className=" font-semibold basis-[15%]">Delete</div>
      </div>
      {currentItems.map(({ id, name, price, email, payment, number }) => (
        <OrderList
          key={id}
          id={id}
          name={name}
          price={price}
          email={email}
          payment={payment}
          number={number}
        />
      ))}
      <div className="">
        <ReactPaginate
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>

    </div>
  );
};

export default index;

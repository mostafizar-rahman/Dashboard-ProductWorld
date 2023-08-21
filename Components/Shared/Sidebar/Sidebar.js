import React from "react";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineMessage,
  AiOutlineQuestion,
  AiOutlineOrderedList,
  AiOutlineShoppingCart,
  AiOutlineFileAdd,
  AiOutlineProfile,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className="">
      <h1 className="text-white font-bold text-lg lg:text-3xl font-Norican px-2 py-5">
        Product<span className="font-Norican text-black/60">World</span>
      </h1>
      <ul className={`flex flex-col gap-5 mt-5`}>
        <li className={` px-2 h-12 `}>
          <Link href={"/"} className="flex items-center space-x-3 text-white">
            <AiOutlineHome
              className={`text-3xl ${router.pathname === "/" && "text-black/60"
                }`}
            />
            <span className="text-sm">Dahsboard</span>
          </Link>
        </li>
        <li className=" px-2 h-12 ">
          <Link
            href={"/customers"}
            className="flex items-center space-x-3 text-white"
          >
            <AiOutlineUsergroupAdd
              className={`text-3xl ${router.pathname === "/customers" && "text-black/60"
                }`}
            />
            <span className="text-sm">Customers</span>
          </Link>
        </li>

        <li className=" px-2 h-12 ">
          <Link
            href={"/orders"}
            className="flex items-center space-x-3 text-white"
          >
            <AiOutlineShoppingCart className={`text-3xl ${router.pathname === "/orders" && "text-black/60"
              }`} />
            <span className="text-sm">Order List </span>
          </Link>
        </li>
        <li className=" px-2 h-12 ">
          <Link
            href={"/productsList"}
            className="flex items-center space-x-3 text-white"
          >
            <AiOutlineProfile className={`text-3xl ${router.pathname === "/productsList" && "text-black/60"
              }`} />
            <span className="text-sm">Products List</span>
          </Link>
        </li>
        <li className=" px-2 h-12 ">
          <Link
            href={"/addProduct"}
            className="flex items-center space-x-3 text-white"
          >
            <AiOutlineFileAdd className={`text-3xl ${router.pathname === "/addProduct" && "text-black/60"
              }`} />
            <span className="text-sm">Add Product</span>
          </Link>
        </li>
        <li className="text-white flex items-center space-x-3 px-2 h-12 ">
          <FiLogIn className="text-3xl "/>
          <span className="text-sm">Sing Out</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

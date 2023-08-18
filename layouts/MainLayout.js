import Navbar from "@/Components/Shared/Navbar/Navbar";
import Sidebar from "@/Components/Shared/Sidebar/Sidebar";
import React, { useState } from "react";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="">
      <div>
        <div
          className={`min-h-screen h-full bg-orange-600  lg:w-[20%] transition-all ${
            isSidebarOpen ? "sm:w-[30%] w-[90%] visible" : "w-0 invisible lg:visible "
          }   fixed`}
        >
          <Sidebar />
        </div>
        <div
          className={`absolute lg:w-[80%] px-7 overflow-x-hidden transition-all  ${
            isSidebarOpen ? "sm:w-[70%] w-[10%]" : "w-full"
          }    right-0`}
        >
          <div>
            <Navbar handleSidebarToggle={handleSidebarToggle} />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

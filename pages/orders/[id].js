import Image from "next/image";
import React from "react";

const orderDetails = () => {
  return (
    <div className="mt-10 gap-10 flex sm:flex-row flex-col justify-center items-center ">
      <div >
        <p className="text-sm text-orange-500 text-center sm:text-left ">
          <span className="font-semibold">Order ID:</span>{" "}
          <span className="font-Montserrat text-black/60"> 12345678</span>
        </p>
        <div className="mt-5 bg-white p-5 rounded-md max-w-sm mx-auto flex justify-center">
          <Image
            src={require("../../assets/images/1.png")}
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
      <div className=" mt-7">
        <div>
          <h5 className="text-orange-500 mb-1 font-Montserrat font-semibold">
            Product Info
          </h5>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Product ID: <span className="font-light font-Montserrat">24586828</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Quentity: <span className="font-light font-Montserrat">2</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Color: <span className="font-light font-Montserrat">Black</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Price: <span className="font-light font-Montserrat">$50</span>
          </p>
        </div>
        <div>
          <h5 className="text-orange-500 mb-1 mt-4 font-Montserrat font-semibold">
            Customer Info
          </h5>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Name: <span className="font-light font-Montserrat">Mostafizar Rahman</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Number: <span className="font-light font-Montserrat">01575699193</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Email: <span className="font-light font-Montserrat">dev.mostafizar@gmail.com</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Country: <span className="font-light font-Montserrat">Banglsesh</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Division: <span className="font-light font-Montserrat">Rangpur</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            District: <span className="font-light font-Montserrat">Lalmonirhat</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Upazila: <span className="font-light font-Montserrat">Patgram</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Post: <span className="font-light font-Montserrat">Dahagram</span>
          </p>
          <p className="text-sm font-medium font-Montserrat mb-1  ">
            Village/Road: <span className="font-light font-Montserrat">Thana para</span>
          </p>
        </div>


      </div>
    </div>
  );
};

export default orderDetails;

import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
const addProduct = () => {
  const [checkColor, setCheckColor] = useState({});
  const [checkSize, setCheckSize] = useState({});

  const [previewImage, setPreviewImage] = useState({
    productImages: [],
    thumbnailImage: "",
  });
  console.log(checkColor);
  const handleImagesPreview = (e) => {
    const name = e.target.name;
    const files = e.target.files;

    if (name === "productImages") {
      const imageCollection = [];
      for (const file of files) {
        imageCollection.push(file);
      }
      setPreviewImage({ ...previewImage, productImages: imageCollection });
    } else {
      setPreviewImage({ ...previewImage, thumbnailImage: files[0] });
    }
  };

  const handleClearImageInputPreview = (e) => {
    const name = e.target.name;
    if (name === "productImages") {
      setPreviewImage({ ...previewImage, productImages: [] });
    } else {
      setPreviewImage({ ...previewImage, thumbnailImage: "" });
    }
  };

  const handleSellerBookForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const discountPrice = e.target.discountPrice.value;
    const description = e.target.description.value;
    const thumbnailImage = e.target.thumbnailImage.files[0];
    const productImages = e.target.thumbnailImage.files;
    // const quantity = e.traget.quantity.value;

    // Image uplode imgbb server
    const imagesCollection = { thumbnailImage, productImages };
    const formData = new FormData();
    formData.append("image", thumbnailImage);
    console.log(thumbnailImage);
    fetch(
      "https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const productInfo = {
            bookTitle: title,
            bookCover: imageData.data.display_url,
            bookRating: 4.5,
            originalPrice: parseInt(price),
            discountedPrice: parseInt(discountPrice),
            description,
            // quantity,
          };
          console.log(productInfo);
        }
      });
  };

  // ----------- Select Product Color
  const handleColorCheck = (e) => {
    setCheckColor({ ...checkColor, [e.target.name]: e.target.checked })
  }
  // ----------- Select Product Size
  const handleSizeCheck = (e) => {
    setCheckSize({ ...checkSize, [e.target.name]: e.target.checked })
  }
  return (
    <div className="w-full mt-10">
      <form onSubmit={handleSellerBookForm}>
        <div className="sm:flex justify-between gap-5  mt-5">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input
            type="text"
            name="subCategory"
            placeholder="Sub Category"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="sm:flex justify-between gap-5  mt-5">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="sm:flex justify-between gap-5  mt-5">
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input
            type="number"
            name="discountPrice"
            placeholder="Discount Price"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="sm:flex justify-between gap-5  mt-5">
          <div>
            <p className="font-medium text-sm">Color:</p>
            <div className="flex space-x-5">
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkColor.red ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="red"
              >
                Red
                <input
                  type="checkbox"
                  name="red"
                  id="red"
                  hidden
                  onChange={handleColorCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkColor.black ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="black"
              >
                Black
                <input
                  type="checkbox"
                  name="black"
                  id="black"
                  hidden
                  onChange={handleColorCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkColor.white ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="white"
              >
                White
                <input
                  type="checkbox"
                  name="white"
                  id="white"
                  hidden
                  onChange={handleColorCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkColor.green ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="green"
              >
                Green
                <input
                  type="checkbox"
                  name="green"
                  id="green"
                  hidden
                  onChange={handleColorCheck}
                />
              </label>
            </div>
          </div>
          <div>
            <p className="font-medium text-sm">Size:</p>
            <div className="flex space-x-5">
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkSize.m ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="m"
              >
                M
                <input
                  type="checkbox"
                  name="m"
                  id="m"
                  hidden
                  onChange={handleSizeCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkSize.l ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="l"
              >
                L
                <input
                  type="checkbox"
                  name="l"
                  id="l"
                  hidden
                  onChange={handleSizeCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkSize.xl ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="xl"
              >
                XL
                <input
                  type="checkbox"
                  name="xl"
                  id="xl"
                  hidden
                  onChange={handleSizeCheck}
                />
              </label>
              <label
                className={`text-sm px-3 py-1 inline-block rounded-sm cursor-pointer border border-orange-500  ${checkSize.xxl ? "bg-orange-500 text-white" : "bg-transparent"
                  }`}
                htmlFor="xxl"
              >
                XXL
                <input
                  type="checkbox"
                  name="xxl"
                  id="xxl"
                  hidden
                  onChange={handleSizeCheck}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 "></div>
        <textarea
          name="description"
          placeholder="Description"
          className="appearance-none text-sm block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-h-[150px] mt-5"
        ></textarea>

        <div className="grid md:grid-cols-2 gap-3">
          {/* ------ Thubnial Image */}
          <div className="relative mt-5">
            <div className="flex items-center justify-center ">
              <div
                onClick={handleClearImageInputPreview}
                className="absolute top-2 left-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <FaTimes />
              </div>
            </div>
            <label htmlFor="thumbnailImage">
              <div className="w-full min-h-[250px] max-h-[250px] flex justify-center items-center rounded-lg border-4 border-dashed cursor-pointer">
                {previewImage.thumbnailImage ? (
                  <Image
                    src={URL.createObjectURL(previewImage.thumbnailImage)}
                    alt=""
                    className="h-[250px] w-full"
                    width={0}
                    height={0}
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pointer-none text-gray-500 ">
                      select a file from your computer
                    </p>
                  </div>
                )}
              </div>

              <input
                type="file"
                name="thumbnailImage"
                id="thumbnailImage"
                onChange={handleImagesPreview}
                hidden
              />
            </label>
          </div>

          {/* --------------- Product multiple image */}
          <div className="relative mt-5">
            <div className="flex items-center justify-center">
              <div
                onClick={handleClearImageInputPreview}
                className="absolute top-2 left-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <FaTimes />
              </div>
            </div>
            <label htmlFor="productImages">
              <div className="w-full min-h-[250px] max-h-[250px] overflow-y-auto flex justify-center  rounded-lg border-4 border-dashed cursor-pointer">
                {previewImage?.productImages.length ? (
                  <div className="grid grid-cols-2 gap-3">
                    {previewImage?.productImages.map((img, id) => (
                      <Image
                        key={id}
                        src={URL.createObjectURL(img)}
                        alt=""
                        className="max-h-[150px] w-full"
                        width={0}
                        height={0}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pointer-none text-gray-500 ">
                      select a file from your computer
                    </p>
                  </div>
                )}
              </div>

              <input
                type="file"
                name="productImages"
                id="productImages"
                onChange={handleImagesPreview}
                hidden
                multiple
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold rounded-sm py-2 px-5 mt-5 hover:bg-orange-600 transition-all"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default addProduct;

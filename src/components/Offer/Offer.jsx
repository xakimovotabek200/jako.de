import AOS from "aos";
import "aos/dist/aos.css";
import "@mantine/carousel/styles.css";
import { HoverCard } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Offer.css";

function Offer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [selectedColor, setSelectedColor] = useState("");
  const [productData, setProductData] = useState([]);
  const [colors, setColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.abdullajonov.uz/legend-backend-api/api/products/get`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => { 
  //   productData.forEach((i)=>{
  //     colors.push(i.color)
  //   })
  //   console.log(colors);
  //  }, [productData])

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const perPage = 10;
  const offset = (currentPage - 1) * perPage;

  const filteredData = productData.filter((item) => {
    const meetsMinPrice = minPrice === "" || item.price >= parseFloat(minPrice);
    const meetsMaxPrice = maxPrice === "" || item.price <= parseFloat(maxPrice);

    return (
      meetsMinPrice &&
      meetsMaxPrice &&
      (selectedColor === "" || item.color === selectedColor)
    );
  });

  const pageCount = Math.ceil(filteredData.length / perPage);

  const displayedData = filteredData
    .slice(offset, offset + perPage)
    .map((item) => {
      return (
        <Link key={item.id} to={`/HigtlightsId/${item.slug}`}>
          <HoverCard shadow="md" closeDelay={300}>
            <div className="" data-aos="fade-up">
              <div key={item.id}>
                <div className=" flex justify-center items-center flex-wrap gap-6 p-8">
                  <div className="h-[500px] w-[300px] flex  flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
                    <img
                      src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                      alt="product-image"
                      className="h-[65%] w-[80%] object-cover mt-4 mr-auto ml-auto bg-slate-100 rounded-md"
                    />
                    <div className="p-5">
                      <div className="flex justify between">
                        <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
                          {item.category} &bull; {item.slug}
                        </div>
                        <del>
                          <span className="text-red-600 text-sm flex items-center gap-1">
                            <svg
                              className="h-4 w-4 text-yellow-700"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 1l2.928 6.377 6.538.95-4.75 4.588 1.12 6.516L10 16.664l-5.836 3.767 1.12-6.516-4.75-4.588 6.538-.95L10 1z" />
                            </svg>
                            {item.shipping_price}
                          </span>
                        </del>
                      </div>
                      <h3 className="text-xl mb-2 mt-2">{item.title}</h3>
                      <p className="font-medium mb-2 text-sm text-gray-700">
                        {item.description}
                      </p>
                      <div
                        className="flex items-center justify-between"
                        data-aos="fade-up"
                      >
                        <span className="text-2xl font-bold text-gray-800">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HoverCard>
        </Link>
      );
    });

  return (
    <div className="container mx-auto">
      <div className="text_hight" style={{ marginTop: "80px" }}>
        <h1 className="md:text-center text-3xl text-neutral-600">Offer</h1>
      </div>
      <div className="grid-cols-1 md:grid grid-cols-3 md:grid-cols-4">
        <div className="ml-24  md:block">
          <div className="w-1/2">
            {/* <select
              name="Color"
              className="outline-none ml-[7pc]"
              id=""
              onChange={handleColorChange}
            >
              <option value="">Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="grey">Grey</option>
              <option value="orange">Orange</option>
            </select> */}
            {/* <div className="w-[250px] mb-5 h-[1px] bg-black" /> */}
            <input
              className="outline-none w-[200px] h-[50px] rounded-md border-2 border-solid border-purple-600"
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              className="outline-none w-[200px] h-[50px] rounded-md border-2 border-solid border-purple-600"
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="mt-12 col-span-2 md:col-span-3" data-aos="fade-right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {displayedData}
          </div>
          <div className="pagination w-[300px] mx-auto">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={`pagination-button ${currentPage === index + 1 ? "active" : ""
                  }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;

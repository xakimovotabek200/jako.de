import "@mantine/carousel/styles.css";
import { HoverCard } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Offer.module.css";


function Offer() {
  const [selectedColor, setSelectedColor] = useState("");
  const [productData, setProductData] = useState([]);
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
    const meetsMinPrice =
      minPrice === "" || item.price >= parseFloat(minPrice);
    const meetsMaxPrice =
      maxPrice === "" || item.price <= parseFloat(maxPrice);

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
            <div className="box">
              <HoverCard.Target>
                <img
                  className="w-[300px] h-[300px] object-contain"
                  src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                  alt=""
                  safjaoihoghaughou
                />
              </HoverCard.Target>
              <hr />
              <div className="box_text">
                <h4>Legend{item.name}</h4>
                <div className="box_flex">
                  <span className="price">from €{item.price}</span>
                  <h2 className="text-center">
                    <del>€{item.shipping_price}</del>
                  </h2>
                  <p className="text_diskpunt">-{item.amount}% Discount</p>
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
        <h1>Offer</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div>
          <div className="w-1/2">
            <select
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
            </select>
            <div className="w-[250px] mb-5 h-[1px] bg-black" />
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
        <div className="col-span-2 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {displayedData}
          </div>
          <div className="pagination w-[300px] mx-auto">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''
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

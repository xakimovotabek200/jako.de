import { HoverCard, Text } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "../../img/cart is empty.jpg";
import "../Higtlights/Hightlights.module.css";


function Wishes() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.orebiReducer);

  return (
    <div className="container mx-auto">
      <p className="text-blue-900 text-3xl mt-16 text-center font-extrabold">
        COLLECTION
      </p>
      <div>
        <div className="flex justify-center items-center">
          {products.length > 0 ? (
            products.map((item, index) => (
              <Link
                key={index}
                to={`https://api.abdullajonov.uz/legend-backend-api/api/products/detailed/`}
              >
                <HoverCard shadow="md" closeDelay={300}>
                  <div className="box">
                    <HoverCard.Target>
                      <img
                        src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                        alt="" />
                    </HoverCard.Target>
                    <hr />
                    <div className="box_text">
                      <h4>{item.name}</h4>
                      <div className="box_flex">
                        <span className="price">from €{item.price}</span>
                        <h2 className="text-center">
                          <del>€{item.shipping_price}</del>
                        </h2>
                        <HoverCard.Dropdown>
                          <Text size="sm">{item.slug}</Text>
                        </HoverCard.Dropdown>
                        <p className="text_diskpunt">
                          -{item.discount}% Discount
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </Link>
            ))
          ) : (
            <div className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
              <div>
                <img
                  className="w-[800px] h-[500px] object-cover rounded-lg p-4 mx-auto"
                  src={Empty}
                  alt="emptyCart"
                />
              </div>
              <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                <h1 className="font-titleFont text-xl font-bold uppercase">
                  Your wishlist feels empty.
                </h1>
                <p className="text-sm text-center px-10 -mt-2">
                  Your wishlist is here to serve. Give it a purpose - fill it
                  with books, electronics, videos, and more to make it happy.
                </p>
                <Link to="/offer">
                  <button className="bg-primeColor rounded-md cursor-pointer  hover:bg-blue-600 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-black border-2 border-solid border-black hover:text-white duration-300">
                    Continue shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishes;

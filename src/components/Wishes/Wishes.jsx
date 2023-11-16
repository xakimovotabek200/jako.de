import { HoverCard, Text } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "../../img/cart is empty.jpg";
import "../Higtlights/Hightlights.module.css";


function Wishes() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.orebiReducer);
  console.log(products, "wishe");
  return (
    <div className="container mx-auto">
      <p className="text-neutral-600 text-3xl mt-16 text-center font-extrabold">
        COLLECTION
      </p>
      <div>
        <div className="flex flex-wrap justify-center items-center">
          {products.length > 0 ? (
            products.map((item, index) => (
              <Link
                key={index}
                to={`/higtlightsId/${item.slug}`}
              >
                <HoverCard shadow="md" closeDelay={300}>
                  <div key={item.id}>
                    <div className=" w-[350px] flex justify-center  items-center flex-wrap gap-6 p-8">
                      <div className="h-[500px] bg-white flex  flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
                        <img
                          src={
                            products.image
                          }
                          alt={
                            products.image
                          }
                          className="h-[65%] w-[80%] object-cover mt-4  rounded-md"
                        />
                        <div className="p-5">
                          <div className="flex justify between">
                            <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
                              {item.category} &bull; {item.slug}
                            </div>
                            <br />
                          </div>
                          <h3 className="text-xl mb-2 mt-2">{item.title}</h3>
                          <p className="font-medium mb-2 text-sm text-gray-700">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-800">
                              {item.price}сyм
                            </span>
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
                        </div>
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

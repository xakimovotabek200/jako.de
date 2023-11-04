import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Hightlights.module.css";

function HightLights({ data }) {
  const { t } = useTranslation();
  const [productData, setProductData] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.abdullajonov.uz/legend-backend-api/api/products/get`
        );
        setProductData(response.data?.products?.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const fetchDatas = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/discount/get"
      );
      const datas = response.data.data;
      setDatas(datas);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div className="container">
      <div className="text-center text-neutral-600 mt-10 mb-10 text-[38px] font-bold leading-9">
        Products
      </div>
      <div className="">
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "25.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          controlSize={50}
          align="center"
        >
          {Array.isArray(productData) && productData.map((item) => (
            <Link key={item.id} to={`/higtlightsId/${item.slug}`} className="min-w-[350px]">
              <Carousel.Slide>
                <HoverCard shadow="md" closeDelay={300}>
                  <div className="">
                    <div key={item.id}>
                      <div className="bg-gray-200 flex justify-center items-center flex-wrap gap-6 p-8">
                        <div className=" h-[500px] bg-white flex  flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
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
                            <h3 className="text-xl mb-2 mt-2">
                              {item.title}
                            </h3>
                            <p className="font-medium mb-2 text-sm text-gray-700">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
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
              </Carousel.Slide>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HightLights;

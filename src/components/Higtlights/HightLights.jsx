import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "./Hightlights.module.css";
import { toast } from 'react-toastify';

function HightLights() {
  const { t } = useTranslation();
  const [productData, setProductData] = useState([]);
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.abdullajonov.uz/legend-backend-api/api/products/get`
        );
        setProductData(response.data?.products?.data);
      } catch (error) {
        toast.error(error);
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
      <div
        class="text-center text-neutral-600 mt-10 mb-10 text-[38px] font-bold leading-9"
      >
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
          {Array.isArray(productData) &&
            productData.map((item) => {
              console.log(item);
              return (
                <Link key={item.id} to={`/higtlightsId/${item.slug}`}>
                  <Carousel.Slide>
                    <HoverCard shadow="md" closeDelay={300}>
                      <div className="box p-[20px] w-[320px] h-[420px] hover:border-2 border-solid border-red-500">
                        <HoverCard.Target>
                          <img
                            className="h-[265px] w-[265px] object-cover relative"
                            src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                            alt=""
                          />
                        </HoverCard.Target>
                        <hr />
                        <div className="flex text-center w-[265px] h-[120px] border-2 border-solid border-lime-500">
                          <div>
                            {datas.map((item, i) => {
                              return (
                                <div>
                                  <h1 className="w-[78px] h-[21px] bg-[#7000FF] rounded-md absolute top-[265px] z-20 text-white">{item.amount}</h1>
                                </div>
                              )
                            })}
                          </div>
                          <div>
                            <h1 className="text-neutral-600 font-semibold">Legend {item.name}</h1>
                            <p>from {item.price}</p>
                          </div>
                        </div>
                      </div>
                    </HoverCard>
                  </Carousel.Slide>
                </Link>
              );
            })}
        </Carousel>
      </div>
      <div>
        <NavLink to={"/offer"} className="">
          <button className="text-white bg-neutral-600 w-40 h-10 mx-auto hover:bg-blue-700 duration-300" >Salom</button>
        </NavLink>
      </div>
    </div >
  );
}
export default HightLights;
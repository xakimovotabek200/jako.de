import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard, Text } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "./Hightlights.css";

function HightLights() {
  const { t } = useTranslation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.abdullajonov.uz/legend-backend-api/api/products/get`
        );
        setProductData(response.data?.products?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="text_hight">
        <h1>prodcut</h1>
      </div>
      <div className="">
        <Carousel
          height={590}
          slideSize={{ base: "100%", sm: "50%", md: "25.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          controlSize={50}
          align="center"
        >
          {Array.isArray(productData) &&
            productData.map((item) => {
              return (
                <Link key={item.id} to={`/higtlightsId/${item.slug}`}>
                  <Carousel.Slide>
                    <HoverCard shadow="md" closeDelay={300}>
                      <div className="box">
                        <HoverCard.Target>
                          <img
                            className="h-[300px] object-cover"
                            src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                            alt=""
                          />
                        </HoverCard.Target>
                        <hr />
                        <div className="box_text">
                          <h4>Jako{item.name}</h4>
                          <div className="box_flex">
                            <span className="price">from €{item.price}</span>
                            <h2 className="text-center">
                              <del>€{item.shipping_price}</del>
                            </h2>
                            <HoverCard.Dropdown>
                              <Text size="sm">{item.category}</Text>
                            </HoverCard.Dropdown>
                            <p className="text_diskpunt">
                              -{item.discount}% Discount
                            </p>
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
        <NavLink to={"/offer"}>
          <button className="btns">{t("Home_button")}</button>
        </NavLink>
      </div>
    </div >
  );
}
export default HightLights;
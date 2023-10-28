import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard, Text } from "@mantine/core";
import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";
import "./Hightlights.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

function HightLights() {
  const { t } = useTranslation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.abdullajonov.uz/legend-backend-api/api/products/get"
        );
        setProductData(response.data?.products?.data); // Update the state with product data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="container">
      <div className="text_hight">
        <h1>{t("Home_products")}</h1>
      </div>
      <div className="">
        <Carousel
          withIndicators
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
                <Link
                  key={item.id}
                  to={`/https://api.abdullajonov.uz/legend-backend-api/api/products/get/{id}`}
                >
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
                          <h4>Legend{item.name}</h4>
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
        <button className="btns">{t("Home_button")}</button>
      </div>
    </div>
  );
}
export default HightLights;

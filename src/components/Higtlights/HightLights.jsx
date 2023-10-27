import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard, Text } from "@mantine/core";
import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";
import "./Hightlights.css";
import { useTranslation } from "react-i18next";
import axios from 'axios';

function HightLights() {
  const { t } = useTranslation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.abdullajonov.uz/legend-backend-api/api/products/get');
        setProductData(response.data?.products?.data);
        // console.log(response.data?.products?.data, "data product");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
          {Array.isArray(productData) && productData.map((item) => {
            console.log(productData, "productData");
            return (
              <Link key={item.id} to={`/HigtlightsId/${item.id}`}>
                <Carousel.Slide>
                  <HoverCard shadow="md" closeDelay={300}>
                    <div className="box">
                      <HoverCard.Target>
                        <img src={item.image} alt="" />
                      </HoverCard.Target>
                      <hr />
                      <div className="box_text">
                        <h4>Jako{item.name}</h4>
                        <div className="box_flex">
                          <span className="price">from €{item.cost1}</span>
                          <h2 className="text-center">
                            <del>€{item.costDel2}</del>
                          </h2>
                          <HoverCard.Dropdown>
                            <Text size="sm">{item.brand}</Text>
                          </HoverCard.Dropdown>
                          <p className="text_diskpunt">
                            -{item.discount}% Diskount
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

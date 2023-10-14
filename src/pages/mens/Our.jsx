import React from "react";
import "./Our.css";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { MenData } from "./MenData";

function Our() {
  return (
    <div className="conta">
      <div className="text_hight">
        <h1>OUR BESTSELLER FOR MENS</h1>
      </div>
      <Carousel
        withIndicators
        height={590}
        slideSize={{ base: "100%", sm: "50%", md: "25.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        controlSize={50}
        align="start"
      >
        {MenData.map((item) => {
          return (
            <Carousel.Slide key={item.id}>
              <div className="box">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <hr />
                <div className="box_text">
                  <h4>{item.title}</h4>
                  <div className="box_flex">
                    <span className="price">from €{item.cost1}</span>
                    <h2 className="text-center">
                      <del>€{item.costDel2}</del>
                    </h2>
                    <p className="text_diskpunt">-{item.discount}%Diskount</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <div>
        <button className="btns">Show All</button>
      </div>
    </div>
  );
}

export default Our;

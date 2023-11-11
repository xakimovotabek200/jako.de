import { HoverCard, Text } from "@mantine/core";
import { Image } from "antd";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setImage, setSize } from "../redux/slice";
import ContiuneHightleht from "./ContiuneHightleht";
import Loading from "./../Loading/Loading";
import { Carousel } from "react-responsive-carousel";

function HightLightsId() {
  const { slug } = useParams();
  const [highlight, setHighlight] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [active, setActive] = useState(null);
  const [, { open }] = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.abdullajonov.uz/legend-backend-api/api/products/detailed/${slug}`
        );
        setHighlight(response.data.product);
        setSelectedImageIndex(response.data.image);
        setActive(response.data.size);
      } catch (error) {
        setHighlight(null);
      }
    };
    fetchData();
  }, [slug]);

  if (!highlight) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const selectSize = (item) => {
    setActive(item);
    dispatch(setSize(item));
  };

  const selectImage = (image) => {
    setSelectedImageIndex(image);
    dispatch(setImage(image));
  };

  const renderFirstImage = () => {
    if (highlight.image) {
      return (
        <img
          className="cursor-pointer w-[560] h-[60px] object-contain"
          src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image}`}
          onClick={() =>
            selectImage(
              `https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image}`
            )
          }
          alt=""
        />
      );
    }
    return <div />;
  };

  return (
    <div>
      <div className=" md:container mx-auto mt-10 w-[95%] md:flex justify-around">
        <div className="right-side">
          <HoverCard shadow="md" closeDelay={200}>
            <Image
              className="w-[400px] min-h-[500px] max-h-[500px] object-contain mt-24"
              fallback={
                selectedImageIndex ? selectedImageIndex :
                  `https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image}`

              }
              onClick={open}
              title={highlight.image}
              style={{ cursor: "pointer" }}
            />
            <HoverCard.Dropdown>
              <Text size="sm">{highlight.name}</Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </div>
        <div className="left-side">
          <div>
            <div className="mb-[30px]">
              <h1 className="text-[#5b5b5b] text-2xl font-extrabold">
                {highlight.description}
              </h1>
            </div>
            <div className="w-[500px] h-[58px] bg-[#c9eeff] flex justify-center items-center text-[#5b5b5b] mb-[50px]">
              <p className="font-medium">Want 30% off your next order?</p>
              <Link
                to={"/"}
                className="text-[#008ac9] underline font-medium pl-4"
              >
                Become a member now
              </Link>
            </div>
            <div className="flex">
              {renderFirstImage()}
              <img
                className="cursor-pointer w-[560] h-[60px] object-contain"
                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image_2}`}
                onClick={() =>
                  selectImage(
                    `https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image_2}`
                  )
                }
                alt=""
              />
              <img
                className="cursor-pointer w-[560] h-[60px] object-contain"
                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image_3}`}
                onClick={() =>
                  selectImage(
                    `https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image_3}`
                  )
                }
                alt=""
              />
            </div>
            <div className="flex mr-7">
              {Array.isArray(highlight.size) ? (
                highlight.size.split(",").map((item) => (
                  <div
                    key={item}
                    data-active={active === item || undefined}
                    onClick={() => selectSize(item)}
                    className={`border-2 h-[32px] w-[32px] text-center cursor-pointer hover-bg-[#5b5b5b] hover-text-white duration-300 ${active === item ? "bg-[#008ac9] text-white" : ""
                      }`}
                  >
                    <p>{item.trim()}</p>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-gray-500">No available sizes</p>
                </div>
              )}
            </div>
            <div></div>
          </div>
          <ContiuneHightleht highlight={highlight} />
        </div>
      </div>
    </div>
  );
}

export default HightLightsId;


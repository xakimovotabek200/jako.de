import { HoverCard, Text } from "@mantine/core";
import { Image } from "antd";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setImage, setSize } from "../redux/slice";
import ContiuneHightleht from "./ContiuneHightleht";

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
    return <div>Data not found</div>;
  }

  const selectSize = (item) => {
    setActive(item);
    dispatch(setSize(item));
  };

  const selectImage = (hightlight) => {
    setSelectedImageIndex(highlight.image);
    dispatch(setImage(highlight.image));
  };

  return (
    <div>
      <div className="mt-24 md:container mx-auto w-[95%] md:flex justify-around">
        <div className="right-side">
          <HoverCard shadow="md" closeDelay={200}>
            <Image
              className="w-[500px] min-h-[500px] max-h-[500px] object-contain mt-24"
              fallback={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image}`}
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
            <div className="w-full md:w-[500px] h-[58px] bg-[#c9eeff] flex justify-center items-center text-[#5b5b5b] mb-[50px]">
              <p className="text-sm md:font-medium">Want 30% off your next order?</p>
              <Link
                to={"/"}
                className="text-sm md:text-[#008ac9] underline font-medium pl-4"
              >
                Become a member now
              </Link>
            </div>
            <div className="flex">
              <img
                className="cursor-pointer w-[560] h-[60px] object-contain"
                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${highlight.image}`}
                onClick={() => selectImage(highlight)}
                alt=""
              />
            </div>
            <div className="flex mr-7">
              {Array.isArray(highlight) &&
                highlight.size.map((item) => (
                  <div
                    key={item}
                    data-active={active === item || undefined}
                    onClick={() => selectSize(item)}
                    className={`border-2 h-[32px] w-[32px] text-center cursor-pointer hover-bg-[#5b5b5b] hover-text-white duration-300 ${
                      active === item ? "bg-[#008ac9] text-white" : ""
                    }`}
                  >
                    <p>{item}</p>
                  </div>
                ))}
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

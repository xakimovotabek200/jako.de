import { Carousel } from "@mantine/carousel";
import { HoverCard, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Image } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setImage, setSize } from "../redux/slice";
import ContiuneHightleht from "./ContiuneHightleht";
import { productData } from "./data";
import classes from './indicator.css';

function HightLightsId() {
    const { id } = useParams();
    const highlight = productData.find((item) => item.id === parseInt(id));
    const [selectedImageIndex, setSelectedImageIndex] = useState(highlight.image);
    const [active, setActive] = useState(highlight.size[0]);
    const [opened, { open, close }] = useDisclosure(false);

    const dispatch = useDispatch()

    if (!highlight) {
        return <div className="">data not found</div>;
    }

    function selectSize(item) {
        setActive(item)
        return dispatch(setSize(item))
    }
    function selectImage(item) {
        setSelectedImageIndex(item)
        return dispatch(setImage(item))
    }

    return (
        <div>
            <div className="container mx-auto w-[95%] md:flex justify-around">
                <div className="right_side">
                    <HoverCard shadow="md" closeDelay={200}>
                        <Image
                            className="w-[500px] min-h-[500px] max-h-[500px] object-contain mt-24"
                            fallback={selectedImageIndex}
                            onClick={open}
                            title={highlight.image}
                            style={{ cursor: "pointer" }}
                        />
                        <HoverCard.Dropdown>
                            <Text size="sm">{highlight.name}</Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </div>
                <div className="left_side">
                    <div>
                        <div className="mb-[30px]">
                            <h1 className="text-[#5b5b5b] text-2xl font-extrabold">
                                {highlight.name2}
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
                            <Carousel
                                classNames={classes}
                                loop
                                withIndicators
                                height={100}
                                nextControlIcon={
                                    <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
                                }
                                previousControlIcon={
                                    <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
                                }
                            >
                                {highlight.photos.map((item, index) => (
                                    <div key={index}>
                                        <Carousel.Slide>
                                            <img
                                                className="cursor-pointer w-[560] h-[60px] object-contain"
                                                src={item}
                                                onClick={
                                                    () => selectImage(item)}
                                                alt=""

                                            />
                                        </Carousel.Slide>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="flex mr-7">
                            {highlight.size.map((item) => (
                                <div
                                    key={item}
                                    data-active={active === item || undefined}
                                    onClick={() => selectSize(item)}
                                    className={`border-2 p-3 cursor-pointer hover:bg-[#5b5b5b] hover:text-white duration-300 ${active === item ? "bg-[#008ac9] text-white" : ""
                                        }`}
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ContiuneHightleht highlight={highlight} />
                </div>
            </div>
        </div>
    );
}

export default HightLightsId;

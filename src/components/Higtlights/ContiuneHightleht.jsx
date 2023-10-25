import { Button, Accordion } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";
import "./Hightlights.css";
import { groceries } from "./data";

function ContiuneHightleht({ highlight }) {
    const [active, setActive] = useState(false);

    let [quantity, setQuantity] = useState(highlight.quantity);
    const [add, setAdd] = useState(1);
    const dispatch = useDispatch();
    const { selectedSize, selectedImage } = useSelector(
        (state) => state.orebiReducer
    );

    const handleHeartClick = () => {
        setActive(!active);
    };

    function handleAddToCart(data) {
        let newData = Object.assign({}, data);
        newData.uuid = crypto.randomUUID();
        newData.quantity = quantity;
        newData.size = selectedSize;
        newData.image = selectedImage ? selectedImage : newData.image;
        return dispatch(addToCart(newData));
    }

    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
            <Accordion.Panel className="w-[500px]">
                {item.description}
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <div>
            <div className="flex gap-6 items-center">
                <span className="price">from €{highlight.cost1}</span>
                <h2 className="">
                    <del>€{highlight.costDel2}</del>
                </h2>
                <p className="text_diskpunt">-{highlight.discount}% Discount</p>
                <p className="text_diskpunt">Additional Discounts</p>
            </div>
            <div className={`flex justify-between items-center ${active ? 'bg-[#008ac9]' : 'bg-red'}`}>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <button className="p-4 border-2 border-solid border-[#5b5b5b]">
                            {quantity}
                        </button>
                        <div className="m-1">
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-[30px] border-2 border-solid mb-0.5 border-[#5b5b5b] hover:bg-[#008ac9] hover:text-white"
                            >
                                +
                            </button>
                            <br />
                            <button
                                onClick={() =>
                                    quantity ? setQuantity(quantity - 1) : setQuantity(0)
                                }
                                className="w-[30px] h-[32px] border-2 border-solid border-[#5b5b5b] hover:bg-[#008ac9] hover:text-white"
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <Button
                        onClick={() => handleAddToCart(highlight)}
                        variant="filled"
                        style={{ width: "200px", height: "65px" }}
                    >
                        Add to cart
                    </Button>
                </div>
                <div className="flex items-center underline cursor-pointer">
                    Add
                    <div onClick={handleHeartClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`icon icon-tabler icon-tabler-heart ${active ? 'text-white' : ''}`}
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#D0D4CA"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <Accordion
                    variant="separated"
                    radius="md"
                    disableChevronRotation
                    defaultValue="Apples"
                >
                    {items}
                </Accordion>
            </div>
        </div>
    );
}

export default ContiuneHightleht;

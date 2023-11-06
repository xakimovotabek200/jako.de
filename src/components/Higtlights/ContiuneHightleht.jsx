import { Accordion, Button } from "@mantine/core";
import { IconRotate360 } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishes } from "../redux/slice";
import "./Hightlights.module.css";
import { groceries } from "./data";

function ContiuneHightleht({ highlight }) {
  const [active, setActive] = useState(false);

  const [quantity, setQuantity] = useState(1);
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
    dispatch(addToCart(newData));
    dispatch(addWishes(newData));
  }

  function handleAddToCart2(data) {
    let newData = Object.assign({}, data);
    newData.uuid = crypto.randomUUID();
    newData.quantity = quantity;
    newData.size = selectedSize;
    newData.image = selectedImage ? selectedImage : newData.image;
    dispatch(addWishes(newData));
  }

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control
        icon={item.emoji}
        className="hover:text-[#008ac9] duration-300"
      >
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className="w-[500px]">
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      <div className="flex gap-6 items-center">
        <span className="price">from €{highlight.price}</span>
        <h2 className="">
          <del>€{highlight.shipping_price}</del>
        </h2>
        <p className="text_diskpunt">-{highlight.discount}% Discount</p>
        <p className="text_diskpunt">Additional Discounts</p>
      </div>
      <div className={`flex justify-between items-center`}>
        <div className="flex items-center">
          <div className="flex items-center">
            <button className="p-4 w-[60px] border-2 border-solid border-[#5b5b5b]">
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
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                className="w-[30px] h-[32px] border-2 border-solid border-[#5b5b5b] hover:bg-[#008ac9] hover:text-white"
              >
                -
              </button>
            </div>
          </div>
          <Button
            className="bg-[#008ac9]"
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
            <button onClick={() => handleAddToCart2(highlight)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-heart-filled ${
                  active ? "text-red" : ""
                }`}
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#D0D4CA"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                  fill={active ? "red" : "#D0D4CA"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center m-6">
        <div>
          <IconRotate360 />
        </div>
        <div className="ml-5">
          <p className="font-semibold text-[18px] text-[#5b5b5b]">
            30 days right of return
          </p>
          <p className="text-[#5b5b5b]">Fast processing</p>
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

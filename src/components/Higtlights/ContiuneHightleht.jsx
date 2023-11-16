import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { IconRotate360 } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishes } from "../redux/slice";
import "./Hightlights.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import { IconHeart } from "@tabler/icons-react";
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
    toast.success("Maxsulotingiz savatga qoshildi !");
  }

  function handleAddToCart2(data) {
    let newData = Object.assign({}, data);
    newData.uuid = crypto.randomUUID();
    newData.quantity = quantity;
    newData.size = selectedSize;
    newData.image = selectedImage ? selectedImage : newData.image;
    dispatch(addWishes(newData));
    toast.success("Maxsulotingiz saqlandi!");
  }

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
            <button className="" onClick={() => handleAddToCart2(highlight)}>
              <IconHeart />
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{highlight.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ContiuneHightleht;

import { HoverCard, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../redux/slice";

function Cart() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.orebiReducer);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProductImage, setSelectedProductImage] = useState(null);

  function calculateTotal(products) {
    return products.reduce((total, product) => {
      const productCost = parseFloat(product.cost1);
      return total + productCost * product.quantity;
    }, 0);
  }

  const totalSum = calculateTotal(products);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7 container mx-auto">
        <div className="w-full flex flex-col h-fit gap-4 p-4">
          <p className="text-blue-900 text-xl font-extrabold">My cart</p>
          {products.map((product, ind) => (
            <div
              className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm"
              key={ind}
            >
              <div className="flex flex-col md:flex-row gap-3 justify-between">
                <div className="flex flex-row gap-6 items-center">
                  <div className="w-28 h-28">
                    <HoverCard shadow="md" closeDelay={200}>
                      <HoverCard.Target>
                        <img
                          onClick={() => {
                            setSelectedProductImage(product.image);
                            open();
                          }}
                          title="Open modal"
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                          src={product.image}
                          alt=""
                        />
                      </HoverCard.Target>
                      <Modal
                        size="calc(50vw - 3rem)"
                        opened={opened}
                        onClose={close}
                      >
                        <img
                          src={product.image}
                          alt=""
                          style={{
                            height: "500px",
                            objectFit: "contain",
                          }}
                        />
                      </Modal>
                    </HoverCard>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg text-gray-800 font-semibold">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-600 font-semibold">
                      Color:{" "}
                      <span className="font-normal">{product.color}</span>
                    </p>
                    <p className="text-xs text-gray-600 font-semibold">
                      Size: <span className="font-normal">{product.size}</span>
                    </p>
                  </div>
                </div>
                <div className="self-center text-center">
                  <p className="text-gray-600 font-normal text-sm line-through">
                    ${product.cost1}
                    <span className="text-red-500 ml-2">
                      ${product.costDel2}
                    </span>
                  </p>
                  <p className="text-gray-800 font-normal text-xl">$49.99</p>
                </div>
                <div className="self-center">
                  <button
                    className="hover:text-red-700"
                    onClick={() => dispatch(deleteItem(product.uuid))}
                  >
                    <svg
                      height="24px"
                      width="24px"
                      id="Layer_1"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      version="1.1"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <path
                          d="M400,113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3v20h-80V128h21.1l23.6,290.7
                    c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400V113.3z M206.6,93.3c0-8.1,6.6-14.7,14.6-14.7h69.5c8.1,0,14.6,6.6,14.6,14.7v20h-98.7V93.3z M341.6,417.9l0,0.4v0.4c0,8.1-6.6,14.7-14.6,14.7H186c-8.1,0-14.6-6.6-14.6-14.7v-0.4
                    l0-0.4L147.7,128h217.2L341.6,417.9z"
                        />
                        <g>
                          <rect height="241" width="14" x="249" y="160" />
                          <polygon points="320,160 305.4,160 294.7,401 309.3,401" />
                          <polygon points="206.5,160 192,160 202.7,401 217.3,401" />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-row self-center gap-1">
                <button
                  onClick={() => dispatch(drecreaseQuantity(product))}
                  className="w-5 h-5 self-center rounded-full inline-flex items-center justify-center  border border-gray-300"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly="readonly"
                  value={product.quantity}
                  className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
                />
                <button
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="w-5 h-5 self-center inline-flex justify-center items-center rounded-full border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
          <p className="text-blue-900 text-xl font-extrabold">
            Purchase Resume
          </p>
          <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
            <div className="flex flex-row justify-between">
              <p className="text-gray-600">Subtotal (2 Items)</p>
              <p className="text-end font-bold">$99.98</p>
            </div>
            <hr className="bg-gray-200 h-0.5" />
            <div className="flex flex-row justify-between">
              <p className="text-gray-600">Freight</p>
              <div>
                <p className="text-end font-bold">$3.90</p>
                <p className="text-gray-600 text-sm font-normal">
                  Arrives on Jul 16
                </p>
              </div>
            </div>
            <hr className="bg-gray-200 h-0.5" />
            <div className="flex flex-row justify-between">
              <p className="text-gray-600">Discount Coupon</p>
              <Link className="text-gray-500 text-base underline" to={"/"}>
                Add
              </Link>
            </div>
            <hr className="bg-gray-200 h-0.5" />
            <div className="flex flex-row justify-between">
              <p className="text-gray-600">Total</p>
              <div>
                <p className="text-end font-bold">${totalSum.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
                FINISH
              </button>
              <button className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
                ADD MORE PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

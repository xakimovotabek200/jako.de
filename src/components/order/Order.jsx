import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "./useForm";
import axios from "axios";
import { Button } from "antd";

function Order() {
    const [items, setItems] = useState([]);
    const [selectedItemsLength, setSelectedItemsLength] = useState([]);
    const selectedProducts = useSelector((state) => state.orebiReducer.products);
    const navigate = useNavigate();

    const objectApp = {
        user_name: "",
        product_slug: "",
        phone: "",
        location_number_product: "",
        date: "",
    };

    const [value, pocketInfo] = useForm(objectApp);

    useEffect(() => {
        if (items) {
            setItems(items);
        }
    }, []);

    useEffect(() => {
        let count = 0;
        for (let index = 0; index < selectedProducts.length; index++) {
            count += selectedProducts[index].quantity;
        }
        setSelectedItemsLength(count);
    }, []);

    const addApplication = async (e) => {
        e.preventDefault();

        const requestData = {
            user_name: value.user_name,
            product_slug: value.product_slug,
            product_slug: selectedProducts.map((item) => item.slug).join(),
            size: value.size,
            phone: value.phone,
            location_number_product: value.location,
            date: value.date,
        };

        try {
            const response = await axios.post(
                "https://api.abdullajonov.uz/legend-backend-api/api/order/store",
                requestData
            );

            if (response.data && response.data.message) {
                toast.success(response.data.message);
                navigate("/");
            } else {
                toast.error(response.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={addApplication} className="mt-12 md:my-3">
                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold">Ismingiz *</h1>
                    <input
                        className="w-[810px] border-2 ml-[110px] border-solid border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="text"
                        onChange={pocketInfo}
                        name="user_name"
                        value={value.user_name}
                        required
                    />
                </div>
                <br />
                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold">
                        Telefon raqam *
                    </h1>
                    <input
                        className="w-[810px] border-2 ml-10 border-solid border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="text"
                        onChange={pocketInfo}
                        name="phone"
                        value={value.phone}
                        required
                    />
                </div>
                <br />

                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold">Manzil *</h1>
                    <input
                        className="w-[810px] border-2 ml-[120px] border-solid border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="text"
                        onChange={pocketInfo}
                        name="location"
                        value={value.location}
                        required
                    />
                </div>

                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold">Tavsif *</h1>
                    <input
                        className="w-[810px] border-2 ml-[130px] border-solid border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="text"
                        onChange={pocketInfo}
                        name="product_slug"
                        value={value.product_slug}
                        required
                    />
                </div>
                <br />

                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold">
                        Yetkazib Berish *
                    </h1>
                    <input
                        className="w-[810px] border-2 border-solid ml-5 border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="date"
                        placeholder="date"
                        onChange={pocketInfo}
                        name="date"
                        value={value.date}
                        required
                    />
                </div>
                <br />

                <div className="flex items-center ">
                    <h1 className="text-neutral-600 text-2xl font-semibold"> Maxsulot *</h1>
                    <input
                        className="w-[810px] border-2 border-solid ml-[80px] border-neutral-600 py-2 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                        type="text"
                        name="product"
                        value={selectedProducts.map(
                            (item) => `${item.name} - ${item.quantity} - ${item.price}`
                        )}
                        required
                        disabled
                    />
                </div>

                <br />
                <Button
                    className="w-52 h-10 bg-[#008ac9] mx-auto text-white text-lg mt-4 duration-300 my-3 hover:bg-neutral-600"
                    type="submit"
                >
                    Arizani jonatish
                </Button>
            </form>
        </div>
    );
}

export default Order;

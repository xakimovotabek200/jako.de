import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "./useForm";
import axios from "axios";

function Order() {
    const [items, setItems] = useState([]);
    const [selectedItemsLength, setSelectedItemsLength] = useState([]);
    const selectedProducts = useSelector((state) => state.orebiReducer.products);
    const navigate = useNavigate();

    const objectApp = {
        user_name: "",
        product_slug: "",
        size: 0,
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
            const response = await axios.post("https://api.abdullajonov.uz/legend-backend-api/api/order/store", requestData);

            if (response.data && response.data.message) {
                toast.success(response.data.message);
                navigate("/");
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again.");
        }
    };
    return (
        <form onSubmit={addApplication} className="my-3">
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Ismingiz"
                onChange={pocketInfo}
                name="user_name"
                value={value.user_name}
                required
            />
            <br />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Telefon raqam"
                onChange={pocketInfo}
                name="product_slug"
                value={value.product_slug}
                required
            />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Telefon raqam"
                onChange={pocketInfo}
                name="size"
                value={value.size}
                required
            />
            <br />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Manzil"
                onChange={pocketInfo}
                name="location"
                value={value.location}
                required
            />
            <br />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Telefon raqam"
                onChange={pocketInfo}
                name="phone"
                value={value.phone}
                required
            />
            <br />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="date"
                onChange={pocketInfo}
                name="date"
                value={value.date}
                required
            />
            <br />
            <input
                className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Mahsulot"
                name="product"
                value={selectedProducts.map(
                    (item) => `${item.name} - ${item.quantity} - ${item.price}`
                )}
                required
                disabled
            />
            <br />
            <button
                className="w-52 h-10 bg-[blue] text-white text-lg mt-4 duration-300 my-3"
                type="submit"
            >
                Arizani jonatish
            </button>
        </form>
    );
}

export default Order;

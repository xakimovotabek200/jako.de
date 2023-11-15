import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { HoverCard } from "@mantine/core";

const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: "GET",
                url: `https://api.abdullajonov.uz/legend-backend-api/api/products/get-by-category/${category}`,
                headers: { Accept: "application/json" },
            };

            try {
                const { data } = await axios.request(options);
                setProducts(data.products.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            <ul>
                <div className="flex flex-wrap justify-center items-center">
                    {products.map((product) => (
                        <Link to={`/higtlightsId/${product.slug}`} className="min-w-[350px]">
                            <HoverCard shadow="md" closeDelay={300}>
                                <div className="">
                                    <div key={product.id}>
                                        <div className="w-full flex justify-center items-center flex-wrap gap-6 p-8">
                                            <div className="h-[500px] w-[300px] bg-white flex  flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
                                                <img
                                                    src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${product.image}`}
                                                    alt="product-image"
                                                    className="h-[65%] w-[80%] object-cover mt-4 mr-auto ml-auto bg-slate-100 rounded-md"
                                                />
                                                <div className="p-5">
                                                    <div className="flex justify between">
                                                        <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                            {product.category} &bull; {product.slug}
                                                        </div>
                                                        <br />

                                                    </div>
                                                    <h3 className="text-xl mb-2 mt-2">{product.title}</h3>
                                                    <p className="font-medium mb-2 text-sm text-gray-700">
                                                        {product.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-2xl font-bold text-gray-800">
                                                            ${product.price}
                                                        </span>
                                                        <del>
                                                            <span className="text-red-600 text-sm flex items-center gap-1">
                                                                <svg
                                                                    className="h-4 w-4 text-yellow-700"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M10 1l2.928 6.377 6.538.95-4.75 4.588 1.12 6.516L10 16.664l-5.836 3.767 1.12-6.516-4.75-4.588 6.538-.95L10 1z" />
                                                                </svg>
                                                                {product.shipping_price}
                                                            </span>
                                                        </del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </HoverCard>
                        </Link>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default ProductByCategory;

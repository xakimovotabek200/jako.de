import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";

const NewsId = () => {
    const [newsData, setNewsData] = useState([]);

    const { slug } = useParams();

    useEffect(() => {
        const fetchNewsData = async () => {
            const options = {
                method: "GET",
                url: `https://api.abdullajonov.uz/legend-backend-api/api/news/get/${slug}`,
                headers: { Accept: "application/json" },
            };
            try {
                const { data } = await axios.request(options);
                setNewsData(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNewsData();
    }, [slug]);

    return (
        <div className=" mt-12 md:container mx-auto">
            <span>{newsData.time}</span>
            <div className="w-full border-2 border-solid border-neutral-600 mb-5"></div>
            <div className="md:flex justify-around items-center flex-wrap flex-row-reverse ">
                <div className="w-full md:h-[500px] md:w-[500px]">
                    <img
                        className="h-full w-full max-h-full object-cover cursor-pointer"
                        src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${newsData.image}`}
                        alt=""
                    />
                </div>
                <div className="w-full md:bg-[#fff] p-7 shadow-lg shadow-cyan-500/50 md:w-[700px] h-[130px]">
                    <h1 className="text-neutral-600 font-medium">
                        {newsData.title} <br />
                        <span>{newsData.short_text}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NewsId;

import { Button, createTheme } from '@mantine/core';
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./News.css";
import classes from './NewsButton.css';

const options = {
    method: "GET",
    url: "https://api.abdullajonov.uz/legend-backend-api/api/news/get",
    headers: { Accept: "application/json" },
    params: {
        page: 1,
        per_page: 10, // Adjust the number of items per page as needed
    },
};

const theme = createTheme({
    components: {
        Button: Button.extend({
            classNames: classes,
        }),
    },
});
function NewsCollection() {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.request(options);
                console.log(response.data.news.data);
                const data = response.data.news.data;
                setNewsData(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = newsData.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto">
            <div className="md:flex flex-wrap mt-5 gap-5">
                {Array.isArray(displayedData) &&
                    displayedData.map((item, index) => (
                        <div key={index} className="w-[455px]">
                            <div className="text-[#5b5b5b] border-b-4  border-[#5b5b5b]">
                                {item.time}
                            </div>
                            <div className="">
                                <img
                                    className="w-[453px] object-cover h-[254px] mt-4 -z-50"
                                    src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#fff] text-[#5b5b5b] shadow-2xl w-[414px] h-[220px] p-5 mx-auto">
                                <h3 className="text-[22px] font-bold leading-8">
                                    {item.short_text}
                                </h3>
                                <p className="mt-4">{item.text}</p>
                                <button className="news_btn w-[200px] h-[50px] bg-[#5b5b5b] text-white ml-[5pc] mt-4 hover-bg-[#337ab7] duration-300 rounded-sm">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            <Button
                type="outline"
                className="pagination-button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <Button
                type="outline"
                className="pagination-button ml-5"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={endIndex >= newsData.length}
            >
                Next
            </Button>

        </div>
    );
}

export default NewsCollection;

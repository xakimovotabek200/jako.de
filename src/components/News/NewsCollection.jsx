import { Button, createTheme } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./News.css";
import classes from "./NewsButton.css";

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
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
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
      <div className="md:flex flex-wrap justify-around  mt-5 gap-5">
        {Array.isArray(displayedData) &&
          displayedData.map((item, index) => (
            <div
              key={index}
              class="w-[368px] h-[366px] flex-col justify-start items-center inline-flex"
            >
              <img
                class="w-[368px] h-[286px] rounded-lg object-cover"
                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
              />
              <div
                class="p-4 bg-slate-50 rounded-lg shadow -mt-[5pc] flex-col justify-start items-center gap-4 flex"
              >
                <div
                  class="w-[285px] text-center text-neutral-500 text-xl font-semibold leading-7"
                >
                  {item.title}
                </div>
                <div
                  class="w-[285px] text-center text-neutral-500 text-xl font-semibold leading-7"
                >
                  {item.text}
                </div>
                <div class="p-2 justify-center items-center gap-2 inline-flex">
                  <button class="text-green-500 text-xl font-semibold leading-7">
                    Readmore
                  </button>
                </div>
              </div>
            </div>

          ))}
      </div>
      <div className=" w-[300px] mx-auto text-center">
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
    </div>
  );
}

export default NewsCollection;

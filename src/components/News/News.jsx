import React from "react";
import NewsCollection from "./NewsCollection";

function News() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#5b5b5b] mb-[2pc]">
        WELCOME TO THE LEGENGD NEWS BLOG
      </h1>
      <div className="hover_btn">
        <div className="md:flex justify-normal items-center">
          <div>
            <img
              className="w-[990px] h-[554px] object-cover relative"
              src="https://www.jako.de/userdata/collection/resize/2200_92_2023_08_jako_einlaufkinder_vfb_newsblog_1200x628px.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#fff]  shadow-2xl w-[545px] h-[285px] p-10 absolute mt-[10pc] left-[58pc]">
            <div className="text-[#5b5b5b] border-b-4  border-[#5b5b5b]">
              06.09.2023
            </div>
            <div>
              <h3 className="text-[26px] font-bold leading-8">
                Beaming children's eyes at the 5:0 victory of VfB Stuttgart
              </h3>
              <span className="mt-4">
                JAKO player escorts with patients of the FORTEe study
              </span>
              <button className="news_btn w-[200px] h-[50px] bg-[#5b5b5b] text-white mt-4 hover:bg-[#337ab7] duration-300 rounded-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewsCollection />
    </div>
  );
}

export default News;

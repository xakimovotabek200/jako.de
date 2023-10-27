import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.abdullajonov.uz/legend-backend-api/api/news/get',
    headers: { Accept: 'application/json' },
};

function NewsCollection() {
    const [newsData, setNewsData] = useState([]);

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

    return (
        <div className='container mx-auto'>
            <div className='md:flex flex-wrap mt-5 gap-5'>
                {Array.isArray(newsData) && newsData.map((item, index) => (
                    <div key={index} className='w-[455px]'>
                        <div className='text-[#5b5b5b] border-b-4  border-[#5b5b5b]'>
                            {item.time}
                        </div>
                        <div className=''>
                            <img
                                className='w-[453px] object-cover h-[254px] mt-4 -z-50'
                                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                                alt=''
                            />
                        </div>
                        <div className='bg-[#fff] text-[#5b5b5b] shadow-2xl w-[414px] h-[220px] p-5 mx-auto'>
                            <h3 className='text-[22px] font-bold leading-8'>{item.short_text}</h3>
                            <p className='mt-4'>{item.text}</p>
                            <button className='news_btn w-[200px] h-[50px] bg-[#5b5b5b] text-white ml-[5pc] mt-4 hover:bg-[#337ab7] duration-300 rounded-sm'>
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsCollection;

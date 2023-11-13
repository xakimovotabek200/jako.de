import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchPartners = async () => {
            const options = {
                method: 'GET',
                url: 'https://api.abdullajonov.uz/legend-backend-api/api/partners/get',
                headers: { Accept: 'application/json' },
            };

            try {
                const { data } = await axios.request(options);
                setPartners(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPartners();
    }, []);
    return (
        <div className='container mx-auto'>
            {
                Array.isArray(partners) && partners.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1 className='text-center text-[55px] text-neutral-600 font-semibold'>Partners</h1>
                            <div className='border-[1px] border-solid border-neutral-600 w-full mb-5' />
                            <div>
                                <img
                                    className='w-[85px] h-[75px] object-cover cursor-pointer'
                                    src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.logo}`}
                                    alt="" />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Partners;

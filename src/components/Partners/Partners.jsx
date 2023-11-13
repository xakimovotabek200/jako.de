import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
console.log(partners);
    return (
        <div>
            {
                Array.isArray(partners) && partners.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            }

        </div>
    );      
};

export default Partners;

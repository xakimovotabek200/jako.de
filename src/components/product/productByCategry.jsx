import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const category = "your_category";

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `https://api.abdullajonov.uz/legend-backend-api/api/products/get-by-category/${category}`,
                headers: { Accept: 'application/json' }
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
            <h1>Products By Category</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductByCategory;

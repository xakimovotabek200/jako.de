import React, { useState, useEffect } from "react";
import "./product.css";

const initialProductData = {
    id: "1",
    name: " Cap function",
    cost1: 41.99,
    costDel2: 59.99,
    discount: 30,
    image: "https://cdn.jako.de/userdata/dcshop/images/thumb_4/6151_00.jpg",
    preview:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://cdn.jako.de/userdata/dcshop/images/thumb_2/6120_01.jpg",
        "https://cdn.jako.de/userdata/dcshop/images/thumb_4/8711_620_M01.jpg",
        "https://cdn.jako.de/userdata/dcshop/images/thumb_2/6120_01.jpg",
        // ...other properties
    ]
};

const Product = () => {
    const [productData, setProductData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setProductData(initialProductData);
            setSelectedImage(initialProductData.photos[0]);
        }, 1000);
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    if (!productData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="product-container">
            <div className="left-side">
                {selectedImage && <img src={selectedImage} alt={productData.name} className="preImg" />}
            </div>
            <div className="right-side">
                <div className="heading">{productData.name}</div>
                <div className="img-gallery">
                    {productData.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Product Preview ${index + 1}`}
                            className={selectedImage === photo ? 'active' : ''}
                            onClick={() => handleImageClick(photo)}
                        />
                    ))}
                </div>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;

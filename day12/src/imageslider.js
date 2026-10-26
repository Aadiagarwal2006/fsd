import React, { useState } from 'react';
const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    ];

    const left = () => {
        setIndex((Index) => (Index - 1 + images.length) % images.length);
    };

    const right = () => {
        setIndex((Index) => (Index + 1) % images.length);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ background: "black", color: "white" }}>Image Slider</h1>

            <img
                src={images[index]}
                alt="Toji Fushiguro"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />

            <br /><br />

            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
        </div>
    );
};

export default ImageSlider;
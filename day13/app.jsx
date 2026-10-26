import React, { useEffect, useState } from 'react'

const App = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    ]
    useEffect(() => {
        const interval = setInterval(() => { setIndex((prevIndex) => (prevIndex + 1) % images.length) }, 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div>
            <h1>image slider</h1>
            <img
                src={images[index]}
                alt={`Image ${index + 1}`}></img>
        </div>
    )
}

export default App
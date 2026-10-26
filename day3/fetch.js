const getproductdata = async () => {
    try {
        const response = await fetch("https://dummyjason.com/products");
        const products = await response.json();
        console.log(products);
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};
getproductdata();
const root = ReactDOM.createRoot(document.getElementById("root"));

const getProductsData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
};

const HeaderComponent = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>E-commerce Website</h1>
        </div>
    );
};

const ProductComponent = ({ products }) => {
    return (
        <div className="prod-Container">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    );
};

const FooterComponent = () => {
    return (
        <div>
            <h3>Copyright © All rights reserved</h3>
        </div>
    );
};

const renderFunc = async () => {
    let products = await getProductsData();
    const reactElement = (
        <>
            <HeaderComponent />
            <ProductComponent products={products} />
            <FooterComponent />
        </>
    );
    root.render(reactElement);
};

renderFunc();

let products = [];
let cart = {};

const getProductsData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    products = data.products;

    const productcontainer = document.getElementById("products-container");

    for (let i = 0; i < products.length; i++) {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = products[i].thumbnail;
        img.alt = products[i].title;
        img.width = 200;

        const title = document.createElement("h1");
        title.innerText = products[i].title;

        const price = document.createElement("h2");
        price.innerText = "Price: $" + products[i].price;

        const dec_button = document.createElement("button");
        dec_button.innerText = "-";

        const span = document.createElement("span");
        span.innerText = " 0 ";

        const inc_button = document.createElement("button");
        inc_button.innerText = "+";

        const add_button = document.createElement("button");
        add_button.innerText = "ADD TO CART";

        // ADD TO CART
        add_button.addEventListener("click", () => {
            addToCart(products[i].id);
        });

        // PLUS
        inc_button.addEventListener("click", () => {
            addToCart(products[i].id);
            updateQuantityDisplay(span, products[i].id);
        });

        // MINUS
        dec_button.addEventListener("click", () => {
            removeFromCart(products[i].id);
            updateQuantityDisplay(span, products[i].id);
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(add_button);
        div.appendChild(dec_button);
        div.appendChild(span);
        div.appendChild(inc_button);

        productcontainer.appendChild(div);
    }
};


// ADD PRODUCT TO CART
function addToCart(productId) {

    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }

    updateCart();

    console.log(cart);
}


// REMOVE ONE QUANTITY
function removeFromCart(productId) {

    if (cart[productId]) {
        cart[productId]--;

        if (cart[productId] === 0) {
            delete cart[productId];
        }
    }

    updateCart();

    console.log(cart);
}


// UPDATE QUANTITY DISPLAY
function updateQuantityDisplay(span, productId) {

    if (cart[productId]) {
        span.innerText = " " + cart[productId] + " ";
    } else {
        span.innerText = " 0 ";
    }
}


// UPDATE CART
function updateCart() {

    const cartContainer = document.getElementById("cart-container");

    cartContainer.innerHTML = "";

    let total = 0;

    for (let productId in cart) {

        const product = products.find(
            p => p.id == productId
        );

        const quantity = cart[productId];

        const cartItem = document.createElement("div");

        const name = document.createElement("h3");
        name.innerText = product.title;

        const quantityText = document.createElement("p");
        quantityText.innerText = "Quantity: " + quantity;

        const price = document.createElement("p");
        price.innerText =
            "Price: $" + (product.price * quantity).toFixed(2);

        cartItem.appendChild(name);
        cartItem.appendChild(quantityText);
        cartItem.appendChild(price);

        cartContainer.appendChild(cartItem);

        total += product.price * quantity;
    }

    const totalElement = document.createElement("h2");

    totalElement.innerText =
        "Total: $" + total.toFixed(2);

    cartContainer.appendChild(totalElement);
}


getProductsData();
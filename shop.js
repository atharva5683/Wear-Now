document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    function updateCartDisplay() {
        let cartItemsElement = document.getElementById("cart-items");
        let totalPriceElement = document.getElementById("total-price");
        
        cartItemsElement.innerHTML = "";
        let total = 0;

        for (let product of cart) {
            let li = document.createElement("li");
            li.textContent = product.name + " - &#8377;" + product.price.toFixed(2);
            cartItemsElement.appendChild(li);
            total += product.price;
        }
        
        totalPriceElement.textContent = "&#8377;" + total.toFixed(2);
    }

    document.querySelector(".add-to-cart-btn").addEventListener("click", function() {
        let productElement = this.parentElement;
        let priceText = productElement.querySelector(".price").textContent;
        let price = parseFloat(priceText.replace("&#8377;", ""));
        let product = {
            name: productElement.querySelector("img").alt,
            price: price
        };
        cart.push(product);
        updateCartDisplay();
    });

    document.getElementById("buy-now").addEventListener("click", function() {
        if(cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Proceeding to checkout...");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsSection = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    let cart = [];

    // Load cart from local storage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        renderCart();
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Check if product already in cart
            const existingProduct = cart.find(item => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            // Save cart to local storage
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });

    function renderCart() {
        // Clear cart items
        cartItemsSection.innerHTML = '';

        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            cartItemsSection.innerHTML += `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }
});

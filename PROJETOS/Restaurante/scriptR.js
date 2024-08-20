document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    function updateCart() {
        cartCount.textContent = cart.length;
        const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        cartTotal.textContent = `R$${total}`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            cart.push({ name, price });
            updateCart();
        });
    });

    updateCart();
});

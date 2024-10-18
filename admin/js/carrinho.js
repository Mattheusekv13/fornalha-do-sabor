let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const product = { name, price, quantity: 1 };
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        cart[index].quantity += 1; 
    } else {
        cart.push(product); 
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(name + ' foi adicionado ao carrinho.');
}
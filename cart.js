
let cart = [];
function addToCart(product) {
  cart.push(product);
  alert(`${product.name} hozzáadva a kosárhoz!`);
  updateCart();
}


function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.length; 
}


function viewCart() {
  const cartContent = document.getElementById('cart-content');
  cartContent.innerHTML = ''; 
  
  if (cart.length === 0) {
    cartContent.innerHTML = '<p>A kosár üres.</p>';
  } else {
    cart.forEach(item => {
      const productElement = document.createElement('div');
      productElement.classList.add('cart-item');
      productElement.innerHTML = `
        <p>${item.name} - ${item.price} Ft</p>
        <button onclick="removeFromCart('${item.id}')">Eltávolítás</button>
      `;
      cartContent.appendChild(productElement);
    });
  }
  cartContent.style.display = 'block'; 
}


function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
  viewCart();
}


document.getElementById('view-cart-btn').addEventListener('click', viewCart);

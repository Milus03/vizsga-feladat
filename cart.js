
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} hozzáadva a kosárhoz!`);
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => {
    return item.id && item.id.toString() !== productId.toString();
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  viewCart();
}



function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', updateCart);


function viewCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContent = document.getElementById('cart-items');
  cartContent.innerHTML = '';

  if (cart.length === 0) {
    cartContent.innerHTML = '<p>A kosár üres.</p>';
  } else {
    cart.forEach(item => {
      if (!item.id) {
        console.error("Sikerült hozzáadni a terméket a kosárhoz!", item);
      }

      const productElement = document.createElement('div');
      productElement.classList.add('cart-item');
      productElement.innerHTML = `
        <p>${item.name} - ${item.price} Ft</p>
        <button class="remove-btn" data-id="${item.id}">Eltávolítás</button>
      `;
      cartContent.appendChild(productElement);
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');
        if (!productId) {
          return;
        }
        removeFromCart(productId);
      });
    });
  }
}


document.getElementById('view-cart-btn').addEventListener('click', viewCart);

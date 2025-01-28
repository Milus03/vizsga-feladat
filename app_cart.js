// Kosár tartalmának frissítése, ha a kosár megnyílik.
document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  });
  
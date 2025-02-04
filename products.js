document.addEventListener("DOMContentLoaded", function() {
    // Termékek adatainak definiálása
    const products = [
      { id: 1, name: "Termék 1", price: 5000, imgSrc: "https://via.placeholder.com/200" },
      { id: 2, name: "Termék 2", price: 7500, imgSrc: "https://via.placeholder.com/200" },
      { id: 3, name: "Termék 3", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 4, name: "Termék 4", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 5, name: "Termék 5", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 6, name: "Termék 6", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 7, name: "Termék 7", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 8, name: "Termék 8", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 9, name: "Termék 9", price: 12000, imgSrc: "https://via.placeholder.com/200" },
      { id: 10, name: "Termék 10", price: 12000, imgSrc: "https://via.placeholder.com/200" },

    ];
  
    // Termékek megjelenítése
    const productList = document.getElementById("product-list");
  
    // Létrehozzuk a HTML-t minden termékhez
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Ár: ${product.price} Ft</p>
        <button class="add-to-cart" data-product-id="${product.id}">Kosárba</button>
      `;
      productList.appendChild(productDiv);
    });
  
    // Kosárba tétel kezelése
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function() {
        const productId = this.getAttribute("data-product-id");
        addToCart(productId);
      });
    });
  });
  
  // Kosárba tétel funkció
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  // Kosár tartalmának frissítése
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  }
  
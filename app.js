document.addEventListener("DOMContentLoaded", function() {
    // Kosár gombra kattintás
    const cartButton = document.getElementById("view-cart-btn");
    const cartContent = document.getElementById("cart-content");
  
    cartButton.addEventListener("click", function() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItemsDiv = document.getElementById("cart-items");
      cartItemsDiv.innerHTML = ""; // Üresítjük a kosár tartalmát
  
      if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>A kosár üres.</p>";
      } else {
        cart.forEach(productId => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("cart-item");
          productDiv.innerHTML = `<p>Termék ID: ${productId}</p>`;
          cartItemsDiv.appendChild(productDiv);
        });
      }
  
      cartContent.style.display = "block";
    });
  });
  
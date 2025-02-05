async function fetchProductData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products. Status: " + response.status);
    }

    const data = await response.json();

    const productCards = document.getElementById("productCards");
    productCards.innerHTML = "";

    const products = data.slice(0, 4);
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const productContent = `
        <img src="${
          product.image || "https://via.placeholder.com/220x150"
        }" alt="${product.title}" />
        <div class="product-content">
          <h3>${product.title}</h3>
          <p>${product.category}</p>
          <span>$${product.price}</span>
          <div class="description">
            <p>${product.description || "No description available."}</p>
          </div>
          <div class="rating">
            <p>Rating: ${product.rating.rate} (${
        product.rating.count
      } reviews)</p>
          </div>
        </div>
      `;

      productDiv.innerHTML = productContent;

      productCards.appendChild(productDiv);

      productDiv.addEventListener("click", () => {
        productDiv.classList.toggle("active");
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const productCards = document.getElementById("productCards");
    productCards.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

fetchProductData();

function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}

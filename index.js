fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("products");

    data.products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${product.thumbnail}" width="120">
        <h3>${product.title}</h3>
      `;

      div.onclick = () => {
        window.location.href = `product.html?id=${product.id}`;
      };

      container.appendChild(div);
    });
  });

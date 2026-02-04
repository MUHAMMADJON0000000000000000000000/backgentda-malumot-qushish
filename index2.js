const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
  .then(res => res.json())
  .then(product => {

    document.getElementById("productBox").innerHTML = `
      <img src="${product.thumbnail}" width="150">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
    `;

  });
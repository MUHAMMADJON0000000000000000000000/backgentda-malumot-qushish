async function getPruducts() {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    const products = date.date;

    return products;
  } catch (err) {
    console.log("err", err);
  }
}

async function writeProducts() {
  const productsListElement = document.getElementById("products-list");
  try {
    const products = await getPruducts();

    products.forEach((element) => {
      console.log("element", element);

      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      // - card_image
      const cardImageElement = document.createElement("div");
      cardImageElement.classList.add("card_image");

      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", element.imagea[0]);

      cardImageElement.appendChild(cardImage);

      //- card-info

      const cardInfoElement = document.createElement("div");
      cardInfoElement.classList.add("card_info");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card_title");
      cardTitle.innerHTML = `<a href="./about.html?id=${element.id}">${element.name}</a>`;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("card_price");
      cardPrice.textContent = "$" + element.price;

      cardInfoElement.appendChild(cardTitle);
      cardInfoElement.appendChild(cardPrice);
    });
  } catch (err) {}
}
writeProducts();

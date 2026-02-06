const API_URL = "http://localhost:5000/products";

async function getProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    return data; 
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
    return [];
  }
}

async function writeProducts() {
  const productsListElement = document.getElementById("products-list");
  productsListElement.innerHTML = "";

  try {
    const products = await getProducts();
    console.log("Kelgan mahsulotlar:", products);

    products.forEach((element) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      // - card_image
      const cardImageElement = document.createElement("div");
      cardImageElement.classList.add("card__image");

      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", element.image);
      cardImage.setAttribute("alt", element.name);
      cardImageElement.appendChild(cardImage);

      //- card-info 
      const cardInfoElement = document.createElement("div");
      cardInfoElement.classList.add("card__info");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card__title");
      cardTitle.textContent = element.name;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("card__price");
      cardPrice.textContent = "$" + element.price;


      const cardActions = document.createElement("div");
      cardActions.classList.add("card__actions");


      const cardDeleteBtn = document.createElement("button");
      cardDeleteBtn.textContent = "O'chirish";
      cardDeleteBtn.onclick = async () => {
        const confirmDelete = confirm("Rostdan ham o'chirmoqchimisiz?");
        if (confirmDelete) {
          try {
            await fetch(`${API_URL}/${element.id}`, {
              method: "DELETE",
            });
        
            writeProducts();
          } catch (error) {
            console.error("O'chirishda xatolik:", error);
          }
        }
      };


      const cardEditBtn = document.createElement("button");
      cardEditBtn.textContent = "Tahrirlash";
      cardEditBtn.onclick = () => {

        window.location.href = `./update.html?id=${element.id}`;
      };

      cardActions.appendChild(cardEditBtn);
      cardActions.appendChild(cardDeleteBtn);

      cardInfoElement.appendChild(cardTitle);
      cardInfoElement.appendChild(cardPrice);
      
      cardElement.appendChild(cardImageElement);
      cardElement.appendChild(cardInfoElement);
      cardElement.appendChild(cardActions);

      productsListElement.appendChild(cardElement);
    });
  } catch (err) {
    console.error("Chizishda xatolik:", err);
  }
}

writeProducts();

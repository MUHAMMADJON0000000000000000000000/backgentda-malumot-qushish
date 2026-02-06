const API_URL = "http://localhost:5000/products";
const form = document.getElementById("update-product-form");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (!id) {
  alert("Mahsulot ID si topilmadi!");
  window.location.href = "./index.html";
}

async function getProduct() {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Mahsulot topilmadi");

    const product = await res.json();

    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;
  } catch (err) {
    console.error(err);
    alert("Mahsulot ma'lumotlarini yuklashda xatolik!");
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  const updatedProduct = {
    name: name,
    price: parseFloat(price),
    image: image,
  };

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (res.ok) {
      alert("Mahsulot muvaffaqiyatli yangilandi!");
      window.location.href = "./index.html";
    } else {
      alert("Yangilashda xatolik yuz berdi!");
    }
  } catch (err) {
    console.error("Xatolik:", err);
    alert("Serverga ulanishda xatolik!");
  }
});

getProduct();

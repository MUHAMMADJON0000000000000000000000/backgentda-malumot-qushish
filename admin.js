const API_URL = "http://localhost:5000/products";
const form = document.getElementById("add-product-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const imageInput = document.getElementById("image");
  

  if (imageInput.files.length === 0) {
    alert("Iltimos, rasm tanlang!");
    return;
  }

  const file = imageInput.files[0];
  const reader = new FileReader();

  
  reader.readAsDataURL(file);

  reader.onload = async function() {
    const base64Image = reader.result; 

    const newProduct = {
      name: name,
      price: parseFloat(price),
      image: base64Image, 
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert("Mahsulot muvaffaqiyatli qo'shildi!");
        window.location.href = "./index.html";
      } else {
        alert("Xatolik yuz berdi!");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      alert("Serverga ulanishda xatolik!");
    }
  };

  reader.onerror = function() {
    alert("Rasmni o'qishda xatolik!");
  };
});

const t = new URLSearchParams(window.location.search);

const id = t.get("id");
renderAProduce();

async function fetchAPruduce() {
  try {
    const res = await fetch("http://localhost:5000/products/" + id);
    const Resdate = await res.json();

    // console.log(date);
    return Resdate.date;
  } catch (err) {
    console.log("err", err);
  }
}

fetchAPruduce();

const name = document.getElementById("name");
const price = document.getElementById("price");
const img = document.getElementById("img");

async function renderAProduce() {
  try {
    const prodcus = await fetchAPruduce();
    console.log("prodcus", prodcus);
    neme.textContend = prodcus.name;
    price.textContend = prodcus.price;
    img.setAttribute("src", prodcus.img);
  } catch (err) {
    console.log("err", err);
  }
}

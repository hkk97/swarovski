import { getData } from "./data.js";

const data = getData();
// console.log(data);

//display all watches//
// const imgLink
const containerSec = document.querySelector(".container");
const categories = document.querySelector("#categories");
const material = document.querySelector("#material");
const color = document.querySelector("#color");
const price = document.querySelector("#price");

const gold = document.querySelector("#gold");

data.forEach((el) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `<img class="watch-image" src=${el.imageSrc} alt="">
  <div class="watch-info">
          <p class="watch-name">${el.name}</p>
          <p class="watch-detail">${el.bracelet}, ${el.dial}</p>
          <p class="watch-price">$${el.price}</p>
        </div>`;
  containerSec.appendChild(cardDiv);
});

gold.addEventListener(
  "click",
  getByColor("gold").forEach((el) => {
    // containerSec.innerHTML = "";
  })
);

// Search by id
function getById(id) {
  return data.find((watch) => watch.id === id);
}

// Search by name
function getByName(name) {
  let lowcaseName = name.toLowerCase();
  return data.filter((watch) => watch.name.includes(lowcaseName));
}

// Serch by bracelet
function getByBracelet(bracelet) {
  let lowcaseBracelet = bracelet.toLowerCase();
  return data.filter((watch) => watch.bracelet.includes(lowcaseBracelet));
}

// Search by color
function getByColor(color) {
  let lowcaseColor = color.toLowerCase();
  console.log(lowcaseColor);
  return data.filter((watch) => watch.color.includes(lowcaseColor));
}

// Search by dial
function getByDial(dial) {
  let lowcaseDial = dial.toLowerCase();
  return data.filter((watch) => watch.dial.includes(lowcaseDial));
}

// Gets all in stock
function getAllFromStock() {
  return data.filter((watch) => watch.isInStock);
}

// Search by price range
function getByPrice(lowPrice = 0, highPrice = Infinity) {
  let newLowPrice = Number(lowPrice);
  let newHighPrice = Number(highPrice);
  return data.filter((watch) => {
    let wPrice = Number(watch.price);
    return wPrice >= newLowPrice && wPrice <= newHighPrice;
  });
}

import { getData } from "./data.js";

const data = getData();
// console.log(data);

//VARIABLES
const container = document.querySelector(".container");
const bracelet = document.querySelector("#categories");
const material = document.querySelector("#material");
const color = document.querySelector("#color");
const price = document.querySelector("#price");
const gold = document.querySelector("#gold");

const input = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");
const viewAllBtn = document.querySelector("#viewAll-btn");

//Function to display all watches
const displayWatches = function (arr) {
  arr.forEach((el) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `<img class="watch-image" src=${el.imageSrc} alt="">
      <div class="watch-info">
              <p class="watch-name">${el.name}</p>
              <p class="watch-detail">${el.bracelet}, ${el.dial}</p>
              <p class="watch-price">$${el.price}</p>
            </div>`;
    container.appendChild(cardDiv);
  });
};
displayWatches(data); //calling this function to display all watches from the very beginning

// Function to display watches filtered by search input
function searchWatches(element, inputValue) {
  // removing all objects(watches) from the container:
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //creating a new array, which will hold objects(watches) meeting the search input
  let filteredArray = [];
  const inputText = input.value.toLowerCase().split(" ");

  //looping through each element(watch) of the Data array and adding matching watches to the new array

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < inputText.length; j++) {
      if (
        data[i].name.includes(inputText[j]) ||
        data[i].bracelet.includes(inputText[j]) ||
        data[i].color.includes(inputText[j]) ||
        data[i].dial.includes(inputText[j])
      ) {
        filteredArray.push(data[i]);
      }
    }
  }
  // displaying the objs(watches) contained in the new array (objs containing the search input)
  return displayWatches(filteredArray);
}

//Function to display all watches
function resetDisplay(arr) {
  input.value = "";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  displayWatches(data);
}

//EVENT LISTENERS
searchBtn.addEventListener("click", searchWatches);
viewAllBtn.addEventListener("click", resetDisplay);

// // Search by id
// function getById(id) {
//   return data.find((watch) => watch.id === id);
// }

// // Search by name
// function getByName(name) {
//   let lowcaseName = name.toLowerCase();
//   return data.filter((watch) => watch.name.includes(lowcaseName));
// }

// Serch by bracelet
// function getByBracelet(bracelet) {
//   let lowcaseBracelet = bracelet.toLowerCase();
//   return data.filter((watch) => {
//     if(watch.bracelet.includes(lowcaseBracelet)){

//     }
//   });
// }

// // Search by color
// function getByColor(color) {
//   let lowcaseColor = color.toLowerCase();
//   console.log(lowcaseColor);
//   return data.filter((watch) => watch.color.includes(lowcaseColor));
// }

// // Search by dial
// function getByDial(dial) {
//   let lowcaseDial = dial.toLowerCase();
//   return data.filter((watch) => watch.dial.includes(lowcaseDial));
// }

// // Gets all in stock
// function getAllFromStock() {
//   return data.filter((watch) => watch.isInStock);
// }

// // Search by price range
// function getByPrice(lowPrice = 0, highPrice = Infinity) {
//   let newLowPrice = Number(lowPrice);
//   let newHighPrice = Number(highPrice);
//   return data.filter((watch) => {
//     let wPrice = Number(watch.price);
//     return wPrice >= newLowPrice && wPrice <= newHighPrice;
//   });
// }

import { getData } from "./data.js";

const data = getData();
// console.log(data);

//VARIABLES
const container = document.querySelector(".container");
// const bracelet = document.querySelector("#categories");
const material = document.querySelector("#material");
const color = document.querySelector("#color");
const price = document.querySelector("#price");
const gold = document.querySelector("#gold");

const input = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");
const viewAllBtn = document.querySelector("#viewAll-btn");

//categories links
const allCategories = document.querySelectorAll(".bracelet")

//EVENT LISTENERS
//search by input
searchBtn.addEventListener("click", searchWatches);
viewAllBtn.addEventListener("click", resetDisplay);

//search by bracelet
allCategories.forEach(category => {
  category.addEventListener("click", searchByBracelet)
})

//HELPER FUNCTIONS
//function to clear the container
const clearContainer = function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

//Function to reset after searching watches
function resetDisplay(arr) {
  input.value = "";
  clearContainer();
  displayWatches(data);
}

//Function to display all watches
const displayWatches = function (arr) {
  arr.forEach((el) => {
    const cardDiv = document.createElement("div");
    const ribbonDiv = el.isInStock ? "" : "<div class='ribbon'><p>Sold Out!</p></div>"
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `${ribbonDiv}<img class="watch-image" src=${el.imageSrc} alt="">
      <div class="watch-info">
              <p class="watch-name">${el.name}</p>
              <p class="watch-detail">${el.bracelet}, ${el.dial}</p>
              <p class="watch-price">$${el.price}</p>
            </div>`;
    container.appendChild(cardDiv);
  });
};
displayWatches(data); //calling this function to display all watches from the very beginning

//MAIN FUNCTIONS
// Function to display watches filtered by search input
function searchWatches(element, inputValue) {
  // removing all objects(watches) from the container:
  clearContainer();
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

 // Search by category(bracelet)
 function searchByBracelet() {
   const filteredArray = [];
   const braceletCategory = this.id.split("-")[0]; // get clicked id and split it to get exact bracelet type
   for(let i = 0; i < data.length; i++) {
     if (data[i].bracelet.includes(braceletCategory)) {
       filteredArray.push(data[i])
     }
   }
   clearContainer();
   return displayWatches(filteredArray);
 }

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

// // Search by id
// function getById(id) {
//   return data.find((watch) => watch.id === id);
// }

// // Search by name
// function getByName(name) {
//   let lowcaseName = name.toLowerCase();
//   return data.filter((watch) => watch.name.includes(lowcaseName));
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

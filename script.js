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
const braceletOptions = document.querySelector("#bracelet-options");
const leatherBracelet = document.querySelector("#leather-bracelet");
const fullpaveBracelet = document.querySelector("#fullpave-bracelet");
const milaneseBracelet = document.querySelector("#milanese-bracelet");
const metalBracelet = document.querySelector("#metal-bracelet");

// material dropdown checkbox
const roseGoldOption= document.querySelector("#rose-gold")
const champagneGoldOption= document.querySelector("#champagne-gold")
const stainlessGoldOption= document.querySelector("#stainless-gold")
//color options
const goldColor=document.querySelector("#gold")
const redColor=document.querySelector("#red")
const roseGoldColor=document.querySelector("#rosegold")
const pinkColor=document.querySelector("#pink")
const blackColor=document.querySelector("#black")
const blueColor=document.querySelector("#blue")
const greenColor=document.querySelector("#green")
const whiteColor=document.querySelector("#white")
const silverColor=document.querySelector("#silver")
const grayColor=document.querySelector("#gray")

//EVENT LISTENERS
//search by input
searchBtn.addEventListener("click", searchWatches);
viewAllBtn.addEventListener("click", resetDisplay);

//search by bracelet
leatherBracelet.addEventListener("click", getLeatherBracelet);
fullpaveBracelet.addEventListener("click", getFullpaveBracelet);
milaneseBracelet.addEventListener("click", getMilaneseBracelet);
metalBracelet.addEventListener("click", getMetalBracelet);
/// search by material
roseGoldOption.addEventListener("change", getRoseGold);
champagneGoldOption.addEventListener("change", getChampGold);
stainlessGoldOption.addEventListener("change", getStainSteel);
// search by colors
goldColor.addEventListener("click",getGoldColor)
redColor.addEventListener("click",getRedColor)
roseGoldColor.addEventListener("click",getRoseGoldColor)
pinkColor.addEventListener("click",getPinkColor)
blackColor.addEventListener("click",getBlackColor)
blueColor.addEventListener("click",getBlueColor)
greenColor.addEventListener("click",getGreenColor)
whiteColor.addEventListener("click",getWhiteColor)
silverColor.addEventListener("click",getSilverColor)
grayColor.addEventListener("click",getGrayColor)

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
function getLeatherBracelet(bracelet) {
  clearContainer();
  let filteredArray = [];
  let leatherBraceletType = leatherBracelet.textContent.toLowerCase();
  for (let i = 0; i < data.length; i++) {
    if (data[i].bracelet.includes(leatherBraceletType))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getFullpaveBracelet(bracelet) {
  clearContainer();
  let filteredArray = [];
  let fullpaveBraceletType = fullpaveBracelet.textContent.toLowerCase();
  console.log(fullpaveBraceletType);

  for (let i = 0; i < data.length; i++) {
    if (data[i].bracelet.includes(fullpaveBraceletType))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getMilaneseBracelet(bracelet) {
  clearContainer();
  let filteredArray = [];
  let milaneseBraceletType = milaneseBracelet.textContent.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].bracelet.includes(milaneseBraceletType))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getMetalBracelet(bracelet) {
  clearContainer();
  let filteredArray = [];
  let metalBraceletType = metalBracelet.textContent.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].bracelet.includes(metalBraceletType))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
//Functions for selecting based on material type

function getRoseGold() {

  clearContainer();
  let filteredArray = [];
  let goldMaterial = roseGoldOption.value.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].dial.includes(goldMaterial))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getChampGold() {
  
  clearContainer();
  let filteredArray = [];
  let goldMaterial = champagneGoldOption.value.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].dial.includes(goldMaterial))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getStainSteel() {
 
  clearContainer();
  let filteredArray = [];
  let goldMaterial = stainlessGoldOption.value.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].dial.includes(goldMaterial))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
//// function for color 
function getGoldColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("gold"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getRedColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("red"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getRoseGoldColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("rose gold"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getPinkColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("pink"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getBlackColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("black"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getBlueColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("blue"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getGreenColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("green"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getWhiteColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("white"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getSilverColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("silver"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}
function getGrayColor() {
  clearContainer();
  let filteredArray = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].color.includes("gray"))
      filteredArray.push(data[i]);
  }
  return displayWatches(filteredArray);
}







// - - - tried using switch for bracelet types, but cannot finish it -----//
const filterByBracelet = (event) => {
  clearContainer();
  const options = braceletOptions.childNodes; // returns children of braceletOptions: LIs, inside which are a tags, inside which there is a text with bracelet name. I dont know how to select the text - we need to put it inside braceletType
  console.log(options);
  let braceletType = options.textContent; // ???
  console.log(braceletType); // currently shows undefined
  let filteredArray = [];
  switch (event.target.value) {
    case "leather bracelet":
      for (let i = 0; i < data.length; i++) {
        if (data[i].bracelet.includes(braceletType))
          filteredArray.push(data[i]);
      }
      break;
    case "fullpave bracelet":
      for (let i = 0; i < data.length; i++) {
        if (data[i].bracelet.includes(braceletType))
          filteredArray.push(data[i]);
      }
      break;
    case "milanese bracelet":
      for (let i = 0; i < data.length; i++) {
        if (data[i].bracelet.includes(braceletType))
          filteredArray.push(data[i]);
      }
      break;
    case "metal bracelet":
      for (let i = 0; i < data.length; i++) {
        if (data[i].bracelet.includes(braceletType))
          filteredArray.push(data[i]);
      }
      break;
  }
  return displayWatches(filteredArray);
};

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

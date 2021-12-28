import { getData } from "./data.js";

// const data = getData();
// console.log(data);

//header background image changing//
let counter = 0; // a counter
let images = [
  "https://asset.swarovski.com/images/c_crop,g_xy_center,w_6178,h_3475,x_4435,y_1738/dpr_auto,f_auto,q_auto,c_lfill,w_1449,h_830/swa-cms/B2C_BRAND_KV-HOLIDAY-1_OF_GL_300DPI_RGB/5622720-5618033-5616516-5616920_SD.jpg",
  "https://asset.swarovski.com/images/dpr_auto,f_auto,q_auto/c_crop,g_xy_center,w_7093,h_3990,x_4039,y_1995/w_1920,h_880,c_fill/swa-cms/B2C_BRAND_VISUAL-HOLIDAY-DECO-TREE-2_SL_GL_300DPI_RGB/B2C_BRAND_VISUAL-HOLIDAY-DECO-TREE-2_SL_GL_300DPI_RGB.tif_GL_TT_HP_LD.jpg",
  "https://asset.swarovski.com/images/c_crop,g_xy_center,w_6497,h_2200,x_3789,y_1608/dpr_auto,f_auto,q_auto,c_lfill,w_1980,h_614/swa-cms/B2C_BRAND_KV_ADWOA-HEADSHOT-1-HOR_OF_GL_72DPI_RGB/.jpg",
  "https://asset.swarovski.com/images/c_crop,g_xy_center,w_8000,h_4500,x_4000,y_2250/dpr_auto,f_auto,q_auto,c_lfill,w_1450,h_815/swa-cms/B2C_BRAND_VISUAL-HOLIDAY-DECO-GIFTS-3_SL_GL_300DPI_RGB/.jpg",
  "https://asset.swarovski.com/images/c_crop,g_xy_center,w_4308,h_2423,x_2500,y_2095/dpr_auto,f_auto,q_auto,c_lfill,w_1280,h_720/swa-cms/B2C_HOLIDAY_VISUAL_DISNEY_SL_GL_300DPI_RGB/.jpg",
];
let maxImage = 4; //the total number of images that are available

setInterval(function () {
  document.querySelector(
    "header"
  ).style.backgroundImage = `url(${images[counter]}`;
  if (counter + 1 == maxImage) {
    counter = 0; //reset to start
  } else {
    ++counter; //iterate to next image
  }
}, 3000);

const nextImg = function () {
  document.querySelector(
    "header"
  ).style.backgroundImage = `url(${images[counter]}`;
  if (counter + 1 === maxImage) {
    counter = 0; //reset to start
  } else {
    counter++; //iterate to next image
  }
};

const prevImg = function () {
  counter = 4;
  document.querySelector(
    "header"
  ).style.backgroundImage = `url(${images[counter]}`;
  if (counter - 1 < 0) {
    counter = 0; //reset to start
  } else if (counter === 0) {
    counter = 4;
  } else {
    counter--; //iterate to prev image
  }
};

document.querySelector(".fa-chevron-left").addEventListener("click", prevImg);
document.querySelector(".fa-chevron-right").addEventListener("click", nextImg);

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

import { getData } from "./data.js";

const data = getData();

// Search by id
function  getById(id) {
    return data.find(watch => watch.id === id);
}

// Search by name
function getByName(name) {
    let lowcaseName = name.toLowerCase();
    return data.filter(watch => watch.name.includes(lowcaseName));
}

// Serch by bracelet
function getByBracelet(bracelet) {
    let lowcaseBracelet = bracelet.toLowerCase();
    return data.filter(watch => watch.bracelet.includes(lowcaseBracelet));
}

// Search by color
function getByColor(color) {
    let lowcaseColor = color.toLowerCase();
    return data.filter(watch => watch.color.includes(lowcaseColor));
}

// Search by dial
function  getByDial(dial) {
    let lowcaseDial = dial.toLowerCase();
    return data.filter(watch => watch.dial.includes(lowcaseDial));
}

// Gets all in stock
function getAllFromStock() {
    return data.filter(watch => watch.isInStock);
}

// Search by price range
function getByPrice(lowPrice = 0, highPrice = Infinity) {
    let newLowPrice = Number(lowPrice);
    let newHighPrice = Number(highPrice);
    return data.filter(watch => {
        let wPrice = Number(watch.price);
        return wPrice >= newLowPrice && wPrice <= newHighPrice;
    });
}

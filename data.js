// parsed data from the site:
// https://www.swarovski.com/en-US/c-0202/Categories/Watches/All-watches/?sort=newIn&page=2&loadMore=true&show=All
//
// const data = [];
// document.getElementsByClassName("swa-product-tile").forEach(function (el)  {
//     const nameArr = el.firstElementChild.firstElementChild.title.split(", ")
//     let name = nameArr[0];
//     let bracelet = nameArr[1];
//     let color = nameArr[2];
//     let dial, id;
//     if(nameArr.length === 5) {
//         dial = nameArr[3];
//         id = nameArr[4];
//     } else {
//         dial = '';
//         id = nameArr[3];
//     }
//     data.push(
//         {
//             name: name,
//             bracelet: bracelet,
//             color: color,
//             dial: dial,
//             id: ,
//             imageSrc: el.firstElementChild.firstElementChild.src,
//             price: el.firstElementChild.getAttribute("data-gtm-product-price"),
//             isInStock: !el.firstElementChild.lastElementChild.className.includes("notify-me")
//         }
//     )
// })
//

export const getData = () => {
  return [
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Green",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452498",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452498_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BB%BF%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452498.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Eternal watch",
      bracelet: "Metal bracelet",
      color: "Gold tone",
      dial: "Champagne-gold tone PVD - Swarovski",
      id: "5377563",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5377563_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5377563.png",
      price: "379.00",
      isInStock: false,
    },
    {
      name: "Octea Lux watch",
      bracelet: "Moon",
      color: "Leather strap",
      dial: "Blue",
      id: "5516305",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5516305_png/octea-lux-%E8%85%95%E8%A1%A8--%E6%9C%88%E4%BA%AE--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5516305.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Passage Chrono watch",
      bracelet: "Leather strap",
      color: "Pink",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5580352",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580352_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580352.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Crystalline Chic watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5544583",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5544583_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5544583.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Gold tone",
      dial: "Champagne-gold tone PVD - Swarovski",
      id: "5517794",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517794_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517794.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "Crystalline Aura watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519450",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519450_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519450.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Uptown watch",
      bracelet: "Leather strap",
      color: "Pink",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547719",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547719_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547719.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose -gold tone PVD - Swarovski",
      id: "5552424",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5552424_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2-swarovski-5552424.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Cocktail watch",
      bracelet: "Metal bracelet",
      color: "Gold tone",
      dial: "Champagne-gold tone PVD - Swarovski",
      id: "5519321",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519321_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519321.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Cocktail watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519327",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519327_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519327.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Dream Rock watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519306",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519306_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519306.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cocktail watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone plated - Swarovski",
      id: "5519324",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519324_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5519324.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Dream Rock watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519317",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519317_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519317.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5517803",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517803_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517803.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Pink",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452501",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452501_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452501.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Metal bracelet",
      color: "Gray",
      dial: "Champagne-gold tone PVD - Swarovski",
      id: "5452462",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452462_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452462.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Cosmic Rock watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5466209",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5466209_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5466209.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cosmic Rock watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Gold-tone plated - Swarovski",
      id: "5466205",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5466205_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%95%80%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5466205.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystal Rose watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5484050",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5484050_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484050.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Cosmic Rock watch",
      bracelet: "Metal bracelet",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5376092",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5376092_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5376092.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Octea Nova watch",
      bracelet: "Leather strap",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5295358",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5295358_png/octea-nova-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5295358.png",
      price: "349.00",
      isInStock: true,
    },
    {
      name: "Octea Nova watch",
      bracelet: "Milanese strap",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5430424",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5430424_png/octea-nova-%E8%85%95%E8%A1%A8--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5430424.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Blue PVD - Swarovski",
      dial: "",
      id: "5610475",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610475_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2-pvd-swarovski-5610475.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Stainless steel - Swarovski",
      id: "5610520",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610520_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610520.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Gold-tone PVD - Swarovski",
      id: "5610517",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610517_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610517.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Black PVD - Swarovski",
      dial: "Black PVD",
      id: "5610472",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610472_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2-pvd-%E7%94%B5%E9%95%80-swarovski-5610472.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5610481",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610481_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610481.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5610469",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610469_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610469.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5610478",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610478_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610478.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "Attract watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Gold-tone PVD - Swarovski",
      id: "5610484",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610484_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610484.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Attract watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Stainless steel - Swarovski",
      id: "5610490",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610490_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610490.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Attract watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5610487",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610487_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610487.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5612194",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5612194_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5612194.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Sport watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Stainless steel - Swarovski",
      id: "5610494",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5610494_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610494.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5580600",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580600_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580600.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Metal bracelet",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5552783",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5552783_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5552783.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547626",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547626_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547626.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Delight watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5580533",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580533_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580533.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "Passage Chrono watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5580348",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580348_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580348.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Uptown watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547716",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547716_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547716.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystalline Delight watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5580541",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580541_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580541.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystalline Delight watch",
      bracelet: "Metal bracelet",
      color: "White",
      dial: "Stainless steel - Swarovski",
      id: "5580537",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580537_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580537.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "Crystalline Delight watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5580530",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580530_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580530.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Passage Chrono watch",
      bracelet: "Leather strap",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5580345",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580345_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580345.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Passage Chrono watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5580342",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5580342_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580342.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Aura watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519447",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519447_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519447.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5517790",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517790_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5517790.png",
      price: "199.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Leather strap",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5519219",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519219_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519219.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5537961",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5537961_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5537961.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452465",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452465_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452465.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Eternal watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5377576",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5377576_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5377576.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Eternal watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5377545",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5377545_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5377545.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Cosmic Rock watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5376080",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5376080_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5376080.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Uptown watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Stainless steel - Swarovski",
      id: "5547713",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547713_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547713.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5547622",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547622_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547622.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Pink",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5517800",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517800_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517800.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5517807",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517807_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5517807.png",
      price: "199.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452495",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452495_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452495.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5455108",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5455108_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5455108.png",
      price: "349.00",
      isInStock: true,
    },
    {
      name: "Crystal Rose watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5484073",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5484073_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484073.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Leather strap",
      color: "Gray",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452455",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452455_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452455.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Crystal Rose watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5483853",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5483853_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5483853.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Leather strap",
      color: "White",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452459",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5452459_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452459.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "Octea Nova watch",
      bracelet: "Milanese strap",
      color: "Black",
      dial: "Stainless steel - Swarovski",
      id: "5430420",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5430420_png/octea-nova-%E8%85%95%E8%A1%A8--%E9%BB%91%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5430420.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Blue",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5563480",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5563480_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5563480.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "Crystalline Chic watch",
      bracelet: "Metal bracelet",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547608",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547608_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547608.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Chic watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5544587",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5544587_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5544587.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Chic watch",
      bracelet: "Metal bracelet",
      color: "Gray",
      dial: "Champagne-gold tone PVD - Swarovski",
      id: "5547611",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547611_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547611.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Crystalline Chic watch",
      bracelet: "Metal bracelet",
      color: "Rose gold tone",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5544590",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5544590_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5544590.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "Cosmopolitan watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Black PVD - Swarovski",
      id: "5547646",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547646_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%BB%91%E8%89%B2-pvd-%E7%94%B5%E9%95%80-swarovski-5547646.png",
      price: "199.00",
      isInStock: true,
    },
    {
      name: "Cocktail watch",
      bracelet: "Full pavé",
      color: "Metal bracelet",
      dial: "Rose gold tone",
      id: "5547614",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547614_png/cocktail-%E8%85%95%E8%A1%A8--%E9%95%B6%E5%B5%8C--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547614.png",
      price: "429.00",
      isInStock: false,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Leather strap",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5552780",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5552780_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5552780.png",
      price: "299.00",
      isInStock: false,
    },
    {
      name: "Crystal Flower watch",
      bracelet: "Leather strap",
      color: "Black",
      dial: "Rose -gold tone PVD - Swarovski",
      id: "5552421",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5552421_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2-swarovski-5552421.png",
      price: "299.00",
      isInStock: false,
    },
    {
      name: "Cosmic Rock watch",
      bracelet: "Metal bracelet",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5376068",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5376068_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5376068.png",
      price: "329.00",
      isInStock: false,
    },
    {
      name: "Uptown watch",
      bracelet: "Leather strap",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547710",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5547710_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547710.png",
      price: "329.00",
      isInStock: false,
    },
    {
      name: "Cocktail watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5519330",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5519330_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5519330.png",
      price: "329.00",
      isInStock: false,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Metal bracelet",
      color: "Blue",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5475784",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5475784_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5475784.png",
      price: "399.00",
      isInStock: false,
    },
    {
      name: "Cocktail watch",
      bracelet: "Full pavé",
      color: "Metal bracelet",
      dial: "Silver tone",
      id: "5547617",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547617_png/cocktail-%E8%85%95%E8%A1%A8--%E9%95%B6%E5%B5%8C--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547617.png",
      price: "379.00",
      isInStock: false,
    },
    {
      name: "Dream Rock watch",
      bracelet: "Metal bracelet",
      color: "Silver tone",
      dial: "Stainless steel - Swarovski",
      id: "5519309",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519309_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5519309.png",
      price: "279.00",
      isInStock: false,
    },
    {
      name: "Crystalline Glam watch",
      bracelet: "Leather strap",
      color: "Black",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5452452",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452452_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452452.png",
      price: "299.00",
      isInStock: false,
    },
    {
      name: "Octea Lux Chrono watch",
      bracelet: "Leather strap",
      color: "Red",
      dial: "Rose-gold tone PVD - Swarovski",
      id: "5547642",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547642_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547642.png",
      price: "399.00",
      isInStock: false,
    },
  ];
};

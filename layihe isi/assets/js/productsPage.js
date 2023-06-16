// kafel olcsu olan div
const sizeDiv__ul = document.getElementById("sizeDiv__ul")
const hamisiDivForSize = document.querySelector(".hamisiDivForSize");
const sizeIcon = document.getElementById("sizeIcon");


hamisiDivForSize.addEventListener("click",(e) => {

    sizeDiv__ul.classList.toggle("dBlock");
    sizeIcon.classList.toggle("rotate");
    e.preventDefault();
});
// reng secimi olan div
const hamisiDivForColor = document.querySelector(".hamisiDivForColor");
const colorDiv__ul = document.getElementById("colorDiv__ul");
const colorIcon = document.getElementById("colorIcon");

hamisiDivForColor.addEventListener("click", (e) => {
    // console.log("salam");
    colorDiv__ul.classList.toggle("dBlock");
    colorIcon.classList.toggle("rotate");
    e.preventDefault();
});

//  burani unutma
// ipd dan gelecey
const loadMoreBtn = document.getElementById("loadMoreBtn");



function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById("allProductCardForProductsPage");
      // sehifede olan e kard
      for (let i = cardStart; i < cardEnd; i++) {
        console.log("evvelinci qiymet", cardStart);
        console.log(i);
        console.log(data[i]);
        console.log("sonuncu  qiymet", cardEnd);
        if (data[i]) {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          productsCard.appendChild(mainDiv);

          // wish list hearth div
          const mainDivIconDiv = document.createElement("div");
          const iconTag = document.createElement("i");
          mainDivIconDiv.classList.add("herthIcon");
          iconTag.classList.add("fa-regular", "fa-heart");
          mainDiv.appendChild(mainDivIconDiv);
          mainDivIconDiv.appendChild(iconTag);

          // product name

          const productNameDiv = document.createElement("div");
          productNameDiv.classList.add("productName");
          const aTag = document.createElement("a");
          aTag.href = "#";
          aTag.innerText = data[i].productName;
          productNameDiv.appendChild(aTag);
          mainDiv.appendChild(productNameDiv);
        } else {
          console.log("data bitdi");
        }
      }

      if (cardEnd >= data.length) {
        loadMoreBtn.style.display = "none";
      }
      cardStart += 3;
      cardEnd += 3;
    })
    .catch((err) => console.log(err));
}

productIpa();
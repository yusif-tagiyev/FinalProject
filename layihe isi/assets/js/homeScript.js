const topdanAlisVeris = document.getElementById("topdanAlisVeris");
const topdanSatisQeydiyyat = document.querySelector(".topdanSatisQeydiyyat");
topdanAlisVeris.addEventListener("click", () => {
  topdanSatisQeydiyyat.classList.toggle("qeydiyyat");
});

const adminPanel = document.getElementById("adminPanel");
const adminPanelPassword = document.querySelector(".adminPanelPassword");
adminPanel.addEventListener("click", () => {
  adminPanelPassword.classList.toggle("adminPanelHidden");
});
// slick csript
$(".your-class").slick();
// admin panele kecid

const adminPageBtn = document.getElementById("adminPageBtn");
const parol = document.getElementById("parol");
// console.log(parol);
const adminName = document.getElementById("adminName");
// console.log(adminName);

const adminsName = ["yusif", "huseyn", "shamil", "royal", "rasim", "elton"];
const adminsParol = [
  "admin1",
  "admin2",
  "admin3",
  "admin4",
  "admin5",
  "admin6",
];

//
adminPageBtn.addEventListener("click", (e) => {
  // console.log("salam");
  let count = 0;

  for (let i = 0; i < 6; i++) {
    if (adminName.value == adminsName[i] && parol.value == adminsParol[i]) {
      window.location.assign("./adminPanel.html");
      count++;
    }
  }
  if (count == 0) {
    alert("Please");
  }

  e.preventDefault();
});

// topdan satis sehifesine kecid

const enterTheUserBtn = document.getElementById("enterTheUserBtn");
const musteriAdi = document.getElementById("musteriAdi");
const sheher = document.getElementById("sheher");
const musteriler = [
  "emenullah ehedov",
  "azer masalli",
  "imanverdi ferzeliyev",
  "kenan kisiyev",
  "iqbal iqbalzade",
];
const seher = ["masalli", "bilesuvar", "celilabad", "astara", "lenkeran"];
enterTheUserBtn.addEventListener("click", (e) => {
  // console.log("salam");
  for (let i = 0; i < musteriler.length; i++) {
    if (musteriler[i] == musteriAdi.value && seher[i] == sheher.value) {
      window.location.assign("./topdanSatis.html");
    }
  }

  e.preventDefault();
});

// api den gelen kardt
let cardStart = 0;
let cardEnd = 3;

function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // if(cardEnd === data.length){
      //   return;
      // }
      const productsCard = document.getElementById("productsCard");
      // sehifede olan e kard
      for (let i = cardStart; i < cardEnd; i++) {
        console.log("evvelinci qiymet", cardStart);
        console.log("sonuncu  qiymet", cardEnd);

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
      }
      cardStart += 3;
      cardEnd += 3;
    })
    .catch((err) => console.log(err));
}

productIpa();

const loadMoreBtn = document.getElementById("loadMoreBtn");
loadMoreBtn.addEventListener("click", () => {
  // console.log("salam");
  productIpa();
});

// calculator

function startCalculator() {
  const en = document.getElementById("en");
  console.log(en);
  const uzunluq = document.getElementById("uzunluq");
  console.log(uzunluq);
  const productSizeCalculator = document.getElementById(
    "productSizeCalculator"
  );
  // console.log(productSizeCalculator.value);
  const resultButtonCalculator = document.getElementById(
    "resultButtonCalculator"
  );

  const resultCalculator = document.getElementById("resultCalculator");


  resultButtonCalculator.addEventListener("click", () => {
    // console.log("sala,");
    // console.log(en.value);
    resultCalculator.innerHTML = "";
    console.log(productSizeCalculator.value);
    const tileWidth = +productSizeCalculator.value.substring(0, 2);
    const tileHeight = +productSizeCalculator.value.substring(2,4)
    console.log(tileWidth);
    console.log(tileHeight);

    let S = en.value * uzunluq.value ;
    let pilteSayi = Math.floor(S / ((tileWidth * tileHeight)/10000)); 
    let qutuSayi = Math.ceil(pilteSayi / 10 ) ;
    const pTag = document.createElement("p");
    pTag.innerText = `Ümumi sahə: ${S} m² \n Ehtiyac olunan plitə sayı : ${pilteSayi}  \n Qutu sayı : ${qutuSayi}` ;
    resultCalculator.appendChild(pTag);

    
  });
}

startCalculator();

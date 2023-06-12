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

  for (let i = 0; i < 6; i++) {
    if (adminName.value === adminsName[i] && parol.value === adminsParol[i]) {
      window.location.assign("./adminPanel.html");
    } else {
      alert("ad ve parolu daxil");
    }
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

function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const productsCard = document.getElementById("productsCard");
      let cardStart = 0;
      let cardEnd = 3;
      // sehifede olan e kard
      for (let i = cardStart; i < cardEnd; i++) {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("productsCard_api");
        mainDiv.style.backgroundImage = "url(" + data[i].productImage + ")";
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

// kafel olcsu olan div
const sizeDiv__ul = document.getElementById("sizeDiv__ul");
const hamisiDivForSize = document.querySelector(".hamisiDivForSize");
const sizeIcon = document.getElementById("sizeIcon");

hamisiDivForSize.addEventListener("click", (e) => {
  sizeDiv__ul.classList.toggle("dBlock");
  sizeIcon.classList.toggle("rotate");
  e.preventDefault();
});

// adminpanel ve topdan aliwverise kecid
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

// log in ve sidhn up  funksiyalari

const logInBtnForNoutbook = document.getElementById("logInBtnForNoutbook");
// console.log(logInBtnForNoutbook);
const loginFormDiv = document.querySelector(".loginFormDiv");
logInBtnForNoutbook.addEventListener("click", () => {
  // console.log("loginden gelen");
  loginFormDiv.classList.toggle("loginFormHidden");
});

const signUpBtnForNoutbook = document.getElementById("signUpBtnForNoutbook");
// console.log(signUpBtnForNoutbook);
const sigUpFormDiv = document.querySelector(".sigUpFormDiv");
// console.log(sigUpFormDiv);
signUpBtnForNoutbook.addEventListener("click", () => {
  // console.log("salam signupdan gelen");
  sigUpFormDiv.classList.toggle("signupFormHidden");
});

function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard
      for (let i = 0; i < data.length; i++) {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("productsCard_api");
        mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
        mainDiv.style.backgroundSize = "cover";
        mainDiv.style.backgroundRepeat = "no-repeat";
        allProductCardForProductsPage.appendChild(mainDiv);

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
    })
    .catch((err) => console.log(err));
}

function productsize2439() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard

      for (let i = 0; i < data.length; i++) {
        if (data[i].productSize == "24 X 39") {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          allProductCardForProductsPage.appendChild(mainDiv);

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
      }
    })
    .catch((err) => console.log(err));
}
function productsize3060() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard

      for (let i = 0; i < data.length; i++) {
        if (data[i].productSize == "30 X 60") {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          allProductCardForProductsPage.appendChild(mainDiv);

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
      }
    })
    .catch((err) => console.log(err));
}

function productsize4040() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard

      for (let i = 0; i < data.length; i++) {
        if (data[i].productSize == "40 X 40") {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          allProductCardForProductsPage.appendChild(mainDiv);

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
      }
    })
    .catch((err) => console.log(err));
}

function productsizeMebelArasi3060() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard

      for (let i = 0; i < data.length; i++) {
        if (data[i].productSize == "Mebel arasi 30 X 60") {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          allProductCardForProductsPage.appendChild(mainDiv);

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
      }
    })
    .catch((err) => console.log(err));
}

function productsize2540() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const allProductCardForProductsPage = document.getElementById(
        "allProductCardForProductsPage"
      );
      // sehifede olan e kard

      for (let i = 0; i < data.length; i++) {
        if (data[i].productSize == "25 X 40") {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("productsCard_api");
          mainDiv.style.backgroundImage = `url(${data[i].productImage} )`;
          mainDiv.style.backgroundSize = "cover";
          mainDiv.style.backgroundRepeat = "no-repeat";
          allProductCardForProductsPage.appendChild(mainDiv);

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
      }
    })
    .catch((err) => console.log(err));
}
const StaticHamisi = document.getElementById("StaticHamisi");
const hamisi = document.getElementById("hamisi");
console.log(hamisi);
const dest2439 = document.getElementById("dest2439");
const dest2540 = document.getElementById("dest2540");
const dest3060 = document.getElementById("dest3060");
const metbex3060 = document.getElementById("metbex3060");
const metlaq4040 = document.getElementById("metlaq4040");

hamisi.addEventListener("click", () => {
  StaticHamisi.innerText = "Hamisi";
  productIpa();
});

dest2439.addEventListener("click", () => {
  StaticHamisi.innerText = "Dest 24 X 39";
  productsize2439();
});

dest2540.addEventListener("click", () => {
  StaticHamisi.innerText = "Dest 25 X 40";
  productsize2540();
});

dest3060.addEventListener("click", () => {
  StaticHamisi.innerText = "Dest 30 X 60";
  productsize3060();
});

metbex3060.addEventListener("click", () => {
  StaticHamisi.innerText = "Metbex 30 X 60";
  productsizeMebelArasi3060();
});

metlaq4040.addEventListener("click", () => {
  StaticHamisi.innerText = "Doseme 40 X 40";
  productsize4040();
});

// ipd dan gelecey
const loadMoreBtn = document.getElementById("loadMoreBtn");

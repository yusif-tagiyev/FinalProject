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

// mobi; versiya ucun
// const topdanAlisVeris = document.getElementById("topdanAlisVeris");
// const topdanSatisQeydiyyat = document.querySelector(".topdanSatisQeydiyyat");
// topdanAlisVeris.addEventListener("click", () => {
//   topdanSatisQeydiyyat.classList.toggle("qeydiyyat");
// });

// const adminPanel = document.getElementById("adminPanel");
// const adminPanelPassword = document.querySelector(".adminPanelPassword");
// adminPanel.addEventListener("click", () => {
//   adminPanelPassword.classList.toggle("adminPanelHidden");
// });

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
    alert("Ad ve ya Parol shevdi, yeniden cehd edin");
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

// serch input
const serachIconDiv = document.getElementById("serachIconDiv");
const closeSearchIcon = document.getElementById("closeSearchIcon");
const searchMainDiv = document.querySelector(".searchMainDiv");
const navInfo = document.querySelector(".navInfo");
const numberAndIcon = document.querySelector(".numberAndIcon");

// console.log(searchMainDiv);
serachIconDiv.addEventListener("click", (e) => {
  console.log("lupadan gelen");
  serachIconDiv.style.display = "none";
  closeSearchIcon.style.display = "flex";
  searchMainDiv.style.display = "block";
  navInfo.style.display = "none";
  numberAndIcon.style.display = "none";

  e.preventDefault();
});

closeSearchIcon.addEventListener("click", (e) => {
  console.log("x den gelen");
  closeSearchIcon.style.display = "none";
  serachIconDiv.style.display = "flex";
  searchMainDiv.style.display = "none";
  navInfo.style.display = "flex";
  numberAndIcon.style.display = "block";
});

// tablet navbar

const resMenuIcon = document.getElementById("resMenuIcon");
console.log(resMenuIcon);
const mobilNav = document.getElementById("mobilNav");

resMenuIcon.addEventListener("click", () => {
  console.log("salam icondan gelendi");
  mobilNav.classList.toggle("hiddenNav");
});

// log in ve sidhn up  funksiyalari

const logInBtnForNoutbook = document.getElementById("logInBtnForNoutbook");
// console.log(logInBtnForNoutbook);
const loginFormDiv = document.querySelector(".loginFormDiv");
logInBtnForNoutbook.addEventListener("click", (e) => {
  // console.log("loginden gelen");
  loginFormDiv.classList.toggle("loginFormHidden");
  e.preventDefault();
});

const signUpBtnForNoutbook = document.getElementById("signUpBtnForNoutbook");
console.log(signUpBtnForNoutbook);
const sigUpFormDiv = document.querySelector(".sigUpFormDiv");
console.log(sigUpFormDiv);
signUpBtnForNoutbook.addEventListener("click", () => {
  console.log("salam signupdan gelen");
  sigUpFormDiv.classList.toggle("signupFormHidden");
});

// sign up qeydiyyat ( melumatlari jsona post etmek)

const signUpBtnforData = document.getElementById("signUpBtnforData");

signUpBtnforData.addEventListener("click", (e) => {
  // console.log("salam signupdan gelen 3");

  // melumatlari j sona post edir
  const userNameInput = document.getElementById("userNameInput");
  const userSurnameInput = document.getElementById("userSurnameInput");
  const userAgeInput = document.getElementById("userAgeInput");
  const userCityInput = document.getElementById("userCityInput");
  const userNumber = document.getElementById("userNumber");
  const userPassword = document.getElementById("userPassword");
  const genderMan = document.getElementById("genderMan");
  const genderWoman = document.getElementById("genderWoman");

  if (
    userNameInput.value != "" &&
    userSurnameInput.value != "" &&
    userAgeInput.value != "" &&
    userCityInput.value != "" &&
    userNumber.value != "" &&
    userPassword.vlue != "" &&
    (genderMan.checked == true || genderWoman.checked == true)
  ) {
    window.location.assign("./productsPage.html");

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name: userNameInput.value,
        surname: userSurnameInput.value,
        age: userAgeInput.value,
        city: userCityInput.value,
        phoneNumber: userNumber.value,
        password: userPassword.value,
        gender:
          genderMan.checked === true ? genderMan.value : genderWoman.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } else {
    alert("melumat yarimciqdir. yeniden cehd edin");
  }

  e.preventDefault();
});

const logInBtnForEnterPage = document.getElementById("logInBtnForEnterPage");

const userName = document.getElementById("userName");
const userPasswordLogIn = document.getElementById("userPasswordLogIn");

logInBtnForEnterPage.addEventListener("click", (e) => {
  // console.log("loginden gelen 300");
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        if (
          data[i].name == userName.value &&
          data[i].password == userPasswordLogIn.value
        ) {
          window.location.assign("./productsPage.html");
        }
      }
    })
    .catch((err) => console.log(err));

  e.preventDefault();
});


// log in btn mobilm ucun


const logInBtn =  document.getElementById("logInBtn");
// console.log(logInBtn);
logInBtn.addEventListener("click", (e) => {
  loginFormDiv.classList.toggle("loginFormHidden");
  e.preventDefault();
});

const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", (e) => {
  sigUpFormDiv.classList.toggle("signupFormHidden");
  e.preventDefault();
});

// api den gelen kardt

const loadMoreBtn = document.getElementById("loadMoreBtn");

let cardStart = 0;
let cardEnd = 3;

function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const productsCard = document.getElementById("productsCard");
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
    const tileHeight = +productSizeCalculator.value.substring(2, 4);
    console.log(tileWidth);
    console.log(tileHeight);

    let S = en.value * uzunluq.value;
    let pilteSayi = Math.floor(S / ((tileWidth * tileHeight) / 10000));
    let qutuSayi = Math.ceil(pilteSayi / 10);
    const pTag = document.createElement("p");
    pTag.innerText = `Ümumi sahə: ${S} m² \n Ehtiyac olunan plitə sayı : ${pilteSayi}  \n Qutu sayı : ${qutuSayi}`;
    resultCalculator.appendChild(pTag);
  });
}

startCalculator();

// kafel olcsu olan div
const sizeDiv__ul = document.getElementById("sizeDiv__ul");
const hamisiDivForSize = document.querySelector(".hamisiDivForSize");
const sizeIcon = document.getElementById("sizeIcon");

hamisiDivForSize.addEventListener("click", (e) => {
  sizeDiv__ul.classList.toggle("dBlock");
  sizeIcon.classList.toggle("rotate");
  e.preventDefault();
});

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
  console.log(userPassword);
  const genderMan = document.getElementById("genderMan");
  const genderWoman = document.getElementById("genderWoman");

  if (
    userNameInput.value != "" &&
    userSurnameInput.value != "" &&
    userAgeInput.value != "" &&
    userCityInput.value != "" &&
    userNumber.value != "" &&
    userPassword.vlue != "" &&
    genderMan.value != ""
  ) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name: userNameInput.value,
        surname: userSurnameInput.value,
        age: userAgeInput.value,
        city: userCityInput.value,
        phoneNumber: userNumber.value,
        password: userPassword.value,
        gender: genderMan.value,
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
          if (data[i].name == userName.value && data[i].surname == userPasswordLogIn.value) {
            window.location.assign("./productsPage.html");
        }
      }
    })
    .catch((err) => console.log(err));

  e.preventDefault();
});



const myFavorite = document.getElementById("myFavorite");
console.log(myFavorite);
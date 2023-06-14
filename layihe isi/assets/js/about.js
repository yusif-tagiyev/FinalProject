const topdanAlisVeris = document.getElementById("topdanAlisVeris");
const topdanSatisQeydiyyat = document.querySelector(".topdanSatisQeydiyyat");
topdanAlisVeris.addEventListener("click", () => {
    console.log("salamat topdanSatisQeydiyyat");
  topdanSatisQeydiyyat.classList.toggle("qeydiyyat");
});

const adminPanel = document.getElementById("adminPanel");
const adminPanelPassword = document.querySelector(".adminPanelPassword");
adminPanel.addEventListener("click", () => {
    console.log("salamat adminPanel");
  adminPanelPassword.classList.toggle("adminPanelHidden");
});

// admin panele kecid

const adminPageBtn = document.getElementById("adminPageBtn");
const parol = document.getElementById("parol");
console.log(parol);
const adminName = document.getElementById("adminName");
console.log(adminName);

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
  console.log("salam");
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


// tablet navbar 

const resMenuIcon = document.getElementById("resMenuIcon");
console.log(resMenuIcon);
const mobilNav = document.getElementById("mobilNav");

resMenuIcon.addEventListener("click", () => {
  console.log("salam icondan gelendi");
  mobilNav.classList.toggle("hiddenNav");

})
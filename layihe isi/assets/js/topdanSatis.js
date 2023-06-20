




const productTable = document.getElementById("productTable");
// console.log(productTable);

function getData() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        //   cedvelin setri
        const dinamicTr = document.createElement("tr");
        dinamicTr.classList.add("staticTr");
        productTable.appendChild(dinamicTr);

        // cedvelin stunlari : mehsulun kodu
        const tdTagForProductName = document.createElement("td");
        tdTagForProductName.classList.add("staticTh");
        tdTagForProductName.innerText = data[i].productName;
        dinamicTr.appendChild(tdTagForProductName);

        // cedvelin stunlari: mehsulun olcusu
        const tdTagForProductSize = document.createElement("td");
        tdTagForProductSize.classList.add("staticTh");
        tdTagForProductSize.innerText = data[i].productSize;
        dinamicTr.appendChild(tdTagForProductSize);

        // cedvelin stunlari: mehsulun statusu
        const tdTagForProductStatus = document.createElement("td");
        tdTagForProductStatus.classList.add("staticTh");
        tdTagForProductStatus.innerText = data[i].productStatus;
        dinamicTr.appendChild(tdTagForProductStatus);

        // cedvelin stunlari: mehsulun qiymeti
        const tdTagForProductPrices = document.createElement("td");
        tdTagForProductPrices.classList.add("staticTh");
        tdTagForProductPrices.innerText = data[i].productPrice;
        dinamicTr.appendChild(tdTagForProductPrices);

        // cedvelin stunlari: mehsul secimi
        const tdTagForProductEmpty = document.createElement("td");
        tdTagForProductEmpty.classList.add("staticTh");

        const tdTagForProductAdd = document.createElement("button");
        tdTagForProductAdd.classList.add("addBtn");
        tdTagForProductAdd.addEventListener("click", (e) => {
          // console.log("salam al dan gelenem");
          tdTagForProductAdd.classList.toggle("btnBackgroundColor");

          // local storage ye yazdirmaq
          let products_arr = [];

          let obj = {
            productName: "",
            productSize: "",
            productStatus: "",
            productPrice: "",
          };

          obj.productName = tdTagForProductName.innerText;
          obj.productSize = tdTagForProductSize.innerText;
          obj.productStatus = tdTagForProductStatus.innerText;
          obj.productPrice = tdTagForProductPrices.innerText;

          products_arr.push(obj);

          e.preventDefault();

          const aldiqiqiMehsullar =
            document.getElementById("aldiqiqiMehsullar");

          // tesdiq et butonun click hadisesi
          confirmBtn.addEventListener("click", (e) => {
            // console.log(products_arr);
            aldiqiqiMehsullar.style.display = "block";
            const aldiqiMehsulTable =
              document.getElementById("aldiqiMehsulTable");
            for (let i = 0; i < products_arr.length; i++) {
              // console.log(products_arr[i].productName);

              const trTag = document.createElement("tr");
              trTag.classList.add("staticTr");
              aldiqiMehsulTable.appendChild(trTag);

              const tdTagForName = document.createElement("td");
              tdTagForName.classList.add("staticTh");
              tdTagForName.innerText = products_arr[i].productName;
              trTag.appendChild(tdTagForName);

              const tdTagForSize = document.createElement("td");
              tdTagForSize.classList.add("staticTh");
              tdTagForSize.innerText = products_arr[i].productSize;
              trTag.appendChild(tdTagForSize);

              const tdTagForPrices = document.createElement("td");
              tdTagForPrices.classList.add("staticTh");
              tdTagForPrices.innerText = products_arr[i].productPrice;
              trTag.appendChild(tdTagForPrices);

              const tdTagFormehsulSayi = document.createElement("td");
              tdTagFormehsulSayi.classList.add("staticTh");

              const buttonPlus = document.createElement("button");
              buttonPlus.innerHTML = "+";
              buttonPlus.classList.add("plusAndMinusBtnStyle");
              const numberDiv = document.createElement("div");
              numberDiv.innerHTML = "1";
              const buttonMinus = document.createElement("button");
              buttonMinus.innerHTML = "-";
              buttonMinus.classList.add("plusAndMinusBtnStyle");

              // say artimi
              buttonPlus.onclick = () => {
                numberDiv.innerHTML++;
              };

              // say azalmasi

              buttonMinus.onclick = () => {
                if (numberDiv.innerHTML === "1") {
                  return;
                }
                numberDiv.innerHTML--;
              };

              tdTagFormehsulSayi.appendChild(buttonPlus);
              tdTagFormehsulSayi.appendChild(numberDiv);
              tdTagFormehsulSayi.appendChild(buttonMinus);

              trTag.appendChild(tdTagFormehsulSayi);

              const cekiCapEt = document.createElement("button");

            }

            e.preventDefault();
          });
        });
        tdTagForProductAdd.innerText = "Al";
        dinamicTr.appendChild(tdTagForProductAdd);
        tdTagForProductEmpty.appendChild(tdTagForProductAdd);
        dinamicTr.appendChild(tdTagForProductEmpty);
      }
    })
    .catch((err) => console.log(err));
  const confirmBtn = document.getElementById("confirmBtn");
}

getData();

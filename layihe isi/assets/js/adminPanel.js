const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  console.log("salam");

  // inputs value
  const newProductName = document.getElementById("newProductName");
  const newProductSize = document.getElementById("newProductSize");
  const newProductPrice = document.getElementById("newProductPrice");
  const newProductStatus = document.getElementById("newProductPrice");
  const newProductImage = document.getElementById("newProductImage");
  const newProductColor = document.getElementById("newProductColor");
  const newProductMoreInfoMetlaq = document.getElementById(
    "newProductMoreInfoMetlaq"
  );
  const newProductMoreInfoWallDark = document.getElementById(
    "newProductMoreInfoWallDark"
  );
  const newProductMoreInfoWallLight = document.getElementById(
    "newProductMoreInfoWallLight"
  );
  const newProductMoreInfoWallDecor = document.getElementById(
    "newProductMoreInfoWallDecor"
  );

  if (
    newProductName.value != "" &&
    newProductSize.value != "" &&
    newProductPrice.value != "" &&
    newProductColor.value != "" &&
    newProductStatus.value != "" &&
    newProductImage.vlue != "" &&
    newProductMoreInfoMetlaq.value != "" &&
    newProductMoreInfoWallDark.value != "" &&
    newProductMoreInfoWallLight.value != "" &&
    newProductMoreInfoWallDecor.value != ""
  ) {
    // console.log("her wey var");

    fetch("http://localhost:3000/gilan_seramic", {
      method: "POST",
      body: JSON.stringify({
        productName: newProductName.value,
        productSize: newProductSize.value,
        productPrice: newProductPrice.value,
        productStatus: newProductStatus.value,
        productColor: newProductColor,
        productImage: newProductImage.value,
        productMoreInfo: {
          metlagImg: newProductMoreInfoMetlaq.value,
          forWallDark: newProductMoreInfoWallDark.value,
          forWallLight: newProductMoreInfoWallLight.value,
          fonDekor: newProductMoreInfoWallDecor.value,
        },
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

// delete method
function getData() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
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
        tdTagForProductAdd.classList.add("deleteBtn");
        tdTagForProductAdd.addEventListener("click", (e) => {
          // cedvelden silir
          tdTagForProductAdd.parentElement.parentElement.remove();
          // datadan silir
          function removData(id) {
            fetch("http://localhost:3000/gilan_seramic/" + id, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }
          removData(data[i].id);

          e.preventDefault();
        });
        tdTagForProductAdd.innerText = "Delete";
        dinamicTr.appendChild(tdTagForProductAdd);
        tdTagForProductEmpty.appendChild(tdTagForProductAdd);
        dinamicTr.appendChild(tdTagForProductEmpty);
      }
    })
    .catch((err) => console.log(err));
}

getData();

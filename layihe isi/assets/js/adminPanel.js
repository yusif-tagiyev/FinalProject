const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  console.log("salam");

  // inputs value
  const newProductName = document.getElementById("newProductName");
  const newProductSize = document.getElementById("newProductSize");
  const newProductPrice = document.getElementById("newProductPrice");
  const newProductImage = document.getElementById("newProductImage");
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

function productIpa() {
  fetch("http://localhost:3000/gilan_seramic")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data[0].id == 1) {
            console.log(data[0].productName);
        }
        // ardin datani yazandam sora ederik
        
    
    })
    .catch((err) => console.log(err));
};

productIpa();

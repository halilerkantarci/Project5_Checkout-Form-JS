function arttir() {
  let sonuc1 = document.getElementById("sonuc1");
  sonuc1.value = Number(sonuc1.value) + 1;
  document.getElementsByClassName("product-total")[0].innerHTML =
    "Product Total:" + sonuc1.value * 54.99 + "$";
  let g = sonuc1.value * 54.99;
}

function azalt() {
  let sonuc1 = document.getElementById("sonuc1");
  sonuc1.value = Number(sonuc1.value) - 1;
  document.getElementsByClassName("product-total")[0].innerHTML =
    "Product Total:" + sonuc1.value * 54.99 + "$";
  let first2 = sonuc1.value * 54.99;
}

function plus() {
  let sonuc2 = document.getElementById("sonuc2");
  sonuc2.value = Number(sonuc2.value) + 1;
  document.getElementsByClassName("product-total1")[0].innerHTML =
    "Product Total:" + sonuc2.value * 45.99 + "$";

  return Number(sonuc2.value) * 45.99;
}

function under() {
  let sonuc2 = document.getElementById("sonuc2");
  sonuc2.value = Number(sonuc2.value) - 1;
  document.getElementsByClassName("product-total1")[0].innerHTML =
    "Product Total:" + sonuc2.value * 45.99 + "$";
  let second2 = sonuc2.value * 45.99;
}

function fazla() {
  let sonuc3 = document.getElementById("sonuc3");
  sonuc3.value = Number(sonuc3.value) + 1;
  document.getElementsByClassName("product-total2")[0].innerHTML =
    "Product Total:" + sonuc3.value * 74.99 + "$";
  return Number(sonuc3.value) * 74.99;
}

function az() {
  let sonuc3 = document.getElementById("sonuc3");
  sonuc3.value = Number(sonuc3.value) - 1;
  document.getElementsByClassName("product-total2")[0].innerHTML =
    "Product Total:" + sonuc3.value * 74.99 + "$";
  let third2 = sonuc3.value * 74.99;
}
const x = document.getElementsByClassName("remove")[0];
x.addEventListener(
  "click",
  () => (document.getElementsByClassName("bag")[0].style.display = "none")
);
const y = document.getElementsByClassName("remove1")[0];
y.addEventListener(
  "click",
  () => (document.getElementsByClassName("shoes")[0].style.display = "none")
);
const z = document.getElementsByClassName("remove-9")[0];
z.addEventListener(
  "click",
  () => (document.getElementsByClassName("clock")[0].style.display = "none")
);

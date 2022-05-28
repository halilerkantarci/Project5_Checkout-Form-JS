function arttir() {
  var sonuc1 = document.getElementById("sonuc1");
  sonuc1.value = Number(sonuc1.value) + 1;
}
function azalt() {
  var sonuc1 = document.getElementById("sonuc1");
  sonuc1.value = Number(sonuc1.value) - 1;
}
function plus() {
  var sonuc2 = document.getElementById("sonuc2");
  sonuc2.value = Number(sonuc2.value) + 1;
}
function under() {
  var sonuc2 = document.getElementById("sonuc2");
  sonuc2.value = Number(sonuc2.value) - 1;
}
function fazla() {
  var sonuc3 = document.getElementById("sonuc3");
  sonuc3.value = Number(sonuc3.value) + 1;
}
function az() {
  var sonuc3 = document.getElementById("sonuc3");
  sonuc3.value = Number(sonuc3.value) - 1;
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
const z = document.getElementsByClassName("remove2")[0];
z.addEventListener(
  "click",
  () => (document.getElementsByClassName("clock")[0].style.display = "none")
);

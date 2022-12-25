let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let inp3 = document.querySelector("#inp3");
let input = document.querySelector("contact__inp");
let btn = document.querySelector(".contact__btn");
let border = document.querySelector(".contact__inform");
let forName = document.querySelector(".contact__info");
let forRelat = document.querySelector(".contact__text");
let forPhone = document.querySelector(".contact__number");
function import1() {
  if (input !== "") {
    forName.textContent = inp1.value;
    forRelat.textContent = inp2.value;
    forPhone.textContent = inp3.value;
  } else {
    forName.textContent = "Qiymat kiriting";
  }
}
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  import1();
});

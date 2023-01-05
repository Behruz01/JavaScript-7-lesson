const elForm = document.querySelector(".contact__form");
const elName = document.querySelector("#inp1");
const elSurname = document.querySelector("#inp2");
const elPhone = document.querySelector("#inp3");
const button = document.querySelector(".contact__btn");
const elContact = document.querySelector(".contact__right");

const contacts = [];
elForm.addEventListener("submit", function (evn) {
  evn.preventDefault();
  if (elName.value !== "" && elSurname.value !== "" && elPhone.value !== "") {
    elContact.innerHTML = `<h2>Contacts</h2>`;
    let contactName = elName.value;
    let contactSurname = elSurname.value;
    let contactPhone = elPhone.value;

    contacts.push({ contactName, contactSurname, contactPhone });
    for (let i = 0; i < contacts.length; i++) {
      elContact.innerHTML += `
              <div style="margin-bottom: 30px" class="contact__inform">
                <h3 class="contact__info">${contacts[i].contactName}</h3>
                <p class="contact__text">${contacts[i].contactSurname}</p>
                <a href="#" class="contact__number">${contacts[i].contactPhone}</a>
              </div>`;
      elName.value = "";
      elSurname.value = "";
      elPhone.value = "";
    }
  }
});

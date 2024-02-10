let forma = document.getElementById("forma");
let emailField = forma.mail;
let passwordField = forma.lozinka;
let potvrdaPasswordField = forma.potvrda_lozinke;
let ime = forma.ime;
let prezime = forma.prezime;
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validate();
});

function validate() {
  deleteGreske();

  if (!ime.value) {
    ime.insertAdjacentHTML(
      "afterend",
      '<label class="greska">Nije uneto ime</label>'
    );
    return false;
  }
  if (!prezime.value) {
    prezime.insertAdjacentHTML(
      "afterend",
      '<label class="greska">Nije uneto prezime</label>'
    );
    return false;
  }
  if (!emailField.value) {
    emailField.insertAdjacentHTML(
      "afterend",
      '<label class="greska">Greska, mejl nije validan</label>'
    );
    return false;
  }
  if (!validatePassword(passwordField.value)) {
    passwordField.insertAdjacentHTML(
      "afterend",
      '<label class="greska">Greska, sifra ne ispunjava kriterijume</label>'
    );
    return false;
  }
  if (passwordField.value != potvrdaPasswordField.value) {
    potvrdaPasswordField.insertAdjacentHTML(
      "afterend",
      '<label class="greska">Greska, sifre se ne podudaraju</label>'
    );
    return false;
  }
  return true;
}

function validatePassword(password) {
  let broj = false;
  let velikoSlovo = false;
  if (password.length < 6) return false;
  for (let char of password) {
    if (/^\d+$/.test(char)) broj = true;
    else if (char === char.toUpperCase()) velikoSlovo = true;
  }
  return broj && velikoSlovo;
}

function deleteGreske() {
  let greske = document.querySelectorAll(".greska");
  greske.forEach((element) => element.parentNode.removeChild(element));
}

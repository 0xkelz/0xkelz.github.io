const matricola = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};
const checkLength = function () {
  if (nome.value.length > 0 && cognome.value.length > 0) {
    window.location.href = "Login.html";
  } else {
    (creaMatricolaBtn.textContent = `"Dati incompleti"`),
      (creaMatricolaBtn.style.color = "#CC0000");
  }
};

const btn = creaMatricolaBtn.addEventListener("click", function () {
  // Define a string to search
  const joined = [nome.value, cognome.value];
  const input = joined;
  const regex = /[0-9, #, _, -,/]/;
  let containsInvalid = false;
  for (let i = 0; i < input.length; i++) {
    containsInvalid = [...input].some(function (char) {
      return regex.test(char);
    });
    containsInvalid
      ? ((creaMatricolaBtn.textContent = `"Caratteri non Validi"`),
        (creaMatricolaBtn.style.color = "#CC0000"))
      : checkLength();
  }
});

const eMail = [nome.value, cognome.value];
const didEmail = eMail.join(".") + ".edu@gmai.com";
console.log(eMail.join(".") + "@gmai.com");
creaMatricolaBtn.textContent = `n. Matricola: ${matricola(
  100000,
  999999
)} \n e-Mail: ${didEmail}`;
creaMatricolaBtn.style.visibility = "none";

const guzik = document.querySelector("#guzik");
const input = document.querySelector("#year");
input.setAttribute("max", new Date().toLocaleDateString("fr-ca"));

guzik.addEventListener("click", () => {
  const odp = document.querySelector("#odpowiedz");
  const wartosc = document.querySelector("#year").value; // '2024-12-12'
  const rok = parseInt(wartosc.split("-")[0]);
  const aktualnyRok = new Date().getFullYear();
  const roznica = aktualnyRok - rok;

  odp.textContent = `Your age is: ${roznica}`;
});

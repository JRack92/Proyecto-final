let innerHTML_JsonData = "";
let jsonData = "";

const cardContainer = document.getElementById("Cards__Container");

(async () => {
  // Carga de Json Online
  const response = await fetch('./Data/ListaRodadas.json');
  // Archivo Local
  // const response = await fetch('../Data/ListaRodadas.json');
  const data = await response.json();
  jsonData = data;
  LoadCards();
})();

function LoadCards() {
  jsonData.Last.forEach((item) => {
    innerHTML_JsonData += `<div class="col-4 rounded-3 p-0 text-white card ">
    <picture>
      <source srcset="./assets/img/${item.ImageButton_Name}.webp" type="image/webp">
      <source srcset="./assets/img/${item.ImageButton_Name}.jpg" type="image/jpeg">
      <img class="rounded-top-3 mb-3 card__img" src="./assets/img/${item.ImageButton_Name}.jpg" alt="Foto de una rodada"
        loading="lazy">
    </picture>
    <div class="container-fluid text-center ">
      <div class="row justify-content-center">
        <h3 class="col-12 fs-5 ">${item.Name}</h3>
        <p class="col-12 fs-6 mb-0 mt-0">${item.Date}</p>
        <a class="col-12 rounded-3 card__button" href="#">Proximamente</a>
      </div>
    </div>
  </div>`});

  cardContainer.innerHTML = innerHTML_JsonData;
}


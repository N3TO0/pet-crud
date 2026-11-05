import ui from "./ui.js";
import api from "./api.js";

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  ui.renderList();
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  postDataPets();
});

async function postDataPets() {
  const id = document.querySelector("#input-id").value;
  const nome = document.querySelector("#input-name").value;
  const especie = document.querySelector("#input-raca").value;
  const raca = document.querySelector("#input-especie").value;
  try {
    if (id) {
      await api.editPet({ id, nome, especie, raca });
    } else {
      await api.savePet({ nome, especie, raca });
    }
    ui.renderList();
  } catch (e) {
    console.log(`Erro ao salvar dados: ${e}`);
    alert("Erro ao salvar dados!");
  }
}

import api from "./api.js";

const ui = {
  async renderList() {
    try {
      const listaPets = document.getElementById("listaUser");
      listaPets.innerHTML = "";
      const pets = await api.loadPets();

      pets.forEach((pet) => {
        ui.renderPets(pet, listaPets);
      });
    } catch (e) {
      console.log(`Erro ao renderizar dados: ${e}`);
      alert("Erro ao renderizar dados!");
    }
  },

  renderPets(pet, listaPets) {
    const li = document.createElement("li");
    const plist = document.createElement("p");
    const pbutton = document.createElement("p");
    plist.textContent = `Nome: ${pet.nome} | Raça: ${pet.raca} | Especie: ${pet.especie}. `;

    const button = document.createElement("button");
    button.appendChild(pbutton);
    pbutton.textContent = "editar";

    button.onclick = () => {
      ui.filForms(pet.id);
    };

    li.appendChild(plist);
    li.appendChild(button);
    listaPets.appendChild(li);
  },

  async filForms(petId) {
    const pet = await api.loadPet(petId);

    const id = (document.querySelector("#input-id").value = pet.id);
    const nome = (document.querySelector("#input-name").value = pet.nome);
    const especie = (document.querySelector("#input-especie").value = pet.especie);
    const raca = (document.querySelector("#input-raca").value = pet.raca);
  },
};

export default ui;

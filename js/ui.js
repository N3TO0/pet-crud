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
    const pList = document.createElement("p");
    const pButtonEdit = document.createElement("p");
    const pButtonDelete = document.createElement("p");
    pList.textContent = `Nome: ${pet.nome} | Raça: ${pet.raca} | Especie: ${pet.especie}. `;

    const buttonEdit = document.createElement("button");
    buttonEdit.appendChild(pButtonEdit);
    pButtonEdit.textContent = "editar";

    buttonEdit.onclick = () => {
      ui.filForms(pet.id);
    };

    const buttonDelete = document.createElement("button");
    buttonDelete.appendChild(pButtonDelete);
    pButtonDelete.textContent = "excluir";

    buttonDelete.onclick = () => {
      api.excluirPet(pet.id);
    };

    li.appendChild(pList);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    listaPets.appendChild(li);
  },

  async filForms(petId) {
    const pet = await api.loadPet(petId);

    const id = (document.querySelector("#input-id").value = pet.id);
    const nome = (document.querySelector("#input-name").value = pet.nome);
    const especie = (document.querySelector("#input-especie").value =
      pet.especie);
    const raca = (document.querySelector("#input-raca").value = pet.raca);
  },
};

export default ui;

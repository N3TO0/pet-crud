const api = {
  async loadPets() {
    try {
      const response = await fetch("http://localhost:3000/pets");
      return await response.json();
    } catch (e) {
      console.log(`Erro: ${e}`);
      alert("Não foi possivel carregar os dados");
    }
  },
  async loadPet(id) {
    try {
      const response = await fetch(`http://localhost:3000/pets/${id}`);
      return await response.json();
    } catch (e) {
      console.log(`Erro: ${e}`);
      alert("Não foi possivel carregar os dados");
    }
  },
  async savePet(pet) {
    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch (e) {
      console.log(`Erro: ${e}`);
      alert("Não foi possivel salvar os dados");
    }
  },
  async editPet(pet) {
    try {
      const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch (e) {
      console.log(`Erro: ${e}`);
      alert("Não foi possivel salvar os dados");
    }
  },
  async excluirPet(id) {
    try {
      const response = await fetch(`http://localhost:3000/pets/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log(`Erro: ${e}`);
      alert("Não foi possivel salvar os dados");
    }
  },
};

export default api;

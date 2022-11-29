
export default () => {
  const container = document.createElement('div');
  const template = `  
  <div class="body-home">
    <main class="container-home">
      <div class="home-btn-text">
        <div class="text-title-home">
          <h1 class="h1"> Especialistas em odontologia </h1>
        </div>
        <p class="text-home"> Grupo Odontoprev: líder em planos odontologicos na América Latina.
          <br><br>
          O plano dental mais completo para você, sua família e seus colaboradores, com qualidade e segurança. 
          Um novo jeito de cuidar da sua saúde bucal.
        </p>
        <span class="space-btn-home">
          <button class="btn-Beneficiário btn-home">
            Beneficiário 
          </button>
          <button class="btn-dentist btn-home">
            Dentista
          </button>
        <span>
      </div>
      <picture class="slider">
        <img src="assets/logo/foto.jpeg">
      </picture>
    </main>  
  </div>
    `;
  container.innerHTML = template;


  return container;
};
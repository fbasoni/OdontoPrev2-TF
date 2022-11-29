
export default () => {
  const container = document.createElement('div');    
  const template = `    
  <section class="home">
  <div class="home-text">
      <h1 class="text-h1">Especialistas em odontologia</h1>
      <p>Grupo Odontoprev: líder em planos odontologicos na América Latina.
          O plano dental mais completo para você, sua família e seus colaboradores, com qualidade e segurança. 
          Um novo jeito de cuidar da sua saúde bucal.</p>

    
      <a href='#login-patient' class="home-btn">
          Beneficiário
        </a>
      <a href="#login-dentist" class="home-btn">
          Dentista
        </a> 

  </div>
  <div class="home-img">
      <img src="/src/assets/img/slider (1).jpg" alt="hamburguer">
  </div>
</section>
    `;
  container.innerHTML = template; 


  return container;
};

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

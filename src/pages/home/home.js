
export default () => {
  const container = document.createElement('div');    
  const template = `    
    <h1 class="h1"> Especialistas em odontologia </h1>
    <p class="text"> Grupo Odontoprev: líder em planos odontologicos na América Latina.
      O plano dental mais completo para você, sua família e seus colaboradores, com qualidade e segurança. 
      Um novo jeito de cuidar da sua saúde bucal.
    </p>
    <a href='#login-patient' class="btn-Beneficiário">
      <button>Beneficiário</button>
    </a>
    <a href="#login-dentist" class="btn-Dentista">
      <button>Dentista</button>
    </a> 
    `;
  container.innerHTML = template; 

  
 const home = container.querySelector('.h1');
 home.addEventListener('click', () =>{
  window.location.hash = '#schedule';
 })

  return container;
};
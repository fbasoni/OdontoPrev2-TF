import { authDentists, filterDentistByLoginAndPassword } from "../../../lib/storage.js";

export default () => {
  const containerLoginDentist = document.createElement('div');    
  containerLoginDentist.classList.add('container-login-dentist')    
  const templateLoginDentist = `  
  <div class="box">    
    <div class="login-logo">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img class="logo-img" src="./assets/logo/logo-art.svg" alt="logo">
          </div>
        <div class="flip-card-back">
          <h1>OdontoPrev</h1>
          <p>O nosso desejo é</p>
          <p>despertar sorrisos</p>
        </div>
      </div>
    </div>
  </div> 
      <form class="login-form">
        <p class="welcome">Bem-vindo de volta!</p>
        <input type="email" placeholder="Digite seu e-mail" id="input-email" class="input-login-dentist">
        <input type="password" placeholder="Digite sua senha" id="input-password" class="input-login-dentist">
        <a href="" class="forgot-password" id="id-forgot-password">Esqueci minha senha</a>
        <p class="error-message-text" id="error-message"></p>
        <p class="text-dentist-login">Ainda não é um dentista OdontoPrev?</p>
        <a href="" class="btn-register">Cadastra-se</a>
        <button id="btn-login-dentist" class="login-dentist-btn">Entrar</button>
      </form>          
  </div>

    `;
  containerLoginDentist.innerHTML = templateLoginDentist; 

  const emailDentist = containerLoginDentist.querySelector('#input-email');
  const passwordDentist = containerLoginDentist.querySelector('#input-password');
  const btnLoginDentist = containerLoginDentist.querySelector('#btn-login-dentist');

  btnLoginDentist.addEventListener('click', () => {
    console.log(dentist.uid)
    const dentist = filterDentistByLoginAndPassword(emailDentist.value, passwordDentist.value);
    if (dentist !== null) {
      const dentistId = authDentists(dentist.uid); 
      console.log(dentist.uid)     
      window.location.hash = "#appointment";  
    } else {
      window.alert('erro');
    }
  })

  return containerLoginDentist;
};
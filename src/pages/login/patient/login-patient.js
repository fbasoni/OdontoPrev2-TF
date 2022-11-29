export default () => {
  const containerLoginPatient = document.createElement('div');
  containerLoginPatient.classList.add('container-login-patient')    
  const templateLoginPatient = `    
  <div class="box">
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
      <input type="email" placeholder="Digite seu e-mail" id="input-email" class="input-login-patient">
      <input type="password" placeholder="Digite sua senha" id="input-password" class="input-login-patient">
      <a href="" class="forgot-password" id="id-forgot-password">Esqueci minha senha</a>
      <p class="error-message-text" id="error-message"></p>

      <p class="text-patient-login">É beneficiário e não possui uma conta?</p>
      <a href="" class="btn-register">Cadastra-se</a>

      <button id="btn-login-patient" class="login-patient-btn">Entrar</button>
    </form>          
  </div>"
    `;
  containerLoginPatient.innerHTML = templateLoginPatient; 

  const emailPatient = containerLoginPatient.querySelector('#input-email');
  const passwordPatient = containerLoginPatient.querySelector('#input-password');
  const btnLoginPatient = containerLoginPatient.querySelector('#btn-login-patient');

  btnLoginPatient.addEventListener('click', () => {
    window.location.hash = '#schedule'  
  })

    
  return containerLoginPatient;
};
import home from '../pages/home/home.js';
import loginDentist from '../pages/login/login-dentist.js';
import loginPatient from '../pages/login/login-patient.js';
import schedule from '../pages/schedule/schedule.js';
import appointment from '../pages/appointment/appointment.js';


const main = document.querySelector('.main');
const screens = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#':
      main.appendChild(home());
      break;
    case '#login-dentist':
      main.innerHTML = '';
      main.appendChild(loginDentist());
      break;
    case '#login-patient':
      main.appendChild(loginPatient());
      break;
    case '#schedule':
      main.appendChild(schedule());
      break;
      case '#appointment':
        main.appendChild(appointment());
        break;
    default: main.appendChild(home());
  }
};


window.addEventListener('hashchange', () => {
  screens();
});

window.addEventListener('load', () => {
  screens();
});
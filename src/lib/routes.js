import '../lib/firebase/config.js';
import home from '../pages/home/home.js';
import loginDentist from '../pages/login/dentist/login-dentist.js';
import loginPatient from '../pages/login/patient/login-patient.js';
import schedule from '../pages/schedule/schedule.js';
import appointment from '../pages/appointment/appointment.js';
// import { getDentists, initDados } from './storage.js';


const main = document.querySelector('.main');
const initScreens = () => {
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
  initScreens();
});

window.addEventListener('load', () => {
  initScreens();
});

if(localStorage.length==0){
  initData();
}

// const dentists = getDentists();
// console.log(dentists[0].name);

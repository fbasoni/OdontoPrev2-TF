import { getDentistas, getPatients } from "../../lib/storage.js"
const dentistsData = getDentistas();
const patientsData = getPatients();

export default () => {
  const container = document.createElement('div');    
  const template = ` 
    <main class="main-schedule">
      <div class="scheduled-appointments-patients">
        <p><b>Olá ${patientsData[0].nome}!</b></p>
        <p>Seu próximo agendamento</p>
      </div>
    </main>   
    `;
  container.innerHTML = template; 


  return container;
};
import { convertData } from "../../lib/convert.js";
import {
  getAuthPatient,
  getSchedule,
  scheduleAppointment,
} from "../../lib/storage.js";

const patientsData= getAuthPatient();
console.log(patientsData);

export default () => {
  const container = document.createElement('div');    
  const template = `    
  <div class="my-schedule main-page-schedule">
    <div class="scheduling-patient">
      <p>Meus próximos agendamentos</p>
      <div class="scheduling">
        <ul class="sheduling-confirmed">       
        </ul>        
      </div>
    </div>
    <section class="filter-dentist">
      <input type="text" class="input-filter-dentist" id="filter-dentist-input">
      <input type="text" class="input-filter-localization" id="filter-localization-input">
      <div class="schedule-dentist">
        <ul class="weekdays">       
        </ul>     
      </section>
  </div>
    `;
  container.innerHTML = template; 

  const table = container.querySelector(".weekdays");
  const tablePatient = container.querySelector(".sheduling-confirmed")

  const patient = getAuthPatient()
  console.log(patient.uid)
  const schedule = getSchedule();
  
  const printSchedule = () => {
      schedule.filter((time) => time.status == 'available').forEach((time) => {
        table.innerHTML += `
          <li data-id=${time.id} class="schedule-date">${convertData(time.date)} :${
            time.status === "available" ? "<button>"+time.time+ ":00" + "</button>" : ""
          }</li>
     `;
    })
    const linhas = table.querySelectorAll(".schedule-date");
    linhas.forEach((linha) => {
      linha.addEventListener("click", (e) => {
        const patient = getAuthPatient();
        const id = e.currentTarget.dataset.id;
        scheduleAppointment(id, patient.uid)
        console.log(id);
      });
    })
  };

  printSchedule(schedule);
 
  // template da agenda do beneficiário
  const printSchedulePatient = () => {
    const templatePatients = schedule
      .filter((time) => time.patientUid === patientsData.uid && time.status == "confirmed" )
      .map((time) => {
        return  `
        <li data-id=${time.id} class="schedule-date">${convertData(time.date)} 
          <button class="btn-localization" id="localization-btn">Localização</button>
          <button class="btn-localization" id="localization-btn">Cancelar Agendamento</button>
        </li>
   `;
  })
  tablePatient.innerHTML += templatePatients;
};

 printSchedulePatient();

  return container;
};
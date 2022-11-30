import { convertData } from "../../lib/convert.js";
import {
  getAuthPatient,
  getSchedule,
  scheduleAppointment,
  getDentists,
} from "../../lib/storage.js";


export default () => {
  const patientsData= getAuthPatient();
  const dentistsData = getDentists();

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
  
  
  const printSchedule = () => {
    table.innerHTML = '';
    const schedule = getSchedule();
    dentistsData.forEach((dentist) => {
      table.innerHTML +=`<p> ${dentist.name}</p>`
      schedule.filter((time) => time.status == 'available' && time.dentistUid == dentist.uid).forEach((time) => {
        table.innerHTML += `
          <li data-id=${time.id} class="schedule-date">${convertData(time.date)} :${
            time.status === "available" ? "<button>"+time.time+ ":00" + "</button>" : ""
          }</li>
     `;
    })

    })
      
    const linhas = table.querySelectorAll(".schedule-date");
    linhas.forEach((linha) => {
      linha.addEventListener("click", (e) => {
        const patient = getAuthPatient();
        const id = e.currentTarget.dataset.id;
        scheduleAppointment(id, patient.uid)
        printSchedule();
        console.log(id);
      });
    })
  };

  printSchedule();
 
  // template da agenda do beneficiário
  const printSchedulePatient = () => {  
    const templatePatients = getSchedule()
      .filter((time) => time.patientUid === patientsData.uid && time.status == "confirmed" )
      .map((time) => {
        const dentist = dentistsData.find((dentist) => dentist.uid == time.dentistUid);
        return  `
        <li data-id=${time.id} class="schedule-date">${convertData(time.date)} ${time.time}hr.
          Dr. ${dentist.name}
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
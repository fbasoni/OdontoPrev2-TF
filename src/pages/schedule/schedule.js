import { convertData } from "../../lib/convert.js";
import {
  getAuthPatient,
  getSchedule,
  scheduleAppointment,
} from "../../lib/storage.js";

export default () => {
  const container = document.createElement('div');    
  const template = `    
      <div class=mySchedule>
      <p>Meus próximos agendamentos</p>
      <div class=my-appointments></div>
        <button class="btn-localization" id="localization-btn">Localização</button>
        <button class="btn-localization" id="localization-btn">Cancelar Agendamento</button>
      </div>

      <section class="filter-dentist">
        <input type="text" class="input-filter-dentist" id="filter-dentist-input">
        <div class="info-dentist id="dentist-info">
        <p class="name-dentist" id="id-name-dentist"></p>
        <p class="address-dentist" id="id-address-dentist"></p>
        </div>

        <div class="schedule-dentist">
        <ul class="weekdays">       
        </ul> 
        </div>
      </section>
    `;
  container.innerHTML = template; 

  const table = container.querySelector(".weekdays");

  const patient = getAuthPatient()
  console.log(patient.uid)
  const schedule = getSchedule();
  
  const printSchedule = () => {
      schedule.forEach((time) => {
        table.innerHTML += `
          <li data-id=${time.id} class="schedule-date"> ${convertData(time.date)} :${
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

  return container;
};
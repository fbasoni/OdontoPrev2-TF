import { getAuthPatient, getSchedule } from "../../lib/storage.js";

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

  const printSchedule = (schedules) => {
    const scheduleTable = [schedules].forEach((schedule) => {
      schedule.map((time) => {
        table.innerHTML += `
        <li class="table">${time.date}</li>
        <li class="table">${time.weekday}</li>
        <li class="table">${time.time}:00</li>
        `;
      })
    })
    return scheduleTable;
  };
  
  // const printSchedule = (schedules) => {
  //   const scheduleTable = [schedules].forEach((schedule) => {
  //     schedule.map((time) => {
  //       table.innerHTML += `
  //         <li class="patient-name">Segunda-feira: ${time.time}:00</li>
  //       `
  //     })
  //   })
  //   return scheduleTable;
  // };

  printSchedule(schedule);

  return container;
};
import { convertData } from "../../lib/convert.js";
import {
  getAuthPatient,
  getSchedule,
  scheduleAppointment,
  getDentists,
} from "../../lib/storage.js";

const patientsData = getAuthPatient();
const dentistsData = getDentists();


export default () => {
  const container = document.createElement('div');
  const template = `    
  <div class="my-schedule main-page-schedule">
    <div class="scheduling-patient">
      <p>Meus próximos agendamentos</p><br>
      <div class="scheduling-confirmed">      
      </div>
    </div>
    <section class="filter-dentist">
      <select name="select-states" id="select-states" class="selects">
        <option value="default">Estado</option>
      </select>
      <section class="space-detints"> 
        <ul id="box-dentists"></ul>
      </section>
      <div class="schedule-dentist">
        <ul class="weekdays">       
        </ul>  
      </div>   
    </section>
  </div>
    `;
  container.innerHTML = template;

  const table = container.querySelector(".weekdays");
  const tablePatient = container.querySelector(".scheduling-confirmed")
  const menuStates = container.querySelector('#select-states');
  // const menuSpecialties = container.querySelector('#select-states');
  const postDentists = container.querySelector('#box-dentists');

  // menu Estado //
  const extractStates = (listState) => {
    const templateState = listState.map((dentist) => dentist.state);
    const templateSelect = templateState.filter((elem, i, array) => array.indexOf(elem) === i);
    menuStates.innerHTML += templateSelect.map((state) => `<option value="${state}">${state}</option>`);
  };

  extractStates(dentistsData);

  
  const patient = getAuthPatient()
  const schedule = getSchedule();


  const printSchedule = () => {
    const listDentist = schedule.filter((time) => time.status == 'available')
    listDentist.forEach((time) => {
      const dentist = dentistsData.find((dentist) => dentist.uid == time.dentistUid);
      table.innerHTML += `
          <li data-id=${time.id} ${1}: class="schedule-date">${convertData(time.date)} :${time.status === "available" ? "<button>" + time.time + ":00" + "</button>" : ""
        }</li>
     `;
    })
    const linhas = table.querySelectorAll(".schedule-date");
    linhas.forEach((linha) => {
      linha.addEventListener("click", (e) => {
        const patient = getAuthPatient();
        const id = e.currentTarget.dataset.id;
        scheduleAppointment(id, patient.uid)
      });
    })
  };

  printSchedule(schedule);

  // template da agenda do beneficiário
  const printSchedulePatient = () => {
    const templatePatients = schedule
      .filter((time) => time.patientUid === patientsData.uid && time.status == "confirmed")
      .map((time) => {
        const dentist = dentistsData.find((dentist) => dentist.uid == time.dentistUid);
        return `
        <li data-id=${time.id} class="schedule-date">${convertData(time.date)} ${time.time}hr.
          Dr. ${dentist.name}; Cidade: ${dentist.city}
          <button class="btn-localization" id="localization-btn">Localização</button>
          <button class="btn-localization" id="localization-btn-cancelar">Cancelar Agendamento</button>
        </li>
   `;
      })

    tablePatient.innerHTML += templatePatients;

  };

  printSchedulePatient();


    menuStates.addEventListener('change', () => {
      const state = menuStates.value;
      console.log(state)
      const result = dentistsData.filter((dentist) => dentist.state == state.value)
      console.log(result)
      const states = printSchedule(result);
      table.innerHTML = states;
  });

  return container;
};
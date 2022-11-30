import { getDentists, getPatients, getSchedule, getAuthDentist, getAuthPatient } from "../../lib/storage.js";
import { convertData } from "../../lib/convert.js";

const dentistAuth = getAuthDentist();
const dentists = getDentists();
const schedules = getSchedule();
const patients = getPatients(); 

export default () => {
  const container = document.createElement("div");
  const template = `    
        <div class="appointment-container">
          <span class="dentist-info">
            <img src="./assets/icons/others/user-female.svg" alt="dentist picture">
            <p class="dentist-name">Dra. ${dentistAuth.name}</p>
            <p class="dentist-cro">abcd1234</p>
          </span>
          <section class="schedule">
            <h1>Agenda de consultas</h1>
            <button class="confirmed-appointments" data-status="${schedules.status == 'confirmed'}>Confirmadas</button>
            <button class="pending-appointments">Pendentes</button>
            <span class="appointment-status">Consultas ------</span>
            <div class="appointment-info">
            </div>
          </section>
        </div>
      `;
  container.innerHTML = template;

  //const appointmentInfo = container.querySelector(".appointment-info");
  const confirmedButton = container.querySelector(".confirmed-appointments");
  const pendingButton = container.querySelector(".pending-button");
  const appointmentsList = container.querySelector(".appointment-info");

  const printAppointment = () => {  
    const templatePatients = schedules
    .filter((schedule) => schedule.dentistUid === dentistAuth.uid)
      .map((schedule) => {
        const patient = patients.find((patient) => patient.uid == schedule.patientUid);
        console.log(patient)
        if(schedule.status === "confirmed") {
          return `
          <div class="confirmed-appointments hide">
            <p>CONFIRMADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <p class="patient-name">Paciente:${patient.name}</p>
            <p class="appointment-date">Dia da consulta: ${convertData(schedule.date)}</p>
            <p class="appointment-time">Horário da consulta: ${schedule.time}:00</p>
          </div>
        ` 
        } else if (schedule.status === "pending") {
          return `
          <div class="pending-appointments hide">
            <p>PENDENTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
            <p class="patient-name">Paciente:${patient.name}</p>
            <p class="appointment-date">Dia da consulta: ${convertData(schedule.date)}</p>
            <p class="appointment-time">Horário da consulta: ${schedule.time}:00</p>
          </div>
        `;
        }
        
      }).join("");
    appointmentsList.innerHTML += templatePatients;
  }

  confirmedButton.addEventListener(() => {
    
  })

  printAppointment();

  return container;
};
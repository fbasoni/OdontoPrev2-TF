import { getDentists, getPatients, getSchedule, getAuthDentist, getAuthPatient, confirmAppointment, cancelAppointment } from "../../lib/storage.js";
import { convertData } from "../../lib/convert.js";


export default () => {
const dentistAuth = getAuthDentist();
const dentists = getDentists();
const schedules = getSchedule();
const patients = getPatients(); 

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
            <div class="btn-schedule">
            <button class="confirmed-appointments">Confirmadas</button>
            <button class="pending-appointments">Pendentes <div class="count-pending"></div></button>
            </div>
            <span class="appointment-status">Consultas ------</span>
            <div class="appointment-info">

            
            </div>
          </section>
        </div>
      `;
  container.innerHTML = template;

  //const appointmentInfo = container.querySelector(".appointment-info");
  const confirmedButton = container.querySelector(".confirmed-appointments");
  const pendingButton = container.querySelector(".pending-appointments");
  const appointmentsList = container.querySelector(".appointment-info");
  const countPending = container.querySelector(".count-pending");

  

  const printConfirmedAppointment = () => {  
    const templatePatients = schedules
    .filter((schedule) => schedule.dentistUid === dentistAuth.uid && schedule.status == 'confirmed')
      .map((schedule) => {
        const patient = patients.find((patient) => patient.uid == schedule.patientUid);
        console.log(patient)

          return `
          <div class="confirmed-appointments-list hide">
            <p class="confirmed-title">CONFIRMADA</p>
            <p class="patient-name">Paciente:${patient.name}</p>
            <p class="appointment-date">Dia da consulta: ${convertData(schedule.date)}</p>
            <p class="appointment-time">Horário da consulta: ${schedule.time}:00</p>
          </div>
        `
      }).join("");
      console.log(templatePatients)
    appointmentsList.innerHTML += templatePatients;
  }

   const printPendingAppointment = () => {  
    const scheduleFilter = schedules
    .filter((schedule) => schedule.dentistUid === dentistAuth.uid && schedule.status == 'pending');

    countPending.innerHTML = scheduleFilter.length



    const templatePatients = scheduleFilter.map((schedule) => {
        const patient = patients.find((patient) => patient.uid == schedule.patientUid);
        console.log(patient)

          return `
          <div class="pending-appointments-list hide">
            <p class="pending-title">PENDENTE</p>
            <p class="patient-name">Paciente:${patient.name}</p>
            <p class="appointment-date">Dia da consulta: ${convertData(schedule.date)}</p>
            <p class="appointment-time">Horário da consulta: ${schedule.time}:00</p>
            <button data-id=${schedule.id} class="confirm-btn">Confirmar</button>
            <button data-id=${schedule.id} class="cancel-btn">Cancelar</button>
          </div>
        `
      }).join("");
    appointmentsList.innerHTML += templatePatients;
  }
    
  printConfirmedAppointment();
  printPendingAppointment();

  const confirmBtn = appointmentsList.querySelectorAll('.confirm-btn');
  const cancelBtn = appointmentsList.querySelectorAll('.cancel-btn');
  const confirmedAppointments = appointmentsList.querySelectorAll('.confirmed-appointments-list');
  const pendingAppointments = appointmentsList.querySelectorAll('.pending-appointments-list');

  confirmedButton.addEventListener('click', () => {

    if (pendingAppointments !== null) {
      pendingAppointments.forEach((appointment) => appointment.classList.add("hide"));
    } 
    if (confirmedAppointments !== null) {
      confirmedAppointments.forEach((appointment) => appointment.classList.remove("hide"));
    }
  });

  pendingButton.addEventListener("click", () => {
     if (confirmedAppointments !== null) {
      confirmedAppointments.forEach((appointment) => appointment.classList.add("hide"));
     }
     if (pendingAppointments !== null) {
      pendingAppointments.forEach((appointment) => appointment.classList.remove("hide"));
     }

  });

  confirmBtn.forEach((btn) => {
    btn.addEventListener("click", (el) => {
      const target = el.currentTarget.dataset.id;
      console.log(target);
      confirmAppointment(target);
    });
  });

  cancelBtn.forEach((btn) => {
    btn.addEventListener("click", (el) => {
      const target = el.currentTarget.dataset.id;
      console.log(target);
      cancelAppointment(target);
    });
  });

  return container;
};
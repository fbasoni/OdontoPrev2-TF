import { getDentists, getPatients, getSchedule } from "../../lib/storage.js";

const dentistsData = getDentists();
const patientsData = getPatients();
const scheduleData = getSchedule();
console.log(dentistsData);

console.log(dentistsData, patientsData, scheduleData)
const data = [...dentistsData, ...patientsData, ...scheduleData];
console.log(data)
console.log(data[3].name)

export default () => {
  const container = document.createElement("div");
  const template = `    
        <div class="appointment-container">
          <span class="dentist-info">
            <img src="./assets/icons/others/user-female.svg" alt="dentist picture">
            <p class="dentist-name">${dentistsData[0].name}</p>
            <p class="dentist-cro">${dentistsData[0].cro}</p>
          </span>
          <section class="schedule">
            <h1>Agenda de consultas</h1>
            <button class="confirmed-appointments">Confirmadas</button>
            <button class="pending-appointments">Pendentes</button>
            <span class="appointment-status">Consultas ??</span>
            <div class="appointment-info">
            </div>
          </section>
        </div>
      `;
  container.innerHTML = template;

  const appointmentInfo = container.querySelector(".appointment-info");

  const printAppointment = (appointments) => {
    const appointmentTemplate = appointments
      .map((appointment) => {
        appointmentInfo.innerHTML = `
        <div>
          <p class="patient-name">Paciente: ${appointment.patientName}</p>
          <p class="appointment-date">Dia da consulta: ${appointment.date}</p>
          <p class="appointment-time">Horário da consulta: ${appointment.time}</p>
        </div>
        `;
      })
      .join("");
    return appointmentTemplate;
  };

  printAppointment(appointmentData);

  return container;
};

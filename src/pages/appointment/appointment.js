import data from "../../lib/data/data.js";

const dentistsData = data.dentists;
console.log(dentistsData);

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

  const printAppointment = (data) => {
    const appointmentTemplate = data
      .map((dentist) => {
        appointmentInfo.innerHTML = `
        <div>
          <p class="patient-name">Paciente: ${dentist.name}</p>
          <p class="appointment-date">Dia da consulta: ${dentist.schedule[0].date}</p>
          <p class="appointment-time">Horário da consulta: ${dentist.schedule[0].time}</p>
        </div>
        `;
      })
      .join("");
    return appointmentTemplate;
  };

  printAppointment(dentistsData);

  return container;
};

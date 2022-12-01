import { convertData } from "../../lib/convert.js";
import {
  getAuthPatient,
  getSchedule,
  scheduleAppointment,
  getDentists,
} from "../../lib/storage.js";

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

  const patientsData = getAuthPatient();
  const dentistsData = getDentists();
  const table = container.querySelector(".schedule-dentist");
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

  
  const printSchedule = (dentistList) => {
    table.innerHTML = '';
    const schedule = getSchedule();
    dentistList.forEach((dentist) => {
      table.innerHTML +=`<p> ${dentist.name}</p>`
      schedule.filter((time) => time.status == 'available' && time.dentistUid == dentist.uid).forEach((time) => {
        table.innerHTML += `
          <li data-id=${time.id} class="schedule-date"> <tr>${convertData(time.date)} </tr>:${
            time.status === "available" ? "<button>"+time.time+ ":00" + "</button>" : ""}
            <div class="modal">
              <div class="internal-modal">
                <p> Deseja confirmar seu agendamento?</p>
                <div>Para o dia ${convertData(time.date)}</div>
                <div>às ${time.time}:00h.</div>
                <div> com Dr.(a) ${dentist.name}.</div>
                <div> Seu dentista tem o prazo de até 1 dia útil para confirmar sua consulta.</div>
                <button class="btn-del" data-sim="true"> SIM </button>
                <button class="btn-del" data-nao="true"> NÃO </button>
              </div>
            </div>
          </li>
     `;
    })

    })   
    const linhas = table.querySelectorAll(".schedule-date");
    linhas.forEach((linha) => {
      linha.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const modal = e.currentTarget.querySelector('.modal');
        if (id){
          modal.style.display = 'flex';
        }
        if (e.target.dataset.sim){
          modal.style.display = 'none';
          const patient = getAuthPatient();
          scheduleAppointment(id, patient.uid)
          printSchedule(dentistList);
        }
        if (e.target.dataset.nao){
          modal.style.display = 'none';
        }
      });
    })
  };

  function myFunction() {
    let text = "Deseja agendar?";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    table.innerHTML = text;
  }

  printSchedule(dentistsData);
 
  // template da agenda do beneficiário
  const printSchedulePatient = () => {  
    const templatePatients = getSchedule()
      .filter((time) => time.patientUid === patientsData.uid && time.status == "confirmed" )
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

  // template 
  const result = []

  menuStates.addEventListener('change', () => {
    const state = menuStates.value;
    const result = dentistsData.filter((dentist) => dentist.state == state)
    printSchedule(result);
  });

  return container;
};
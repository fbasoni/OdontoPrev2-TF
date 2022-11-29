import { getAuthPatient } from "../../lib/storage.js";

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
          <li>Segunda-Feira</li> 
            <li> </li>
          <li>Terça-Feira</li> 
            <li> </li>
          <li>Quarta-Feira</li>
            <li> </li> 
          <li>Quinta-Feira</li> 
            <li> </li>         
        </ul> 
        </div>
      </section>
    `;
  container.innerHTML = template; 

  const patient = getAuthPatient()
  console.log(patient.uid)


  return container;
};
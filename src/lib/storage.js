export const initDados = () => {
  createDentistsData();
  createPatientsData();
  createScheduleData();
}

export const getDentistas = () => {
  return JSON.parse(localStorage.getItem("dentists"));
}

export const getPatients = () => {
  return JSON.parse(localStorage.getItem("patients"));
}

export const getSchedule = () => {
  return JSON.parse(localStorage.getItem("schedule"));
}

const createDentistsData = () => {
  const dentistsArr = [];
  const dentistJuliene = {
    uid: 1,
    name: "Juliene",
    state: "São Paulo",
    city: "São Paulo",
    district: "Ipiranga",
    email: "julienefjs@hotmail.com",
    password: "123456",
  };
  const dentistAriane = {
    uid: 2,
    name: "Ariane",
    state: "Paraná",
    city: "Curitiba",
    district: "Centro",
    email: "ariane@hotmail.com",
    password: "123456",
  };
  dentistsArr.push(dentistJuliene)
  dentistsArr.push(dentistAriane)
  localStorage.setItem(
    "dentists",
    JSON.stringify(dentistsArr)
  )
}

const createPatientsData = () => {
  const patientsArr = []
  const patientTamyres = {
    uid: 123,
    name: "Tamyres",
    email: "tamyres@hotmail.com",
    password: "123456",
  }
  const patientFabiany = {
    uid: 231,
    name: "Fabiany",
    email: "fabiany@hotmail.com",
    password: "123456",
  }
  patientsArr.push(patientTamyres)
  patientsArr.push(patientFabiany)

  localStorage.setItem(
    "patients",
    JSON.stringify(patientsArr)
  )
}

const createScheduleData = () => {
  const schedulesArr = []
  const firstAppointment = {
    dentistUid: 1,
    patientUid: null,
    time: 9,
    status: "available",
  }
  const secondAppointment = {
    idDentist: 1,
    idPatient: null,
    time: 10,
    status: "available",
  }
  const thirdAppointment = {
    idDentist: 1,
    idPatient: 1,
    time: 11,
    status: "confirmed",
  }
  schedulesArr.push(firstAppointment)
  schedulesArr.push(secondAppointment)
  schedulesArr.push(thirdAppointment)
  localStorage.setItem(
    "schedule",
    JSON.stringify(schedulesArr)
  )
}
//status possiveis: pending (pendente), available, cancelled, confirmed
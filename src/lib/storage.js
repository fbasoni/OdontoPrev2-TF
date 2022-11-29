export const initDados = () => {
  createDentistsData();
  createPatientsData();
  createScheduleData();
}

export const getDentistas = () => {
  return JSON.parse(localStorage.getItem("dentists"))
}

export const getPatients = () => {
  return JSON.parse(localStorage.getItem("patients"))
}

export const getSchedule = () => {
  return JSON.parse(localStorage.getItem("schedule"))
}

const createDentistsData = () => {
  const tabelaDentista = []
  const dentistaJuliene = {
    id: 1,
    nome: "Juliene",
    bairro: "Ipiranga",
    email: "julienefjs@hotmail.com",
    senha: "123456",
  }
  const dentistaAriane = {
    id: 2,
    nome: "Ariane",
    bairro: "Centro",
    email: "ariane@hotmail.com",
    senha: "123456",
  }
  tabelaDentista.push(dentistaJuliene)
  tabelaDentista.push(dentistaAriane)
  localStorage.setItem(
    "dentists",
    JSON.stringify(tabelaDentista)
  )
}

const createPatientsData = () => {
  const tablePatients = []
  const patientTamyres = {
    id: 1,
    nome: "Tamyres",
    email: "tamyres@hotmail.com",
    senha: "123456",
  }
  const patientFabiany = {
    id: 2,
    nome: "Fabiany",
    email: "fabiany@hotmail.com",
    senha: "123456",
  }
  tablePatients.push(patientTamyres)
  tablePatients.push(patientFabiany)

  localStorage.setItem(
    "patients",
    JSON.stringify(tablePatients)
  )
}

const createScheduleData = () => {
  const tableSchedule = []
  const scheduleNineHours = {
    idDentist: 1,
    idPatient: null,
    hour: 9,
    typeHour: "free",
  }
  const scheduleTenHours = {
    idDentist: 1,
    idPatient: null,
    hour: 10,
    typeHour: "free",
  }
  const scheduleElevenHours = {
    idDentist: 1,
    idPatient: 1,
    hour: 11,
    typeHour: "confirmed",
  }
  tableSchedule.push(scheduleNineHours)
  tableSchedule.push(scheduleTenHours)
  tableSchedule.push(scheduleElevenHours)
  localStorage.setItem(
    "schedule",
    JSON.stringify(tableSchedule)
  )
}
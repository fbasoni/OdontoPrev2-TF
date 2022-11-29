export const getDentists = () => {
  return JSON.parse(localStorage.getItem("dentists"));
}

export const getPatients = () => {
  return JSON.parse(localStorage.getItem("patients"));
}

export const getSchedule = () => {
  return JSON.parse(localStorage.getItem("schedule"));
}

export const filterDentistByLoginAndPassword = (email, password) => {
  const dentists = getDentists();
  const dentistsFilter = dentists.filter((dentist) => dentist.email === email && dentist.password === password);
  if (dentistsFilter.length > 0) {
    return dentistsFilter[0];
  } else return null;
}

export const authDentists = (idDentist) => {
  return localStorage.setItem('auth-dentist', idDentist);
}

export const getAuthDentist = () => {
  const auth = localStorage.getItem("auth-dentist");
  const dentists = getDentists();
  const dentistsFilter = dentists.filter((dentist) => dentist.id === auth);
  if (dentistsFilter.length > 0) {
    return dentistsFilter[0];
  } else return null;
}

export const filterPatientByLoginAndPassword = (email, password) => {
  const patients= getPatients();
  const patientsFilter = patients.filter((patient) => patient.email === email && patient.password === password);
  if (patientsFilter.length > 0) {
    return patientsFilter[0];
  } else return null;
}

export const authPatients = (idPatient) => {
  return localStorage.setItem('auth-patient', idPatient);
}

export const getAuthPatient = () => {
  const auth = localStorage.getItem("auth-patient");
  const patients= getPatient();
  const patientsFilter = patients.filter((patient) => patient.id === auth);
  if (patientsFilter.length > 0) {
    return patientsFilter[0];
  } else return null;
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
    date: new Date("2022/12/02").toLocaleDateString("pt-BR"),
    status: "available",
  };
  const secondAppointment = {
    dentistUid: 1,
    patientUid: null,
    time: 10,
    date: new Date("2022/12/03").toLocaleDateString("pt-BR"),
    status: "available",
  };
  const thirdAppointment = {
    detistUid: 2,
    patientUid: 1,
    time: 11,
    date: new Date("2022/12/04").toLocaleDateString("pt-BR"),
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

export const initData = () => {
  createDentistsData();
  createPatientsData();
  createScheduleData();
};

//status possiveis: pending (pendente), available, cancelled, confirmed
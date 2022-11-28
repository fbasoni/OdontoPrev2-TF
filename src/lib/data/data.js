export default {
  dentists: [
    {
      userId: "",
      address: "R. Cerro Corá, 43, São Paulo",
      cro: "PI-4438",
      name: "Dra. Aline Batista",
      schedule: [
        {
          date: "3 de dezembro de 2022",
          time: "11:00",
        },
      ],
      specialty: "Clínico",
    },
    {
      address: "R. Cerro Corá, 43, São Paulo",
      cro: "PI-4438",
      name: "Dra. Josefina Abreu",
      specialty: "Clínico",
    },
  ],
  patients: [
    {
      userId: "",
      name: "Paciente Fulana",
    },
  ],
  availability: [
    {
      schedule: [
        {
          date: "5 de dezembro de 2022",
          time: "13:00",
        },
      ],
      dentistId: "uidabc123",
      dentistName: "Dra. Aline Batista",
      patientName: "Maria",
      patientId: "uidabc123",
      status: "",
      currentUserId: "uidabcde1234",
    },
  ],
};

export const convertData = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDay();
  const ptBr = date.toLocaleDateString('pt-br');
  switch (day) {
    case 0:
      return `${ptBr} Domingo`;
    case 1:
      return `${ptBr} Segunda-Feira`;
    case 2:
      return `${ptBr} Terça-Feira`;
    case 3:
      return `${ptBr} Quarta-Feira`;
    case 4:
      return `${ptBr} Quinta-Feira`;
    case 5:
      return `${ptBr} Sexta-Feira`;
    case 6:
      return `${ptBr} Sábado-Feira`;
  }
}
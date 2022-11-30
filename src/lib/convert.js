export const convertData = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDay();
  const ptBr = date.toLocaleDateString('pt-br');
  switch (day) {
    case 0:
      return `${ptBr} Domingo`;
    case 1:
      return `${ptBr} Segunda`;
    case 2:
      return `${ptBr} Terça`;
    case 3:
      return `${ptBr} Quarta`;
    case 4:
      return `${ptBr} Quinta`;
    case 5:
      return `${ptBr} Sexta`;
    case 6:
      return `${ptBr} Sábado`;
  }
}
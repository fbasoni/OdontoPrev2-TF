export default () => {
    const container = document.createElement('div');    
    const template = `    
        <p>marcação de consulta</p>
      `;
    container.innerHTML = template; 


    return container;
  };
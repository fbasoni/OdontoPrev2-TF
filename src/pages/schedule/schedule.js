export default () => {
    const container = document.createElement('div');    
    const template = `    
        <p>agenda médico</p>
      `;
    container.innerHTML = template; 


    return container;
  };
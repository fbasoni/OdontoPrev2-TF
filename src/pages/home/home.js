
export default () => {
  const container = document.createElement('div');
  const template = `  
  <div class="body-home">
    <main class="container-home">
      <div class="home-btn-text">
        <div class="text-title-home">
          <h1 class="h1"> Especialistas em odontologia </h1>
        </div>
        <p class="text-home"> Grupo Odontoprev: líder em planos odontologicos na América Latina.
          <br><br>
          O plano dental mais completo para você, sua família e seus colaboradores, com qualidade e segurança. 
          Um novo jeito de cuidar da sua saúde bucal.
        </p>
        <span class="space-btn-home">
          <button class="btn-Beneficiário btn-home">
            Beneficiário 
          </button>
          <button class="btn-dentist btn-home">
            Dentista
          </button>
        <span>
      </div>
      <picture class="slider">
        <img class="selected" src="assets/logo/foto.jpeg">
        <img src="assets/logo/foto2.jpeg">
        <img src="assets/logo/foto3.jpeg">
      </picture>
    </main>  
  </div>
    `;
  container.innerHTML = template;

  let time = 5000;
  let imageIndex = 0;
  let imageSelected = container.querySelectorAll('.slider img');
  let maxImage = imageSelected.length;

  const nextImage = () => {
    imageSelected[imageIndex].classList.remove('selected');
    console.log('dentro da função')
    imageIndex++
    if (imageIndex >= maxImage) {
      imageIndex = 0;
    }
    imageSelected[imageIndex].classList.add('selected');
    console.log('dentro da função nova')
  }

  const start = () => {
    console.log('teste');
    setInterval(() => { nextImage() }, time);
  }
  console.log(start);

  start()

  // let slideIndex = 0;
  // carousel();

  // function carousel() {
  //   let i;
  //   let x = container.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > x.length) { slideIndex = 1 }
  //   x[slideIndex - 1].style.display = "block";
  //   setTimeout(carousel, 2000); // Change image every 2 seconds
  // }

  // setTimeout(() => {
  //   window.location.hash = '#welcome';
  // }, 2000);

  return container;
};
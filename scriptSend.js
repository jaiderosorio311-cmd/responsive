

  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function changeSlide() {

    slides[index].classList.remove('active');

    index++;

    if(index >= slides.length){
      index = 0;
    }

    slides[index].classList.add('active');
  }

  setInterval(changeSlide, 4000);


  // ENVIAR CORREO ELECTRÓNICO 

  document.getElementById("contactForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    const destino = "Julocesar1979@hotmail.com";

    const body =
`Nombre: ${nombre}

Correo: ${correo}

Mensaje:
${mensaje}`;

    window.location.href =
`mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;

  });

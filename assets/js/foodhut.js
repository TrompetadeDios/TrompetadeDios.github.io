$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 9.727032, lng: -63.19263};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }

function openImage(imageUrl) {
    window.open(imageUrl, '_self');
  }

$(document).ready(function(){
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "thumbs",
        "close"
      ]
    });
    
  });

  $(document).ready(function() {
    $("[data-fancybox='gallery']").fancybox({
      thumbs: {
        autoStart: true, // Inicia la galería en modo thumbs
        axis: "x" // Muestra las miniaturas en una fila horizontal
      }
    });
  });

  function copiarTexto(id) {
    const texto = document.getElementById(id).innerText;
    const input = document.createElement('input');
    input.setAttribute('value', texto);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Texto copiado al portapapeles: ' + texto);
  }
  var btnContacto = document.getElementById("btn-contacto");
  var panelContacto = document.getElementById("panel-contacto");
  
  btnContacto.addEventListener("click", function() {
    if (panelContacto.style.display === "none") {
      panelContacto.style.display = "block";
    } else {
      panelContacto.style.display = "none";
    }
  }); 


  function togglePanel() {
    const panel = document.getElementById('panel');
    panel.classList.toggle('open');
  }

      var button = document.getElementById('button');
      var columna = document.getElementById('columna');
      
      button.addEventListener('click', function() {
        columna.classList.toggle('active');
      });
  

  
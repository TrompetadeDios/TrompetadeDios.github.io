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

//boton de copiar y pegar//
  function copiarTexto(id) {
    const texto = document.getElementById(id).innerText;
    const input = document.createElement('input');
    input.setAttribute('value', texto);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert("se a copiado con exito");
    window.location = "Diezmos-ofrendas.html"
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
  
// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});

 // Vendor carousel
 $('.vendor-carousel').owlCarousel({
  loop: true,
  margin: 29,
  nav: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:2
      },
      576:{
          items:3
      },
      768:{
          items:4
      },
      992:{
          items:5
      },
      1200:{
          items:6
      }
  }
});


// Related carousel
$('.related-carousel').owlCarousel({
  loop: true,
  margin: 29,
  nav: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      }
  }
});





  
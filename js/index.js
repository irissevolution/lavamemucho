

  var wn = {
     duration: 24000,
     origin: 'left',
     distance: '400px'
   };
   ScrollReveal().reveal('.window-notice', wn);
  
   var sa = {
     duration: 3000,
  
     distance: '100px'
   };
   ScrollReveal().reveal('.about2', sa);
  
   var ssa = {
     duration: 1000,
     origin: 'left',
     distance: '400px'
   };
   ScrollReveal().reveal('.services2', ssa);
  
  
   var sf = {
     duration: 3000,
     origin: 'top',
     distance: '400px'
   };
   ScrollReveal().reveal('.stat-facts2', sf);
  
   var tips = {
     duration: 3000,
     origin: 'botton',
     distance: '400px'
   };
   ScrollReveal().reveal('.tips', tips);
  
  
   var t = {
     duration: 3000,
     origin: 'left',
     distance: '500px'
   };
   ScrollReveal().reveal('.testimonials2', t);
  
   var noticias = {
     duration: 3000,
     origin: 'top',
     distance: '400px'
   };
   ScrollReveal().reveal('.noticias2', noticias);


  var turno = false;

  function btn(b){
      var image = b.querySelector('img');
      turno = !turno;
      if(turno){
        image.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/222579/cat.svg#redcat";
      }
        else{
        image.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/222579/cat.svg#blackcat";
      }
    }


function Chal() {
  var image = document.getElementById('myImage');
      image.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.80032886111314!2d-98.85311265981753!3d19.264849281600902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a6ab6667d285163!2sLavame%20Mucho%20Lavanderias!5e0!3m2!1ses-419!2smx!4v1635567709592!5m2!1ses-419!2smx";
  var image = document.getElementById('fotoLocal');
      image.src = "images/about_history-u24541-fr-1.jpg";

  }
function Eca() {
    var image = document.getElementById('myImage');
        image.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.0682318157556!2d-99.04342778509094!3d19.58157728679974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1b36fa93f0f%3A0x4131b98233216f06!2sLittle%20Caesars%20Pizza!5e0!3m2!1ses!2smx!4v1637274050595!5m2!1ses!2smx";
    var image = document.getElementById('fotoLocal');
        image.src = "images/ecatepec-1.jpg";
      }

  function Ara() {
    var image = document.getElementById('myImage');
        image.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4422185605104!2d-99.0675223850926!3d19.479601186857675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbeed9aefcf9%3A0xb7a5a8aa76170135!2sCENTRO%20COMERCIAL%20PUERTA%20ARAG%C3%93N!5e0!3m2!1ses!2smx!4v1637274394886!5m2!1ses!2smx";
    var image = document.getElementById('fotoLocal');
        image.src = "images/aragon-1.jpg";
      }
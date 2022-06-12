let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function valida_formulario(form) {

  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var validaTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;


  var nome = document.getElementById("nome");
  var telefone = document.getElementById("telefone");
  var local = document.getElementById("local");
  var Dia = document.getElementById("Dia");
  var horario = document.getElementById("horario");
  var Email = document.getElementById("E-mail");
  var caixa_nome = document.querySelector('.msg-nome');
  var caixa_telefone = document.querySelector('.msg-telefone');
  var caixa_local = document.querySelector('.msg-local');
  var caixa_Dia = document.querySelector('.msg-Dia');
  var caixa_horario = document.querySelector('.msg-horario');
  var caixa_Email = document.querySelector('.msg-E-mail');

  caixa_nome.style.display = 'none';
  caixa_telefone.style.display = 'none';
  caixa_local.style.display = 'none';
  caixa_Dia.style.display = 'none';
  caixa_horario.style.display = 'none';
  caixa_Email.style.display = 'none';
  
  if (nome.value==""){
      caixa_nome.innerHTML = "Nome é obrigatório!"
      caixa_nome.style.display = 'block';
      nome.focus();
      return false;
  }

  if (telefone.value==""){
      caixa_telefone.innerHTML = "Telefone é obrigatório!"
      caixa_telefone.style.display = 'block';
      telefone.focus();
      return false;
  }

  if (validaTelefone.test(telefone.value)==false){
    alert("Telefone informado incoretamente!")
    telefone.focus();
    return false;
  }

  if (local.value==""){
      caixa_local.innerHTML = "Local é obrigatório!"
      caixa_local.style.display = 'block';
      local.focus();
      return false;
  }

  if (Dia.value==""){
      caixa_Dia.innerHTML = "Dia é obrigatório!"
      caixa_Dia.style.display = 'block';
      Dia.focus();
      return false;
  }

  if (horario.value==""){
      caixa_horario.innerHTML = "Horário é obrigatório!"
      caixa_horario.style.display = 'block';
      horario.focus();
      return false;
  }

  if (Email.value==""){
      caixa_Email.innerHTML = "E-mail é obrigatório!"
      caixa_Email.style.display = 'block';
      Email.focus();
      return false;
  }

  if (invalid.test(Email.value)==false){
    alert("E-mail informado incoretamente!")
    Email.focus();
    return false;
  }

  return true;

}
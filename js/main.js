$(document).ready(function(){
  $('#carousel-imagens').slick({
    autoplay: true,
  });

  $('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
  })

  $('#telefone').mask('(00) 00000-0000');

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      }, 
      mensagem: {
        required: true
      }, 
      veiculoDeInteresse: {
        required: true
      } 
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
      telefone: 'Por favor, insira seu telefone',
      email: 'Por favor, insira seu email',
      mensagem: 'Por favor, escreva sua mensagem',
      veiculoDeInteresse: 'Por favor, escreva seu veiculo de interesse'
    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function(evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      console.log();
    }
  })

  $('.lista-veiculos button').click(function(e){
    e.preventDefault();
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })

  $('header nav a').click(function(){
    const destino = $($(this).attr('href'));

    $('html, body').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })
})
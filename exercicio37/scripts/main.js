$(document).ready(function(){
    console.log('entrei no jquery');
    //$('.caixa-1').css('display','block');
    $('.caixa-1').fadeIn(3000);
    
    $('.botao_acao').click(function(){
        //alert('carreguei no botao');
        $('.caixa-2').fadeIn(3000);
    });

    $('.caixa-3').mouseenter(function(){
        console.log('entrei com o rato');
        $('.caixa-3').addClass('caixa-3-activa');
    });

    $('.caixa-3').mouseleave(function(){
        $('.caixa-3').removeClass('caixa-3-activa');
    });

});
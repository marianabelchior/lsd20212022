$(document).ready(function(){
    $('.item_menu button, .um-botao-fixe').on('click', function(){
        $('.caixa_drop').slideToggle(1000);
    });

    //$('button').on('mousenter')

    $('.direita').click(function(){
        $('.caixa-4').animate({
            'margin-left' : '+=50px'    
        }); 
    });

    $('.esquerda').click(function(){
        $('.caixa-4').animate({
            'margin-left' : '-=50px'    
        }); 
    });


});
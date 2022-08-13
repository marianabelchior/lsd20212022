onkeydown = function(tecla)
{
    //alert("carreguei");
    //console.log(tecla.key);

    tecla_presionada  = tecla.key;

    carro= document.getElementById('carro');
    altura_janela=window.innerHeight;
    largula_janela=window.innerWidth;

    switch (tecla_presionada){
        case "ArrowUp":{
            //console.log("vou andar para cima");

            //ir buscar a posição de um elemento
            posicao_inicial = carro.offsetTop;
            //console.log(posicao_inicial);
            nova_posicao = posicao_inicial - 10;

            carro.src="assets/imagens/carro_cima.png"
            if(nova_posicao <= -100){
                nova_posicao = altura_janela;
            }

            carro.style.top = nova_posicao + "px";


        } break;
        case "ArrowDown":{
            
            posicao_inicial = carro.offsetTop;
            //console.log(posicao_inicial);
            nova_posicao = posicao_inicial + 10;

            carro.src="assets/imagens/carro_baixo.png"
            if(nova_posicao >=  altura_janela){
                nova_posicao = -100;
            }

            carro.style.top = nova_posicao + "px";

        } break;
        case "ArrowLeft":{
            console.log("vou andar para a esquerda");
            posicao_inicial = carro.offsetLeft;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial - 10;

            carro.src="assets/imagens/carro_esquerda.png"
            if(nova_posicao <=  -100){
                nova_posicao = largula_janela;
            }

            carro.style.left = nova_posicao + "px";


        } break;
        case "ArrowRight":{
            console.log("vou andar para a direita");
            posicao_inicial = carro.offsetLeft;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial + 10;

            carro.src="assets/imagens/carro_direita.png"
            if(nova_posicao >=  largula_janela){
                nova_posicao = -100;
            }

            
            carro.style.left = nova_posicao + "px";

        } break;
    }
}
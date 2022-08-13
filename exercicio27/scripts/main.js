//definir a função
function calculaMedia(lista_enviada){

    tamanho_lista=lista_enviada.length;

    soma=0;

    for(i=0; i<tamanho_lista; i=i+1){
        numero_lido=lista_enviada[i];
        soma=soma+numero_lido;
    }
    media=soma/tamanho_lista;

    //document.write("A média é:"+media);
    return media;
}

function numeroDePares(lista){

    numero_de_pares_encontrados=0;
    //8,9,63,66,8

    //percorrer a lista
    for(i=0;i<lista.length;i=i+1){
        numero_lido=lista[i];
      //se o numero lido for par
        if(numero_lido %2 == 0){
               //incremento o numero_de_pares_encontrados
            numero_de_pares_encontrados = numero_de_pares_encontrados+1;
        }
    }
        return numero_de_pares_encontrados;

}
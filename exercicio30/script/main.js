function verificaPremio(){
    alert('entrei na funcao');

    //vou buscar a aposta
    apostaInserida = document.getElementById("aposta").value;
    aposta = apostaInserida.split(';')

    estrelasApostaInserida = document.getElementById("estrelas_aposta").value;
    estrelasAposta = estrelasApostaInserida.split(';');

    chaveInserida = document.getElementById("chave").value;
    chave = chaveInserida.split(';')

    estrelasChaveInserida = document.getElementById("estrelas_chave").value;
    estrelasChave = estrelasChaveInserida.split(';');

    encontrados = 0

    for(i=0; i<5; i++) // i=i+1
    {
        numero_lido=aposta[i];
        if(
            numero_lido == chave[0] ||
            numero_lido == chave[1] ||
            numero_lido == chave[2] ||
            numero_lido == chave[3] ||
            numero_lido == chave[4] 
            )
        {
            encontrados++;
            //encontrados = encontrados + 1
        }
    }

    estrelas_encontradas = 0;

    for(i=0; i<2; i++){
        numero_lido = estrelasAposta [i];
        if( numero_lido == estrelasChave [0] ||
            numero_lido == estrelasChave [1]){
                estrelas_encontradas++;
            }
    }


    if(encontrados==5 && estrelas_encontradas == 2)
    {
        mensagem="Ganhou o 1º Prémio";
    }

    else if(encontrados==5 && estrelas_encontradas == 1)
    {
        mensagem="Ganhou o 2º Prémio";
    }

    else if(encontrados==5 && estrelas_encontradas == 0)
    {
        mensagem="Ganhou o 3º Prémio";
    }

    else if(encontrados==4 && estrelas_encontradas == 2)
    {
        mensagem="Ganhou o 4º Prémio";
    }

    else if(encontrados==4 && estrelas_encontradas == 1)
    {
        mensagem="Ganhou o 5º Prémio";
    }

    else if(encontrados==3 && estrelas_encontradas == 2)
    {
        mensagem="Ganhou o 6º Prémio";
    }

    else if(encontrados==4 && estrelas_encontradas == 0)
    {
        mensagem="Ganhou o 7º Prémio";
    }

    else if(encontrados==2 && estrelas_encontradas == 2)
    {
        mensagem="Ganhou o 8º Prémio";
    }

    else if(encontrados==3 && estrelas_encontradas == 1)
    {
        mensagem="Ganhou o 9º Prémio";
    }

    else if(encontrados==3 && estrelas_encontradas == 0)
    {
        mensagem="Ganhou o 10º Prémio";
    }

    else if(encontrados==1 && estrelas_encontradas == 2)
    {
        mensagem="Ganhou o 11º Prémio";
    }

    else if(encontrados==2 && estrelas_encontradas == 1)
    {
        mensagem="Ganhou o 12º Prémio";
    }

    else if(encontrados==2 && estrelas_encontradas == 0)
    {
        mensagem="Ganhou o 13º Prémio";
    }

    else if(encontrados==0)
    {
        mensagem="Não tens prémio";
    }

    document.getElementById("resultado").innerText = mensagem;
    alert(encontrados);

}
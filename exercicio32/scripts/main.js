function validaNumero(){

    input_telefone=document.getElementById("num_telefone");
    telefone=input_telefone.value;

    if(telefone[0]!="9" && telefone[0]!="2"){
        document.getElementById('zona-de-erros').innerHTML="numero de telefone errado";
        return false;
    } else if(telefone [0]=="9" && telefone [1]!="3"){
        document.getElementById('zona-de-erros').innerHTML="numero de telefone errado";
        return false;
    }
}
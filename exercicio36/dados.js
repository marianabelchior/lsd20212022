carro1 = {
    marca: "Fiat",
    modelo: "Punto",
    cilindrada: "1000cc",
    caracteristicas: ['Vidros eletricos','AC']
};

carro2 = {
marca: "Toyota",
modelo: "Yaris",
cilindrada: "1200cc",
caracteristicas: ['Alarme','Direcao Assistida']
};

carro3 = {
marca: "BMW",
modelo: "320",
cilindrada: "2000cc",
caracteristicas: ['Alarme','Direcao Assistida','Bancos aquecidos']
};

carro4 = {
marca: "Audi",
modelo: "R8",
cilindrada: "3000cc",
caracteristicas: ['Direcao Assistida','Bancos aquecidos']
};

carro5 = {
    marca: "Ferrari",
    modelo: "F400",
    cilindrada: "5000cc",
    caracteristicas: ['Direcao Assistida','Estofos em Pele']
    };

lista_de_carros = [carro1, carro2, carro3, carro4];

//lista_de_caracteristicas= ['Alarme','Direcao Assistida','Bancos aquecidos']
//caracteristicas= 'bancos aquecidos'
function encontraCaracteristica(lista_de_caracteristicas, caracteristica){
    console.log('entrei na funcao');
    //percorrer array de caracteristica
    for(i=0; i<lista_de_caracteristicas.length; i++){
        console.log('entrei no ciclo');
        //se elemento do array lido = caracteristica
        if(lista_de_caracteristicas[i] == caracteristica){
            console.log('encontrei');

            return true
        }
    }
        return false
}
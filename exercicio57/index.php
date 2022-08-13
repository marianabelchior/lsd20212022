<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    include('Pessoa.php');
    //$p1 = new Pessoa();
    $p1= new Pessoa("Joao", "Lisboa", "joao@mail.com");
    //$p2 = new Pessoa();
    $p2= new Pessoa("maria", "Porto", "maria@mail.com");

    echo $p1->getNome();
    echo $p2->getNome();
    echo $p2->getEmail();
    $p1->setNome=("Paulo");
    echo $p1->getNome();

    $a1 = new Aluno ("Ricardo","Braga", "ricardo@mail.com",[12,15,17]);

    echo "A média do aluno é:" 
    ?>
</body>
</html>
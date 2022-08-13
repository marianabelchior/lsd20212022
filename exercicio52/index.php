<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O meu primeiro ficheiro PHP</title>
    <style>
        .nome_em_php{
            color: orange;
            font-weight: bold;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div>
        <?php
            $nome = "Maria Silva";

            echo "<span class='nome_em_php'>
                    <div>
                        <ul>
                            <li>Mariana</li>
                            <li>Mariana</li>
                            <li>Mariana</li>
                        </ul>
                        </span>";
        ?>

        <span>
            <?php
                echo $nome;
            ?>
        </span>
    </div>
</body>
</html>
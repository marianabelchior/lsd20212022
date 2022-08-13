<?php
    include('pessoa.php');
    class Aluno extends Pessoa{
        private $notas;

        public function __construct($nome, 
            $morada, 
                 $email, 
                    $notas){

                        parent::__construct($nome, $morada, $email);
                        $this->notas = $notas;
        }

        public function getMedia(){

            $notas_do_aluno= $this->notas;
            $soma=0;
            for($i=0;$i<count($notas_do_aluno);$i++){
                $soma=$soma+$notas_do_aluno[$i];
            }

            $media= $soma / count($notas_do_aluno);
            return $media;
        }
    }
?>
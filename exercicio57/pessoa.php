<?php

    class Pessoa{
        private $nome;
        private $morada;
        private $email;

        public function __construct(
            $nome_recebido, 
            $morada_recebida,
            $email_recebido
            ){
                $this->nome = $nome_recebido;
                $this->morada = $morada_recebida;
                $this->email = $email_recebido;
        }

        public function getNome(){
            return $this->nome;
        }

        public function getMorada(){
            return $this->nome;
        }

        public function getEmail(){
            return $this->nome;
        }

        public function setNome ($novoNome){
            $this->nome=$novoNome;
        }

        public function setNome ($novaMorada){
            $this->nome=$novaMorada;
        }

        public function setNome ($novoEmail){
            $this->nome=$novoEmail;
        }
    }
?>
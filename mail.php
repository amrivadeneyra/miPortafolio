<?php

if( $_SERVER['REQUEST_METHOD']){
    header(("location: index.html"));
}


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];



//remitente (nombre / celular / - email)
//asunto
//cuerpo

$rta = mail('amanuelrivadeneyrai@gmail.com',"Mensaje web: $asunto", $mensaje);

var_dump($rta);

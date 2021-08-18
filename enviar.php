<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>FORM</title> 

</head>

<body>
<?php

$Nombre = $_POST['nombre'];
$Apellido = $_POST['apellidos'];
$Correo = $_POST['correo'];
$Mensaje = $_POST['medio'];
$Telefono = $_POST['telefono'];


    require("includes/class.phpmailer.php");
    $mail = new PHPMailer(); 
    $mail->From     = "host@servihogar.com.mx";
      // Correo Electronico para SMTP 
    $mail->FromName = $Nombre; 
    $mail->AddAddress("contacto@servihogar.com.mx");
  // Dirección a la que llegaran los mensajes

// Aquí van los datos que apareceran en el correo que reciba

    $mail->WordWrap = 50; 
    $mail->IsHTML(true);     
    $mail->Subject  =  "Solicitud del cliente por medio del Sitio Web";
    $mail->Body     =  "<h3>Formulario cliente SERVI-HOGAR</h3>:".
    "<h5>Nombre: $Nombre </h5>".   
    "<h5>Apellidos: $Apellido </h5>". 
    "<h5>Email: $Correo </h5>".
    "<h5>Telefono: $Telefono </h5>".
    "<h5>Tipo de servicio: $Mensaje <h5>";

// Datos del servidor SMTP

    $mail->IsSMTP(); 
    $mail->Host = "localhost";  // mail. o solo dominio - Servidor de Salida. (recomiendo sin mail.)
    $mail->SMTPAuth = true; 
    $mail->Username = "host@servihogar.com.mx";  // Correo Electrónico para SMTP correo@dominio.tld
    $mail->Password = "*WEB2020*WEB2020"; // Contraseña para SMTP

    if ($mail->Send()){
    echo "<script>       
	window.location= 'https://servihogar.com.mx/';
    </script>";
   
}

?>
</body>
</html>

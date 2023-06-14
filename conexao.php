<?php




$dsn = "SQL Server:host=32.95.153.81;dbname=comandas;charset=utf8";
$usuario = "sqlserver"
$senha = "medsys"

try {

    $PDO = new PDO ($dsn, $usuario, $senha);
}catch(PDOException $erro) {


    exit;
}

?>
<?php
//ini_set ("display_errors","1" );
//error_reporting(E_ALL);
//echo "1";
//Incluimos el FrontController
header('Strict-Transport-Security: max-age=0;');
require '../class/controlador.php';
//Lo iniciamos con su método estático main.
FrontController::main();

?>

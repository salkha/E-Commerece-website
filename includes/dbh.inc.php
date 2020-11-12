<?php

$servername= "localhost";
$dBUsername="root";
$dBPassword="";
$dBName="loginsystem";

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName); // connection with 4 parameters

if (!$conn) {
    die ("Connection Failed : ".mysqli_connect_error()); //Error message if there is no connection
}
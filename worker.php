<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Credentials: true");
    echo file_get_contents($_GET['url']);
?>
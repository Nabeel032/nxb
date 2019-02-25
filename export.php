<?php

    $data = $_REQUEST['image'];
    $destdir = 'screenshot/';
    $temp_name= uniqid() . "-temp-name.jpg";
    $img=file_get_contents($data);

    if (!file_exists('screenshot')) {
        mkdir('screenshot', 0777, true);
        file_put_contents($destdir.$temp_name, $img);
    }
    else{
        file_put_contents($destdir.$temp_name, $img);
    }
    echo $temp_name;
?>
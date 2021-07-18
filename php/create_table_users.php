<?php
    $sql = "CREATE TABLE users(
            id INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            user_email VARCHAR (30) NOT NULL UNIQUE KEY,
            user_password VARCHAR (255) NOT NULL
          ) DEFAULT CHARSET=utf8";

      if($conn->query($sql)===TRUE){
           echo "<br>Table created successfully";
           };
?>
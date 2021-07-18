<?php
    if (empty($_POST['email'])) echo "Email must not be empty<br>";
    if (empty($_POST['password'])) echo "Password must not be empty<br>";
    $email = trim(htmlspecialchars($_POST['email']));
    $user_password = trim(htmlspecialchars($_POST['password']));
    $hash = password_hash($user_password, PASSWORD_DEFAULT);
    
    $email = str_replace("'", "&apos;", $email);
    $email = str_replace('"', "&quot;", $email);

    //$user_password = str_replace("'", "&apos;", $password);
    //$user_password = str_replace('"', "&quot;", $password);
?>
<?php 
    require ("connect.php");
    require_once ("create_table_users.php");
    if(isset($_POST['sign_up'])){
        require ("checkform.php");

        $sql = "INSERT INTO users (user_email, user_password) VALUES ('$email','$hash')";
        if($conn->query($sql)){
            echo "New user was created!";
        } else{
            echo "Such a user is already in the database. PLease write your unique email!";
        }
    };

    if(isset($_POST['sign_in'])) {
        require ("checkform.php");

        $sql = "SELECT user_password FROM `users` WHERE `user_email` = '$email'";
        if($result = $conn->query($sql)){
            $rowsCount = $result->num_rows;
            if(!$rowsCount){
                echo('Incorrect email or password');
            }else{
            foreach($result as $row){
                $hash = $row['user_password'];
                $verification = password_verify($user_password, $hash);
                if($verification){
                    echo 'Congratulations! You have successfully logged in!';
                } else {
                    echo ('Incorrect email or password');
                    }
                }
            }
        }
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.0/dist/css/uikit.min.css" />
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.0/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.0/dist/js/uikit-icons.min.js"></script>
</head>
<body class="uk-flex uk-flex-column">
    <form method="POST" action="" class="uk-margin-auto uk-width-1-3">
    <legend class="uk-legend uk-margin-top">Welcome!</legend>
    <div class="uk-margin">
        <input class="uk-input uk-form-width-large" type="email" name="email" placeholder="Email">
    </div>
    <div class="uk-margin">
        <input class="uk-input uk-form-width-large" type="password" name="password" placeholder="Password">
    </div>
    <div class="uk-margin">
        <button type="submit" name="sign_in" class="uk-button uk-button-default">Sign in</button>
        <button type="submit" name="sign_up" class="uk-button uk-button-primary uk-margin-left">Sign up</button>
    </div>
    </div>
    </form>
    <form method="POST" action="export.php" class="uk-margin-auto uk-width-1-3">
        <button type="submit" name="export_users" class="uk-button uk-button-secondary uk-margin-left">Import users</button>
    <form>
</body>
</html>
<?php
    require ("connect.php");
    require_once ("create_table_users.php");

       if(isset($_POST['export_users']))  {
        $filename = "users.xls"; // File Name
        // Download file
        header("Content-Type: application/xls");    
        header("Content-Disposition: attachment; filename=$filename");  
        header("Pragma: no-cache"); 
        header("Expires: 0");
        $sql = "SELECT * FROM `users`";
        $result=mysqli_query($conn,$sql);
        if(mysqli_num_rows($result) > 0){
                echo "<table><thead>
                            <td>Id</td>
                            <td>Email</td>
                            <td>Password</td>
                            </thead>";
                while($data = mysqli_fetch_assoc($result)){ 
                    echo "<tr>
                            <td>".$data['id']."</td>
                            <td>".$data['user_email']."</td>
                            <td>".$data['user_password']."</td>
                        </tr>";
                };
                echo "</table>";
            };
        };


?>
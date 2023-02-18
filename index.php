<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $firstName=$_POST['first-name'];
    $lastName=$_POST['last-name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $gender=$_POST['gender'];

    $sql = "INSERT INTO students VALUES ('$firstName', '$lastName', '$email', '$phone','$gender')";
    
   $rs= mysqli_query($conn, $sql);
   if($rs){
       echo "New record created successfully";
    }
     else{
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
?>

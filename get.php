<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db="sample";
    $conn = mysqli_connect($servername, $username, $password,$db);
    if (!$conn) {
      die("Unable to Connect database: " . mysqli_connect_error());
    }
    if(isset($_POST['name'])){
      $name=$_POST['name'];
      $city=$_POST['city'];
      $state=$_POST['state'];
      $pincode=$_POST['pincode'];
    }
    if($name!="" && $city!="" && $state!="" && $pincode!="")  
    {
        $sql = "INSERT INTO `tab1`( `name`, `city`, `state`, `pincode`) VALUES ('$name','$city','$state','$pincode');";
        $execute=mysqli_query($conn, $sql);
        if($execute==true)
        {
          echo "<h3>User data was inserted successfully</h3>";
        }
        else
        {
          echo  "Error: " . mysqli_error($conn);
        }
    }
    else
    {
      echo "<h3>Fill all details</h3>";
    }

?>
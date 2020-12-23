<?php
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db="sample";
    $conn = mysqli_connect($servername, $username, $password,$db);
    if (!$conn) {
    die("Unable to Connect database: " . mysqli_connect_error());
    }

    $sql="select * from `tab1`";
    $data=mysqli_query($conn,$sql) or die ("Query error". mysqli_error());
    //creating array to store data
    $data_arr=array();
    while($row=mysqli_fetch_assoc($data)){
        $data_arr[]=$row;
    }
    echo json_encode($data_arr);

    // //genetating external json file
    // $fp= fopen("table_data.json",'w');
    // if(!fwrite($fp, $json_obj)){
    //     echo "<h3>file error</h3>";
    // }
    // fclose($fp);
    
?>
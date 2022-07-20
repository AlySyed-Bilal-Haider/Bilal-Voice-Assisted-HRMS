<?php
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

 $sql="SELECT userapplication.id,userapplication.designation,userapplication.cname,userapplication.description,userapplication.attend,userapplication.Interview,
 userapplication.degree,userapplication.instituename,userapplication.totalexp,userapplication.cgpa,userapplication.degreeyear,userapplication.subject,userapplication.File,userapplication.visterId,
 visters.id,visters.fname,visters.lname,visters.username,visters.email,visters.phone,visters.address,visters.role
FROM `userapplication`
INNER JOIN `visters` ON userapplication.visterId=visters.id";

$result=mysqli_query($con,$sql) or die("Employee sql query failed".mysqli_error($con));

if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $result=json_encode($ouput);
    echo $result;
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}
?>


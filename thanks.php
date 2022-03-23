<?php include('../../echronpanel/lib/dbconf.php');?>
<?php
if($_POST['action']=="send_query") {

    $name        =   mysql_real_escape_string($_POST["name"]);
    $phone       =   mysql_real_escape_string($_POST["phone"]);
    $email       =   mysql_real_escape_string($_POST["email"]);

    $mess= "<table width='96%' cellspacing='0' cellpadding='2' border='0'><tr><td> Oraliah<br/><br/></td></tr>
    <tr><td>You have received an enquiry. Details of which are as follows: <br /><br />";
    $mess.= "Name : ".$name."<br /><br />";
    $mess.= "Phone : ".$phone."<br /><br />";
    $mess.= "Email : ".$email."<br /><br />";
  
 
  $mess.= "Thanks<br>Team<br>Oraliah Aligners </strong></td></tr>
  </table>";

send_mail('Oraliah Form','mohddsultaan@gmail.com',$mess, 'Oraliah Enquiry Form');

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="robots" content="NOINDEX, NOFOLLOW" />
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oraliah</title>
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css" />
  <link rel="stylesheet" type="text/css" href="css/animate.css" />
</head>

<body>
  <div class="thankyou">
    <div class="thankarea">
      <i class="fa fa-thumbs-up"></i>
    </div>
    <!--thankarea-end-->
    <h1>Thank you for getting in touch!</h1>
    <!-- -->
    <p><span class="para">We appreciate you contacting Oraliah</span> <br>
      One of our colleagues will be in touch with you soon!
      Have a great day! </p>
      <p class="para2">Need help? Call us:- 9538400333<br>
Email:- shazaan@oraliah.com</p>

    <div class="clearfix"></div>
  </div>
  <div class="icon-bar">
    <a href="https://www.facebook.com/Oraliah-104903218494464" target="_blank" class="facebook"><i
        class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/Oraliah_dental" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a>
    <a href="https://www.instagram.com/oraliah_dental/" target="_blank" class="google"><i
        class="fa fa-instagram"></i></a>
    <a href="https://www.linkedin.com/company/oraliah" target="_blank" class="linkedin"><i
        class="fa fa-linkedin"></i></a>
    <a href="https://www.youtube.com/channel/UChELSHppz4qxHDHu8u9XMCg" target="_blank" class="youtube"><i
        class="fa fa-youtube"></i></a>
  </div>
  <script src="js/jquery.js"></script>
  <script src="js/swiper-bundle.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/my_script.js"></script>
  <script>
  </script>
</body>

</html>
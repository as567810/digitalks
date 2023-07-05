<?php

function send_mail_smtp($message, $to, $subject)
{
	$headers = "From: info@hashdigitech.com" . "\r\n";
	$headers .= "MIME-Version: 1.0" . "\r\n";
	$headers .= "X-Priority: 3\r\n";
	$headers .= "X-Mailer: smail-PHP " . phpversion() . "\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
	$success = mail($to, $subject, $message, $headers);

	return $success;
}
if($_POST['action']=="contact_form") {

    $name        =   $_POST["name"];
    $phone       =   $_POST["phone"];
    $email       =   $_POST["email"];
    $message       = $_POST["message"];

    $mess= "<table width='96%' cellspacing='0' cellpadding='2' border='0'><tr><td> Hash digitech<br/><br/></td></tr>
    <tr><td>You have received an enquiry. Details of which are as follows: <br /><br />";
    $mess.= "Name : ".$name."<br /><br />";
    $mess.= "Phone : ".$phone."<br /><br />";
    $mess.= "Email : ".$email."<br /><br />";
    $mess.= "Message : ".$message."<br /><br />";

  
 
  $mess.= "Thanks<br>Team<br>Hash digitech </strong></td></tr>
  </table>";

  send_mail_smtp($mess,'hashdigitech@gmail.com', 'Hash digitech ');

}
?>

<!DOCTYPE html>
<html lang="en">

<?php include('include/head.php');?>

  <body>


    
<?php include('include/header.php');?>

<body>
<script>
  fbq('track', 'CompleteRegistration', {
    value: 1,
    currency: 'INR',
  });
</script>
  <div class="thankyou">
    <div class="thankarea">
      <i class="fa fa-thumbs-up"></i>
    </div>
    <!--thankarea-end-->
    <h1>Thank you for getting in touch!</h1>
    <!-- -->
    <p><span class="para">We appreciate you contacting Hash digitech</span> <br>
      One of our colleagues will be in touch with you soon!
      Have a great day! </p>
      <p class="para2">Need help? Call us:- +91-9599970508<br>
Email:- hashdigitech@gmail.com</p>

    <div class="clearfix"></div>
  </div>

  <?php include('include/foot.php')?>


</body>

</html>
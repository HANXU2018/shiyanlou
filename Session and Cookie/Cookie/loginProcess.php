<?php
echo "welcome, ".$_POST['id'].",login success!!";
 setcookie("id",$_POST['id']),time()+3600);
 setcookie("pwd",$_POST['password']),time()+3600);
if(!empty($_COOKIE['lastVist'])){
	echo "your last login time: ".$_COOKIE['lastVist'];
	setcookie("lastVist",date("Y-m-d H:i:s"),time()+3600);
}else{
	echo "you first login time: ";
	setcookie("lastVist",date("Y-m-d H:i:s"),time()+3600);
}
?>

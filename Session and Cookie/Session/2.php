<?php
	session_start();
	$_SESSION['NAME']="shiyanlou";
	unset($_SESSION['NAME']);
	echo $_SESSION['NAME'];
?>

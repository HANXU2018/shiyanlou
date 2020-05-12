<?php
	setcookie("name","",time()-200);
	foreach($_COOKIES as $key => $val)
	{
		setcookie($key,"", time()-1);	
	}
?>

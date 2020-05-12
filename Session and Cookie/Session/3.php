<?php
	session_start();
class Dog{
	private $name;
	private $age;
	private $intro;
	function __construct($name,$age,$intro){
		$this->name=$name;
		$this->age=$age;
		$this->intro=$intro;
	}
	public function getName(){
		return $this->name;
	}
}
	$dog1=new Dog("big dog",5,"a very good dog");
	$_SESSION['dog1']=$dog1;
	echo "save ok!";
	echo $_SESSION['dog1']->getName();
	print_r($_SESSION);

	$arr1=$_SESSION['dog1'];
	print_r($arr1);
	foreach($arr1 as $key=>$val){
		echo "<br/>--$val";
	}

	

?>

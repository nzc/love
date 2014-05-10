<?php
	$name = $_POST["name"];
	$pw = $_POST["password"];
	if($name == "Nzc" && $pw == "loveIvy")
		header('location: fake.html');
	elseif ($name == "Ivy" && $pw == "loveNzc")
		header('location: real.html');
	else
		header('location: error.html');
?>
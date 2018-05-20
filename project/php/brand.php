<?php
header('content-type:text/html;charest=utf-8');
	$sjk=mysql_connect('localhost','root','');
	if(!$sjk){
		die("数据库连接失败".mysql_error());
	}
	mysql_select_db('juanpi');
	mysql_query('SET NAMES UTF8');
	$query='select * from brand';
	$result=mysql_query($query);
	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	
	echo json_encode($arr);
?>
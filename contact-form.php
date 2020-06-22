﻿<?php
if (isset($_POST['page'])) {$name = $_POST['page'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['source_id'])) {$source_id = $_POST['source_id'];}
if (isset($_POST['comment'])) {$comment = $_POST['comment'];}

 
$address = 'powerfinleasing@gmail.com';
$sub = "Обратная связь";
$mes = "Сайт: $name \nНомер телефона: $phone \nРесурс: $source_id \nФорма: $comment ";
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8");
if ($verify == 'true')
{
	$json = array(); 
echo json_encode($json); 
		die();
}
else 
{
echo "<p>Сообщение не отправлено";
}
?>
<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db = mysql_connect("localhost","root","TTKX883721");
    mysql_select_db("project_user_msg",$db);
    mysql_query("set names utf8");
    $uname = $_POST["username"];
    $upwd = $_POST["password"];
    // echo $uname;
    // echo $upwd;

    $sql2 = "SELECT * FROM `login_users` WHERE (`usersId`='$uname')";
    $data = mysql_query($sql2);

    $result = mysql_fetch_array($data);
    if($result){
        echo '{"status":200,"msg":"用户名已存在","res":false}';

    }else{
        $sql3 = "INSERT INTO `login_users`(`usersId`,`usersPwd`) VALUES ('$uname','$upwd')";
        $count = mysql_query($sql3);
        if($count==1){
            echo '{"status":200,"msg":"注册成功","res":true}';
        }
    }
?>
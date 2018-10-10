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

    $sql1 = "SELECT * FROM `login_users` WHERE (`usersId`='$uname')";
    $data = mysql_query($sql1);

    $result = mysql_fetch_array($data);
    // print_r($result);
    if($uname == $result[0]&&$upwd==$result[1]){
        echo '{"status":200,"msg":"登录成功","res":false}';

    }else{
        echo '{"status":200,"msg":"登录失败，请检查用户名与密码","res":true}';
    }
?>
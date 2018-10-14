 $(function() {
     var user_msg = $('.user_msg');
     var user_pwd = $('.pwd_msg');

     /*验证用户输入的用户名是否合法*/
     $('#users_id').keyup(function() {
         var userName = $('#users_id').val(),
             nameReg = /^[a-zA-Z0-9_-]{6,16}$/;

         var nameResult = nameReg.test(userName);
         // var pwdResult = psdReg.test(userPwd);
         if (nameResult) {
             user_msg.text("合法的用户名!");
             user_msg.css('color', 'green');
             $('#users_id').css('border', '1px solid #ccc')
         } else {
             user_msg.text("请输入6到16位字母数字下划线！");
             user_msg.css('color', 'red');
             $('#users_id').css('border', '1px solid red')
         }
         if (userName == '') {
             user_msg.text("");
             $('#users_id').css('border', '1px solid #ccc')
         }
         // return nameResult;
     });

     /*验证用户输入的密码是否合法*/
     $('#users_pwd').keyup(function() {
         var userPwd = $('#users_pwd').val(),
             psdReg = /^[a-zA-Z0-9_-]{6,16}$/;


         var pwdResult = psdReg.test(userPwd);
         if (pwdResult) {
             user_pwd.text("密码合法!");
             user_pwd.css('color', 'green');
             $('#users_pwd').css('border', '1px solid #ccc')
         } else {
             user_pwd.text("请输入合法密码！");
             user_pwd.css('color', 'red');
             $('#users_pwd').css('border', '1px solid red')
         }

         if (userPwd == '') {
             user_pwd.text("");
             $('#users_pwd').css('border', '1px solid #ccc')
         }
     });
     /*注册功能*/
     $('.register').click(function() {
         if ($('#users_id').val() == '' || $('#users_pwd').val() == '') {
             alert('请输入用户名与密码');
         } else {
             var data = {
                 "username": $('#users_id').val(),
                 "password": $('#users_pwd').val()
             };
             var url = "http://10.31.157.53:8080/myProject/Second-state-Project/src/php/register.php";
             $.ajax({
                 type: "post",
                 url: url,
                 data: data,
                 dataType: "json",
                 success: function(data) {
                     alert(data.msg);
                     if (data.msg == '注册成功') {
                         location.href = "http://10.31.157.53:8080/myProject/Second-state-Project/src/html/index_yy.html";
                     }

                 },
                 error: function(err) {
                     alert(data.msg);
                 }
             });
         }
     });

     /*登录功能*/
     $('.login').click(function() {
         if ($('#users_id').val() == '' || $('#users_pwd').val() == '') {
             alert('请输入用户名与密码');
         } else {
             var data = {
                 "username": $('#users_id').val(),
                 "password": $('#users_pwd').val()
             };
             var url = "http://10.31.157.53:8080/myProject/Second-state-Project/src/php/login.php";
             $.ajax({
                 type: "post",
                 url: url,
                 data: data,
                 dataType: "json",
                 success: function(data) {

                     alert(data.msg);
                     // console.log(data.msg);
                     if (data.msg == '登录成功') {
                         location.href = "http://10.31.157.53:8080/myProject/Second-state-Project/src/html/index_yy.html";
                     }

                 },
                 error: function(err) {
                     // console.log(err);
                     alert(data.msg)
                 }
             });
         }
     });

     /*游客登录*/
     $('.visitors_login').click(function() {
         location.href = "http://10.31.157.53:8080/myProject/Second-state-Project/src/html/index_yy.html"
     });
 });
$('#btn').on('click',function(){
	var $username=$('#tel').val();//用户名
	var $password=$('#password').val();//密码
	$.ajax({
		type:'post',
		url:'http://127.0.0.1/project/php/login.php?__hbt=1526545120709',
		data:{//将用户名和密码传输给后端
			tel:$username,
			pass:$password
		},
		success:function(data){//请求成功，接收后端返回的值
			if(!data){//用户名或者密码错误
				$('#password').val('');
				$('.msg_error').show();
			}else{//成功
				addCookie('UserName',$username,7);
				location.href='../html/index.html';
			}
		}
	})
});

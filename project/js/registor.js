$(function(){
	var $oInput=$('input');
	var $zhi=0;
	var $oP=$('.msg_error');
	var $oStrong=$('.error-box1 strong');
	$oInput.eq(0).on('focus',function(){
		if($(this).val()==''){
			$oP.eq(0).html('请输入11位号码').addClass('msg_error_gray');
			$oStrong.eq(0).css('visibility','hidden');
		}else{
			$oP.eq(0).html('');
			$oStrong.eq(0).css('visibility','hidden');
		}
	})
	$oInput.eq(0).on('blur',function(){
		if($(this).val()==''){
			$oP.eq(0).html('请输入手机号码').removeClass('msg_error_gray');
			$oStrong.eq(0).css('visibility','visible').addClass('error');
		}else{
			$oP.eq(0).html('');
			$oStrong.eq(0).css('visibility','hidden');
		}
			var $reg=/^1[3|4|5|6|7|8]\d{9}$/;
			var $tel=$(this).val();
			if($tel!=''){
				if($reg.test($tel)){
					$.ajax({
						type:"post",
						url:"http://127.0.0.1/project/php/reg.php",
						data:{
							tel:$tel
						},
						success:function(d){
							console.log(d);
							if(d){
								$oP.eq(0).html('手机号已被使用').removeClass('msg_error_gray')
							}else{
								$oStrong.eq(0).css('visibility','visible').addClass('ok');
								$zhi++;
							}
						}
					})
				}else{
					$oP.eq(0).html('请输入正确的手机号码').removeClass('msg_error_gray')
					$oStrong.eq(0).css('visibility','visible').addClass('error').removeClass('ok');
				}
		}
	});
	
	$oInput.eq(1).on('focus',function(){
		if($(this).val()==''){
			$oP.eq(1).html('6-16个数字、字母或符号，字母区分大小写').addClass('msg_error_gray');
			$oStrong.eq(1).css('visibility','hidden');
		}else{
			$oP.eq(1).html('');
			$oStrong.eq(1).css('visibility','hidden');
		}
	})
	$oInput.eq(1).on('blur',function(){
		if($(this).val()==''){
			$oP.eq(1).html('请输入密码').removeClass('msg_error_gray');
			$oStrong.eq(1).css('visibility','visible').addClass('error');
		}else{
			$oP.eq(1).html('');
			$oStrong.eq(1).css('visibility','hidden');
		}
			var $reg=/.{6,20}/;
			if($(this).val()!=''){
				if($reg.test($(this).val())){
					$oStrong.eq(1).css('visibility','visible').addClass('ok');
					$zhi++;
				}else{
					$oP.eq(1).html('密码格式不符合规范').removeClass('msg_error_gray')
					$oStrong.eq(1).css('visibility','visible').addClass('error').removeClass('ok');
			
				}
			}
	});
	
	$oInput.eq(2).on('focus',function(){
		if($(this).val()==''){
			$oP.eq(2).html('请再次输入密码').addClass('msg_error_gray');
			$oStrong.eq(2).css('visibility','hidden');
		}else{
			$oP.eq(2).html('');
			$oStrong.eq(2).css('visibility','hidden');
		}
	})
	$oInput.eq(2).on('blur',function(){
		if($(this).val()==''){
			$oP.eq(2).html('请输入确认密码').removeClass('msg_error_gray');
			$oStrong.eq(2).css('visibility','visible').addClass('error');
		}else{
			$oP.eq(2).html('');
			$oStrong.eq(2).css('visibility','hidden');
		}
			var $reg=new RegExp('^'+$oInput[1].value+'$');
			if($(this).val()!=''){
				if($reg.test($(this).val())){
					$oStrong.eq(2).css('visibility','visible').addClass('ok');
					$zhi++;
				}else{
					$oP.eq(2).html('俩次密码输入不一致').removeClass('msg_error_gray')
					$oStrong.eq(2).css('visibility','visible').addClass('error').removeClass('ok');
					
				}
			}
	});
	$oInput.eq(3).on('focus',function(){
		if($(this).val()==''){
			$oP.eq(3).html('请输入验证码').addClass('msg_error_gray');
			$oStrong.eq(3).css('visibility','hidden');
		}else{
			$oP.eq(3).html('');
			$oStrong.eq(3).css('visibility','hidden');
		}
	})
	$oInput.eq(3).on('blur',function(){
		if($(this).val()==''){
			$oP.eq(3).html('请输入验证码').removeClass('msg_error_gray');
			$oStrong.eq(3).css('visibility','visible').addClass('error');
		}else{
			$oP.eq(3).html('');
			$oStrong.eq(3).css('visibility','hidden');
		}
			var $reg=/.{6}/;
			if($(this).val()!=''){
				if($reg.test($(this).val())){
					$oStrong.eq(3).css('visibility','visible').addClass('ok');
					$zhi++;
				}else{
					$oP.eq(3).html('验证码有误').removeClass('msg_error_gray')
					$oStrong.eq(3).css('visibility','visible').addClass('error').removeClass('ok');
				
				}
			}
	});
	$oInput.eq(4).on('click',function(){
		$oInput.eq(4).val('重新获取');
	})
	$oInput.eq(5).on('mouseover',function(){
		$oInput.eq(5).css('opacity','0.8');
	})
	$oInput.eq(5).on('mouseout',function(){
		$oInput.eq(5).css('opacity','1');
	})
	$('form').on('submit',function(){
		if($zhi==4){
			return true
		}else{
			return false
		}
	});
});

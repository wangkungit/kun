//侧边栏
$('#J_backtop').hover(function(){
	$('#J_backtop').css('background','#FF464E');
	$('.i-backtop').css('background-position','-26px -187px');
},function(){
	$('#J_backtop').css('background','#444444');
	$('.i-backtop').css('background-position','0 -187px');
})
$('#J_user').hover(function(){
	$('#J_user').css('background','#FF464E');
	$('.i-user').css('background-position','-26px 0');
},function(){
	$('#J_user').css('background','#444444');
	$('.i-user').css('background-position','0 0');
})
$('#J_cart').hover(function(){
	$('#J_cart').css('background','#FF464E');
	$('.i-cart').css('background-position','-25px -24px');
	$('#J_cart em').css('background','#fff');
	$('#J_cart em').css('color','#FF464E');
},function(){
	$('#J_cart').css('background','#444444');
	$('.i-cart').css('background-position','1px -24px');
	$('#J_cart em').css('color','#fff');
	$('#J_cart em').css('background','#FF464E');
})
$('#J_love').hover(function(){
	$('#J_love').css('background','#FF464E');
	$('.i-love').css('background-position','-26px -110px');
},function(){
	$('#J_love').css('background','#444444');
	$('.i-love').css('background-position','0 -110px');
})
$('#J_quan').hover(function(){
	$('#J_quan').css('background','#FF464E');
	$('.i-quan').css('background-position','-26px -134px');
},function(){
	$('#J_quan').css('background','#444444');
	$('.i-quan').css('background-position','0 -134px');
})
$('#J_complain').hover(function(){
	$('#J_complain').css('background','#FF464E');
	$('.i-complain').css('background-position','-26px -208px');
},function(){
	$('#J_complain').css('background','#444444');
	$('.i-complain').css('background-position','0 -208px');
})
$('#J_code').hover(function(){
	$('#J_code').css('background','#FF464E');
	$('.i-code').css('background-position','-26px -160px');
},function(){
	$('#J_code').css('background','#444444');
	$('.i-code').css('background-position','0 -160px');
})

$('#J_backtop').on('click',function(){
	$('html,body').animate({
		scrollTop:0
	});
});
	
;(function(){
	$(window).on('scroll',function(){
		var $h=$(window).scrollTop();
		if($h>=100){
			$('#J_backtop').css('visibility','visible');
		}else{
			$('#J_backtop').css('visibility','hidden');
		}
	})
})();

$('.txt1,.share').hover(function(){
	$('.share').css('display','block');
},function(){
	$('.share').css('display','none');
})


;(function() {
	$.ajax({
		url:'http://127.0.0.1/project/php/details.php?__hbt=1526442088764',
		type:'get',
		dataType:'json',//数据类型
	}).done(function(d){ //成功
		var $se=$(".sector-info");
		var $Pri=$('.price');
		var $html='';
		var $price='';

		$.each(d, function(index,value){
			$html+=`<h1>${value.title}</h1>`;
			$price+=`<span class="current2 fl ">
	        			<i class="symbols">￥</i>
	        			<span class="js-cprice">${value.price}</span>
	        		</span>
	        		<span class="old fl">参考价:
	        			<em class="u-yen">¥</em>
	        			<span class="js-oprice">${value.oldprice}</span>
	        		</span>`;
	       	
		});
		
		$se.before($html);
		$Pri.append($price);
		
	}).fail(function() { //失败

	})
})();

(function() {
	$.ajax({
		url:'http://127.0.0.1/project/php/fdj.php?__hbt=1526451590861',
		type:'get',
		dataType:'json',//数据类型
	}).done(function(d){ //成功
		var $Xt=$(".deal-pic ul");
		var $small='';
		$.each(d, function(index,value){
			$small+=`<li class="">
			                    <a href="javascript:;">
			                    <img src="${value.url}">
			                    </a>
			         </li>`;
		});
		$Xt.append($small);
		
	}).fail(function() { //失败

	})
})();


(function() {
	$.ajax({
		url:'http://127.0.0.1/project/php/fangdajing.php?__hbt=1526455556281',
		type:'get',
		dataType:'json',//数据类型
	}).done(function(d){ //成功
		var $Bpic=$('.bigscale');
		var $Pic=$('.smallscale');
		var $Img='';
		var $Big='';

		$.each(d, function(index,value){
//			$Big+=`<img src="${value.url}" class="bigpic">`;
			$Img+=`<img src="${value.url}" sid="1" class='loadimg'>`;
		});
		$Pic.before($Img);
//		$Bpic.append($Big);
		
	}).fail(function() { //失败

	})
})();

//点击加入购物车，存储cookie
var sidarr=[];
var numarr=[];
function getcookievalue(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}
}

	$('.add-cart-btn').on('click',function(){
		var sid = $(this).parents('.goods_show').find('.pic .loadimg').attr('sid');
		getcookievalue();
		if($.inArray(sid,sidarr)!=-1){
			if(getCookie('cartnum')==''){
				var num=parseInt($('.shu').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum',numarr.toString(),7);
				sidarr[$.inArray(sid,sidarr)]=sid;
				addCookie('cartsid',sidarr.toString(),7);
			}else{
				var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.shu').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum',numarr.toString(),7);
			}
		}else{
			sidarr.push(sid);
			addCookie('cartsid',sidarr.toString(),7);
			numarr.push($('.shu').val());
			addCookie('cartnum',numarr.toString(),7);
		}
	});



var $jia = $('.increase');
var $jian = $('.decrease');
var $shu = $('.shu');
var $ts=$('.skulimitbuy');
$jia.on('click',function(){
	$shu.val(parseInt($shu.val())+1);
	if(parseInt($shu.val())>=50){
		$shu.val('50');
		$ts.css('display','block');
	}else{
		$ts.css('display','none');
	}
})
$jian.on('click',function(){
	if(parseInt($shu.val())<=1){
		$shu.val('1');
	}else{
		$shu.val(parseInt($shu.val())-1);
	}
	
})

;(function(){
	$('.smallpic').mouseover(function(){
		$('.smallscale').css('visibility','visible');
		$('.bigscale').css('visibility','visible')
	})
	$('.smallscale').css('width',$('.bigscale').width()*$('.smallpic').width()/$('.bigpic').width()+'px');
	$('.smallscale').css('height',$('.bigscale').height()*$('.smallpic').height()/$('.bigpic').height()+'px');
	var bl=parseInt($('.bigpic').width()/$('.smallpic').width());
	
	$(this).mousemove(function(ev){
		var ev=ev||window.event;
		var l=ev.pageX-$('.scale').offset().left-parseInt($('.smallscale').width()/2);
		var t=ev.pageY-$('.scale').offset().top-parseInt($('.smallscale').height()/2);
		if(l<0){
			l=0;
		}else if(l>=$('.smallpic').width()-$('.smallscale').width() - 2){
			l=$('.smallpic').width()-$('.smallscale').width() - 2;
		}
		if(t<0){
			t=0;
		}else if(t>=$('.smallpic').height()-$('.smallscale').height() - 2){
			t=$('.smallpic').height()-$('.smallscale').height() - 2;
		}
		$('.smallscale').css('left',l+'px');
		$('.smallscale').css('top',t+'px');
		$('.bigpic').css('left',-bl*l+'px');
		$('.bigpic').css('top',-bl*t+'px');
	});
	$('.smallpic').mouseout(function(){
		$('.smallscale').css('visibility','hidden');
		$('.bigscale').css('visibility','hidden');
	});
	$('body').on('mouseover','.deal-pic ul li',function(){
		$(this).css('border-color','#333333').siblings().css('border-color','transparent');
		$('.smallpic img').eq($(this).index()).show().siblings().not(".smallscale").hide();
		$('.bigpic').eq($(this).index()).show().siblings().hide();
	
	});
})();

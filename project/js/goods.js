;(function() {
	$.ajax({
		url:'http://127.0.0.1/project/php/goods.php?__hbt=1526347120270',
		type:'get',
		dataType:'json',//数据类型
	}).done(function(d){ //成功
		var $goods=$(".goods-list");
		var $html='';
		$.each(d, function(index,value){
			$html+=`<li class="hover">
					<div class="list-good">
						<div class="good-pic">
							<div class="pic-img">
								<a href="details.html">
									<img src="${value.url}"/>
								</a>
							</div>
						</div>
					</div>
					<div class="good-price">
						<span class="price-current">${value.price}
						</span>
						<span class="des-other">
							<span class="price-old">
								${value.oldprice}
							</span>
						</span>
					</div>
					<h3 class="good-title">
						<a href="#">
						${value.title}
						</a>
						<span class="sold">
						${value.status}
						</span>
					</h3>
					<a class="y-like my-like" data-gid="86580458" data-saletype="1" data-goodscode="24005353" data-gtype="3" lkid="86580458" lks="1" gtype="3" title="加入收藏">
						<i class="like-ico">
							<span class="heart_left">
							</span>
							<span class="heart_right">
							</span>
						</i>
					</a>
				</li>`
		});
		$goods.append($html);
	}).fail(function() { //失败

	})
})();
;(function() {
	$.ajax({
		url: 'http://127.0.0.1/project/php/lunbo.php?__hbt=1526366073618',
		type: 'get',
		dataType:'json',//数据类型
	}).done(function(d) { //成功
//		var $a = JSON.parse(d);
		var $goods=$(".banner");
		var $html='';
		console.log(d);
		$.each(d, function(index,value){
				$html+=`<li><img src="${value.url}" alt="" /></li>`
		});
		$goods.append($html);
	}).fail(function() { //失败

	})
})();
;(function() {
	$.ajax({
		url: 'http://127.0.0.1/project/php/brand.php?__hbt=1526367096344',
		type: 'get',
		dataType:'json',//数据类型
	}).done(function(d) { //成功
//		var $a = JSON.parse(d);
		var $goods=$(".brand_data");
		var $html='';
		$.each(d, function(index,value){
				$html+=`<li>
						<div class="brand-status">
							<a href="#" class="link-box">
								<div class="brand-pic">
									<img src="${value.url}">
									<div class="brand_time" data-etime="1526868000" style="display: block;">
                                        <p><span class="icon_time"></span>剩余&nbsp;<span class="brand-days"><em>5</em><i>天&nbsp;</i></span><span class="brand-hours"><em>13</em><i>时&nbsp;</i></span><span class="brand-minutes"><em>01</em><i>分&nbsp;</i></span><span class="brand-seconds"><em>17</em><i>秒</i></span></p>
                                        <div class="brand_time_bg"></div>
                                    </div>
								</div>
								<div class="card">
									<span class="discount discount1">
										<span>${value.hd}</span>
									</span>
									<span class="title" style="float: left;">${value.sale}</span>
								</div>
							</a>
						</div>
					</li>`
				});
		$goods.append($html);
	}).fail(function() { //失败

	})
})();

	
	
	
	//登录注册

$(function(){
	if(getCookie('UserName')){
		$('.login').hide();
		$('.admin').show().find('.wel').html('你好,'+getCookie('UserName'));
	}
	$('.admin a').on('click',function(){
		delCookie('UserName','',-1);
		$('.admin').hide();
		$('.login').show();
	});
});
	

	
	//轮播图
	$(function() {
    var index = 0;
    var timer = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".adType a").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(this).addClass("current").siblings().removeClass("current");
        $(".banner li").eq($(this).index()).css('opacity', 0).animate({
            'opacity': 1
        }, 300).siblings().css('opacity',0);
        $('.banner li').eq($(this).index()).siblings().not('.banner').css('opacity',0);
    }, function() {
        auto();
    });
    auto();
    function auto() {
        timer = setInterval(function() {
            index++;
            if (index >=3) {
                index = 0;
            }
            $(".adType a").eq(index).addClass("current").siblings().removeClass("current");
            $(".banner li").eq(index).css('opacity', 0).animate({
                'opacity': 1
            }, 300).siblings().css('opacity',0);
            
        }, 2000);
    }
});
//  $('#banner_list,.banner_arrow').hover(function(){
//      $('.banner_arrow').show();
//  },function(){
//      $('.banner_arrow').hide();
//  });

//  $('#banner_list,.banner_arrow').hover(function(){
//      $('.banner_arrow').show();
//  },function(){
//      $('.banner_arrow').hide();
//  });
//  $('.banner_arrow').hover(function(){
//      $('.arrow_prev,.arrow_next').css('background','rgba(0, 0, 0, 0.4)');
//  },function(){
//  	$('.arrow_prev,.arrow_next').css('background','rgba(0, 0, 0, 0.2)');
//  });

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

//回到底部
$('#J_backtop').hover(function(){
	$('#J_backtop').css('background','#FF464E');
},function(){
	$('#J_backtop').css('background','#444444');
})
$('#J_backtop').on('click',function(){
	$('html,body').animate({
		scrollTop:0
	});
});

;(function(){
	$(window).on('scroll',function(){
		var $h=$(window).scrollTop();
		if($h>=400){
			$('#J_backtop').css('visibility','visible');
		}else{
			$('#J_backtop').css('visibility','hidden');
		}
	})
})();
	

//楼梯
    	$(function(){
    		var $louti=$('#loutinav');
    		var $loutili=$('#loutinav ul li');
    		var $louceng=$('.louti');
    		$(window).on('scroll',function(){
    			var $st=$(window).scrollTop();
    			if($st>=400){
    				$louti.show();
    			}else{
    				$louti.hide();
    			}
    			$louceng.each(function(index,element){
    				var $top1=$louceng.eq(index).offset().top+200;
    				if($top1>$st){
    					$loutili.removeClass('active');
    					$loutili.eq(index).addClass('active');
    					return false;
    				}
    			});
    			
    		});
    		$loutili.not('.last').on('click',function(){
    			var $top=$louceng.eq($(this).index()).offset().top;
    			$('html,body').animate({
    				scrollTop:$top
    			})
    		});
    		
    		$('#loutinav ul li.last').on('click',function(){
    			$('html,body').animate({
    				scrollTop:0
    			});
    		});
    	});
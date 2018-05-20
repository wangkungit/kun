function createcart(sid,num){
	$.ajax({
	url:'http://127.0.0.1/project/php/details.php?__hbt=1526627373453',
	dataType:'json'
}).done(function(data) {
	var $html='';
		for(var i=0;i<data.length;i++) {
			if(sid == data[i].sid) {
				var $clone=$('.cang').clone(true);
				$clone.find('.dTmrnm').attr('src',data[i].url);
				$clone.find('.dTmrnm').attr('sid',data[i].sid);
				$clone.find('.fFbWQU').html(data[i].title);
				$clone.find('.gqzEPU').html(data[i].price);
				$clone.find('.eywEEl').html(num);
				console.log(data[i].price);
				//计算价格，每个商品的价格
				var $dj1=parseFloat($clone.find('.gqzEPU').html());
				console.log($dj1);
				$clone.find('.dQIiuS').html(($dj1*num).toFixed(2));
				$clone.css('display','block');
				$('.cobIRk').append($clone);
				kong();
				totalprice();

			}
		}
	});
}

function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}
}
//页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
if(getCookie('cartsid')&&getCookie('cartnum')){
	var s=getCookie('cartsid').split(',');
	var n=getCookie('cartnum').split(',');
	for(var i=0;i<s.length;i++){
		createcart(s[i],n[i]);
	}
}
//商品列表(cookie)不存在，购物车为空
kong();
function kong(){
	if(getCookie('cartsid')){
		$('.yuan').hide();
	}else{
		$('.yuan').show();
	}
}
//每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice(){//计算总价
	var total=0;//总价
	var countnum=0;//总数
	$('.cang').each(function(){
		total=parseFloat($(this).find('.dQIiuS').html());
		countnum=parseInt($(this).find('.eywEEl').html());
	});
	$('.jUfYqO').html('￥'+total.toFixed(2));
	$('.jZoxra').html('￥'+total.toFixed(2));
	$('.eRltkm').html(countnum);
}
//修改数量的操作
$('.jiKWSK').on('click',function(){
	var $count=$(this).parents('.cABebT').find('.eywEEl').html();
	$count++;
	if($count>=99){
		$count=99;
	}
	$(this).parents('.cABebT').find('.eywEEl').html($count);
	$(this).parents('.gdQmFd').find('.dQIiuS').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});

$('.jKWKYq').on('click',function(){
	var $count=$(this).parents('.cABebT').find('.eywEEl').html();
	$count--;
	if($count<=1){
		$count=1;
	}
	$(this).parents('.cABebT').find('.eywEEl').html($count);
	$(this).parents('.gdQmFd').find('.dQIiuS').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});
//计算数量改变后单个商品的价格
function singlegoodsprice(row){
	var $dj=parseFloat(row.parents('.gdQmFd').find('.gqzEPU').html());
	var $cnum=parseInt(row.parents('.gdQmFd').find('.eywEEl').html());
	return($dj*$cnum).toFixed(2);
}
//将改变后的数量的值存放到cookie
function setcookie(obj){
	cookieToArray();
	var $index=obj.find('.dTmrnm').attr('sid');
	numarr[sidarr.indexOf($index)]=obj.find('.eywEEl').html();
	addCookie('cartnum',numarr.toString(),7);
}
//删除cookie的函数
function delgoodslist(sid,sidarr){
	var index=-1;
	for(var i=0;i<sidarr.length;i++){
		if(sid==sidarr[i]){
			index=i;
		}
	}
	sidarr.splice(index,1);
	numarr.splice(index,1);
	addCookie('cartsid',sidarr.toString(),7);
	addCookie('cartnum',numarr.toString(),7);
}
//删除全部商品的函数
$('.ewFBmF').on('click',function(ev){
	cookieToArray();
	if(confirm('你确定要删除么？')){
		$(this).remove();
	}
	delgoodslist($(this).find('img').attr('sid'),sidarr);
	location.reload();
	totalprice();
});

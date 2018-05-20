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
	}else if($('.smallpic').height()-$('.smallscale').height() - 2){
		t=$('.smallpic').height()-$('.smallscale').height() - 2;
	}
	console.log(t);
	console.log(l);
	$('.smallscale').css('left',l+'px');
	$('.smallscale').css('top',t+'px');
	$('.bigpic').css('left',-bl*l+'px');
	$('.bigpic').css('top',-bl*t+'px');
})
$('.smallpic').mouseout(function(){
	$('.smallscale').css('visibility','hidden');
	$('.bigscale').css('visibility','hidden');
})
//$('.right .my').mouseover(function(){
//	$('.con1').css('display','block');
//	$(this).css('background','#fff');
//	$('.my span').removeClass('icon-xiaotuziCduan_').stop().addClass('icon-xiaotuziCduan_1')
//}).mouseout(function(){
//	$('.con1').css('display','none');
//	$(this).css('background','');
//	$('.my span').removeClass('icon-xiaotuziCduan_2').stop().addClass('icon-xiaotuziCduan_')
//})
function erji(lii,divv){
	$('.right').find(lii).mouseover(function(){
		$(divv).css('display','block');
		$(this).css('background','#fff');
		$(lii).find('span').removeClass('icon-xiaotuziCduan_').stop().addClass('icon-xiaotuziCduan_1');
	}).mouseout(function(){
		$(divv).css('display','none');
		$(this).css('background','');
		$(lii).find('span').removeClass('icon-xiaotuziCduan_1').stop().addClass('icon-xiaotuziCduan_');
	})
}
//我的淘宝
erji('.my','.con1');
//收藏夹
erji('.fav','.con2');
//手机版
erji('.phone','.con3');
//商家支持
erji('.sup','.con4');
//网站导航
erji('.navi','.con5');
//选项卡1
$('.lis li').mouseenter(function(){
	var index=$(this).index();
	$('.cont div').eq(index-1).addClass('show').siblings().removeClass('show');
}).mouseleave(function(){
	var index=$(this).index();
	$('.cont div').eq(index-1).removeClass('show')
})
//选项卡的内容
$('.cont div').mouseenter(function(){
	$(this).addClass('show').siblings().removeClass('show');
}).mouseleave(function(){
	$(this).removeClass('show')
})
//主要轮播图
var m=0;
function lunbo(){
	timer=setInterval(function(){
		m++;
		if(m>5)m=0;
		$('.img>div').eq(m).addClass('active').siblings().removeClass('active');
		$('.num>span').eq(m).addClass('on').siblings().removeClass('on');
	},2000)
}
lunbo();
$('.ban').mouseenter(function(){
	clearInterval(timer);
	$('.num span').mouseenter(function(){
		m=$(this).index();
		$('.img>div').eq(m).addClass('active').siblings().removeClass('active');
		$('.num>span').eq(m).addClass('on').siblings().removeClass('on');
	})
}).mouseleave(function(){
	lunbo();
})
//广告
$('.adver li').mouseover(function(){
	$(this).find('div').addClass('zhao');
}).mouseout(function(){
	$(this).find('div').removeClass('zhao');
})
//天猫超市选项卡
$('.tab li').mouseover(function(){
	var index=$(this).index();
	$(this).addClass('act').siblings().removeClass('act');
	$('.content>div').eq(index).addClass('ond').siblings().removeClass('ond');
})
var n=0;
setInterval(function(){
	n++;
	if(n>1)n=0;
//	console.log(n);
	$('.tab li').eq(n).addClass('act').siblings().removeClass('act');
	$('.content>div').eq(n).addClass('ond').siblings().removeClass('ond');
},1500)
//搜索框出现
$(window).scroll(function(){
	if($(this).scrollTop()>=1100){
		$('.box').css('display','block');
	}else{
		$('.box').css('display','none');
	}
})
//楼层点击
$('.floor li').click(function(){
	var index=$(this).index();
//	console.log(index);
	console.log($('.floor1').eq(index-1).offset().top);
	var top1=$('.floor1').eq(index-1).offset().top;
	$('html').animate({scrollTop:top1-55},500);
})
//楼层滚动
var heights=[];
$('.floor1').each(function(){
	heights.push($(this).offset().top);
})
//console.log(heights)
$(window).scroll(function(){
	var top2=$(window).scrollTop();
	var index;
	for(var i=0;i<heights.length;i++){
		if(top2>heights[i] && top2<heights[i+1]){
			index=i
			$('.floor li').eq(index).css('background','red').siblings('li').css('background','#666')
		}else if(top2>heights[heights.length-1] ){
			index=heights.length-1;
			$('.floor li').eq(index).css('background','red').siblings('li').css('background','#666'))
		}
	}
	
})

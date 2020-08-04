$(function(){
	var $slide = $('.slide');
	var $li = $('.slide_list li')
	var iLen = $li.length;
	var $points_con = $('.points');
	var $prev = $(".prev");
	var $next = $('.next');
	var timer = null;
	// 定义运动和离开幻灯片的索引值
	iNowli = 0;
	iNextli = 0;

	var ismove = false;
	
	$li.not(":first").css({'left':760});
	//循环根据幻灯片个数动态创建小圆点
	for(var i=0;i<iLen;i++)
	{
		var $sLi = $('<li>');
		if(i==0)
		{
			$sLi.addClass('active');
		}
		$sLi.appendTo($points_con);
	}
	var $points = $('.points li');

	$points.click(function(){
		iNowli = $(this).index();
		if(iNowli==iNextli)
		{
			return;
		}
		$(this).addClass('active').siblings().removeClass('active');
		move();
	})

	//点击向左键
	$prev.click(function(){
		if(ismove)
		{
			return;
		}
		ismove = true;
		iNowli--;
		move();
		$points.eq(iNowli).addClass('active').siblings().removeClass('active');
	})
	// 点击向后的按钮,切换幻灯片
	$next.click(function(){
		if(ismove)
		{
			return;
		}
		ismove = true;
		iNowli++;
		move();
		//move() 函数不能放下面的这条语句前面，会改变iNextli的值
		$points.eq(iNowli).addClass('active').siblings().removeClass('active');
	})

	//定时器，2s自动右移
	timer = setInterval(autoplay,2000);

	//鼠标移入，定时器停止
	$slide.mouseenter(function(){
		clearInterval(timer);
	})
	//鼠标移出，定时器开启
	$slide.mouseleave(function(){
		timer = setInterval(autoplay,2000);
	})

	//定时器函数
	function autoplay(){
		iNowli++;
		move();
		$points.eq(iNowli).addClass('active').siblings().removeClass('active');
	}

	//改变幻灯片图像移动的函数
	function move(){
		//第一张幻灯片往前
		if(iNowli<0){
			iNowli = iLen-1;
			iNextli = 0;
			$li.eq(iNowli).css({'left':-760});
			$li.eq(iNowli).stop().animate({'left':0});
			$li.eq(iNextli).stop().animate({'left':760},function(){
				ismove = false;
			});
			iNextli = iNowli;
			return;
		}
		//最后一张幻灯片往后
		if(iNowli>iLen-1)
		{
			iNowli = 0;
			iNextli = iLen - 1;
			$li.eq(iNowli).css({'left':760});
			$li.eq(iNowli).stop().animate({'left':0});
			$li.eq(iNextli).stop().animate({'left':-760},function(){
				ismove = false;
			});
			iNextli = iNowli;
			return;
		}

		if(iNowli>iNextli)
		{
			$li.eq(iNowli).css({'left':760});
			$li.eq(iNextli).stop().animate({'left':-760});
		}
		else
		{
			$li.eq(iNowli).css({'left':-760});
			$li.eq(iNextli).stop().animate({'left':760});
		}

		$li.eq(iNowli).stop().animate({'left':0},function(){
			ismove = false;
		});
		iNextli = iNowli;
	}
})
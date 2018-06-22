$(function(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	var nowpage=0;
	//获取屏幕的宽高
	$(".content").width(width);
	$(".content").height(4*height);
	//将内容框的宽度设置为屏幕宽度，高度由于是四个页面，所以4*屏幕高
	$(".page").width(width);
	$(".page").height(height);
	
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingercount){
			
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage>3){
				nowpage=3;
			}
			if(nowpage<0){
				nowpage=0;
			}
			if(nowpage==2){
				$(".page3-etitle").fadeIn(2000);
				$(".page3-lastbustitle").fadeIn(3000)
				$(".page3-bus").animate({left:"-100%"},{duration:2000})
				$(".page3-lastbusavatar").animate({right:"50%"},{duration:3000,complete:function(){
					$(".page3-bus").fadeOut("slow");
					$(".page3-lastbusstation").fadeOut("slow");
					$(".page3-etitle").fadeOut("slow");
					$(".age3-lastbusavatar").fadeOut("slow");
					$(".page3-lastbustitle").fadeOut("slow",function(){
						$(".page3-wall").fadeIn("slow");
						$(".page3-people").fadeIn("slow",function(){
							$(".page3-txt").animate({width:"37%"},{duration:400,complete:function(){
								$(".page3-space").animate({width:"27%"},{duration:400})
							}})
						})
					});
					//场景2动画开始
		
				}})
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
				$(".page2-farm").fadeIn(800,function(){
					$(".page2-it").fadeIn(800)
				})
			}
			}})
			
		}
	})
	
	//animate({要做的动画效果}，{duration：运行的时间，完成时要做的事情})
	
	$(".page1-building").fadeIn(800,function(){
		$(".page1-flight").animate({width:"73%",height:"26%"},{duration:800})
	})
	//飞机淡进淡出效果动画
})
//$(document).ready(function(){
	
//})等文档完成后在执行js代码两种写法一直

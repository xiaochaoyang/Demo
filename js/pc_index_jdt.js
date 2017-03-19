//焦点图 图片自动替换滑动门***************************************************************************
var switchtabtotal = 4;
function switchtab(d){
	for(var i=0;i<switchtabtotal;i++){
		if(d==i){
			$(".dq").animate({left:String(i*80)+'px'});
			$("#tab_label_"+i).addClass("on");

			$("#tab_cont_"+i).animate({opacity: 1},1000);
		}else{
			$("#tab_label_"+i).removeClass("on");
			$("#tab_cont_"+i).css("z-index","auto");
			$("#tab_cont_"+i).animate({opacity: 0},1000);
		}
	}
}
//false停止自动轮换
var isPoll = true;
function setPoll(v){
  isPoll=v;
}
function ControlsetPoll(moutag){
	$(moutag).mouseover(function(){
		setPoll(false);
	}).mouseout(function(){
		setPoll(true);
	});
}
//循环函数
var pollVar = 1;//从1开始
function pollPlay(){
  if(isPoll){
    switchtab(pollVar%switchtabtotal);
	pollVar++;
  }
}
//li放上去，执行某函数,&&停止自动轮换
function tab_head_liover(){
	var t=$("#tab_head li");
	t.mouseover(function(){		
		setPoll(false);
		for(var i=0;i<t.length;i++){
			if(t[i] != this){
				setPoll(true);
			}else{
				switchtab(i);
			}
		}
    });
	t.parent().mouseleave(function(){
		setPoll(true);
    });
}
//DOM结构绘制完毕后就执行
$(document).ready(function(){
	setInterval("pollPlay()",5000);//焦点图 自动轮换
	ControlsetPoll("#tab_hd");//放上去，停止自动轮换
	tab_head_liover();//li放上去，执行某函数,&&停止自动轮换
});

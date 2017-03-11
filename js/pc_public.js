//回顶部
function gototop(){
	scrollTo(0,0);
}
//到页底
function gotobottom(){
	window.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollHeight);
}
//滚动元素的滚动条时 显示回顶部 或 到页底链接 &&模拟滚动条
window.onscroll = function () {
	// 页面卷去的高度
	if(document.documentElement&&document.documentElement.scrollTop){
		var scrollTop=document.documentElement.scrollTop;
	}else if(document.body){
		var scrollTop=document.body.scrollTop;
	}
	// 取窗口可视范围的高度
	if(document.body.clientHeight&&document.documentElement.clientHeight){
		var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
	}else{
		var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
	}
    //取文档内容实际高度
    var docheight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
	//显示回顶部 或 到页底链接
	if(scrollTop + clientHeight/2 < docheight/2){
		$('.gotobottom').show();
		$('.gototop').hide();
	}else{
		$('.gotobottom').hide();
		$('.gototop').show();
	}
}
//导航
function navigation(){
	if($(".navigation a").hasClass("here")){
		var x=$(".navigation a.here").position().left;
	}else{
		var x=0;
	}
	$(".nav_dq").css("left",x+"px");
	var s=$(".navigation li");
	s.mouseover(function(){
		for(var i=0;i<s.length;i++){
			if(s[i] == this){
				$(".nav_dq").animate({left:String(i*120)+'px'},'fast');
				$(".navigation a" + ":eq("+i+")").css("color","#fff");
			}else{
				$(".navigation a" + ":eq("+i+")").css("color","#323232");
			}
		}
    });
	s.parent().mouseleave(function(){
		$(".nav_dq").animate({left:x+"px"},'fast');
		$(".navigation a").removeAttr("style");
    });	
}
//鼠标点击or放上去 执行滑动门选项卡
function head_tab(taga,tagb,mouevent){
	var t=$(taga);
	t.bind(mouevent,function(){
		for(var i=0;i<t.length;i++){
			if(t[i] == this){
				$(taga + ":eq("+i+")").addClass("on");
				$(tagb + ":eq("+i+")").show();
			}else{
				$(taga + ":eq("+i+")").removeClass("on");
				$(tagb + ":eq("+i+")").hide();
			}
		}
	});
}
//DOM结构绘制完毕后就执行
$(document).ready(function(){
	navigation();// 导航用
	head_tab(".d_head li",".d_body .bdnei","click");//活动详情页面，暂时没用到
	head_tab(".lo_head li",".lo_body .bdnei","click");//活动详情页面，暂时没用到
});



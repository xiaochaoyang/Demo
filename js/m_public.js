//手机端
var is_android = navigator.userAgent.toLowerCase().indexOf('android') != -1;
var is_ios = navigator.userAgent.toLowerCase().indexOf('iphone') != -1
var is_weixin = navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;
var _ww = (window.screen.availWidth * (window.devicePixelRatio || 1.5) / 1);
if (is_android && _ww < 720) {
  document.writeln('<meta name="viewport" content="width=750px,target-densitydpi=device-dpi,user-scalable=yes,initial-scale=0.5,maximum-scale=1.0" />');
}else{
  document.writeln('<meta name="viewport" content="width=750px,target-densitydpi=device-dpi,user-scalable=no,maximum-scale=1.0" />');
}
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
	//固定 顶部导航条
	if(scrollTop > 80 && $('.classifyOut').length>0){
		$(".classifyOut").addClass("guding");
	}else{
		$(".classifyOut").removeClass("guding");
	}
}
//向上滚动************************************
function gundong(moutag){
	var $this = $(moutag);
	var scrollTimer;
	$this.hover(function(){
		clearInterval(scrollTimer);
	},function(){
		scrollTimer = setInterval(function(){scrollNews($this);}, 5000 );
	}).trigger("mouseout");
}
function scrollNews(obj){
	var self = obj.find("ul:first");
	var Lheight = self.find("li:first").height();
	self.animate({ "margin-top" : -Lheight +"px" },'slow', function(){
		self.css({"margin-top":"0px"}).find("li:first").appendTo(self);
	})
} 
$(function(){
	gundong(".recommend")//爸妈推荐 向上滚动
});
//隐藏一级分类************************************
function hideTabbar(){
	$(".classifyOut").removeClass("classifyOutOpen");	
}
//展开一级分类************************************
function showTabbar(){
	$(".classifyOut").addClass("classifyOutOpen");	
}
//鼠标点击or放上去 执行滑动门选项卡************************************
function head_tab(taga,tagb,mouevent){
	var t=$(taga);
	t.bind(mouevent,function(){
		for(var i=0;i<t.length;i++){
			if(t[i] == this){
				$(taga + ":eq("+i+")").addClass("on")
				$(tagb + ":eq("+i+")").show();
			}else{
				$(taga + ":eq("+i+")").removeClass("on")
				$(tagb + ":eq("+i+")").hide();
			}
		}
	});
}
//DOM结构绘制完毕后就执行
$(document).ready(function(){
	head_tab(".d_head li",".d_body .bdnei","click");//活动详情 评价 留言 滑动门
});



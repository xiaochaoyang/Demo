$(document).ready(function(){

	$(".jdt_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;
	
	$(".jdt_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".jdt_con a"),
		counter : function (e){
			$(".jdt_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".jdt_image").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".jdt_image").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".jdt_image a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".jdt_visual").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".jdt_image").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	
});
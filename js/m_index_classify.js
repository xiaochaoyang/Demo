$(document).ready(function(){

	$dragBln = false;
	
	$(".classify_uout").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btnify_prev"),
		btn_next : $("#btnify_next"),
		paging : $(".classify_con a"),
		counter : function (e){
			$(".classify_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".classify_uout").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".classify_uout").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".classify_uout a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btnify_next").click();
	}, 5000);
	
	$(".classify_box").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btnify_next").click();
		},5000);
	});
	
	$(".classify_uout").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btnify_next").click();
		}, 5000);
	});
	
});
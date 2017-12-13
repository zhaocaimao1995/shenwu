//右侧点击图片显示二维码
var $sidenav=$(".sidenav");
$(".sidenav .close").on("click",function(){
	$sidenav.animate({right:-170},function(){
		$sidenav.addClass("showban");
		$sidenav.animate({right:0});
	})
})
$sidenav.on("click",function(){
	if($(this).hasClass("showban")){
		$sidenav.animate({right:-170},function(){
			$sidenav.removeClass("showban");
			$sidenav.animate({right:0});
		})
	}	
})

;(function(){
	//热点图数据
	var hot_data = [];
	$("#hotpic").find('a').each(function(i) {
		hot_data.push({'src':$(this).find("img").attr("src"),
      'href':$(this).attr("rel")+"url="+$(this).attr("href"),
      'target':'_blank',title:$(this).attr("title")});
	});
	//调用
	$('#hotpic').imgChange(
		{
			data:hot_data,
			title:true,
			titleTop:8,
			titleLeft:20,
			titleSize:16,
			titleFont:"微软雅黑,黑体,Arial",
			titleColor:"#E3E3E3",
			width:"700",
			height:"300",
			bg:true,
			btnColor:'#DB6D4C',
			btnColorBlur:"#fff",
			btnFontColor:'#fff',
			btnOpacity:1,
			btnTop:20,
			// btnAlign:"center",
			btnWidth:10,
			btnHeight:10,
			btnMargin:10,
			btnBorderRadius:10,
			btnText:false
		});
/*行程，活动点击更换*/
	var $tab = $(".indextab").find("span");
	$tab.on("click",function(){
		var t = $(this);
		if(t.hasClass("on")){
			return false;
		}
		$tab.removeClass("on");
		t.addClass("on");
		var inx = $tab.index(this);
		console.log("inx",inx)
		$(".indextab1").stop(true,true).animate({left:"-"+inx*360});
		$(".indexevents .title a")
      .attr("href",['calendar/','calendar/?type=1'][inx]);
	});
})();
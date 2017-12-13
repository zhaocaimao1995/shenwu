//轮播图动画/
/*(()=>{
	var $imgs=$(".content>.hotPic>.banner_img>a"),$inds=$(".indicators ul");
	var $banner=$imgs.parent();
	//console.log($banner);
	//console.log($imgs,$inds);
	var LIWIDTH=310,n=0;
	$banner.css("width",LIWIDTH*$imgs.length+"px");
	$inds.children().first().addClass("indshover");
	function moveOnce(){
		n++;
		var left=LIWIDTH*n;
		//console.log(left);
		$banner.css("left",-left+"px");
		$inds.children().last().removeClass("indshover");
		//console.log($inds.children().last());
		if(n==$imgs.length-1){
			$inds.children().first().addClass("indshover");
			setTimeout(()=>{
				$banner.css("transition","");
				$banner.css("left",0);
				n=0;
				setTimeout(()=>{
					$banner.css("transition","");
				},100)
			},1000)
		}else{
			$inds.children().next().addClass("indshover").siblings().removeClass("indshover");
		}
	}
	setInterval(moveOnce,2300);

*/
function setHotImage(){

	// 获取热点图片/轮换
	var hot_data = [];
	$("div.hotPic").find('a').each(function(i) {
		hot_data.push({'src':$(this).find("img").attr("src"), 'href':$(this).attr("rel")+"url="+$(this).attr("href"), 'target':'_blank',title:$(this).attr("title")});
	});

	$('div.hotPic').imgChange({
		data:hot_data,
		bg:false,   // 是否背景色
		title:false,  // 是否有标题
		desc:false,   // 是否有描述
		btnColor:'#42319B',        // 按钮颜色1
		btnOpacity:.5,          // 未选中按钮透明度
		btnFont:'Verdana',        // 按钮文本字体
		btnFontSize:12,         // 按钮文字大小(注意:Chrome有默认最小字号的限制)
		btnFontColor:'#fff',      // 按钮文本颜色
		btnText:false,         // 是否显示文本
		btnWidth:30,          // 按钮宽
		btnHeight:8,         // 按钮高
		btnMargin:5,          // 按钮间距
		btnTop:20,                    // 按钮上边距
		btnBorder:'0px solid #F00',
		width:310,            // DOM宽, 不设定则从DOM读取
		height:270,           // DOM高, 不设定则从DOM读取
		playTime: 3000,
		animateStyle:'o'// 动画效果:'o':渐显 'x':横向滚动 'y':纵向滚动 'show':原地收缩伸展 'show-x':横向收缩伸展 'show-y':纵向收缩伸展' none':无动画
	});

}
setHotImage();

//每日一图动态
(()=>{
	"use strict";
	$(".stab a:eq(1)").on("mouseenter",function(){
		$(this).addClass("on").prev("a").removeClass("on");
		$(".topic ul:eq(0)").hide();
		$(".topic ul:eq(1)").show();
	});
	$(".stab a:eq(0)").on("mouseenter",function(){
		$(this).addClass("on").next("a").removeClass("on");
		$(".topic ul:eq(1)").hide();
		$(".topic ul:eq(0)").show();
	});
})();
/*返回顶部按钮*/
if($(".fixed").length){
	var gototop=$(".fixed"),$docu=$(document),
		gototopfn=function(){
			if($docu.scrollTop()<250){
				gototop.fadeOut();
			}else{
				gototop.fadeIn();
			}
		},
		gototop_timer;
	$(window).scroll(function(){
		clearTimeout(gototop_timer);
		gototop_timer=setTimeout(gototopfn,500);
	});
	gototop.on({
		"click":function(){
			$("html,body").animate({
				scrollTop:0
			},{
				"duration":"fast",
				"complete":function(){
					gototop.delay(200).fadeOut();
				}
			});
			return false;
		}
	});
	gototopfn();
}
//gamedata索引展开
var $gsColl=$("div.gmnav1con").find("span[class^='gs']");//查找所有span标题
/*function clickMenu(id){
	$gsColl.eq($gsColl.index($("span.gs"+id))).trigger("click");//模拟提交
}*/
$gsColl.on({
	"click":function(){
		var spanTit=$(this),
				pane=spanTit.next("div.option_pane").find("div[id^=slideU1K_]"),
			  isHidden=!(spanTit.hasClass("span_tit"));
		$("div.option_pane").removeClass("option_pane_on");
		$gsColl.removeClass("span_tit");
		$("div[id^=slideU1K_]").hide();
		if(isHidden){
			spanTit.next("div.option_pane").addClass("option_pane_on");
			spanTit.addClass("span_tit");
			pane.show();
		}
	}
})
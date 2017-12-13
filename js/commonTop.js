/*顶部小图与大图的显示隐藏*/
var $spic=$("div.topSmallPic"),bpic=$("div.topBigPic");
$spic.on("mouseenter",function(){
	$(this).hide();
	if(bpic.attr("relsrc")){
		bpic.attr("src",bpic.attr("relsrc"));
		bpic.attr("relsrc","");
	}
	$("div.topBigPic").show();
});
$("div.topBigPic").on("mouseleave",function(){
	$(this).hide();
	$spic.show();
});
/*招聘*/
$(".topNavHr").on("mouseenter",function(){
	$(".topBar_inner").addClass("topNavHrLinkShow");
});

$(".topNavHr").on("mouseleave",function(){
	$(".topBar_inner").removeClass("topNavHrLinkShow");
});
/*游戏目录*/
$(".topbar_game_content ul").on("mouseenter","li",function(){
	var p = $(this).closest("ul");
	p.find(".current").removeClass("current");
	$(this).addClass("current");
});

$(".topNavShowList").on("mouseenter",function(){
	//initList();
	$(".topBar_inner").addClass("topbar_show_gamelist");
});

var shouldHide = true;

$(".topNavShowList").on("mouseleave",function(){
	setTimeout(function(){
		if(shouldHide){
			hideList();
		}
	},200);

});

function hideList(){
	shouldHide = true;
	$(".topBar_inner").removeClass("topbar_show_gamelist");
}

$(".topbar_game_list").on("mouseenter",function(){
	shouldHide = false;
});

$(".topbar_game_list").on("mouseleave",function(){
	hideList();
});

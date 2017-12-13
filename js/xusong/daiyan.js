$(function(){
  //延迟放置active
  setTimeout(function(){
    $(".section").eq(0).addClass("active")
  },500);
  //调用fullPage
  $("#page-wrap").fullpage({
    scrollingSpeed:800,
    verticalCentered:!1,
    navigation:!0,
    resize:!0,
    fitToSection:!0,
    navigationPosition:"right",
    navigationTooltips:["青嵩岁月","无双","朋友","守候","青春","快乐"],
    afterLoad:function(anchorLink,index){
      if(index>=6){
        $(".page-arrow").addClass("reback-arrow")
      }else if($(".page-arrow").hasClass("reback-arrow")){
        $(".page-arrow").removeClass("reback-arrow")
      }
      $("#cur-page").html(index);
      $(".page-arrow").attr("cur-floor",index);
      if(index>1){
        $(".global-logo").show();
      }else{
        $(".global-logo").hide();
      }
    },
    onLeave:function(index,direction){
      var prevEle=$(".section").eq(index-1);
      setTimeout(()=>{
        "use strict";
        prevEle.find(".init-desc").show();
        prevEle.find(".whole-desc").hide();
        prevEle.find(".info-box").css("width",355);
        prevEle.find(".expand-detail").removeClass("expand").html("展开阅读");
      },500)
      if(index==2||index==1){
        $(".global-logo").hide();
      }
    }
  });
  //对象U
  /*
  var U={};
  U.addCookie=function(name,cookievalue,time){
    if(name!=""&&cookievalue!=""&&time!=""){
      if(isNaN(time)==false){
        var expires=new Date();
        expires.setTime(expires.getTime()+time*1e3);
        document.cookie=name+"="+escape(cookievalue)+
          ";expires="+expires.toGMTString();
      }
    }
  };
  U.getCookie=function(cookieName){
    var cookieString=document.cookie;
    var start=cookieString.indexOf(cookieName+"="),
      end=cookieString.indexOf(";",start);
    if(start==-1){return null;}
    start+=cookieName.length+1;
    if(end==-1){
      return unescape(cookieString.substring(start));
    }
    return unescape(cookieString.substring(start,end));
  };
  */
  //对象G
  var G={
    pageNav:$("#fp-nav li"),
    //dataUrl
    codeTimer:"",
    //页数
    setNav:function(){
      "use strict";
      $(".page-arrow").attr("cur-floor",1);
      $("#total-page").html(this.pageNav.length);
    },
    //单击事件,向下移动一页,并更改页数
    clickArrow:function(){
      "use strict";
      $(".page-arrow").click(function(){
        var nextFloor=parseInt($(this).attr("cur-floor"))+1;
        if(nextFloor>6){nextFloor=5;}
        $.fn.fullpage.moveTo(nextFloor);
      });
    },
    //展开阅读部分
    expendDetail:function(){
      "use strict";
      $(".expand-detail").click(function(){
        var t=$(this),parEle=t.closest("div",".detail-info"),expendWid;
        if($(window).width()<=1450){
          expendWid=700;
        }else{
          expendWid=950;
        }
        $(".whole-desc").css("width",expendWid);
        if(!t.hasClass("expend")){
          //parEle.addClass("cur-read");
          parEle.find(".init-desc").hide();
          parEle.find(".whole-desc").show();
          parEle.find(".info-box").animate({
            width:expendWid
          },500,function () {
            t.addClass("expend").html("收起阅读")
          });
        }else{
          parEle.find(".info-box").animate({
            width:355
          },500,function () {
            //parEle.removeClass("cur-read");
            parEle.find(".whole-desc").hide();
            parEle.find(".init-desc").show();
            t.removeClass("expend").html("展开阅读")
          });
        }
      });
    },
    //根据窗口大小设置css
    resizeSet:function(){
      "use strict";
      var winHigh=$(window).height();
      if(winHigh<=870){
        if(winHigh<740){
          $(".theme-slogan").css({width:184,height:140,top:"26%"});
          $(".flag-img").css({width:50,right:28,bottom:-15});
          $(".detail-info").css({top:"50%",marginTop:30});
          $(".info-box").css({padding:10,fontSize:12,lineHeight:"20px"});
        }else{
          $(".theme-slogan").css({width:304,height:230,top:"23%"});
          $(".flag-img").css({width:80,right:45,bottom:-20});
          $(".detail-info").css({top:"50%",marginTop:60});
          $(".info-box").css({padding:20,fontSize:14,lineHeight:"30px"});
        }
      }else{
        $(".theme-slogan").css({width:397,height:301,top:"22%"});
        $(".flag-img").css({width:115,right:60,bottom:-30});
        $(".detail-info").css({top:"62%",margin:0});
        $(".info-box").css({padding:20,fontSize:14,lineHeight:"30px"});
      }
    },
    winResize:function(){
      "use strict";
      $(window).resize(function(){
        G.resizeSet();
      });
    },
    //分享....
    //二维码
    showCode:function () {
      var vsCode=$(".swsy-vscode");
      $(".swsy-down").click(function(){
        "use strict";
        console.log(1);
        if(!vsCode.hasClass("show")){
          vsCode.fadeIn(300).addClass("show");
        }else{
          vsCode.removeClass("show").hide();
        }
        return false;
      });
      $(document).click(function(){
        "use strict";
        if(vsCode.hasClass("show")){
          vsCode.hide().removeClass("show");
        }
      });
    },
    //背景音乐,视频...
    mediaSet:function(){
      var audioObj=$("#audio")[0];
      var videoObj=$("#video")[0];
      $(".bg-music").on("click",function(e){
        e.preventDefault();
        console.log($(this));
        if($(this).hasClass("close")){
          $(this).removeClass("close");
            audioObj.pause();
        }else{
          audioObj.play();
          $(this).addClass("close");
          console.log(1);
        }
      });
      $(".bg-music").trigger("click");
      $(".video-tag").on("click",function(){
        "use strict";
        audioObj.pause();
        $(".video-pop").show(100)
        videoObj.play();
      });
      $(".close-video").on("click",function(){
        videoObj.pause();
        $(".video-pop").hide();
        audioObj.play();
      });
    },
    init:function(){
      "use strict";
      var t=this;
      t.setNav();
      t.winResize();
      t.clickArrow();
      t.expendDetail();
      t.resizeSet();
      t.showCode();
      t.mediaSet();
    }
  };
  G.init();
  //第一页旋转logo,鼠标悬停,显示文字
  $(".video-tag").hover(function(){
    hoTimer=setTimeout(function(){
      $(".video-title").animate({width:140},150);},200);
  },function(){clearTimeout(hoTimer);
    $(".video-title").animate({width:0},150);
  });
});

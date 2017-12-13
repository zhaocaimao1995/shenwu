$(function(){

  setTimeout(function(){
    $(".section").eq(0).addClass("active");
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
      $(".page-arrow").addClass("reback-arrow");
    }else if($(".page-arrow").hasClass("reback-arrow")){
      $(".page-arrow").removeClass("reback-arrow");
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
    setTimeout(function(){
      prevEle.find(".init-desc").show();
      prevEle.find(".whole-desc").hide();
      prevEle.find(".info-box").css("width",355);
      prevEle.find(".expand-detail")
        .removeClass("expand")
        .html("展开阅读");
    },500);
    if(index==2||index==1){
      $(".global-logo").hide();
    }
  }
});
//声明一个对象u，保存Cookie  ，不知道干什么用
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
//声明一个对象G，保存每一个函数对象
  var G={
    pageNav:$("#fp-nav li"),
    dataUrl:location.href.indexOf("duoyi")!==-1?
      "//w4.duoyi.com":"//10.32.7.59:8094",
    codeTimer:"",
    //页数下面向下的箭头
    setNav:function(){
      $(".page-arrow").attr("cur-floor",1);
      $("#total-page").html(this.pageNav.length);
    },
    //单击事件，向下移动一页，并更改页数
    cliclArrow:function(){
      $(".page-arrow").click(function(){
        var nextFloor=parseInt($(this).attr("cur-floor"))+1;
        if(nextFloor>6){nextFloor=5;}
        $.fn.fullpage.moveTo(nextFloor);
      });
    },
    //展开阅读部分
    expandDetail:function(){
      $(".expand-detail").click(function(){
        var t=$(this),
          parEle=t.closest("div",".detail-info"),
          expandWid;
        if($(window).width()<=1450){
          expandWid=700;
        }else{
          expandWid=950;
        }
        $(".whole-desc").css("width",expandWid);
        if(!t.hasClass("expand")){
          parEle.addClass("cur-read");
          parEle.find(".init-desc").hide();
          parEle.find(".whole-desc").show();
          parEle.find(".info-box").animate({
            width:expandWid
          },500,function(){
            t.addClass("expand").html("收起阅读");
          });
        }else{
          parEle.find(".info-box").animate({
            width:355
          },500,function(){
            parEle.removeClass("cur-read");
            parEle.find(".whole-desc").hide();
            parEle.find(".init-desc").show();
            t.removeClass("expand").html("展开阅读");
          });
        }
      });
    },
    //根据窗口高度设置不同的属性
    resizeSet:function(){
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
        $(".flag-img").css({width:115,bottom:-30,right:60});
        $(".detail-info").css({top:"62%",margin:0});
        $(".info-box").css({padding:20,fontSize:14,lineHeight:"30px"});
      }
    },
    winResize:function(){
      $(window).resize(function(){
        G.resizeSet();//调用上一个函数
      });
    },
    //分享功能
    shareSet:function(){
      var protocal="https:"==location.protocol?"https:":"http:";
      $(".share_1").dyShare({
        link:location.href,
        title:"青嵩岁月，神武2相随！歌手许嵩正式成为《神武2》全品牌代言人，传递神武式的快乐！",
        desc:"青嵩岁月，神武2相随！歌手许嵩正式成为《神武2》全品牌代言人，传递神武式的快乐！",
        pics:"",beforeClick:function(cmd,cfg){
          if(cmd=="tsina"){
            cfg.pics="http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_01.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_02.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_03.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_03.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_04.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_05.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_06.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_07.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_08.jpg||http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_09.jpg";
          }else{
            cfg.pics="http://image.duoyi.com/sw/act/daiyan/xusong/img/share_pic/share_pic_05.jpg";
          }
          return cfg;
        },
        afterClick:function(cmd){
          dy_trace(["share","click","专题页xusong_"+cmd+"_分享"]);
        }
      });
    },
    //神武手游下方下载二维码
    showCode:function(){
      var vsCode=$(".swsy-vscode");
      $(".swsy-down").click(function(){//单击元素显示
        if(!vsCode.hasClass("show")){
          vsCode.fadeIn(300).addClass("show");
        }else{
          vsCode.removeClass("show").hide();
        }
        return false;
      });
      $(document).click(function(){//单击页面隐藏
        if(vsCode.hasClass("show")){
          vsCode.hide().removeClass("show");
        }
      });
    },
    //背景音乐，视频播放
    mediaSet:function(){
      var audioObj;
      //把audio动态创建到页面上
      function playMusic(){
        var audioNode='<div class=audioDiv><audio controls=controls autoplay="autoplay" loop="true" id=audio><source src="http://image.duoyi.com/sw/act/daiyan/xusong/img/media/bg_music.mp3" type=audio/mp3><embed id=musicplay src="http://image.duoyi.com/sw/act/daiyan/xusong/img/media/bg_music.mp3" autostart=true loop="true" Repeat="true"></audio></div>';
        $(".audio").html(audioNode);
      }

      //浏览器下载
      function IE8down(){
        var UA=navigator.userAgent,isIE=UA.indexOf("MSIE")>-1,
          v=isIE?/\d+/.exec(UA.split(";")[1]):"no ie";return v<9;
      }
      //视频块
      function randerVideo(videoSrc){
        var videoPoster=videoSrc.replace(".mp4",".jpg"),
          videoNode='<object width="800" height="450" data="//image.duoyi.com/Resource/play/flvplayer.swf" type="application/x-shockwave-flash"><param name="src" value="//image.duoyi.com/Resource/play/flvplayer.swf" /><param value="always" name="allowscriptaccess"><param value="transparent" name="wmode"><param value="true" name="allowfullscreen"><param value="//image.duoyi.com/Resource/play/flvplayer.swf" name="movie"><param value="auto=true&amp;vdo='+videoSrc+"&amp;pic="+videoPoster+'" name="flashvars"><div style="margin:0;padding:0;font-size:14px;line-height:20px;">您的浏览器不支持在线播放视频，您可以选择：<br>&#9672; 安装<a href="//www.adobe.com/go/getflash" target="_blank">flash</a>或者安装最新浏览器：<a href="//www.google.cn/intl/zh-CN/chrome/" target="_blank">Chrome</a>、<a href="//windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank">IE</a>；<br>&#9672;<a href="'+videoSrc+'" class="down-link" target="_blank">下载视频</a>到本机观看;</div></object>';
        $(".play-area").html(videoNode);//视频块
        $(".video-pop").fadeIn(300);
      }
      //单击播放音乐
      $(".bg-music").on("click",function(e){
        e.preventDefault();
        if(!$(this).hasClass("close")){
          $(this).addClass("close");
          if(!$(this).data("isFirst")){
            playMusic();
            audioObj=IE8down()?$("#musicplay")[0]:$("#audio")[0];
            $(this).data("isFirst",true);
          }else{
            audioObj.play();
          }
        }else{
          audioObj.pause();
          $(this).removeClass("close");
        }
        return false;
      });
      $(".bg-music").trigger("click");
      //视频控件tag，悬停显示文字
      $(".video-tag").hover(function(){
        hoTimer=setTimeout(function(){
          $(".video-title").animate({width:140},150);
        },200);
      },
        function(){
          clearTimeout(hoTimer);
          $(".video-title").animate({width:0},150);
        });
      //单击事件
      $(".video-tag").on("click",function(){
        var videoSrc=$(this).attr("data-source");
        audioObj.pause();//停止音乐
        randerVideo(videoSrc);//调用上一个视频函数
      });
      $(".close-video").click(function(){
        $(".video-pop").hide();
        $(".play-area").html("");
        if(!$(".bg-music").hasClass("close")){
          audioObj.pause();
          $(".bg-music").removeClass("close");
        }else{
          audioObj.play();
          $(".bg-music").addClass("close");
        }
      });
    },
    //初始化函数
    init:function(){
      var t=this;//this-->??
      t.setNav();
      t.winResize();
      t.cliclArrow();
      t.expandDetail();
      t.resizeSet();
      t.shareSet();
      t.mediaSet();
      t.showCode();
    }
  };
  G.init();//调用init
});
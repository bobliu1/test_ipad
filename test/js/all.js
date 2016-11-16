/* 
* @Author: Marte
* @Date:   2016-06-03 11:05:53
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-23 16:02:07
*/
    
    // 机构
    var jigou,jigouz;
     var reg5=/^[0-9]{8}$/;
     $(".jigou-r").children('input').on('input',function(e){ 
        jigou=$(this).val();
        jigouz=reg5.test(jigou);
       
        if(jigouz==true){
            $(".shen1-d").css({background:"#3b9bff",color:"#ffffff"}).attr({href:"shen1.html"});    
            console.log($(this)[0].value);
            $(".jgm").css({display:'block'});       
        }
    });
    $(".jigou-r").children('input').blur(function(e){ 
        if(jigouz==false){
            $(".jigou-r input")[0].value="";
            $('.jigou-r input').attr("placeholder","请输入编号")
            $(".shen1-d").css({background:"#78baff",color:"#abd4ff"}).attr({href:"#"})
             $(".jgm").css({display:'none'});
        }
    });
    /*显示隐藏*/
        function hs(){
            var Uname = $("#uname").val().length;
            if (Uname>0) {
                $("#close_one").show();
            } else{
                $("#close_one").hide();
            }
        }
        //获取短信验证码
    var validCode=true;
    $(".msgs").click (function  () {
        var time=60;
        var code=$(this);
        if (validCode) {
            validCode=false;
            code.addClass("msgs1");
        var t=setInterval(function (){
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
            code.html("重新获取验证码");
                validCode=true;
            code.removeClass("msgs1");

            }
        },1000)
        }
    });
        //倒计时--弹框
        var countdown=60; 
        function settime2(obj) { 
            if (countdown == 0) {    
                $(obj).html("获取验证码"); 
                $(".bud").css({display:"none"});
                countdown = 60; 
                return;
            } else { 
                $(obj).html("重新发送(" + countdown + ")");
                $(".bud").css({display:"block"});
                countdown--;
                if(countdown==-1){
                    return;
                } 
            } 
            setTimeout(function() { 
                settime2(obj) }
                ,1000) 
        }
        $(".mark").click(function(){
            countdown=0;
            $(".jiao-tank-br").html("获取验证码");
            $(".bud").css({display:"none"});
        })
        $(".tank").click(function(){
                $(".zhezhao").show();
                $(".mask").show();
            });
            //获取页面高度
            var dh = $(document).height();
            $(".mask").css("height",dh);
            //设置显示隐藏以及图片向上向下
            $(".mx").click(function(){
                if($(".text_mx").is(":hidden")){
                    $(".text_mx").show();
                    $(".cjq").attr("src","img/jiantous.png");
                }else{
                    $(".text_mx").hide();
                    $(".cjq").attr("src","img/jiantoux.png");
                }
            });
            $(".tank1").click(function(){
                $(".zhezhao").show();
                $(".mask").show();
            });
            $(".quer1").click(function(){
                $(this).css({display:'none'});
                $(".quer2").css({display:'block'});
                $(".tiq-h").css({display:'none'});
                $(".tiq-c").css({display:'block'});
            });
            $(".quer2").click(function(){
                $(".zhezhao").hide();
                $(".mask").hide();
            });
            $(".quer").click(function(){
                $(".zhezhao").hide();
                $(".mask").hide();
            });
            $(".mask").click(function(){
                $(".zhezhao").hide();
                $(".mask").hide();
                $("body").css({"height":"100%","overflow":"visible"});
                $("html").css({"height":"100%","overflow":"visible"});
                 countdown=0;
                $(".jiao-tank-br").html("获取验证码");
                $(".bud").css({display:"none"});
            });


            /*清空*/
            function qktwo(){
            $("#myphone_two").val("");
        }
    
    /*验证验证码不为空*/
    $("#btn").click(function(){
        var myphone_twos= $("#myphone_two").val();
        var reg=/^\d{4}$/;
        if (!reg.test(myphone_twos)) {
            $("#err_yanzhengma").html("请输入4位数字");
            return false;
        }
        if(myphone_twos==""){
            $("#err_yanzhengma").html("验证码不为空");
        }
    });
        function loginState(){
            var ophone_two = $("#myphone_two").val().length;
            if (ophone_two>0) {
                $("#close_two_two").show();
                $("#btn").css("background","#3B9BFF").attr({href:"jigou.html"});
                $("#btn_two").css("background","#3B9BFF");
            } else{
                $("#close_two_two").hide();
                $("#btn").css("background","#78baff").attr({href:"#"});;
                $("#btn_two").css("background","#78baff");
            }
        }
        /*显示隐藏*/
        function hs(){
            var Uname = $("#uname").val().length;
            if (Uname>0) {
                $("#close_one").show();
            } else{
                $("#close_one").hide();
            }
        }
        $("#mya").click(function(){
    //  验证姓名
    var username=$("#uname").val();
        if(username=="") 
            {  
                $("#err").html("姓名不能为空")
                $("#uname").focus(); 
                return false; 
            }
        //  验证电话    
        var myphones= $("#myphone").val();
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
         if (reg.test(myphones)) {
//            alert("号码正确~");
              return true;
         }else{
              $("#err_phone").html("手机号输入不正确");
              return false;
         }
    });
  	var check=1;
  		$("#checkeds").change(function(){
            if($("#checkeds").prop("checked")){
                check=1;
            }else{
               check=0;
            }
          })
  		
  		var fl=0;
        function loginState2(){
            var ophone = $("#myphone").val().length;
           if (ophone>0) {
           	fl=1;
           } else{
           	fl=0;
           }
        }
         
        setInterval(function(){
        	if (fl==1&&check=="1") {
                $("#close_two").show();
                $("#mya").css("background","#3B9BFF").attr({href:"loginTwo.html"});
            } else{
                $("#close_two").hide();
                $("#mya").css("background","#78baff").attr({href:"#"});
            }
        },100)
        
        //点击x清空
        function qk1(obj){
            $("#uname").val("");
            $(obj).hide()
        }
        function qk2(obj){
            $("#myphone").val("");
            $(obj).hide()
        }

        // 提前还款
        $(".tank1").click(function(){
                $(".zhezhao").show();
                $(".mask").show();
            });
            $(".quer1").click(function(){
                $(this).css({display:'none'});
                $(".quer2").css({display:'block'});
                $(".tiq-h").css({display:'none'});
                $(".tiq-c").css({display:'block'});
            });
            $(".quer2").click(function(){
                $(".zhezhao").hide();
                $(".mask").hide();
            });



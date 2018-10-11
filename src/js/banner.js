

;(function($){
    "use strict";
    
    $.fn.banner = function(options){
//		创建一个字典量,用作当前效果的变量空间
        this.LOCAL = {
//			默认参数的处理
            time:options.time ? options.time : 2000,
            moveTime:options.moveTime ? options.moveTime : 100,
//			在小标操作的过程总是要走的那种图片的索引
//			在左右按钮中是要进来的索引
            iNow:0,
//			在左右按钮的功能中，是要走的索引
            iPrev:options.items.length-1,
            listOnOff:false,
        }
        
        var that = this;
        
//		判断是否有可点击的小标
        if(options.list != undefined && options.list.length > 0 && typeof options.list == "object"){
            this.LOCAL.listOnOff = true;
//			添加点击事件
            options.list.children("li").on("click",function(){
//				点击的时候有三种情况：
//				点击的比当前大
                if($(this).index() > that.LOCAL.iNow){
                    that.LOCAL.move($(this).index(),1)
                }
//				点击的比当前小
                if($(this).index() < that.LOCAL.iNow){
                    that.LOCAL.move($(this).index(),-1)
                }
//				点击的就是当前
//				if($(this).index() == that.LOCAL.iNow){}
                options.list.children("li").removeClass("active").eq($(this).index()).addClass("active")
//				点击之后,把当前设置成点击的index
                that.LOCAL.iNow = $(this).index();
            })
        }
        this.LOCAL.move = function(index,type){
            options.items.eq(that.LOCAL.iNow).css({
                left:0
            }).stop().animate({
                left:-options.items.eq(0).width() * type
            },that.LOCAL.moveTime).end().eq(index).css({
                left:options.items.eq(0).width() * type
            }).stop().animate({
                left:0
            },that.LOCAL.moveTime)
        }
        
//		判断是否有左右按钮
        if(options.left != undefined && options.left.length > 0 && typeof options.left == "object" && options.right != undefined && options.right.length > 0 && typeof options.right == "object"){
            
            options.left.on("click",function(){
                if(that.LOCAL.iNow == 0){
                    that.LOCAL.iNow = options.items.length-1;
                    that.LOCAL.iPrev = 0;
                }else{
                    that.LOCAL.iNow--;
                    that.LOCAL.iPrev = that.LOCAL.iNow + 1
                }
                that.LOCAL.btnMove(-1)
            })
            options.right.on("click",function(){
                if(that.LOCAL.iNow == options.items.length-1){
                    that.LOCAL.iNow = 0;
                    that.LOCAL.iPrev = options.items.length-1;
                }else{
                    that.LOCAL.iNow++
                    that.LOCAL.iPrev = that.LOCAL.iNow-1
                }
                that.LOCAL.btnMove(1)
            })
        }
        
        this.LOCAL.btnMove = function(type){
            options.items.eq(that.LOCAL.iPrev).css({
                left:0
            }).stop().animate({
                left:-options.items.eq(0).width() * type
            },that.LOCAL.moveTime).end().eq(that.LOCAL.iNow).css({
                left:options.items.eq(0).width() * type
            }).stop().animate({
                left:0
            },that.LOCAL.moveTime)
            
            that.LOCAL.listOnOff ? options.list.children("li").removeClass("active").eq(that.LOCAL.iNow).addClass("active") : "";
        }
        
//		判断自动播放的属性,如果没传或者是true都是播放
        if(options.autoPlay == undefined || options.autoPlay === true){
            this.LOCAL.timer = setInterval(function(){
                options.right.trigger("click")
            },that.LOCAL.time)
            
            this.hover(function(){
                clearInterval(that.LOCAL.timer)
            },function(){
                that.LOCAL.timer = setInterval(function(){
                    options.right.trigger("click")
                },that.LOCAL.time)
            })
        }
    }
})(jQuery);
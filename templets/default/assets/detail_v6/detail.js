/**
 * 详细页面
 * update by xiaoqiulin on 2015/03/24
 */
$(function(){
    special_hover();
    /**
     * 点击换一换按钮执行更新
     */
     var tjPage=0;
     var $oultj = $('#hot_recommend');
    /* 动态判断标题高度 */
    $.each($oultj.find('h3'), function(i, item){
        var $h3 = $(item),
            $desc = $h3.next();
        if($h3.height() > 30){
            $desc.css({
                'height': '40px',
                'overflow': 'hidden'
            });
        } else {
            $desc.css({
                'height': '60px',
                'overflow': 'hidden'
            });
        }
    });     
    $('#change_btn_bot').on('click',change_hotTj=function(){
        var _this = $(this);
        _this.off('click');
        tjPage++;
        if(tjPage >= 4){
            tjPage = 0;
        }
        var H_tj = $oultj.parent().height();       
        $oultj.animate({"top":-(tjPage*H_tj)+"px"},function(){
            _this.on('click',change_hotTj);
        });
        _this.attr('href','#rmtj_title');
    });

    /**
     * 热门推荐
     * @param url
     */
    function hot_recommend(url){
        // 分享代码模板
        var bdshareStr = '<div class="J-bdsharebuttonbox-wrap"><div class="J-bdsharebuttonbox bdsharebuttonbox clearfix bdshare-button-style0-16" data-bd-bind="1452492956252"><span class="fl">分享</span><a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;" title="分享到新浪微博"></a><a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;" title="分享到QQ空间"></a><a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;" title="分享到腾讯微博"></a><a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;" title="分享到微信"></a></div></div>';
        $.getJSON(url,function(data){
            var _html='';
            var $section=$('#hot_recommend');
            $.each(getArrayItems(data,5),function(i,item){
                var itemUrl = item.url,
                    itemImg = item.img,
                    itemTopic = item.topic,
                    itemTime = item.time,
                    itemFrom = item.from,
                    itemDesc = $.trim(item.desc);
                // 组合成新闻列表
                _html = '<li class="J-has-share listNews-item-s1 clearfix"><div class="img fl"><a href="'+itemUrl+'?btype=detail&amp;subtype=hottj&amp;idx='+i+'&amp;ishot=0&xx=1" target="_blank"><img class="animation" src="' + img_domain + itemImg + '" alt="'+itemTopic+'" width="180" height="135"></a></div><div class="info"><h3><a class="J-share-a" href="'+itemUrl+'?btype=detail&subtype=hottj&idx='+i+'&ishot=0&xx=1" target="_blank">'+item.topic+'</a></h3><p class="desc">'+ itemDesc +'</p><p class="from">'+itemTime+'&nbsp;&nbsp;&nbsp;&nbsp;来源：'+itemFrom+'</p>'+bdshareStr+'</div></li>';
                $section.append(_html);
            });
            /* 动态判断标题高度 */
            $.each($section.find('h3'), function(i, item){
                var $h3 = $(item),
                    $desc = $h3.next();
                if($h3.height() > 30){
                    $desc.css({
                        'height': '40px',
                        'overflow': 'hidden'
                    });
                } else {
                    $desc.css({
                        'height': '60px',
                        'overflow': 'hidden'
                    });
                }
            });
        });
    }

    //从一个给定的数组arr中,随机返回num个不重复项
    function getArrayItems(arr, num) {
        //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
        var temp_array = new Array();
        for (var index in arr) {
            temp_array.push(arr[index]);
        }
        //取出的数值项,保存在此数组
        var return_array = new Array();
        for (var i = 0; i<num; i++) {
            //判断如果数组还有可以取出的元素,以防下标越界
            if (temp_array.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*temp_array.length);
                //将此随机索引的对应的数组元素值复制出来
                return_array[i] = temp_array[arrIndex];
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                temp_array.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        return return_array;
    }    

    /**
     * 特别推荐
     * @param url
     */
    function special_hover(){
        var $specialLinks = $("#special_more_item").children('li');
        $specialLinks.hover(function(){
            $specialLinks.children('a').removeClass('active');
            $(this).children('a').addClass('active');
        });
    }

    /**
     * 百度分享
     */
    (function(){
        /**
         * 百度分享按钮的事件委托绑定
         */
        $('body').on('mouseover', '.J-bdshare', function(){
            var $this = $(this),
                $parent = $this.parents('.J-has-share').eq(0),
                $shareA = $parent.find('.J-share-a').eq(0);
            if(!$parent || $parent.length == 0){
                var $contentContainer = $('.J-contain_detail_cnt'),
                    $imgs = $contentContainer.find('img'),
                    shImg = ($imgs && $imgs.length) ? $imgs.eq(0).attr('src') : '';
                global_share_title = J_bdshare_topic;
                global_share_url = window.location.href;
                global_share_img = shImg;
            } else {
                // 给全局变量 分享链接、图片、文字赋值
                global_share_title = $shareA.text();
                global_share_url = window.location.protocol + '//' + window.location.host + $shareA.attr('href');
                global_share_img = $parent.find('img').eq(0).attr('src');
            }
        });

        // 百度分享配置
        window._bd_share_config = {
            common: {
                //bdText: "东方头条 - 你想看的新闻都在这。",	// 分享标题
                //bdDesc: "东方头条 - 你想看的新闻都在这。",	// 分享描述
                //bdUrl: "http://mini.eastday.com", 			// 分享url
                //bdPic: '', 									// 分享图片
                bdMiniList: ['tsina', 'qzone', 'tqq', 'weixin'],
                onBeforeClick: setShareConfig
            },
            share: {
                bdSize: 16
            }
        };
        // 分享js
        with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
        /**
         * 设置分享参数
         * @param {[type]} cmd    [description]
         * @param {[type]} config [description]
         */
        function setShareConfig(cmd, config) {
            var text_laiyu = '（来自：东方头条）';
            if( cmd == 'tsina' ){
                text_laiyu = '（来自：@东方头条新闻）';
            }
            if (global_share_title) {
                config.bdText = global_share_title + text_laiyu;
            }
            if (global_share_url) {
                config.bdUrl = global_share_url;
            }
            if (global_share_img) {
                config.bdPic = global_share_img;
            }
            return config;
        }
    })();

    /**
     * 二维码 + 右侧固定功能实现
     */
    (function(){
        //二维码
        $('.icon_cnt_dtl').find('a').each(function(){
            var _this=$(this);
            _this.hover(function(){
                _this.children().show();
            },function(){
                _this.children().hide();
            });
        });

        /* 右侧固定功能实现 start */
        setTimeout(function(){
            var $contentRight=$('.detail_right_cnt');
            // console.log($contentRight);
            var ot = $contentRight.offset().top,
                contentHeight = $contentRight.outerHeight(),
                ff = true;
            $(window).on('scroll', function(event) {
                event.preventDefault();
                var  windowHeight = $(window).height();
                var body_scrollTop= document.documentElement.scrollTop || document.body.scrollTop;
                if(contentHeight + ot + 180 <= windowHeight + body_scrollTop){
                    if(ff){
                        $contentRight.addClass('content-r-fixed');
                        ff = false;
                    }
                }else{
                    if(!ff){
                        $contentRight.removeClass('content-r-fixed');
                        ff = true;
                    }
                }

            });
            $(window).on('resize', function(event) {
                event.preventDefault();
                var windowWidth = $(window).width();
                if(windowWidth <= 1002){
                    $contentRight.removeClass('content-r-fixed');
                }
            });
            /* 右侧固定功能实现 end */
        },3000);
    })();

    /* 导航栏[更多]功能实现 */
    (function(){
        $('#J_more').hover(function(){
            $(this).addClass('active');
            $(this).children('.J-more-link').show();
        }, function(){
            $(this).removeClass('active');
            $(this).children('.J-more-link').hide();
        });

    })();
    /* 底部猜你喜欢新闻弹窗 */
    (function(){
        /*
            <div id='guessLikecnt' class="guessLikecnt">
                <div class="guessLike">
                    <div class="guessLike_title">猜你喜欢</div>
                    <a id='close_gueslike' href="javascript:;" class="close_gueslike"></a>
                    <ul class="guslikenews">
                        <li><a href="" target="_blank"><img class='animation' src="/assets/images/rec_img3_0.png" alt=""><span>我是胡歌，我怕谁</span></a></li>
                    </ul>
                </div>
            </div>
        */        

        var uidUrl = 'http://tjpc.dfshurufa.com/getpcdata/getuid'; // 获取UID接口
        var recId = uk_for_tbtj, // URL ID
            param = null,
            qid = null,
            softtype='toutiao',
            softname='DFTT',
            uid = null;     // 用户唯一ID        
        // 获取uid
        if(!$.cookie('mylist')){
            uidAjax(uidUrl);
        }else{
            uid = $.parseJSON($.cookie('mylist')).uid;
        }  
        // 获取渠道ID
        qid = getCooName();                  
        param = qid + '\t' + uid + '\t' + softtype + '\t' + softname;
        var recUrl = 'http://ttpc.dfshurufa.com/jsonpc/newsrec02';// 获取推荐新闻接口
        var $body = $('body');
        $(window).on('scroll', function(event) {
            event.preventDefault();
            var  windowHeight = $(window).height();
            var body_scrollTop= document.documentElement.scrollTop || document.body.scrollTop;
            var totalheight = parseFloat(windowHeight) + parseFloat(body_scrollTop);//浏览器的高度加上滚动条的高度
            if($(document).height() <=  totalheight){
                if($body.hasClass('active')){
                    $('#guessLikecnt').fadeIn();
                }else{
                    recAjax(recUrl);
                }
            }else{
                if($body.hasClass('active')){
                    $('#guessLikecnt').fadeOut();
                }
            }

        });  
        $body.on('click','#close_gueslike',function(){
            $('#guessLikecnt').remove();
        });    
        
            /**
             * 获取推荐数据
             * @param  {[type]} url [description]
             * @return {[type]}     [description]
             */
            function recAjax(url){
                $.ajax({
                    type: 'get',
                    url: url,
                    timeout: 6000,
                    data: {
                        recId: encodeURI(recId),
                        param: encodeURI(param)
                    },
                    dataType:'jsonp',
                    jsonp: 'jsonpcallback',
                    beforeSend: function () {},
                    success: function(data){
                        var h_widnow = $(window).width();
                        var li_H = 158.333;//数据列表li的宽度
                        var num = Math.floor( (h_widnow-25)/li_H );
                        var len = data.data.length;
                        var cnt_H,temp_num;
                        if(len > num){
                            cnt_H = num*li_H;
                            temp_num = num;
                        }else{
                            cnt_H = len*li_H;
                            temp_num = len;
                        }                        
                        if(len > 0){
                           data_domt(data.data,temp_num,li_H);
                        }                     
                    },
                    complete:function () {
                    },
                    error:function(jqXHR,textStatus,errrorThrown){
                        console.error(textStatus);
                        console.error(jqXHR);
                    }
                });
            } 
            /*
            **弹窗猜你喜欢新闻创建dom
            **
            */
            function data_domt(data,temp_num,li_H){
                var _html = '';
                $.each(data,function(i,item){
                    if(i<temp_num){
                        _html+='<li><a href="'+item.url+'?btype=detail&subtype=cnxh&idx='+i+'&ishot=0" target="_blank"  title="'+item.topic+'" ><img class="animation" src="'+item.miniimg[0].src+'" title="'+item.topic+'" alt="'+item.topic+'"><span>'+item.topic+'</span></a></li>';
                    }
                });
                var $gusscnt = $('<div id="guessLikecnt" class="guessLikecnt">'),
                    $gussbd =$('<div class="guessLike" style="width:'+ temp_num*li_H +'px;">'),
                    $gusstitle =$('<div class="guessLike_title">猜你喜欢</div>'),
                    $close =$('<a id="close_gueslike" href="javascript:;" class="close_gueslike"></a>'),
                    $gussul =$('<ul class="guslikenews">');
                    $gusscnt.append($gussbd);
                    $gussbd.append($gusstitle);
                    $gussbd.append($close);
                    $gussbd.append($gussul);
                    $gussul.html(_html);
                    $('body').append($gusscnt).addClass('active');     
            }   
            /**
             * 获取UID
             * @param  {[type]} url [description]
             * @return {[type]}     [description]
             */
            function uidAjax(url){
                $.ajax({
                    type: 'get',
                    url: url,
                    dataType: 'jsonp',
                    jsonp: 'jsonpcallback',
                    timeout: 6000,
                    success: function(data){
                        //数据传递验证成功后执行的操作
                        uid=data.uid;
                        setCookie(uid);
                    },
                    error: function(jqXHR,textStatus){
                        console.error(textStatus);
                        console.error(jqXHR);
                    }
                });
            }  
            /**
             * 存入cookie
             * @param {[type]} uid [description]
             */
            function setCookie(uid){
                //设置cookie
                var info = '{"uid":"' + uid + '","softtype":"'+ softtype +'","softname":"'+ softname +'"}';
                $.cookie('mylist',info,{expires:3000,path:'/'});
            }  
            /**
             * 获取渠道ID
             * @return {[type]} [description]
             */
            function getCooName(){
                var cooName = String(coo_name);
                if(cooName=='' || cooName == 'null'){
                    cooName = 'null';
                }else{
                    if(cooName.indexOf('=') != -1){
                        cooName = cooName.split('=')[1];
                    }
                }
                return cooName;
            }                                           
    })();    
    
});
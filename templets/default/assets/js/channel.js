// 频道页面
// 国内频道页
$(function(){
	var _flag_new=0;//实时新闻列表页标识位
	coo_name = String(coo_name);
	// 获取uid，存入cookie
	  var uid_url='http://tjpc.dfshurufa.com/getpcdata/getuid';//请求UID 接口	
	  if(coo_name=='' || coo_name == 'null'){
	  	coo_name='null';
	  }else{
		    if(coo_name.indexOf('=') != -1){
		    	// coo_name=coo_name.substr(4);
		    	coo_name=coo_name.split('=')[1];
		    }	  	
	  }  
	  var qid=coo_name;
	  var uid='';
	  var softtype='toutiao';
	  var softname='DFTT';
	  var page_k=1;//实时接口分页数
	  var readhistory='';//访问的最后三篇文章id
	  var page_id='';
		if(window.localStorage){
			// supports localStorage
			if(!localStorage.getItem('pageId')){
				readhistory = 'null,null,null';//文章ID
			}else{
				page_id = $.parseJSON( localStorage.getItem('pageId') );
				readhistory = String(page_id.pid0) + ',' + String(page_id.pid1) + ',' + String(page_id.pid2);
			}
		}else{
			if(!$.cookie('pageId')){
				readhistory = 'null,null,null';
			}else{	
				page_id = $.parseJSON( $.cookie('pageId') );
				readhistory = String(page_id.pid0) + ',' + String(page_id.pid1) + ',' + String(page_id.pid2);
			}		
		}
		

		if(!$.cookie('mylist')){
			uid_ajax(uid_url);
		}else{
			uid=$.parseJSON($.cookie('mylist')).uid;
			softtype=$.parseJSON($.cookie('mylist')).softtype;
			softname=$.parseJSON($.cookie('mylist')).softname;
		}
	     function Mycookie(uid){
	     	//设置cookie
			var info = '{"uid":"' + uid + '","softtype":"'+ softtype +'","softname":"'+ softname +'"}';
			$.cookie('mylist',info,{expires:3000,path:'/'});

	     }
	     //获取UID
		function uid_ajax(url){
		      $.ajax({
					type:'get',
					url:url,
					dataType:'jsonp',
					jsonp: 'jsonpcallback',
					timeout:6000,
					beforeSend:function () {
						// 加载提示
						// $('#ajax_tips').show();
					},                                                     
		            success:function(data){
		               //数据传递验证成功后执行的操作  
		                   uid=data.uid;   
		                   Mycookie(uid);           
		            },
		            complete:function () {		            
		            },                                        
		            error:function(jqXHR,textStatus,errrorThrown){if(errrorThrown=='Not Found'){console.log('Your requested address is not found.');}else if(textStatus=='timeout'){console.log('Verify the request timeout, please refresh the page and try again');}else{console.log('Your requested address is not found.');}}
		    });
		}	  
	var param=encodeURI(qid+"\t"+uid+"\t"+softtype+"\t"+softname+"\t"+page_k);
	var url_news_timely= channel_list_url+"?type="+type+"&param="+param+"&readhistory="+readhistory;
	//var url_news_timely= "http://123.59.62.164/jsonpc/refresh?type="+type+"&param="+param+"&readhistory="+readhistory;//测试服
	var imgtab_url='../../json/channel/lunbo_'+channel+'.json';//图片切换url
	var startkey=null;
	var $oulTimeLy = $('#listNewsTimeLy');//左侧列表UL容器
	var url_news_timely_0="";//动态URL
	if(_flag_new==0){
		_flag_new==1;
		news_timely(url_news_timely);//左侧新闻列表实时接口载入加载
	}
	$(window).on('scroll',function(){
		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());//浏览器的高度加上滚动条的高度
		if($(document).height() <= totalheight + 200){
			if(_flag_new==0){
				_flag_new=1;
				url_news_timely_0= channel_list_next_url+"?type="+type+"&startkey="+startkey+"&newsnum=20&isnew=1&param="+param+"&readhistory="+readhistory;
				//url_news_timely_0= "http://123.59.62.164/jsonpc/next?type="+type+"&startkey="+startkey+"&newsnum=20&isnew=1&param="+param+"&readhistory="+readhistory;//测试服
				if(startkey!=0){
					news_timely(url_news_timely_0);//左侧新闻列表实时接口载入加载
				}else{
					$('#ajax_tips').html('没有更多数据了…').show();
				}
			}
		}
	});

    /**
     * 获取频道页新闻列表实时接口
     * @param url
     */
	function news_timely(url){
		$.ajax({
			type:'get',
			url:url,
			dataType:'jsonp',
			jsonp: 'jsonpcallback',
			timeout:6000,
			beforeSend:function () {
				// 加载提示
				$('#ajax_tips').show();
			},
			success:function(data){
				//数据传递验证成功后执行的操作
				page_k++;
				param=encodeURI(qid+"\t"+uid+"\t"+softtype+"\t"+softname+"\t"+page_k);
				$.each(data.data,function(i,item){
					var j=i+20*(page_k-2),
                        imgLength = item.miniimg_size, // 图片数量
                        imgArr = item.miniimg,  // 图片数组
                        url = item.url,         // url
                        source = item.source,   // 来源
                        hotNews = item.hotnews, // 是否热新闻 0：非热新闻
                        title = item.topic,     // 标题
                        brief = $.trim(item.brief),     // 摘要
                        dateTime = item.date,   // 新闻发表时间
                        bdShareStr = '<div class="J-bdsharebuttonbox-wrap"><div class="J-bdsharebuttonbox bdsharebuttonbox clearfix"><span class="fl">分享</span><a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;"></a><a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;"></a><a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;"></a><a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;"></a></div></div>',
                        $li = null;

                    if(imgLength < 3){ // 单图样式
                        $li = $('<li class="J-has-share listNews-item-s1 clearfix">' +
                            '<div class="img fl">' +
                                '<a href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" target="_blank"><img class="animation" src="' + imgArr[0].src + '" alt="' + title + '" width="180" height="135"></a>' +
                            '</div><div class="info">' +
                                '<h3><a class="J-share-a" href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" target="_blank">' + title + '</a></h3>' +
                                '<p class="desc">' + brief + '...</p><p class="from">' + dateTime + ' 来源：' + source + '</p>' + bdShareStr + '</div>' +
                        '</li>');
                        if(hotNews != 0){
                            $li.append('<i class="hot">热</i>');
                        }
                        $oulTimeLy.append($li);
                    } else {            // 多图样式
                        $li = $('<li class="J-has-share listNews-item-s2 clearfix">' +
                            '<h3><a class="J-share-a" href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" target="_blank">' + title + '</a></h3>' +
                            '<p class="img-wrap clearfix">' +
                            '<a class="fl" href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" title="' + title + '" target="_blank"><img class="animation" src="' + imgArr[0].src + '" alt="" width="200" height="150"></a>' +
                            '<a class="fl" href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" title="' + title + '" target="_blank"><img class="animation" src="' + imgArr[1].src + '" alt="" width="200" height="150"></a>' +
                            '<a class="fl" href="/a/' + url + '?btype=channel&subtype=newsTimely&idx=' + j +'&ishot=' + hotNews + '" title="' + title + '" target="_blank"><img class="animation" src="' + imgArr[2].src + '" alt="" width="200" height="150"></a>' +
                            '</p>' +
                            '<p class="from">' + dateTime + ' 来源：' + source + '</p>' + bdShareStr +
                        '</li>');
                        if(hotNews != 0){
                            var $h3 = $li.children('h3');
                            $h3.append('<i class="hot">热</i>');
                            $h3.css('padding-left', '45px');
                        }
                        $oulTimeLy.append($li);
                    }
					if(data.data.length >=20){
						if(i%19==0 & i != 0){
							// 每页第20条数据的时候，取出下一页的参数
							startkey=item.rowkey;
						}
					}else{
						startkey=0;
					}
				});
				if( $oulTimeLy.hasClass('taobao') ){
					$oulTimeLy.removeClass('taobao').children('li').eq( Math.floor(Math.random()*20) + (page_k-2)*20 ).css('border-top','1px solid #E9E9E9').before('<div style="width:655px;height:90px;padding:20px 0px 20px 15px;"><iframe src="/frames/bd_gg.html" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></div>');
				}else{
					$oulTimeLy.addClass('taobao').children('li').eq( Math.floor(Math.random()*20) + (page_k-2)*20 ).css('border-top','1px solid #E9E9E9').before('<div style="width:670px;height:203px;padding:20px 0px;"><iframe src="/frames/tb_gg.html" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></div>');
				}
			// console.log('number:',Math.floor(Math.random()*20) + (page_k-2)*20);
			},
			complete:function () {
				$('#ajax_tips').hide();
				_flag_new=0;
			},
			error:function(jqXHR,textStatus,errrorThrown){
				console.error(textStatus + '-' + errrorThrown);
			}
		});
	}

	/* 百度分享 */
	(function(){
        /**
         * 百度分享按钮的事件委托绑定
         */
        $('body').on('mouseover', '.J-bdshare', function(){
            var $this = $(this),
                $parent = $this.parents('.J-has-share').eq(0),
                $shareA = $parent.find('.J-share-a').eq(0);
            // 给全局变量 分享链接、图片、文字赋值
            global_share_url = window.location.protocol + '//' + window.location.host + $shareA.attr('href');
            global_share_title = $shareA.text();
            global_share_img = $parent.find('img').eq(0).attr('src');
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

	/* 二维码 */
	(function(){
		$('.icon_cnt_dtl').find('a').each(function(){
			var _this=$(this);
			_this.hover(function(){
				_this.children().show();
			},function(){
				_this.children().hide();
			});
		});
	})();

	/* 右侧固定功能实现 start */
	setTimeout(function(){
		var $contentRight=$('#J_channel_right_sidebar');
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

});




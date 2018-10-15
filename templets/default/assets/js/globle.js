$(function(){
	//global_sider 全局侧边栏
	(function(){
		var topbtn = $('#gotop_btn'),
			$shouCang = $('#J_shoucang');	// 收藏
		$shouCang.hover(function(){
			$(this).addClass('active');
			$(this).next().show();
		}, function(){
			$(this).removeClass('active');
			$(this).next().hide();
		});
		//绑定页面滚动事件
		$(window).bind('scroll',function(){
			var len=$(this).scrollTop();
			if(len>=100){
				//显示回到顶部按钮
				$('.goto_top').show();
			}else{
				//影藏回到顶部按钮
				$('.goto_top').hide();
			}
		});
		//顶部
		topbtn.on('click', function(){
			$("html, body").filter(':not(:animated)').animate({
				scrollTop: 0
			});
		});
	})();

	(function(){
		// 获取uid，存入cookie
		var recommendtype='-1';//是否是推荐新闻默认-1
		var uid_url='http://tjpc.dfshurufa.com/getpcdata/getuid';//请求UID 接口
		var getData_url='http://pclog.dftoutiao.com/getpcdata/data';//请求传递数据接口修改地址01月17日
		var getOnlineData_url='http://tjpc.dfshurufa.com/pconline/pconline';//请求传递online数据接口
		var flag_cooke=0;
		var u_id='';//访客uid
		var soft_type='toutiao';
		var soft_name='DFTT';
		var OSType=detectOS();//操作系统
		var browserType=explorerType();//浏览器
		var _vbb='0.5.1';//版本号
		var wayPath=String(coo_name);//渠道来源
		var from='';//来源（备选参数）
		var idx=''//新闻链接位置
		var ishot='';//是否热新闻
		var btype=''//大类
		var subtype=''//子类
		var to=window.location.host+window.location.pathname;//当前url
		var fr_url=document.referrer;//来源
		if(fr_url=='' || fr_url == 'null'){
			fr_url='null';
		}else{
			fr_url=fr_url.split("?");
			fr_url=String(fr_url[0]);
			if( fr_url.indexOf('sm.cn') != -1){
				$.cookie('search_qid','smcn',{expires:1,path:'/'});
			}
			if( fr_url.indexOf('baidu.com') != -1 ){
				$.cookie('search_qid','baiducom',{expires:1,path:'/'});
			}
		}
		from=fr_url;
		var temp = window.location.search; //获取url中"?"符后的字串
		if ( temp.indexOf("?") != -1 && String(GetRequest(temp).btype) != 'undefined' ){
			btype=GetRequest(temp).btype;
			subtype=GetRequest(temp).subtype;
			idx=GetRequest(temp).idx;
			ishot=GetRequest(temp).ishot;
		}else{
			btype='null';
			subtype='null'
			idx='null';//没传参时的情况下
			ishot=0;
		}
		if(wayPath == 'null' || wayPath== ''){
			//推广渠道优先原则，如果推广渠道没有的情况下 种的$.cookie('search_qid')存在则代表是从搜索过来的
			if( $.cookie('search_qid') ){
				wayPath = $.cookie('search_qid');
			}else{
				wayPath == 'null';
			}
		}else{
			if(wayPath.indexOf('=') != -1){
				wayPath=wayPath.split('=')[1];
			}
		}
		if(!$.cookie('mylist')){
			uid_ajax(uid_url,0);
		}else{
			u_id=$.parseJSON($.cookie('mylist')).uid;
			getData_ajax(getData_url);//请求传递数据,wayPath\newstype全局变量qid
		}
		//10秒定时去请求传online数据
		setInterval(function(){
			if(!$.cookie('mylist')){
				uid_ajax(uid_url,1);
			} else {
				u_id=$.parseJSON($.cookie('mylist')).uid;
				getOnline_ajax(getOnlineData_url);
			}
		},10000);
		function Mycookie(uid){
			//设置cookie
			var info = '{"uid":"' + uid + '","softtype":"'+ soft_type +'","softname":"'+ soft_name +'"}';
			$.cookie('mylist',info,{expires:3000,path:'/'});
		}
		//获取UID
		function uid_ajax(url,gotype){
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
					u_id=data.uid;
					Mycookie(u_id);
					flag_cooke=1;
				},
				complete:function () {
					if(flag_cooke==1){
						if(gotype==0){
							//gotype为0代表日志请求否则代表online接口请求
							getData_ajax(getData_url);//请求传递数据,wayPath\newstype全局变量qid
						}else{
							getOnline_ajax(getOnlineData_url);
						}
					}
				},
				error:function(jqXHR,textStatus,errrorThrown){if(errrorThrown=='Not Found'){console.log('Your requested address is not found.');}else if(textStatus=='timeout'){console.log('Verify the request timeout, please refresh the page and try again');}else{console.log('Your requested address is not found.');}}
			});
		}
		//请求传递数据
		function getData_ajax(url){
			var strPath = String(window.location.pathname);
			if( strPath.indexOf('/a/') != -1 ){
				//是否是推荐新闻的详细页是就赋值recommendtype
				var temp = window.location.search; //获取url中"?"符后的字串
				if (temp.indexOf("?") != -1) {
					if( String(GetRequest(temp).recommendtype) != 'undefined' ){
						recommendtype=GetRequest(temp).recommendtype;
						from=String(window.location.host)+"/a/"+String(GetRequest(temp).uk)+".html";
					}
				}
			}
			var param=wayPath+"\t"+u_id+"\t"+soft_type+"\t"+soft_name+"\t"+newstype+"\t"+from+"\t"+to+"\t"+btype+"\t"+subtype+"\t"+idx+"\t"+ishot+"\t"+fr_url+"\t"+_vbb+"\t"+OSType+"\t"+browserType+"\t"+recommendtype;
			$.ajax({
				type:'get',
				url:url+'?param='+encodeURI(param),
				dataType:'jsonp',
				jsonp: 'jsonpcallback',
				timeout:6000,
				beforeSend:function () {
					// 加载提示
					// $('#ajax_tips').show();
				},
				success:function(data){
					//数据传递验证成功后执行的操作
					// console.log(url);
				},
				complete:function () {
				},
				error:function(jqXHR,textStatus,errrorThrown){if(errrorThrown=='Not Found'){console.log('Your requested address is not found.');}else if(textStatus=='timeout'){console.log('Verify the request timeout, please refresh the page and try again');}else{console.log('Your requested address is not found.');}}
			});
		}
		//请求传递online数据
		function getOnline_ajax(url){
			var setIntervalTime=10;
			var paramOnline=wayPath+"\t"+u_id+"\t"+soft_type+"\t"+soft_name+"\t"+newstype+"\t"+to+"\t"+ishot+"\t"+_vbb+"\t"+OSType+"\t"+browserType+"\t"+setIntervalTime;
			$.ajax({
				type:'get',
				url:url,
				data:{
					param:encodeURI(paramOnline)
				},
				dataType:'jsonp',
				jsonp: 'jsonpcallback'
			});
		}
		//判断浏览器
		function explorerType(){
			var brow=$.browser;
			var bInfo="非主流浏览器";
			if(brow.msie){
				bInfo="MicrosoftInternetExplorer"+brow.version;
			}
			if(brow.mozilla){
				bInfo="MozillaFirefox"+brow.version;
			}
			if(brow.safari){
				bInfo="AppleSafari"+brow.version;
			}
			if(brow.opera){
				bInfo="Opera"+brow.version;
			}
			if(brow.chrome){
				bInfo="chrome"+brow.version;
			}
			return bInfo;
		}
		//获取客户端操作系统类型
		function detectOS() {
			var sUserAgent = navigator.userAgent;
			var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
			var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
			if (isMac) return "Mac";
			var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
			if (isUnix) return "Unix";
			var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
			if (isLinux) return "Linux";
			if (isWin) {
				var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
				if (isWin2K) return "Win2000";
				var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
				if (isWinXP) return "WinXP";
				var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
				if (isWin2003) return "Win2003";
				var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
				if (isWin2003) return "WinVista";
				var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
				if (isWin2003) return "Win7";
			}
			return "None";
		}
		/*截取url参数*/
		function GetRequest(temp) {
			var theRequest = new Object();
			// if (url.indexOf("?") != -1) {
			var str = temp.substr(1);
			var strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
			}
			// }
			return theRequest;
		}
	})();

	/* 添加快讯 */
	(function(){
		/*
		 <div class="fixed-kuaixun">
		 <img src="<?php echo __WWW_IMG ?>kuaixun.png" alt="快讯" width="86" height="48">
		 <a class="txt" href="javascript:;">国防部证实我国正在研制第二航母舰队</a>
		 <a class="close" href="javascript:;" title="点击关闭">关闭</a>
		 </div>
		 */
		setTimeout(function(){
			var COOKIE_NAME = 'kuaixun',    // 快讯cookie name
					cookieVal = $.cookie(COOKIE_NAME),  // 快讯cookie value
					ymd = getDateStr(),   // 年月日字符串
					url = '/json/kuaixun/kuaixun_' + ymd + '.json';
			$.getJSON(url, function(data, status){
				if(status != 'success' || !data){
					return false;
				}
				if(!cookieVal && cookieVal != data.id){
					var startTime = new Date(data.start_time.replace(/-/g, '/')),
							endTime = new Date(data.end_time.replace(/-/g, '/')),
							curTime = new Date();
					if(curTime.getTime() > startTime.getTime() && curTime.getTime() < endTime.getTime()){
						var $kuaixun = $('<div class="fixed-kuaixun"><img src="/assets/images/kuaixun.png" alt="快讯" width="86" height="48"></div>'),
								$kxLink = $('<a class="txt" href="javascript:;" target="_blank"></a>'),
								$kxClose = $('<a class="close" href="javascript:;" title="点击关闭">关闭</a>');
						$kxLink.attr('href', data.url);
						$kxLink.html(data.topic);
						$('body').append($kuaixun.append($kxLink).append($kxClose));
						$kxClose.on('click', function(){
							$.cookie(COOKIE_NAME, data.id, {expires: 30, path: '/'});
							$kuaixun.remove();
						});
						$kxLink.on('click', function(){
							$.cookie(COOKIE_NAME, data.id, {expires: 30, path: '/'});
							$kuaixun.remove();
						});

						if(navigator.userAgent.indexOf('MSIE') >= 0 && $.browser.version.toString().substring(0,1) == '6'){
							$kuaixun.animate({
								top: '-=140px'
							});
						} else {
							$kuaixun.animate({
								bottom: '70px'
							});
						}
					}
				}
			});

			function getDateStr(){
				var now = new Date(),
						year = now.getFullYear().toString().slice(2),
						month = (now.getMonth() + 1).toString(),
						day = now.getDate().toString();
				month = (month.length === 1) ? (month = '0' + month) : month;
				day = (day.length === 1) ? (day = '0' + day) : day;
				return year + month + day;   // 年月日字符串
			}
		}, 3000);


	})();

	/*记录传递访客最后的三个详细新闻页面*/
	(function(){
		/**
		 *  jQuery 扩展方法
		 *      $.Object.count( p )
		 *          获取一个对象的长度，需要指定上下文，通过 call/apply 调用
		 *          示例: $.Object.count.call( obj, true );
		 *          @param  {p}             是否跳过 null / undefined / 空值
		 */
		$.extend({
			//  获取对象的长度，需要指定上下文 this
			Object:     {
				count: function( p ) {
					p = p || false;
					return $.map( this, function(o) {
						if( !p ) return o;
						return true;
					} ).length;
				}
			}
		});
		//  示例
		// var obj = {a:null,b:undefined,c:1,d:2,e:'test'};
		// //  不过滤空值
		// console.log( $.Object.count.call( obj ) );
		// //  过滤空值
		// console.log( $.Object.count.call( obj, true ) );		
		//只有详细页执行
		var strPath = String(window.location.pathname);
		if( strPath.indexOf('/a/') != -1 ){
			//(重要)注意：整站只有详细页路径带有/a/，如果后期其他非详细页面的名称会带有数字则需对此进行相应修改！！
			var articleId = strPath.substring(strPath.lastIndexOf('/') + 1, strPath.indexOf('.'));
			if(window.localStorage){
				// supports localStorage
				if(!localStorage.getItem('pageId')){
					localStorage.setItem('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}');//设置存储文章ID
				}else{
					var pageIdTemp=$.parseJSON( localStorage.getItem('pageId') );
					var len=$.Object.count.call( pageIdTemp ,true );
					var flag = true;
					for(var i=0;i<len;i++){
						if( pageIdTemp['pid' + i] != 'null'){
							if( articleId == pageIdTemp['pid' + i] ){
								flag = false;
							}
						}
					}
					if(flag){
						localStorage.removeItem('pageId');
						localStorage.setItem('pageId','{"pid0":"' + articleId + '","pid1":"'+ pageIdTemp['pid0'] +'","pid2":"'+ pageIdTemp['pid1'] +'"}');
					}
				}
			}else{
				// does not supports localStorage
				// delCookie('pageId');
				if(getCookie('pageId') == null){
					// $.cookie('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}',{expires:30,path:'/'});
					setCookie('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}');
				}else{
					var pageIdTemp=$.parseJSON( getCookie('pageId') );
					var len=$.Object.count.call( pageIdTemp ,true );
					var flag = true;
					for(var i=0;i<len;i++){
						if( pageIdTemp['pid' + i] != 'null'){
							if( articleId == pageIdTemp['pid' + i] ){
								flag = false;
							}
						}
					}
					if(flag){
						delCookie('pageId');
						setCookie('pageId','{"pid0":"' + articleId + '","pid1":"'+ pageIdTemp['pid0'] +'","pid2":"'+ pageIdTemp['pid1'] +'"}');
					}
				}
				// console.log(getCookie('pageId'));			
			}
		}
		//写cookies
		function setCookie(name,value){
			var Days = 3000;//天
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ encodeURI (value) + ";expires=" + exp.toUTCString() + ";path=/";
		}
		//读取cookies
		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg)){
				return decodeURI(arr[2]);
			}else{
				return null;
			}
		}
		//删除cookies
		function delCookie(name){
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=getCookie(name);
			if(cval!=null){
				document.cookie= name + "="+cval+";expires="+exp.toUTCString() + ";path=/";
			}
		}
	})();
	$('ul.nav li:last').hover(function(){
		$(this).children('div').show();
	},function(){
		$(this).children('div').hide();
	});

});
$(window).load(function(){
	(function(){
		var recommendtype='-1';//是否是推荐新闻默认-1
		var getData_url='http://actlog.dftoutiao.com/getdatafirst/pcdata';//请求传递数据接口 01月24日
		var u_id = '';//访客uid
		var soft_type= '';
		var soft_name= '';
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
		if ( temp.indexOf("?") != -1 && String(GetRequest(temp).btype) != 'undefined' ) {
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
		if($.cookie('mylist')){
			u_id=$.parseJSON($.cookie('mylist')).uid;
			soft_type= $.parseJSON($.cookie('mylist')).softtype;
			soft_name= $.parseJSON($.cookie('mylist')).softname;
		}
		getData_ajax(getData_url);//请求传递数据,wayPath\newstype全局变量qid		
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
});
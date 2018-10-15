try{
	if (typeof(coo_name) == "undefined" || coo_name == null) {
		coo_name = '';
	}
}catch(e){}
(function(){
	var s = "_" + Math.random().toString(36).slice(2);
	if(coo_name == 'www.hao123.com' || coo_name == 'ipad.hao123.com' || coo_name == 'cn.hao123.com'){
		var s_b_id = '1140967';
	}else if(coo_name == 'qid=2345shouye'){
		var s_b_id = '1129825';
	}else if(coo_name == '114lq'){
		var s_b_id = '2353354';
	}else if(coo_name == 'sgny'){
		var s_b_id = '2341296';
	}else if(coo_name == 'qid=360kjzs'){
		var s_b_id = '2073242';
	}else if(coo_name == 'qid=uchomepage' || coo_name == 'qid=uc'){
		var s_b_id = '2368682';
	}else if(coo_name == 'sh.qihoo.com'){
		var s_b_id = '2081225';
	}else if(coo_name == '360dh' || coo_name == 'qid=360dh'){
/*		document.write('<a style="display:none!important" id="tanx-a-mm_108636149_8862290_41666823"></a>');
		tanx_s = document.createElement("script");
		tanx_s.type = "text/javascript";
		tanx_s.charset = "gbk";
		tanx_s.id = "tanx-s-mm_108636149_8862290_41666823";
		tanx_s.async = true;
		tanx_s.src = "http://p.tanx.com/ex?i=mm_108636149_8862290_41666823";
		tanx_h = document.getElementsByTagName("head")[0];
		if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);*/
		/*var s_b_id = '1121292';*/
		document.write('<script charset="gbk" src="http://p.tanx.com/ex?i=mm_108636149_8862290_41666823"></script>');
		return;
	}else if(coo_name == 'mgtt' || coo_name == 'mgyl'){
		var s_b_id = '1129845';
	}else if(coo_name == 'qid=ucipad'){
		var s_b_id = '2353333';
	}else if(coo_name == 'qid=dubakz'){
		var s_b_id = '2353303';
	}else if(coo_name == 'qid=qqdjdzk'){
		var s_b_id = '2344588';
	}else if(coo_name == 'qid=jsdbmini'){
		var s_b_id = '2352595';
	}else if(coo_name == 'qid=114lahomepage2'){
		var s_b_id = '2354987';
	}else if(coo_name == 'qid=114lahomepage1'){
		var s_b_id = '2355020';
	}else if(coo_name == 'qid=ludashi'){
		var s_b_id = '2391223';
	}else if (coo_name == 'qid=firefox'){
		var s_b_id='2396782';
	}else if (coo_name == 'qid=by1'){
		var s_b_id = '2400440';
	} else if (coo_name == 'qid=by2'){
		var s_b_id = '2400470';
	}else if( coo_name =='qid=jsdbnews'){
		var s_b_id = '2414157';
	}else if( coo_name == 'qid=2345xiaohua'){
		var s_b_id = '2417445';
	}else if( coo_name == 'qid=360shortcut'){
		var s_b_id = '2422077';
	}else if( coo_name == 'qid=kuaiyamini'){
		var s_b_id = '2423631';
	}else if( coo_name == 'qid=114lashlq'){
		var s_b_id = '2425153';
	}else{
		var s_b_id = '1106576';
	}
	//if(coo_name != '360dh' && coo_name != 'qid=360dh'){
		document.write('<div id="' + s + '"></div>');
		(window.slotbydup=window.slotbydup || []).push({
			id: s_b_id,
			container: s,
			size: '620,110',
			display: 'inlay-fix'
		});
	//}
})();
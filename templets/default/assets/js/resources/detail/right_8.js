try{
	if (typeof(coo_name) == "undefined" || coo_name == null) {
		coo_name = '';
	}
}catch(e){}
(function(){
	var s = "_" + Math.random().toString(36).slice(2);
	if(coo_name == 'www.hao123.com' || coo_name == 'ipad.hao123.com' || coo_name == 'cn.hao123.com'){
		var s_b_id = '2400277';
	}else if(coo_name == 'qid=dubakz'){
		var s_b_id = '2400266';
	}else if(coo_name == 'sgny'){
		var s_b_id = '2399084';
	}else if(coo_name == '360dh' || coo_name == 'qid=360dh'){
		var s_b_id = '2400272';
	}else if(coo_name == '114lq'){
		var s_b_id = '2400280';
	}else if(coo_name == 'qid=114lahomepage2'){
		var s_b_id = '2400282';
	}else if(coo_name == 'qid=114lahomepage1'||coo_name == 'qid=114lahomepage' ){
		var s_b_id = '2400284';
	}else if(coo_name == 'qid=uchomepage' || coo_name == 'qid=uc'){
		var s_b_id = '2400288';
	}else if(coo_name == 'ay'){
		var s_b_id = '2400290';
	}else if (coo_name == 'qid=qqdjdzk'){
		var s_b_id ='2400268';
	}else if(coo_name == 'qid=jsdbmini'){
		var s_b_id ='2400270';
	} else if(coo_name == 'qid=2345shouye'){
		var s_b_id = '2400292';
	}else if(coo_name == 'qid=ludashi'){
		var s_b_id='2400274';
	}else if (coo_name == 'qid=firefox'){
		var s_b_id='2400264';
	}else if (coo_name == 'uckuzhan'){
		var s_b_id='2400294';
	}else if (coo_name == 'sh.qihoo.com'){
		var s_b_id='2400296';
	}else if (coo_name == 'qid=ucipad'){
		var s_b_id='2400301';
	}else if (coo_name == 'qid=by1'){
		var s_b_id = '2400448';
	} else if (coo_name == 'qid=by2'){
		var s_b_id = '2400474';
	}else if( coo_name =='qid=jsdbnews'){
		var s_b_id = '2414151';
	}else if( coo_name == 'qid=2345xiaohua'){
		var s_b_id = '2417429';
	}else if( coo_name == 'qid=360shortcut'){
		var s_b_id = '2422079';
	}else if( coo_name == 'qid=kuaiyamini'){
		var s_b_id = '2423633';
	}else if( coo_name == 'qid=114lashlq'){
		var s_b_id = '2425157';
	}else{
		var s_b_id = '2400286';
	}
	document.write('<div id="' + s + '"></div>');
	(window.slotbydup=window.slotbydup || []).push({
		id: s_b_id,
		container: s,
		size: '620,110',
		display: 'inlay-fix'
	});
})();
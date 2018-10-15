try{
	if (typeof(coo_name) == "undefined" || coo_name == null) {
		coo_name = '';
	}
}catch(e){}
(function(){
	var s = "_" + Math.random().toString(36).slice(2);
	if(coo_name == 'sgny'){
		var s_b_id = '2355916';
	}else if(coo_name == 'mgtt' || coo_name == 'mgyl'){
		var s_b_id = '2355928';
	}else if(coo_name == 'qid=jsdbmini'){
		var s_b_id = '2355942';
	}else if(coo_name == 'qid=dubakz'){
		var s_b_id = '2355934';
	}else if(coo_name == 'qid=dubakz'){
		var s_b_id = '2355934';
	}else if(coo_name == 'qid=ucipad'){
		var s_b_id = '2355930';
	}else if(coo_name == 'qid=360kjzs'){
		var s_b_id = '2359543';
	}else if(coo_name == 'www.hao123.com' || coo_name == 'ipad.hao123.com' || coo_name == 'cn.hao123.com'){
		var s_b_id = '2355905';
	}else if(coo_name == 'sh.qihoo.com'){
		var s_b_id = '2355923';
	}else if(coo_name == '360dh' || coo_name == 'qid=360dh'){
		var s_b_id = '2355925';
	}else if(coo_name == 'qid=2345shouye'){
		var s_b_id = '2355907';
	}else if(coo_name == '114lq'){
		var s_b_id = '2355914';
	}else if(coo_name == 'qid=114lahomepage2'){
		var s_b_id = '2355912';
	}else if(coo_name == 'qid=114lahomepage1'){
		var s_b_id = '2355909';
	}else if(coo_name == 'qid=uchomepage' || coo_name == 'qid=uc'){
		var s_b_id = '2368669';
	}else if(coo_name == 'qid=qqdjdzk'){
		var s_b_id = '2355936';
	}else if(coo_name == 'qid=ludashi'){
		var s_b_id = '2391212';
	}else if (coo_name == 'qid=firefox'){
		var s_b_id='2396667';
	}else if (coo_name == 'qid=by1'){
		var s_b_id = '2400407';
	} else if (coo_name == 'qid=by2'){
		var s_b_id = '2400454';
	}else if( coo_name =='qid=jsdbnews'){
		var s_b_id = '2414179';
	}else if( coo_name == 'qid=2345xiaohua'){
		var s_b_id = '2417434';
	}else if( coo_name == 'qid=360shortcut'){
		var s_b_id = '2422060';
	}else if( coo_name == 'qid=kuaiyamini'){
		var s_b_id = '2423597';
	}else if( coo_name == 'qid=114lashlq'){
		var s_b_id = '2425136';
	}else{
		var s_b_id = '2355903';
	}
	document.write('<div id="' + s + '"></div>');
	(window.slotbydup=window.slotbydup || []).push({
		id: s_b_id,
		container: s,
		size: '620,110',
		display: 'inlay-fix'
	});
})();
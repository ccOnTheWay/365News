try{
	if (typeof(coo_name) == "undefined" || coo_name == null) {
		coo_name = '';
	}
}catch(e){}
(function(){
	var s = "_" + Math.random().toString(36).slice(2);
	if(coo_name == 'www.hao123.com' || coo_name == 'ipad.hao123.com' || coo_name == 'cn.hao123.com'){
		var s_b_id = '2400360';
	}else if(coo_name == 'mgtt' || coo_name == 'mgyl'){
		var s_b_id = '2400305';
	}else if(coo_name == 'qid=dubakz'){
		var s_b_id = '2400364';
	}else if(coo_name == 'sgny'){
		var s_b_id = '2399086';
	}else if(coo_name == '360dh' || coo_name == 'qid=360dh'){
		var s_b_id = '2400350';
	}else if(coo_name == '114lq'){
		var s_b_id = '2400307';
	}else if(coo_name == 'qid=114lahomepage2'){
		var s_b_id = '2400374';
	}else if(coo_name == 'qid=114lahomepage1' || coo_name == 'qid=114lahomepage' ){
		var s_b_id = '2400372';
	}else if(coo_name == 'qid=uchomepage' || coo_name == 'qid=uc'){
		var s_b_id = '2400368';
	}else if (coo_name == 'qid=qqdjdzk'){
		var s_b_id ='2400370';
	}else if(coo_name == 'qid=jsdbmini'){
		//var s_b_id ='2400362';
		return ;
	} else if(coo_name == 'qid=2345shouye' || coo_name == 'qid=2345xiaohua'){
/*		if(document.referrer.indexOf('eastday.com') > -1){
			var s_b_id = '2400353';
		}else{
			return ;
		}*/
		return ;
	}else if(coo_name == 'qid=ludashi'){
		var s_b_id='2400355';
	}else if (coo_name == 'qid=firefox'){
		var s_b_id='2400303';
	}else if (coo_name == 'sh.qihoo.com'){
		var s_b_id='2400357';
	}else if (coo_name == 'qid=ucipad'){
		var s_b_id='2400366';
	}else if (coo_name == 'qid=by1'){
		var s_b_id = '2400395';
	} else if (coo_name == 'qid=by2'){
		var s_b_id = '2400446';
	}else if( coo_name =='qid=jsdbnews'){
		var s_b_id = '2414187';
	}else if( coo_name == 'qid=360shortcut'){
		var s_b_id = '2422020';
	}else if( coo_name == 'qid=kuaiyamini'){
		var s_b_id = '2423593';
	}else if( coo_name == 'qid=114lashlq'){
		var s_b_id = '2425131';
	}else{
		var s_b_id = '2400346';
	}
	document.write('<div id="' + s + '"></div>');
	(window.slotbydup=window.slotbydup || []).push({
		id: s_b_id,
		container: s,
		size: '620,110',
		display: 'inlay-fix'
	});
})();
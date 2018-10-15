try{
	if (typeof(coo_name) == "undefined" || coo_name == null) {
		coo_name = '';
	}
}catch(e){}
(function(){
	var s = "_" + Math.random().toString(36).slice(2);
	var s_b_id = '';
	if(coo_name == 'qid=jsdbmini'){
        s_b_id ='2400362';
	} else if(coo_name == 'qid=2345shouye'){
		if(document.referrer.indexOf('eastday.com') > -1){
			s_b_id = '2400353';
		}else{
			return ;
		}
	} else if(coo_name == 'qid=2345xiaohua'){
		if(document.referrer.indexOf('eastday.com') > -1){
			s_b_id = '2417425';
		}else{
			return ;
		}
	}
	if(s_b_id ==''){
		$("#gg_item_bomttom_cnt-bk").hide();
		$("#dark-line-bk").hide();
		$("#ggPic_item_bomttom_cnt-bk").hide();
		return;
	}
	document.write('<div id="' + s + '"></div>');
	(window.slotbydup=window.slotbydup || []).push({
		id: s_b_id,
		container: s,
		size: '620,110',
		display: 'inlay-fix'
	});
})();
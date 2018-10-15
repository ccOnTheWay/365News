try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function(){
    var s = "_" + Math.random().toString(36).slice(2);
    if(coo_name == 'qid=jsdbnews'){
        var s_b_id = '2414153';
    }else if( coo_name == 'qid=2345xiaohua'){
        var s_b_id = '2417454';
    }else if( coo_name == 'qid=114lashlq'){
        var s_b_id = '2425155';
    }else{
        var s_b_id = '2082689';
    }
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: s_b_id,
        container: s,
        size: '620,110',
        display: 'inlay-fix'
    });
})();
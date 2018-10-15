try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=360dh' || '360dh' == coo_name) {
        var s_b_id = '2358673';
    } else if (coo_name == 'qid=2345shouye') {
        var s_b_id = '1128170';
    } else if (coo_name == 'qid=jsdbmini') {
        var s_b_id = '2340867';
    } else if (coo_name == 'qid=by1'){
        var s_b_id = '2400381';
    } else if (coo_name == 'qid=by2'){
        var s_b_id = '2400436';
    }else if( coo_name =='qid=jsdbnews'){
        var s_b_id = '2414196';
    }else if( coo_name == 'qid=2345xiaohua'){
        var s_b_id = '2417449';
    }else if( coo_name == 'qid=360shortcut'){
        var s_b_id = '2422015';
    }else if( coo_name == 'qid=kuaiyamini'){
        var s_b_id = '2423589';
    }else if( coo_name == 'qid=114lashlq'){
        var s_b_id = '2425129';
    }else {
        var s_b_id = '2355379';
    }

    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
            id: s_b_id,
            container: s,
            size: '620,110',
            display: 'inlay-fix'
    });
})();
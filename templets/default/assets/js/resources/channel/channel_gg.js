try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
//顶部广告
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=360dh' || '360dh' == coo_name) {
        var s_b_id = '2358673';
    } else if (coo_name == 'qid=2345shouye') {
        var s_b_id = '1128170';
    } else if (coo_name == 'qid=jsdbmini') {
        var s_b_id = '2406510';
    } else {
        var s_b_id = '1109402';
    }
    BAIDU_CLB_fillSlotAsync(s_b_id,'channel_top_1');
})();
BAIDU_CLB_fillSlotAsync('1109520','channel_right_1');
if('qid=dubajunshi' == coo_name){
    BAIDU_CLB_SLOT_ID = "2279735";
}else if ('qid=ipadbrowser' == coo_name){
    BAIDU_CLB_SLOT_ID = "2390534";
} else{
    BAIDU_CLB_SLOT_ID = "2279696";
}
BAIDU_CLB_fillSlotAsync(BAIDU_CLB_SLOT_ID,'channel_right_2');
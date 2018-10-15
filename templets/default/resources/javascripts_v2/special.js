// 页面内JS
$(function(){
	// // 15双12
	// var flash_result = flashChecker();
	// var url_str_arr = location.href.split('?');
	// if(url_str_arr[0].length <= 34){
	// 	// 首页
	// 	var d12_url_right = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DlEw99gh6pFccQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMSBAJMI%2Bx4WlMMgx22UI05bWp%2BOVLCbmoNNPh5Xv%2BpwhjgHCzWO8A73jdikX09xMUI7LAa3DUrM2zt5vEinufIVAFEHVckI7byuxD%2B779vK%2BiBqx4AoGTRxNtT0rMxO3Gksyt25dMNjpnVzVuz7VL2bLP4XO97Tuio%2BgRw6KoLAkxiXvDf8DaRs%3D';
	// 	var act_hide = 'act_hide';
	// 	// 首页添加大广告
	// 	$('body').append('<div class="act_special_home"><div class="base_home"></div><a target="_blank" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DNXWkbgaOVBocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXLSLSYjg4kc8sviUM61dt3Wp%2BOVLCbmoNNPh5Xv%2BpwhHu8LSX4YUuMXhAllHc96vY7LAa3DUrM2zt5vEinufIVAFEHVckI7byuxD%2B779vK%2BiBqx4AoGTRxNtT0rMxO3Gksyt25dMNjpnVzVuz7VL2bLP4XO97Tuio%2BgRw6KoLAkxiXvDf8DaRs%3D"></a><div class="btn_close_home"></div></div>');
	// 	$('.btn_close_home').on('click', function(){
	// 		$('.act_special_home').remove();
	// 		$('.act_special').removeClass('act_hide');
	// 	});
	// 	$('.act_special_home').animate({opacity: 1}, 2500);
	// 	if(flash_result.has){
	// 		// 有
	// 		$('div.act_special_home').prepend('<object height="500" width="1002">\
	// 			<param value="/resources/special/151212_top_bg_v2.swf" name="movie">\
	// 			<param value="high" name="quality">\
	// 			<param value="always" name="allowScriptAccess">\
	// 			<param value="internal" name="allowNetworking">\
	// 			<param value="transparent" name="wmode">\
	// 			<embed height="500" width="1002" wmode="transparent" type="application/x-shockwave-flash" pluginspage="" allownetworking="internal" allowscriptaccess="always" quality="high" src="/resources/special/151212_top_bg_v2.swf">\
	// 	    </object>');
	// 	}
	// }else{
	// 	// 详情页
	// 	var d12_url_right = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D86GJkgXP%2BD4cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMbn5QFtIBWNo5x%2BIUlGKNpXWp%2BOVLCbmoNNPh5Xv%2BpwhS0FM60S%2Fmi%2FbTM0Kc1FUbo7LAa3DUrM2zt5vEinufIVAFEHVckI7byuxD%2B779vK%2BiBqx4AoGTRxNtT0rMxO3Gksyt25dMNjpnVzVuz7VL2bLP4XO97Tuio%2BgRw6KoLAkxiXvDf8DaRs%3D';
	// 	var act_hide = '';
	// }
	// $('body').append('<div class="act_special '+act_hide+'"><div class="base"></div><a target="_blank" href="'+d12_url_right+'"></a><div class="btn_close"></div></div>');
	// $('.act_special').on('mouseenter', function(){
	// 	$('.btn_close').stop();
	// 	$('.btn_close').show(250);
	// });
	// $('.act_special').on('mouseleave', function(){
	// 	$('.btn_close').stop();
	// 	$('.btn_close').hide(250);
	// });
	// $('.btn_close').on('click', function(){
	// 	$('.act_special').remove();
	// });
	// if(flash_result.has){
	// 	// 有
	// 	$('div.act_special .base').remove();
	// 	$('div.act_special').prepend('<object height="115" width="115">\
	// 		<param value="/resources/special/151212_right_bg_v2.swf" name="movie">\
	// 		<param value="high" name="quality">\
	// 		<param value="always" name="allowScriptAccess">\
	// 		<param value="internal" name="allowNetworking">\
	// 		<param value="transparent" name="wmode">\
	// 		<embed height="115" width="115" wmode="transparent" type="application/x-shockwave-flash" pluginspage="" allownetworking="internal" allowscriptaccess="always" quality="high" src="/resources/special/151212_right_bg_v2.swf">\
	//     </object>');
	// }
	// 意见反馈入口
	$('.go_to_fankui').on('click', function(){
		if(check_ie() == 6 || check_ie() == 7 || check_ie() == 8){
			window.open('http://wpa.qq.com/msgrd?v=3&amp;uin=2476675226&amp;site=qq&amp;menu=yes');
		}else{
			load_feedback();
		}
	});
});
// 检测flash
function flashChecker() {
    var hasFlash = 0; //是否安装了flash
    var flashVersion = 0; //flash版本
    if(document.all){
		var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if(swf){
			hasFlash = 1;
			VSwf = swf.GetVariable("$version");
			flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
		}
    }else{
	    if(navigator.plugins && navigator.plugins.length > 0){
		    var swf = navigator.plugins["Shockwave Flash"];
		    if(swf){
				hasFlash = 1;
				var words = swf.description.split(" ");
				for(var i = 0; i < words.length; ++i){
					if(isNaN(parseInt(words[i])))continue;
						flashVersion = parseInt(words[i]);
				}
			}
		}
    }
    return { has: hasFlash, ver: flashVersion };
}
// 判断IE版本
function check_ie(){
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";");
	if(version.length > 1){
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){
			return 6;
		}else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){
			return 7;
		}else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
			return 8;
		}else{
			return 0;
		}	
	}else{
		return 0;
	}
}
// 加载反馈模块
var has_drag_js = false;
function load_feedback(){
	// 加载拖拽插件
	if(!has_drag_js){
		$.getScript('/resources/javascripts_v2/drag.js', function(){
			has_drag_js = true;
			load_feedback_in();
		});
	}else{
		load_feedback_in();
	}
}
var fb_can_submit = true;
function load_feedback_in(){
	fb_can_submit = true;
	// 加载反馈区域
	if($('.feedback_block').length > 0){
		return false;
	}
	$('body').append('<div class="feedback_block">\
		<div class="fb_title_bar">\
			<div class="fb_title">意见反馈</div>\
		</div>\
		<div class="fb_close_btn"></div>\
		<form target="submit_helper" action="'+FEEDBACK_FORM_ACTION+'" method="post" enctype="multipart/form-data">\
			<div class="fb_text_bg">\
				<textarea class="fb_text" name="feedback_text" placeholder="对东方头条有什么想法请尽情吐槽吧！"></textarea>\
			</div>\
			<div class="fb_file_line">\
				<div class="fb_file_btn"></div>\
				<div class="fb_file_info">2MB以内的 jpg、png、bmp 图片</div>\
				<input class="fb_hide_file" type="file" name="file" />\
			</div>\
			<div class="fb_contact_line">\
				<div class="fb_contact_lab">联系方式</div>\
				<div class="fb_contact_ipt_bg">\
					<input type="text" name="contact" placeholder="QQ/邮箱/电话" />\
				</div>\
			</div>\
			<div class="fb_error_line"></div>\
			<button type="submit" class="fb_submit">提交反馈</button>\
		</form>\
		<div style="display: none;">\
			<iframe id="submit_helper" name="submit_helper" src=""></iframe>\
		</div>\
	</div>');
	// 拖拽事件
	$('.feedback_block').draggable({
		handle: '.fb_title_bar',
		containment: 'body',
		scroll: false
	});
	// 关闭按钮
	$('.fb_close_btn').on('mouseenter', function(){
		$(this).addClass('hover');
	});
	$('.fb_close_btn').on('mouseleave', function(){
		$(this).removeClass('hover');
	});
	$('.fb_close_btn').on('click', function(){
		$('.feedback_block').remove();
	});
	// 选图按钮
	$('.fb_file_line input').on('change', function(){
		if($(this).val().length > 0){
			var fb_file_name_arr = $(this).val().split('\\');
			$('.fb_file_info').text(fb_file_name_arr[fb_file_name_arr.length-1]);
		}else{
			$('.fb_file_info').text('请选择2MB以内的jpg或jpeg图片');
		}
	});
	// 表单验证
	$('.feedback_block form').on('submit', function(){
		if(!fb_can_submit){
			alert('提交中请耐心等待,切勿重复提交!');
			return false;
		}
		if($.trim($('.fb_text').val()).length < 1 && $('.fb_file_line input').val().length < 1){
			$('.fb_error_line').text('既然来了写点什么吧，不然产品君要T_T了~');
			return false;
		}
		fb_can_submit = false;
		$('.fb_file_info').empty();
	});
}
function fb_true(){
	$('.feedback_block').remove();
	$('body').append('<div class="fb_success"></div>');
	setTimeout(function(){
		$('.fb_success').remove();
	}, 2500);
	$('.fb_file_line input').empty();
	$('#submit_helper').attr('src', '');
}
function fb_false(){
	fb_can_submit = true;
	$('.fb_error_line').text('上传有错，请重新上传!');
	$('.fb_file_line input').val('');
	$('.fb_file_info').text('请选择2MB以内的jpg或jpeg图片');
}













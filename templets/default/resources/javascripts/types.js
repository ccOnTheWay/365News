var normal_all = 0;
var normal_left_top = 0;
$(function(){
	//悬浮
	$('.over_ico1').on('mouseenter', function(){
		$(this).css({
			backgroundPosition: '-43px -119px'
		});
	});
	$('.over_ico1').on('mouseleave', function(){
		$(this).css({
			backgroundPosition: '0 -119px'
		});
	});
	$('.over_ico2').on('mouseenter', function(){
		$(this).css({
			backgroundPosition: '-43px -162px'
		});
		$('.over_tdcode').show();
	});
	$('.over_ico2').on('mouseleave', function(){
		$(this).css({
			backgroundPosition: '0 -162px'
		});
		$('.over_tdcode').hide();
	});
	$('.over_ico3').on('mouseenter', function(){
		$(this).css({
			backgroundPosition: '-43px -204px'
		});
	});
	$('.over_ico3').on('mouseleave', function(){
		$(this).css({
			backgroundPosition: '0 -204px'
		});
	});
	$('.over_ico3').on('click', function(){
		$(this).css({
			backgroundPosition: '0 -204px'
		});
	});
	$('.over_ico4').on('mouseenter', function(){
		$(this).css({
			backgroundPosition: '-43px -247px'
		});
	});
	$('.over_ico4').on('mouseleave', function(){
		$(this).css({
			backgroundPosition: '0 -247px'
		});
	});
	$('.goto_top').on('mouseleave', function(){
		$('.over_tdcode').hide();
	});
	//顶部
	$('.over_ico1').on('click', function(){
		$("html, body").filter(':not(:animated)').animate({
            scrollTop: 0
        });
	});
	//首页
	$('.over_ico4').on('click', function(){
		location.href = '/';
	});
	
	$('.show_more_bar').on('click', function(){
		var _idx = $(this).attr('data-now');
		if(_idx == 9){
			$(this).hide();
		}
		$(this).attr('data-now', _idx*1+1);
		$(this).parent().find('.setp' + (_idx*1+1)).show();
		$(window).trigger('scroll');
	});

	//右侧固定
	$(window).on('scroll resize', function(){
		var isIE=!!window.ActiveXObject;
		var isIE6=isIE&&!window.XMLHttpRequest;
		if(isIE && isIE6){return;}
		if(!$('.main_left').length){return;}
		var normal_left_top = $('.main_left').offset().top;
		var normal_all_width=$(window).width();
		normal_all = normal_left_top + $('.main_right').height();
		if($(window).height() + $(window).scrollTop() >= normal_all){
			if(normal_all_width<=948){
				$('.main_right').css({
					position: 'relative',
					bottom: 0,
					left: 0,
					marginLeft: 0
				});
			}else{
				$('.main_right').css({
					position: 'fixed',
					bottom: 120,
					left: '50%',
					marginLeft: 201
				});
			}
		}else{
			$('.main_right').css({
				position: 'relative',
				bottom: 0,
				left: 0,
				marginLeft: 0
			});
		}
	});
	$(window).trigger('resize');
});

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}
function getQueryStr() {
	return window.location.search
}
function match_360(){
	if(window.location.search == '?360dh'){
		$('.ggnormal').remove();
	}else{
		$('.f360').remove();
	}
}
/*
基于jQuery的锚点插件
*/

(function(){


	$.fn.archerE = function(elm){

		var settings = $.extend({
			'scrollSpeed' : 500,
			'target' : '',
		},elm);

		$(this).addClass('archer');


		//Set the variables needed
		var targetFlag = false;
		var archer = $('.archer');


		if (settings.scrollSpeed) {
			var scrollSpeed = settings.scrollSpeed;
		};


		if (settings.target != '') {
			var target = $('.'+settings.target);
			targetFlag = true;
		};

		var shoot = function(){
			if (!targetFlag) {
				scol(0);
			} else{
				var offHeight = target.offset().top;
				scol(offHeight);
			};

			function scol(direction) {
				$("html, body").animate({ scrollTop: direction }, scrollSpeed);
			}
		};

		archer.on('click',shoot);

		//让按钮在向下超过1屏后显现
		var scolTop = $(window).scrollTop();
		if(scolTop == 0){
			archer.css('visibility', 'hidden');
		};
		$(window).scroll(function(){
			scolTop = $(window).scrollTop();
			var windowTop = $(window).height(); //浏览器当前窗口可视区域高度
			if(scolTop <= windowTop){
				archer.css('visibility', 'hidden');
			}else {
				archer.css('visibility', '');
			}
		})
	}
})(jQuery);

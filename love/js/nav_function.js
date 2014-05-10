
(function($) {
	
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			
			fx.start = [start[0],start[2]];
			
			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);

$(document).ready(function() {






	$("a#past").click(function(){
		$("div#past").hide(1000);
		$("div#wrap").show(1500);
		$("span#flip").trigger("click");
		$("a#past").hide();
		$("a#next").show();
	});
	$("a#next").click(function(){
		$("div#wrap").hide(1000);
		$("div#heart").show(2000);
		$("a#next").hide();
		$("a#now").show();		
	});
	$("a#now").click(function(){
		$("div#heart").hide(1000);
		$("div#fanshu").show(1500);
		$("a#now").hide();
		$("a#future").show();
	});
	$("a#future").click(function(){
		$("div#fanshu").hide(1000);	
		$("div#future").show(2000);
		$("a#future").hide();
		$("a#end").show();
	});
	/*$("a#end").click(function() {
		var height = window.innerHeight;
		var width = window.innerWidth;
		$("div#future").hide(1000);
		$("div#end").show(2000);
		$("a#end").hide();
		$("div#end").html('<iframe src="rose.html" height="100%" width="100%" frameborder="0"></iframe>');
		$("iframe").css("height",height).css("width",width*4/5);
	});*/
});
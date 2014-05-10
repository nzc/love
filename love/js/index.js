//Creating 50 thumbnails inside .grid
//the images are stored on the server serially. So we can use a loop to generate the HTML.
var images = "", count = 42;
var page_count = 0;
for(var i = 1; i <= count; i++){
	var mg_i = i + 100;
	images += '<img class="temp" src="images/'+'blank'+'.jpg" id="'+mg_i+'"/>';
}
//appending the images to .grid
$(".grid").html(images);

var d = 0; //delay
var ry, tz, s; //transform params

//animation time
$(".animate").bind("click", function(){
	//fading out the thumbnails with style
	$("img").each(function(){
		d = Math.random()*1000; //1ms to 1000ms delay
		$(this).delay(d).animate({opacity: 0}, {
			//while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
			step: function(n){
				s = 1-n; //scale - will animate from 0 to 1
				$(this).css("transform", "scale("+s+")");
			}, 
			duration: 1000, 
		})
	}).promise().done(function(){
		//after *promising* and *doing* the fadeout animation we will bring the images back
		storm();
	})
})
//bringing back the images with style
function storm()
{
	$("img").each(function(){
		d = Math.random()*1000;
		$(this).delay(d).animate({opacity: 1}, {
			step: function(n){
				//rotating the images on the Y axis from 360deg to 0deg
				ry = (1-n)*360;
				//translating the images from 1000px to 0px
				tz = (1-n)*1000;
				//applying the transformation
				$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
				$("#1").css("opacity",0);
				$("#4").css("opacity",0);	
				$("#7").css("opacity",0);			
				$("#22").css("opacity",0);
				$("#28").css("opacity",0);
				$("#29").css("opacity",0);
				$("#30").css("opacity",0);
				$("#34").css("opacity",0);
				$("#35").css("opacity",0);
				$("#36").css("opacity",0);
				$("#37").css("opacity",0);
				$("#38").css("opacity",0);
				$("#40").css("opacity",0);
				$("#41").css("opacity",0);
				$("#42").css("opacity",0);					
			}, 
			duration: 3000, 
			//some easing fun. Comes from the jquery easing plugin.
			easing: 'easeOutQuint', 
		})
	})
}

/*$("#2").click(function() {
	$("#xuanfu").show(1500);
	$("#xuanfu").html("<img src='images/2.png' class='xfImg' style='display:block;border-style:solid;border-width:8px;border-color:rgba(0,0,0,0.3);width:600px;height:300px;'/>").append("<p class='exImg' style='font-size:24px; font-family:KaiTi;color:rgb(192,73,85) ;line-height:32px;margin:15px 0 0 50px;'>吕朔君是笨蛋笨蛋笨蛋笨蛋笨蛋<br/>而且是大笨蛋<br/>超级大笨蛋</br></p>");
	$(".grid").hide(1000);
	$(".animate").hide(1000);
})*/

$("#xuanfu").click(function() {
	$(this).hide(1000);
	$(".grid").show(1500);
	$(".animate").show(1500);
})

$(".temp").click(function() {
	var id = $(this).attr("id");
	if(id >= 100) {
		page_count++;
		var _id = (id % 100);
		console.log(_id);
		$(this).attr("id",_id);
		$(this).fadeOut(100);
		var src = 'images/'+_id+'.jpg';
		console.log(src);
		$(this).attr("src",src);
		$(this).fadeIn(100);
		if(page_count == 42)
			$(".animate").show();
	}
});
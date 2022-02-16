var photo = new Image();
photo.addEventListener('load', eventPhotoLoaded , false);
var imageId;



var windowWidth;
var windowHeight;

var windowX = 0;
var windowY = 0;
var currentScale;
var photoHeight, photoWidth;
var scaleIncrement = .01;
var diff=1;
var critical;
var index=0;
var canvas, context;
var minScale, maxScale, diffScale;	
var draggableArea=new Array();
var flag=false;
var preX, preY, currX, currY;
draggableArea=[45,windowHeight-33,windowWidth-75,windowHeight-33];
var barWidth, barLeft;
var slideMax,	slideMin;
var sliderFlag=1, zoomFlag=false;
var mousePress;	
var touchMoveFlag=true;

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;
var myWidgetiFrame

var movieWidth;
var movieHeight;
			
var previousSlider,currentSlider;
var widthPercentage

function initSetup(){
	var getwidth = parseInt(String(width).replace("px", ""));
    var getheight = String(height).replace("px", "");
	widthPercentage = getwidth/400
	var heightPercentage = getheight/400;
	
	var scaleTo = 0
	if (widthPercentage >= heightPercentage){
        scaleTo = "scale(" + widthPercentage + ")";
    } else{
        scaleTo = "scale(" + heightPercentage + ")";
    }
	 
	//Webkit
    $('#NavDown').css('-webkit-transform', scaleTo);
    $('#NavDown').css('-webkit-transform-origin', '0 0');
	
	$('#NavLeft').css('-webkit-transform', scaleTo);
    $('#NavLeft').css('-webkit-transform-origin', '0 0');
	
	$('#NavUp').css('-webkit-transform', scaleTo);
    $('#NavUp').css('-webkit-transform-origin', '0 0');
	
	$('#NavRight').css('-webkit-transform', scaleTo);
    $('#NavRight').css('-webkit-transform-origin', '0 0');
	
	$('#RemoveMagnify').css('-webkit-transform', scaleTo);
    $('#RemoveMagnify').css('-webkit-transform-origin', '0 0');
	
	$('#bar').css('-webkit-transform', scaleTo);
    $('#bar').css('-webkit-transform-origin', '0 0');
	
	$('#slider').css('-webkit-transform', scaleTo);
    $('#slider').css('-webkit-transform-origin', '0 0');
	
	$('#Magnify').css('-webkit-transform', scaleTo);
    $('#Magnify').css('-webkit-transform-origin', '0 0');
	
	
	//MS
	$('#NavDown').css('-ms-transform', scaleTo);
    $('#NavDown').css('-ms-transform-origin', '0 0');
	
	$('#NavLeft').css('-ms-transform', scaleTo);
    $('#NavLeft').css('-ms-transform-origin', '0 0');
	
	$('#NavUp').css('-ms-transform', scaleTo);
    $('#NavUp').css('-ms-transform-origin', '0 0');
	
	$('#NavRight').css('-ms-transform', scaleTo);
    $('#NavRight').css('-ms-transform-origin', '0 0');
	
	$('#RemoveMagnify').css('-ms-transform', scaleTo);
    $('#RemoveMagnify').css('-ms-transform-origin', '0 0');
	
	$('#bar').css('-ms-transform', scaleTo);
    $('#bar').css('-ms-transform-origin', '0 0');
	
	$('#slider').css('-ms-transform', scaleTo);
    $('#slider').css('-ms-transform-origin', '0 0');
	
	$('#Magnify').css('-ms-transform', scaleTo);
    $('#Magnify').css('-ms-transform-origin', '0 0');
	
	//MOZ
	$('#NavDown').css('-moz-transform', scaleTo);
    $('#NavDown').css('-moz-transform-origin', '0 0');
	
	$('#NavLeft').css('-moz-transform', scaleTo);
    $('#NavLeft').css('-moz-transform-origin', '0 0');
	
	$('#NavUp').css('-moz-transform', scaleTo);
    $('#NavUp').css('-moz-transform-origin', '0 0');
	
	$('#NavRight').css('-moz-transform', scaleTo);
    $('#NavRight').css('-moz-transform-origin', '0 0');
	
	$('#RemoveMagnify').css('-moz-transform', scaleTo);
    $('#RemoveMagnify').css('-moz-transform-origin', '0 0');
	
	$('#bar').css('-moz-transform', scaleTo);
    $('#bar').css('-moz-transform-origin', '0 0');
	
	$('#slider').css('-moz-transform', scaleTo);
    $('#slider').css('-moz-transform-origin', '0 0');
	
	$('#Magnify').css('-moz-transform', scaleTo);
    $('#Magnify').css('-moz-transform-origin', '0 0');
	
	//O
	$('#NavDown').css('-o-transform', scaleTo);
    $('#NavDown').css('-o-transform-origin', '0 0');
	
	$('#NavLeft').css('-o-transform', scaleTo);
    $('#NavLeft').css('-o-transform-origin', '0 0');
	
	$('#NavUp').css('-o-transform', scaleTo);
    $('#NavUp').css('-o-transform-origin', '0 0');
	
	$('#NavRight').css('-o-transform', scaleTo);
    $('#NavRight').css('-o-transform-origin', '0 0');
	
	$('#RemoveMagnify').css('-o-transform', scaleTo);
    $('#RemoveMagnify').css('-o-transform-origin', '0 0');
	
	$('#bar').css('-o-transform', scaleTo);
    $('#bar').css('-o-transform-origin', '0 0');
	
	$('#slider').css('-o-transform', scaleTo);
    $('#slider').css('-o-transform-origin', '0 0');
	
	$('#Magnify').css('-o-transform', scaleTo);
    $('#Magnify').css('-o-transform-origin', '0 0');
	
	$('#NavDown').css({
		top:(actualHeight-(20*widthPercentage))+"px", 
		left:(354*widthPercentage)+"px",
		visibility: "hidden"
	});
	
	$('#NavLeft').css({
		top:(actualHeight-(45*widthPercentage))+"px", 
		left:(340*widthPercentage)+"px",
		visibility: "hidden"
	});
	
	$('#NavRight').css({
		top:(actualHeight-(45*widthPercentage))+"px", 
		left:(380*widthPercentage)+"px",
		visibility: "hidden"
	});
	
	$('#NavUp').css({
		top:(actualHeight-(58*widthPercentage))+"px", 
		left:(354*widthPercentage)+"px",
		visibility: "hidden"
	});
	
	$('#RemoveMagnify').css({
		top:(actualHeight-(45*widthPercentage))+"px", 
		left:(10*widthPercentage)+"px",
		visibility: "hidden",
		position:"absolute"
	});
	
	$('#Magnify').css({
		top:(actualHeight-(45*widthPercentage))+"px", 
		left:(10*widthPercentage)+"px",
		visibility: "hidden",
		position:"absolute"
	});
	
	$('#bar').css({
		top:(actualHeight-(38*widthPercentage))+"px", 
		left:(20*widthPercentage)+"px",
		width:315+"px",
		height:15+"px",
		visibility: "hidden"
	});
	
	$('#sliderParent').css({
		top:(actualHeight-(44*widthPercentage))+"px", 
		left:(40*widthPercentage)+"px",
		width:(295*widthPercentage)+"px",
		visibility: "hidden"
	});
	$('#slider').css({
		top:(0)+"px", 
		left:(0)+"px",
		visibility: "hidden"
	});
	
	$('#Magnify').bind("mouseover",function () {
		$('#Magnify').css('cursor', 'pointer');
	});
	
	$('#RemoveMagnify').bind("mouseover",function () {
		$('#RemoveMagnify').css('cursor', 'pointer');
	});
	
	$('#bar').bind("mouseover",function () {
		$('#bar').css('cursor', 'pointer');
	});
	
	$('#slider').bind("mouseover",function () {
		$('#slider').css('cursor', 'pointer');
	});
	
	$('#NavDown').bind("mouseover",function () {
		$('#NavDown').css('cursor', 'pointer');
	});
	
	$('#NavLeft').bind("mouseover",function () {
		$('#NavLeft').css('cursor', 'pointer');
	});
	
	$('#NavUp').bind("mouseover",function () {
		$('#NavUp').css('cursor', 'pointer');
	});
	
	$('#NavRight').bind("mouseover",function () {
		$('#NavRight').css('cursor', 'pointer');
	});
	
	$('#imagezoomwdgt').css('-webkit-user-select', 'none');
	$('#imagezoomwdgt').css('-ms-user-select', 'none');
	$('#imagezoomwdgt').css('-moz-user-select', 'none');
	$('#imagezoomwdgt').css('-o-user-select', 'none');
}

function enableSliderOptions(){
	sliderExceedFlag  =false;
	sliderFlag=1;
	windowX = 0;
	windowY = 0;
		
	var removeMagRight=(parseInt($("#RemoveMagnify").position().left)+parseInt($("#RemoveMagnify").width()*widthPercentage));
	var barRight=(parseInt($("#bar").position().left)+parseInt($("#bar").width()*widthPercentage));
	slideMin=removeMagRight+5;
	slideMax=barRight-parseInt($("#slideParent").width()*widthPercentage);
	previoueSlider =(parseInt($('#slider').position().left)); 
	zoomFlag=true;
	sliderMaxRight=parseInt($("#bar").width()*widthPercentage)+(10*widthPercentage);
	
	 $( "#slider" ).draggable({ axis: "x", containment : [slideMin,0,sliderMaxRight,0] });
}

 $('#Magnify').click(function () {
 		$(this).css("visibility", "hidden");
		$('#NavDown').css("visibility", "visible");
		$('#NavLeft').css("visibility", "visible");
		$('#NavUp').css("visibility", "visible");
		$('#NavRight').css("visibility", "visible");
		$('#RemoveMagnify').css("visibility", "visible");
		$('#bar').css("visibility", "visible");
		$('#slider').css({
			top:(0)+"px", 
			left:(0)+"px",
			visibility: "visible"
		});
		
		enableSliderOptions();
 });
 
 $('#RemoveMagnify').click(function () {
		$(this).css("visibility", "hidden");
		$('#bar').css("visibility", "hidden");
		$('#NavDown').css("visibility", "hidden");
		$('#NavLeft').css("visibility", "hidden");
		$('#NavUp').css("visibility", "hidden");
		$('#NavRight').css("visibility", "hidden");
		$('#slider').css("visibility", "hidden");
		$("#slideParent").css("display","none");
		$("#slider").css({top:"0px", left:"0px"});
		$('#Magnify').css("visibility", "visible");
		currentScale=minScale;
		diff=1;
		zoomFlag=false;
		drawScreen();
		
 });
 
$("#ex1").mouseup(function(evt){
	flag = false;
}).mouseover(function(evt){
	var tempcurrX = parseInt(evt.pageX - $(evt.target).offset().left);
	var tempcurrY = parseInt(evt.pageY - $(evt.target).offset().top);
	if(tempcurrX<=windowWidth && tempcurrY<=windowHeight){
		$('#ex1').css('cursor', 'pointer');
	}
}).mouseout(function(evt){
	$('#ex1').css('cursor', 'default');
   evt.preventDefault();
   $("#ex1").trigger("mouseup");
}).mousedown(function(evt){
	
	var tempcurrX = parseInt(evt.pageX - $(evt.target).offset().left);
	var tempcurrY = parseInt(evt.pageY - $(evt.target).offset().top);
	if(tempcurrX<=windowWidth && tempcurrY<=(windowHeight-30)){
		$('#ex1').css('cursor', 'pointer');
		$('#NavUp').css('pointer-events', 'auto');
		$('#NavDown').css('pointer-events', 'auto');
		$('#NavLeft').css('pointer-events', 'auto');
		$('#NavRight').css('pointer-events', 'auto');
		flag = true;
		preX =parseInt(evt.pageX - $(evt.target).offset().left-1);
		preY =parseInt(evt.pageY - $(evt.target).offset().top-1);
	}
}).mousemove(function(evt){
	//Only for mouse cursor
	var tempcurrX = parseInt(evt.pageX - $(evt.target).offset().left);
	var tempcurrY = parseInt(evt.pageY - $(evt.target).offset().top);
	if(tempcurrX<=windowWidth && tempcurrY<=windowHeight){
		$('#ex1').css('cursor', 'pointer');
	}else{
		$('#ex1').css('cursor', 'default');
	}
	
	//Main code
	if(flag){
		$('#ex1').css('cursor', 'pointer');
		 currX = parseInt(evt.pageX - $(evt.target).offset().left);
		 currY = parseInt(evt.pageY - $(evt.target).offset().top);
		if((currY!=preY) || (currX!=preX)){
			if ((windowY-(currY-preY)/currentScale)
			 < (photoHeight  - windowHeight/currentScale)
			 && (windowY-(currY-preY)/currentScale>=0) 
			 && (windowX-(currX-preX)/currentScale)
			 < (photoWidth - windowWidth/currentScale) 
			 && (windowX-(currX-preX)/currentScale>=0)){
				  
				windowY =Math.round(windowY-(currY-preY)/currentScale);
				windowX =Math.round(windowX-(currX-preX)/currentScale);
			 } 
		}
		drawScreen();
		preX=currX;
		preY=currY;
	}
});


 
$('#ex1').bind('touchend', function(evt) { 
	evt.preventDefault();
	flag = false;
	 
});
		
$('#ex1').bind('touchstart', function(evt){
	clearInterval(mousePress);
	evt.preventDefault();
	
	preX =parseInt(evt.originalEvent.touches[0].pageX - $(evt.target).offset().left-1);
	preY =parseInt(evt.originalEvent.touches[0].pageY - $(evt.target).offset().top-1);
	
	//alert(windowY)
	if(preY<=(windowHeight-30)){
		flag = true;
	}
});
		
		
$('#ex1').bind('touchmove', function(evt){
	evt.preventDefault();
	//Main code
	if(flag){
		$('#ex1').css('cursor', 'pointer');
		 currX = parseInt(evt.originalEvent.touches[0].pageX - $(evt.target).offset().left);
		 currY = parseInt(evt.originalEvent.touches[0].pageY - $(evt.target).offset().top);
		 //alert(evt.originalEvent.touches[0].pageY,$(evt.target).offset().left)
		if((currY!=preY) || (currX!=preX)){
			if ((windowY-(currY-preY)/currentScale)
			 < (photoHeight  - windowHeight/currentScale)
			 && (windowY-(currY-preY)/currentScale>=0) 
			 && (windowX-(currX-preX)/currentScale)
			 < (photoWidth - windowWidth/currentScale) 
			 && (windowX-(currX-preX)/currentScale>=0)){
				  
				windowY =Math.round(windowY-(currY-preY)/currentScale);
				windowX =Math.round(windowX-(currX-preX)/currentScale);
			 } 
		}
		drawScreen();
		preX=currX;
		preY=currY;
	}
});




 //$( "#slider" ).draggable({ containment: "parent" });
 
 
 $('#slider').draggable({
	start: function(e, ui) {
	},
	drag: function(e, ui) {	
		sliderDrag(e,false);
	},
	stop: function(e, ui) {
		////console.log("slider stopped");
		sliderFlag=2;
	}
})
	
	
function sliderDrag(e, touchSet){
	if(!zoomFlag || !touchMoveFlag)
		return;
	
	var getPageX;
	var getPageY;
	if(touchSet){
		getPageX = e.originalEvent.touches[0].pageX
		getPageY = e.originalEvent.touches[0].pageY
	} else{
		getPageX = e.pageX
		getPageY = e.pageY
	}
	
	if(getPageX > actualWidth || getPageY > actualHeight || getPageX< 0 || getPageY <0){
		$("#slider").trigger("mouseup");
		if(e.target.id=='sliderParent')	{
			$("#sliderParent").trigger("touchcancel");
			$("#sliderParent").trigger("touchend");
			touchMoveFlag=false;
		}
		return;
	}
	if(e.target.id=='sliderParent'){
		var sliderTempLeft=(parseInt(getPageX - $("#sliderParent").offset().left)-($("#slider").width()*widthPercentage)/2);
		if(getPageX>sliderMaxRight)	{
			sliderTempLeft=sliderMaxRight;
			$("#sliderParent").trigger("touchcancel");
			return;
		}
		$('#slider').css({"left": sliderTempLeft +"px", "position":"absolute"});			
	}
	
	sliderFlag=2;
	
	if((parseInt($("#slider").offset().left))<=(parseInt($("#RemoveMagnify").offset().left)+(parseInt($("#RemoveMagnify").width()*widthPercentage))) && sliderFlag==2){
		zoomFlag=false;
		//	$(this).attr("style", "visibility: hidden");
		$('#slider').css("visibility", "hidden");
		$('#bar').css("visibility", "hidden");
		$('#NavDown').css("visibility", "hidden");
		$('#NavLeft').css("visibility", "hidden");
		$('#NavUp').css("visibility", "hidden");
		$('#NavRight').css("visibility", "hidden");
		$('#RemoveMagnify').css("visibility", "hidden");
		$("#slideParent").css("display","none");
		$('#Magnify').css("visibility", "visible");
		//$('#Magnify').css({"left": 10 +"px", "top": (parseInt($("#iconsDiv").height())-parseInt($("#Magnify").height())-30)+"px", "position":"absolute"});
		currentScale=minScale;
		windowX=0;
		windowY=0;
		drawScreen();
	}else{
		currentSlider = parseInt($("#slider").offset().left);
		var tempSlideMax=slideMax;
		scaleIncrement = ((parseInt(currentSlider)-parseInt(slideMin))/(slideMax-slideMin))*diffScale;
		if(parseInt(currentSlider)!=parseInt(previoueSlider)){
			////console.log("currentSlider ",currentSlider, " previoueSlider ",previoueSlider);
		if ((minScale+scaleIncrement)<minScale){
			//////console.log("when current scale becomes minscale");
			currentScale = minScale;
		}else if ((minScale+scaleIncrement)>=maxScale){
			////console.log("when current scale becomes maxscale");
			currentScale = maxScale;
		}else if(currentSlider<previoueSlider){
			currentScale=minScale+scaleIncrement;
			croppedWidth = windowWidth/currentScale;
			croppedHeight = windowHeight/currentScale;
			//////console.log("otherwise when scale is changing");
			if( (windowX + croppedWidth) < photoWidth ){
				windowX = windowX;
			}else{
				if( (windowX + croppedWidth) >= photoWidth ){
					windowX = photoWidth - (croppedWidth);
				}else{
					windowX=0;
				}
			}
			
			if( (windowY+croppedHeight) < photoHeight){
				windowY = windowY;
			}else if( (windowY+croppedHeight) >= photoHeight ){
				windowY = photoHeight - (croppedHeight);
			}else{
				windowY=0;
			}
		}else if(currentSlider>=previoueSlider)	{
			currentScale=minScale+scaleIncrement;
			}
		}
		previoueSlider = currentSlider;
		drawScreen();
	}	
}


$('#slider').bind('touchstart', function(e){
    e.preventDefault();
	e.stopPropagation();
	touchMoveFlag=true;
    var touch = e.originalEvent.changedTouches[0];
	////console.log("touch start "+touch.pageX + " - " + touch.pageY);
    
	//sliderSnap(touch);
	
});

$('#sliderParent').bind('touchmove', function(e){
	e.preventDefault();
	clearInterval(mousePress);
	var touch = e.originalEvent.touches[0]
	// alert(touch.pageX + " - " + touch.pageY);
	console.log(touch.pageX,slideMax,slideMin,sliderMaxRight)
	if(touch.pageX<(sliderMaxRight+10)){
		if(touch.pageX<(slideMin+10)){
			zoomFlag=false;
		//	$(this).attr("style", "visibility: hidden");
		$('#slider').css("visibility", "hidden");
		$('#bar').css("visibility", "hidden");
		$('#NavDown').css("visibility", "hidden");
		$('#NavLeft').css("visibility", "hidden");
		$('#NavUp').css("visibility", "hidden");
		$('#NavRight').css("visibility", "hidden");
		$('#RemoveMagnify').css("visibility", "hidden");
		$("#slideParent").css("display","none");
		$('#Magnify').css("visibility", "visible");
		//$('#Magnify').css({"left": 10 +"px", "top": (parseInt($("#iconsDiv").height())-parseInt($("#Magnify").height())-30)+"px", "position":"absolute"});
		currentScale=minScale;
		windowX=0;
		windowY=0;
		drawScreen();
		}else{
			sliderSnap(touch);
		}
	}
	//////console.log("touch move "+touch.pageX + " - " + touch.pageY);
});

$('#sliderParent').bind('touchend', function(e){
    e.preventDefault();
    var touch = e.originalEvent.changedTouches[0];
	if(touch.pageX<(sliderMaxRight+10)){
		if(touch.pageX<(slideMin+10)){
			zoomFlag=false;
		//	$(this).attr("style", "visibility: hidden");
		$('#slider').css("visibility", "hidden");
		$('#bar').css("visibility", "hidden");
		$('#NavDown').css("visibility", "hidden");
		$('#NavLeft').css("visibility", "hidden");
		$('#NavUp').css("visibility", "hidden");
		$('#NavRight').css("visibility", "hidden");
		$('#RemoveMagnify').css("visibility", "hidden");
		$("#slideParent").css("display","none");
		$('#Magnify').css("visibility", "visible");
		//$('#Magnify').css({"left": 10 +"px", "top": (parseInt($("#iconsDiv").height())-parseInt($("#Magnify").height())-30)+"px", "position":"absolute"});
		currentScale=minScale;
		windowX=0;
		windowY=0;
		drawScreen();
		}else{
			sliderSnap(touch);
		}
	}
	
});

$('#sliderParent').bind('touchcancel', function(e){
    e.preventDefault();
    var touch = e.originalEvent.changedTouches[0];
	////console.log("touch cancel "+touch.pageX + " - " + touch.pageY);

	//sliderSnap(touch);
	
});
/*$("#sliderParent").mousedown(function (evt){
	////console.log("slider Parent mouse down");
	
	
	});*/
$("#sliderParent").click(function (evt) {
	sliderSnap(evt);
});
$("#bar").click(function (evt) {
	sliderSnap(evt);
});

function sliderSnap(evt) { 
	if(!zoomFlag || !touchMoveFlag)
	return;
	var barWidth, barLeft;
	
	$('#slider').css({"left": (parseInt(evt.pageX - $("#sliderParent").offset().left)-($("#slider").width()*widthPercentage)/2) +"px", "position":"absolute"});

	currentSlider = parseInt($("#slider").offset().left);
	//////console.log("slider left ",parseInt($("#slider").offset().left));
	$("#sliderParent").height($("#slider").height());
	scaleIncrement = ((parseInt(currentSlider)-parseInt(slideMin))/(slideMax-slideMin))*diffScale;
	
	if(parseInt(currentSlider)!=parseInt(previoueSlider)){
		////////console.log("before -- currentScale : "+currentScale+" croppedWidth : "+croppedWidth+" croppedHeight : "+croppedHeight+" windowX : "+windowX+" windowY : "+windowY);
		if ((minScale+scaleIncrement)<minScale){
			currentScale = minScale;
		} else if ((minScale+scaleIncrement)>=maxScale){
			currentScale = maxScale;
		} else if(currentSlider<previoueSlider){
			currentScale=minScale+scaleIncrement;
			croppedWidth = windowWidth/currentScale;
			croppedHeight = windowHeight/currentScale;
			if( (windowX + croppedWidth) < photoWidth ){
				windowX = windowX;
			}else if( (windowX + croppedWidth) >= photoWidth ){
				windowX = photoWidth - (croppedWidth);
			}else{
				windowX=0;
			}
		
			if( (windowY+croppedHeight) < photoHeight){
				windowY = windowY;
			}else if( (windowY+croppedHeight) >= photoHeight ){
				windowY = photoHeight - (croppedHeight);
			}else{
				windowY=0;
			}
		}else if(currentSlider>=previoueSlider)	{
			currentScale=minScale+scaleIncrement;
		}
		////////console.log("after -- currentScale : "+currentScale+" croppedWidth : "+croppedWidth+" croppedHeight : "+croppedHeight+" windowX : "+windowX+" windowY : "+windowY);
	}
	previoueSlider = currentSlider;
	drawScreen();
//////console.log("after drawScreen -- currentScale : "+currentScale+" croppedWidth : "+croppedWidth+" croppedHeight : "+croppedHeight+" windowX : "+windowX+" windowY : "+windowY);
}

$('#NavDown').bind("mousedown",function () {
	mousePress=setInterval(moveDown,100);
});
$('#NavDown').bind("mouseup",function () {
	clearInterval(mousePress);
});
$('#NavDown').bind("mouseout",function () {
	clearInterval(mousePress);
	//$('#NavDown').css('pointer-events', 'auto');
});

//Implementation for devices
$('#NavDown').bind("touchstart",function (evt) {
	clearInterval(mousePress);
	evt.preventDefault()
	evt.stopPropagation()	
	mousePress=setInterval(moveDown,100);
	$('#NavDown').css('pointer-events', 'none');
});
$('#NavDown').bind("touchend",function () {
  clearInterval(mousePress);
  $('#NavDown').css('pointer-events', 'auto');
});

function moveDown(){
	windowY+=(20*currentScale);
	if (windowY> (photoHeight  - windowHeight/currentScale)){
	   windowY = windowY-10;
	   if((photoHeight  - windowHeight/currentScale)!=0){
			setTimeout(clearInter(),100)
			windowY= (photoHeight  - windowHeight/currentScale)
			$('#NavDown').css('pointer-events', 'none');;
	   }
	}
	if (windowY<=0){
		windowY = 0;
	}
	drawScreen();
	$('#NavUp').css('pointer-events', 'auto');	
}

function clearInter(){
	clearInterval(mousePress)
}
$('#NavUp').bind("mousedown",function () {
   mousePress=setInterval(moveUp,100);
});

$('#NavUp').bind("mouseup",function () {
  clearInterval(mousePress);
});
$('#NavUp').bind("mouseout",function () {
  clearInterval(mousePress);
});

//Implementation for devices
$('#NavUp').bind("touchstart",function (evt) {
	clearInterval(mousePress);
	evt.preventDefault()
	evt.stopPropagation()
	mousePress=setInterval(moveUp,100);
	$('#NavUp').css('pointer-events', 'none');
});
$('#NavUp').bind("touchend",function () {
	clearInterval(mousePress);
	$('#NavUp').css('pointer-events', 'auto');
});

function moveUp(){
	windowY-=(20*currentScale);
	if (windowY<0){
		setTimeout(clearInter(),100)
		windowY = 0;
		$('#NavUp').css('pointer-events', 'none');
	}
	drawScreen();
	$('#NavDown').css('pointer-events', 'auto');	
}


$('#NavLeft').bind("mousedown",function () {
   mousePress=setInterval(moveLeft,100);
});
$('#NavLeft').bind("mouseup",function () {
  clearInterval(mousePress);
});
$('#NavLeft').bind("mouseout",function () {
  clearInterval(mousePress);
});


//Implementation for devices
$('#NavLeft').bind("touchstart",function (evt) {
	clearInterval(mousePress);
	evt.preventDefault()
	evt.stopPropagation()
	mousePress=setInterval(moveLeft,100);
	$('#NavLeft').css('pointer-events', 'none');
});
$('#NavLeft').bind("touchend",function () {
	clearInterval(mousePress);
	$('#NavLeft').css('pointer-events', 'auto');
});

function moveLeft(){
	windowX-=(20*currentScale);
	if (windowX<0){
		 setTimeout(clearInter(),100)
		windowX = 0;
		$('#NavLeft').css('pointer-events', 'none');
	}
	drawScreen();
	$('#NavRight').css('pointer-events', 'auto');
}

$('#NavRight').mousedown(function () {
   mousePress=setInterval(moveRight,100);
});
$('#NavRight').mouseout(function () {
  clearInterval(mousePress);
});
$('#NavRight').mouseup(function () {
  clearInterval(mousePress);
});

//Implementation for devices
$('#NavRight').bind("touchstart",function (evt) {
	clearInterval(mousePress);
	evt.preventDefault()
	evt.stopPropagation()	
	mousePress=setInterval(moveRight,100);
	$('#NavRight').css('pointer-events', 'none');
});
$('#NavRight').bind("touchend",function () {
	clearInterval(mousePress);
	$('#NavRight').css('pointer-events', 'auto');
});

function moveRight(){
	windowX+=(20*currentScale);
	if (windowX> (photoWidth - windowWidth/currentScale)){
		windowX = windowX-10;
		 if((photoWidth - windowWidth/currentScale)!=0){
			setTimeout(clearInter(),100)
			windowX= (photoWidth - windowWidth/currentScale)
			$('#NavRight').css('pointer-events', 'none');
		 }
	}
	if (windowX<=0){
		windowX = 0;
	}
	drawScreen();
	$('#NavLeft').css('pointer-events', 'auto');
}

function eventPhotoLoaded() {
	//$('body').remove("#animationImage");
	document.body.removeChild(document.getElementById("animationImage"));
	canvas  = document.getElementById("ex1");
	context = canvas.getContext("2d");
	
	var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
	
	var myFrameName = window.name;
	
	myWidgetiFrame = window.parent.document.getElementById(window.name);
	
	if(myWidgetiFrame){
		var canvasWidth=myWidgetiFrame.parentElement.parentElement.style.width;
		var canvasHeight= myWidgetiFrame.parentElement.parentElement.style.height;
		canvas.style.height = canvasHeight;
		
		canvas.style.width =canvasWidth;
	}
	
	
	if(photoWidth > photoHeight){
		index= photoWidth/400;
	}else{ 
		index = photoHeight / 400;
	}
	windowWidth = photoWidth/index;
	windowHeight = photoHeight / index;
	
	var index1; 
	if(photoWidth > photoHeight){
		index1= photoWidth/parseInt(canvasWidth);
	}else{ 
		index1 = photoHeight / parseInt(canvasHeight); 
	}
	
	var divWidth, divHeight;
	if(photoWidth>photoHeight){
		divWidth=canvasWidth;
		divHeight=divHeight = photoHeight / index1;
	}else{
		divHeight=canvasHeight;
		divWidth=photoWidth/index1;
	}
	
	
	if(windowWidth < photoWidth){
		currentScale = windowWidth/photoWidth;
	}else {
		currentScale = photoWidth/windowWidth;
	}
	
	minScale = currentScale;   
	//maxScale = minScale*3;
	
	if((minScale*3)>1){
		maxScale = minScale*3;
	}else{
		maxScale=1;
	}
	diffScale=maxScale-minScale;
	
	
	////console.log("minScale",minScale," maxScale ", maxScale);
	//$("#iconsDiv").css("visibility","visible").width(divWidth).height(divHeight);
	$("#iconsDiv").css("visibility","visible");
	//$("#ex1").css("visibility","visible").width(divWidth).height(divHeight);
	
	
	drawScreen();
	//$('#Magnify').css({"left": 10 +"px", "top": (parseInt($("#iconsDiv").height())-parseInt($("#Magnify").height())-30)+"px"});
	$('#Magnify').css("visibility", "visible");
}

function drawScreen(){
	 if(diff==1){
		context.clearRect(0,0,windowWidth,windowHeight);
		context.drawImage(photo, 0, 0, photoWidth, photoHeight,0,0,windowWidth,windowHeight);
		diff++;
	 }else{
		context.clearRect(0,0,windowWidth,windowHeight);
		//////console.log("currentScale ",currentScale);
		context.drawImage(photo, windowX, windowY, Math.floor(windowWidth/currentScale),
		Math.floor(windowHeight/currentScale),0,0,windowWidth,windowHeight);
	 }
}

document.onkeydown = function(e){

   e = e?e:window.event;
   
	  
   switch (e.keyCode){
      case 38:
            //up
            windowY-=10;
            if (windowY<0){
               windowY = 0;
            }
            break;
      case 40:
            //down
            windowY+=10;
            if (windowY> (photoHeight  - windowHeight/currentScale)){
				
               
			   windowY =windowY-10;
            }
            break;
      case 37:
            //left
            windowX-=10;
            if (windowX<0){
               windowX = 0;
            }
            break;
      case 39:
            //right
            windowX+=10;
            if (windowX> (photoWidth - windowWidth/currentScale)){
             
			   windowX =windowX-10;
            }
            break;
     
   }

 
  drawScreen();
 }


function playbarinit() {
	
}

playbarUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		captivateMovie =  this.captivate;
		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		this.eventDisp = this.movieProps.eventDispatcher;
		varHand = this.movieProps.variablesHandle;
		//this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		mainCPNamespace = this.movieProps.getCpHandle();
		isResponsiveProject = mainCPNamespace.responsive;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.currentTheme
		
		var size = this.OpenAjax.getSize()
		width = size.width;
		height = size.height;

		movieWidth = parseInt(size.width.split("px")[0]);
		movieHeight = parseInt(size.height.split("px")[0]);
			
		
		//Captivate Event listener
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			
		this.updateData();
		//eventPhotoLoaded();
		this.changeDiv();
		this.addAnimation(); 
		this.doUpdate();      
		cpMovie = parent.cp.movie;                    
		
	},

	updateData: function()
	{
	
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		
		
		if(initresult.getElementById('internalImageId'))
		{	// Firefox, Opera, Google Chrome and Safari
		
		var x = initresult.getElementById('internalImageId');
		
		imageId= $(x).find('number').text();
		internalImage = this.movieProps.ExternalResourceLoader.getResourcePath(imageId);
		photo.src=internalImage;
		
		photoHeight=parseInt($(initresult.getElementById('l_orgHeight')).find('number').text());
		
		
		photoWidth=parseInt($(initresult.getElementById('l_orgWidth')).find('number').text());
		//$("photo.src");
		
	
	
		 }
		 else{
		
		 //For IE
		var x=initresult.getElementsByTagName("array")[0];
		var y = x.getElementsByTagName("number")[0];
		imageId= y.childNodes[0].data;
		internalImage = this.movieProps.ExternalResourceLoader.getResourcePath(imageId);
		photo.src=internalImage;
		
		
		var imageType=initresult.getElementsByTagName("string")[0].childNodes[0].data;
		var dim=new Array();
		for (var i=0; i<3; i++)
		{
			dim[i]=initresult.getElementsByTagName("number")[i].childNodes[0].data;
			
		};
		var finalDim=new Array();
		var k=0, n=0;
		for(var i=0; i<3; i++)
		{
			if(dim[i]==imageId)
				{n++;}
			else
				{finalDim[k] = parseInt(dim[i]); k++; }
				
			if(dim[i]==imageId && n>1)
			{finalDim[k] = parseInt(dim[i]); k++; }
			
			
			
		}
	
		
		if(imageType=="Landscape")
			{
				(finalDim[0]>finalDim[1])?(photoWidth=finalDim[0], photoHeight=finalDim[1]):(photoWidth=finalDim[1], photoHeight=finalDim[0]);
			}
			
		if(imageType=="Portrait")
			{
				(finalDim[0]>finalDim[1])?(photoWidth=finalDim[1], photoHeight=finalDim[0]):(photoWidth=finalDim[0], photoHeight=finalDim[1]);
			}
		
		}
       
		canvasLeftAndTop = parseInt($(document.body).css("margin"));
		if(isNaN(canvasLeftAndTop))
			canvasLeftAndTop = 8;
		$("#ex1").css({top:-canvasLeftAndTop,left:-canvasLeftAndTop,position:'absolute'});
	
	},
	changeDiv : function()
	{
        myWidgetiFrame = window.parent.document.getElementById(window.name);
		
        if(myWidgetiFrame){
			var iFrameWidth=parseInt(myWidgetiFrame.parentElement.parentElement.style.width);
			var iFrameHeight=parseInt( myWidgetiFrame.parentElement.parentElement.style.height);
        }
		if(photoWidth > photoHeight)
		{
			//$("#iconsDiv").width(iFrameWidth);
			//$("#iconsDiv").height(iFrameHeight * photoHeight/photoWidth)
		}
		else
		if(photoWidth < photoHeight)
		{
			//$("#iconsDiv").width(iFrameWidth * photoWidth/photoHeight);
			//$("#iconsDiv").height(iFrameHeight)
		}
		else
		{
			//$("#iconsDiv").width(iFrameWidth);
			//$("#iconsDiv").height(iFrameHeight)
		}

		if(photoWidth>photoHeight)
		{
			actualWidth = Math.floor(iFrameWidth);
			actualHeight = Math.floor(iFrameHeight * photoHeight / photoWidth);
		}
		else
		if(photoWidth>photoHeight)
		{
			actualHeight = Math.floor(iFrameHeight);
			actualWidth = Math.floor(iFrameWidth * photoWidth / photoHeight);
		}
		else
		{
			actualWidth = Math.floor(iFrameWidth);
			actualHeight = Math.floor(iFrameHeight);
		}
		////console.log("actualWidth : "+actualWidth+" actualHeight : "+actualHeight);
	},
	addAnimation : function()
	{
		animationImage = $('<img id="animationImage" src="images/loadingGIF.gif" style="position:absolute;top:'+(actualHeight/2-24)+'px;left:'+(actualWidth/2-24)+'px;z-index:100"/>');
		$('body').prepend(animationImage);
	},
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		initSetup() 
		
	}
};

playbar_use = function ()
{
	return playbarUse1;
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}

function resizeInteraction(thewidth, theheight) {
	console.log("resizeInteraction")
	var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    } else{
        scale = theheight / (movieHeight);
    }
	var holdScale = scale
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
    $('#imagezoomwdgt').css('-webkit-transform', scale);
    $('#imagezoomwdgt').css('-moz-transform', scale);
    $('#imagezoomwdgt').css('-o-transform', scale);
    $('#imagezoomwdgt').css('-ms-transform', scale);
    $('#imagezoomwdgt').css('-webkit-transform-origin', '0 0');
	$('#imagezoomwdgt').css('-moz-transform-origin', '0 0');
    $('#imagezoomwdgt').css('-o-transform-origin', '0 0');
    $('#imagezoomwdgt').css('-ms-transform-origin', '0 0');
	$('#imagezoomwdgt').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
}
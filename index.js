setInterval($('#slide').cycle(), 100);

$("#mapnav").click(function(){
	if($("#mapnav").hasClass("nabla")){
		$("#mapnav").html("&nbsp; MAP &Delta; &nbsp;");
		$("#mapnav").removeClass("nabla");
		$("#mapmenu").css("display", "block");
		
	}else{
		$("#mapnav").html("&nbsp; MAP &nabla; &nbsp;");
		$("#mapnav").addClass("nabla");
		$("#mapmenu").css("display", "none");
	}
});
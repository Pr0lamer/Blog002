$('#search').mouseenter(function(){
	$('#menwr').removeClass("col-lg-offset-3");
	$( "#search" ).removeClass( "col-lg-1" ).addClass("col-lg-4");
	$('.search').css( "display", "inline-block" );
});

$('#search').mouseleave(function(){
	$('#menwr').addClass("col-lg-offset-3");
	$( "#search" ).addClass( "col-lg-1" ).removeClass("col-lg-4");
	$('.search').css( "display", "none" );
});
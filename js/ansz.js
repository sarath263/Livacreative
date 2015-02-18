$(document).ready(function() {
	var wht = $(window).height();
    var wwd = $(window).width();

	var wheight = 3*wwd/100;
	var height = $('#prfl').height();
	var width = $('#prfl').width();
	$('#prfl').attr("style","padding-top: "+wheight/2+"px; margin-top: -"+height/2+"px; ");

	var ht = $('.home').height();
	var btpad=wht/2;
	btpad=btpad-(2*ht/3);
	$('.home').attr("style","padding-top: "+wht/2+"px;  margin-top: -"+ht/3+"px; padding-bottom: "+btpad+"px;");
});
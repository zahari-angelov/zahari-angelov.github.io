$(document).ready(function () {
	function aOne(){
	$('body').addClass('animation-1');
	setTimeout(aTwo, 5000);
	}
	function aTwo(){
	$('body').removeClass('animation-1');
	$('body').addClass('animation-2');
	setTimeout(aThree, 6000);
	}
	function aThree(){
	$('body').removeClass('animation-2');
	$('body').addClass('animation-3');
	setTimeout(aFour, 3000);
	}
	function aFour(){
	$('body').removeClass('animation-3');
	$('body').addClass('animation-4');
	setTimeout(aFiveAndSix, 3000);
	}
	function aFiveAndSix(){
	$('body').removeClass('animation-4');
	$('body').addClass('animation-5');
	$('body').addClass('animation-6');
	setTimeout(aSeven, 12000);
	}
	function aSeven(){
	$('body').removeClass('animation-5');
	$('body').removeClass('animation-6');
	$('body').addClass('animation-7');
	setTimeout(aEight, 3000);
	}
	function aEight(){
	$('body').removeClass('animation-7');
	$('body').addClass('animation-8');
	}
	aOne();
});	
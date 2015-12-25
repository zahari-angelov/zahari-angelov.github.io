$(document).ready(function () {
	$(".pagination a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find(".selected").removeClass("selected");
		$(this).addClass("selected");
		updateSlideshowForSelectedPage();
	});
	function updateSlideshowForSelectedPage() {
    var index = $(".pagination .selected").parent().index(),
        classIndex = parseInt(index+1, 10);
        console.log(index);
    $("body").attr("class", "active" + classIndex);
    
    $("#spinners .selected").removeClass("selected");
    $("#spinners li:nth-child(" + classIndex + ")").addClass("selected");
  }
});	
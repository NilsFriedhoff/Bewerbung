	$(document).ready(function(){
		$(".dropdown").on("click", function(){
			console.log(this);
			$(this).addClass("backtoblack");
		});
	});
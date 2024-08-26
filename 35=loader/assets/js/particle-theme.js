

$(document).ready(function () {

	$("body").prepend('<div class="pre-loader"><div class="loader-item"></div></div>');


	setTimeout(function () {
		$(".pre-loader").addClass("is-inactive");
	}, 1000);

	

});

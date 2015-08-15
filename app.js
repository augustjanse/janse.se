var main = function() {
	var angle = 0;
	$(".profile-pic").click(function() {
		angle += 180;
		$(this).rotate({animateTo: angle});
	});
};

$(document).ready(main);

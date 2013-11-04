$(function() {
    var x = $('#header-nav a[href="/' + location.pathname.split("/")[1] + '"]');
    if (x.length != 0) {
	x.addClass('active');
    }
    else {
	$('#header-nav a[href="/"]').addClass('active');
    }
});

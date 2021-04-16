jQuery(document).ready(function() {
	jQuery('.header__burger').click(function(event) {
        jQuery('.header__burger, .header__menu').toggleClass('active');
        jQuery('body').toggleClass('lock');
	});
});
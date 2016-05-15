window.onload = function() {
	var mobileNav = document.getElementById('mobileNavButton');
	var sideMenu = document.getElementById('sideMenu');

	if (mobileNav && sideMenu) {
		mobileNav.onclick = function() {
			sideMenu.classList.toggle('mobile-display');
		};
	}
}
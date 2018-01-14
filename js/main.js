var acceptBtn = document.getElementById('acceptBtn');
var navItems = document.querySelector('.nav-options');

acceptBtn.addEventListener('click', closeCookies);

function closeCookies(){
	document.getElementById('cookies').style.display ='none';
}

window.onload=function(){
	setTimeout(showCookies, 2000);/*tras 2s de cargar la pagin ejecuta showCookies*/
};
function showCookies(){
	document.getElementById("cookies").classList.add('show_cookies');
}

function hideMenu(){
	var navigationMenu = document.getElementById('navbarResponsive');
	navigationMenu.classList.remove('show');
	navigationMenu.classList.add('collapse');
}
navItems.addEventListener('click', hideMenu);

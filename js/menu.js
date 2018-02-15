'use strict';

var navItems = document.querySelector('.nav-options');

function hideMenu(){
	var navigationMenu = document.getElementById('navbarResponsive');
	navigationMenu.classList.remove('show');
	navigationMenu.classList.add('collapse');
}
navItems.addEventListener('click', hideMenu);

'use strict';

//para animar el hero cuando la pagina cargue
// Variables
var body = document.querySelector('body');
var hero = document.querySelector('.block_header');

// Functions
function pageLoaded() {
	hero.classList.add('page_load');
};
// Magic
setTimeout(pageLoaded, 200);
//menu, cambiar class active

var navItem = document.querySelectorAll(".nav-item")
// Functions

function removeActiveClass() {
	for(var i=0; i<navItem.length; i++) {
	navItem[i].classList.remove('active');
	}
};

function addActiveClass(event) {
	removeActiveClass();
	event.currentTarget.classList.add('active');
}

for(var i=0; i<navItem.length; i++) {
	navItem[i].addEventListener('click', addActiveClass);
}

// Magic
setTimeout(pageLoaded, 200);

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

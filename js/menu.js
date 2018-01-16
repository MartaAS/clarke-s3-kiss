'use strict';

var navItems = document.querySelector('.nav-options');

function hideMenu(){
	var navigationMenu = document.getElementById('navbarResponsive');
	navigationMenu.classList.remove('show');
	navigationMenu.classList.add('collapse');
}
navItems.addEventListener('click', hideMenu);
/*
//Cuando hacemos scroll se ejecuta esta función

var header = document.querySelector('.block_header');
var intro = document.querySelector('.block_intro');
var data = document.querySelector('.block__data');
var info = document.querySelector('.block-info');
var contact = document.querySelector('.block_contact');

var headerPosition = header.getBoundingClientRect();
var introPosition = intro.getBoundingClientRect();
var dataPosition = data.getBoundingClientRect();
var infoPosition = info.getBoundingClientRect();
var contactPosition = contact.getBoundingClientRect();

var navItem1 = document.querySelector('.nav-1');
var navItem2 = document.querySelector('.nav-2');
var navItem3 = document.querySelector('.nav-3');
var navItem4 = document.querySelector('.nav-4');
var navItem5 = document.querySelector('.nav-5');

var navItem = document.querySelectorAll('.nav-item');


function removeActiveClass() {
	for(var i=0; i<navItem.length; i++) {
	navItem[i].classList.remove('active');
}
};


window.addEventListener ('scroll',function (event) {
	//Definimos la variable top para saber la distancia a la que ejecutarla
	var top=this.scrollY;
	if (top<headerPosition.top)	{
			removeActiveClass();
			navItem1.classList.add('active');
	}
	if (top>=headerPosition.top)	{
			removeActiveClass();
			navItem1.classList.add('active');
	}
	if (top>=introPosition.top)	{
			removeActiveClass();
			navItem2.classList.add('active');
	}
	if (top>=dataPosition.top)	{
			removeActiveClass();
			navItem3.classList.add('active');
	}
	if (top>=infoPosition.top)	{
			removeActiveClass();
			navItem4.classList.add('active');
	}
	if (top>=contactPosition.top-100)	{
			removeActiveClass();
			navItem5.classList.add('active');
	}
})
*/
//menu, cambiar class active
//
// var navItem = document.querySelectorAll('.nav-item')
// Functions

// function removeActiveClass() {
// 	for(var i=0; i<navItem.length; i++) {
// 	navItem[i].classList.remove('active');
// }
// };
//
// function addActiveClass(event) {
// 	removeActiveClass();
// 	event.currentTarget.classList.add('active');
// }
//
// for(var i=0; i<navItem.length; i++) {
// 	navItem[i].addEventListener('click', addActiveClass);
// }
// navItem[2].addEventListener('click', chart1);

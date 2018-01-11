'use strict';
var acceptBtn = document.getElementById('acceptBtn');
acceptBtn.addEventListener('click', closeCookies);

function closeCookies(){
	document.getElementById('cookies').style.display ='none';
}

window.onload=function(){
	setTimeout(showCookies, 2000);/*tras 2s de cargar la pagin ejecuta showCookies*/
};
function showCookies(){
	document.getElementById("cookies").classList.add('show');
}

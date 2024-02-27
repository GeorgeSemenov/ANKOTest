import createNotification from '../../JS-components/createNotification.js';
$(document).ready(function(){
	const mainButton = document.querySelector('.main-screen__button');
	mainButton.addEventListener("click",()=>{createNotification({notificationText:"Данный функциона ещё не реализован",buttonText:"Жаль"})})
})

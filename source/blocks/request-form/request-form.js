$(document).ready(function(){
	const RequestFromSubmitBtn = document.getElementById("request-form-submit-button");
	RequestFromSubmitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
		createNotification({notificationText: "Данные отправленны на сервер", buttonText:"Хорошо"})
	})



})

function createNotification({notificationText = "кнопка нажата", buttonText="Хорошо"}){
	const notificationBG = document.createElement("div");
	notificationBG.style.position = "absolute";
	notificationBG.style.top = "0px";
	notificationBG.style.right = "0px";
	notificationBG.style.bottom = "0px";
	notificationBG.style.left = "0px";
	notificationBG.style.backgroundColor = "rgba(185, 185, 185, 0.6)";
	notificationBG.style.display = "flex";
	notificationBG.style.alignItems = "center";
	notificationBG.style.justifyContent = "center";
	
	const documentBodyPositionValueBeforeClickButton = document.body.style.position;
	document.body.style.position = "relative";
	document.body.appendChild(notificationBG);

	const notificationContainer = document.createElement('p')
	notificationContainer.style.textAlign = "center";
	notificationBG.appendChild(notificationContainer);

	const notificationTextContainer = document.createElement('span');
	notificationTextContainer.textContent = notificationText;
	notificationTextContainer.style.marginBottom = "10px";
	notificationContainer.appendChild(notificationTextContainer)

	const notificationCloseButton = document.createElement("button");
	notificationCloseButton.classList.add('button')
	notificationCloseButton.textContent = buttonText;
	notificationContainer.appendChild(notificationCloseButton);
}

function makeNotification(textObj){
	createNotification(textObj)

}


//удаляем элемент
// Находим ранее созданный div
// const divToRemove = document.querySelector("div");

// // Проверяем, что div существует
// if (divToRemove) {
//     // Удаляем div из его родительского элемента
//     divToRemove.parentNode.removeChild(divToRemove);
// } else {
//     console.log("Элемент не найден");
// }

// //Не забудь удалить и слушателей   removeListener
// // Создаем функцию-обработчик для события click
// function handleClick() {
//     console.log("Клик по элементу");
// }

// // Находим элемент, к которому добавлен слушатель
// const element = document.querySelector("#myElement");

// // Добавляем слушатель события click
// element.addEventListener("click", handleClick);

// // Удаляем слушатель события click
// element.removeEventListener("click", handleClick);
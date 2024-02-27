import createNotification from '../../JS-components/createNotification.js';
$(document).ready(function(){
	const RequestFromSubmitBtn = document.getElementById("request-form-submit-button");
	RequestFromSubmitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
		createNotification({notificationText: "Данные отправленны на сервер", buttonText:"Хорошо"})
	})
})

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
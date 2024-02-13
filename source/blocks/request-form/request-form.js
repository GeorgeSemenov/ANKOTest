$(document).ready(function(){
	const RequestFromSubmitBtn = document.getElementById("request-form-submit-button");
	RequestFromSubmitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
		
		const notaficationBG = document.createElement("div");
		notaficationBG.style.position = "abolute";
		notaficationBG.style.top = "0px";
		notaficationBG.style.right = "0px";
		notaficationBG.style.bottom = "0px";
		notaficationBG.style.left = "0px";
		notaficationBG.style.backgroundColor = "grey";

		document.body.appendChild(notaficationBG)
	})

})


// Создаем новый элемент div
const newDiv = document.createElement("div");

// Применяем CSS свойства к новому div
newDiv.style.width = "200px"; // Ширина 200 пикселей
newDiv.style.height = "100px"; // Высота 100 пикселей
newDiv.style.backgroundColor = "lightblue"; // Цвет фона светло-голубой
newDiv.style.border = "1px solid black"; // Граница 1 пиксель черной цветом

// Добавляем новый div на страницу
document.body.appendChild(newDiv);

//удаляем элемент
// Находим ранее созданный div
const divToRemove = document.querySelector("div");

// Проверяем, что div существует
if (divToRemove) {
    // Удаляем div из его родительского элемента
    divToRemove.parentNode.removeChild(divToRemove);
} else {
    console.log("Элемент не найден");
}

//Не забудь удалить и слушателей   removeListener
// Создаем функцию-обработчик для события click
function handleClick() {
    console.log("Клик по элементу");
}

// Находим элемент, к которому добавлен слушатель
const element = document.querySelector("#myElement");

// Добавляем слушатель события click
element.addEventListener("click", handleClick);

// Удаляем слушатель события click
element.removeEventListener("click", handleClick);
export default function createNotification({
	notificationText = "кнопка нажата",
	buttonText="Хорошо"
}){
  const notificationBG = document.createElement("div");
  notificationBG.style.position = "fixed";
  notificationBG.style.top = "0px";
  notificationBG.style.right = "0px";
  notificationBG.style.bottom = "0px";
  notificationBG.style.left = "0px";
  notificationBG.style.backgroundColor = "rgba(185, 185, 185, 0.6)";
  notificationBG.style.display = "flex";
  notificationBG.style.alignItems = "center";
  notificationBG.style.justifyContent = "center";
  notificationBG.style.zIndex = "1";
  notificationBG.addEventListener('click',closeNotification)
  
  const documentBodyPositionValueBeforeClickButton = document.body.style.position;
  document.body.style.position = "relative";
  document.body.appendChild(notificationBG);

  const notificationContainer = document.createElement('div')
  notificationContainer.style.textAlign = "center";
  notificationBG.appendChild(notificationContainer);
  notificationContainer.style.fontSize = "16px";
  notificationContainer.style.lineHeight = "24px";
  notificationContainer.style.color = "#000000";
  notificationContainer.style.backgroundColor = "white";
  notificationContainer.style.borderRadius = "15px";
  notificationContainer.style.padding= "15px";
  notificationContainer.addEventListener('click',(e)=>{e.stopPropagation()})

  const notificationTextContainer = document.createElement('p');
  notificationTextContainer.textContent = notificationText;
  notificationTextContainer.style.marginBottom = "15px";
  notificationContainer.appendChild(notificationTextContainer)

  const notificationCloseButton = document.createElement("button");
  notificationCloseButton.classList.add('button')
  notificationCloseButton.textContent = buttonText;
  notificationCloseButton.style.margin = "0 auto";
  notificationContainer.appendChild(notificationCloseButton);
  notificationCloseButton.addEventListener('click',closeNotification)

  function closeNotification(){
    notificationBG.remove()
  }
}
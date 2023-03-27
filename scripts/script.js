let buttonRef = document.querySelector("#clickMe");

function alertUser() {
  alert("You Clicked!!!");
  //   buttonRef.removeEventListener("click", alertUser);
}

// buttonRef.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
  //   document.body.style.backgroundColor = "pink";
  document.body.classList.add("pinkBG");
}
buttonRef.addEventListener("click", changeBGPink);

function changeText() {
  // if the button says "Click me !" change the textContent to Clicked!
  if (buttonRef.textContent === "Click Me!") {
    buttonRef.textContent = "Clicked!";
  } else {
    //else if it says "Clicked!" update it to "Click Me!"
    buttonRef.textContent = "Click Me!";
  }
}
buttonRef.addEventListener("click", changeText);

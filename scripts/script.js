// let buttonRef = document.querySelector("#clickMe");

// function alertUser() {
//   alert("You Clicked!!!");
//   //   buttonRef.removeEventListener("click", alertUser);
// }

// // buttonRef.addEventListener("click", alertUser, { once: true });

// function changeBGPink() {
//   //   document.body.style.backgroundColor = "pink";
//   document.body.classList.add("pinkBG");
// }
// buttonRef.addEventListener("click", changeBGPink);

// function changeText() {
//   // if the button says "Click me !" change the textContent to Clicked!
//   if (buttonRef.textContent === "Click Me!") {
//     buttonRef.textContent = "Clicked!";
//   } else {
//     //else if it says "Clicked!" update it to "Click Me!"
//     buttonRef.textContent = "Click Me!";
//   }
// }
// buttonRef.addEventListener("click", changeText);

// function updateImage(event) {
//   console.log(event);
//   const image = document.querySelector("#shoppingCart");
//   image.setAttribute("src", "images/shopping-cart.png");
//   image.setAttribute("width", 50);
//   image.setAttribute("height", 50);
//   image.setAttribute("alt", "shopping cart icon");
// }
// buttonRef.addEventListener("click", updateImage);

//1.find the element
const buttonContainer = document.querySelector(".button-container");
//2.define a function to respond to the event
function changeBGGreen(event) {
  if (event.target.tagName === "BUTTON") {
    // event.target is the element that we clicked on
    // event.target.style.backgroundColor = "green"
    event.target.classList.add("greenBG");
  }
}
//3. use addeventlistener
buttonContainer.addEventListener("mouseover", changeBGGreen);

function changeTextColor(event) {
  //event.target -> button
  console.log(event)
  // if the text on the button says red -> the text color should be red
  if (event.target.tagName === "BUTTON") {
    let myColor = event.target.textContent;
    event.target.style.color = myColor;
  }
  // event.target.classList.add(myColor);
}
buttonContainer.addEventListener("click", changeTextColor);

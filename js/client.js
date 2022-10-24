"use strict";

// Creating button variables
const signinButton = document.querySelector("button[name=sign-in]");
const signoutButton = document.querySelector("button[name=sign-out]");

// Creating paragraph variable
const paragraphElement = document.querySelector("p");

// Personal Greeting Function
const personalGreeting = function() {
  // Asking for name
  const name = prompt("Please enter your name")

  // Asking for surname
  const surname = prompt("Please enter your surname")
  
  // Concatenate strings to create fullname
  const fullName = name.concat(" ", surname);

  // Personalized Greeting Message
  paragraphElement.innerHTML = `Welcome, ${fullName}!`;

  // Showing sign out button and hiding sign in button
  signinButton.classList.replace("show", "hide");
  signoutButton.classList.replace("hide", "show");
}

// Running the greeting function on button click
signinButton.addEventListener("click", personalGreeting);
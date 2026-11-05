const heading = document.querySelector("h1");
const button = document.querySelector("#changeButton");

button.addEventListener("click", function() {
    heading.textContent = "Welcome to my website!";
});
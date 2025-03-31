// console.log("Hello World!");

// Selecting elements using querySelector
const container = document.querySelector("#container");
const text = document.querySelector("#text");
const darkThemeBtn = document.querySelector("#themeDark");
const redThemeBtn = document.querySelector("#themeRed");
const greenThemeBtn = document.querySelector("#themeGreen");
const resetThemeBtn = document.querySelector("#themeReset");

// Adding event listeners to change themes
darkThemeBtn.addEventListener("click", () => {
    container.style.backgroundColor = "#333";
    text.style.color = "#fff";
    text.style.fontFamily = "Courier New, monospace";
});

redThemeBtn.addEventListener("click", () => {
    container.style.backgroundColor = "#8B0000";
    text.style.color = "#008000";
    text.style.fontFamily = "Times New Roman, serif";
});

greenThemeBtn.addEventListener("click", () => {
    container.style.backgroundColor = "#006400";
    text.style.color = "#FF0000";
    text.style.fontFamily = "Comic Sans MS, cursive";
});

resetThemeBtn.addEventListener("click", () => {
    container.style.backgroundColor = "white";
    text.style.color = "black";
    text.style.fontFamily = "Arial, sans-serif";
});

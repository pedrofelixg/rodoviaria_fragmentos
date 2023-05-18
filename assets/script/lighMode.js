const lightModeClass = "light-mode";
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeClass() {
    button.classList.toggle(lightModeClass);
    body.classList.toggle(lightModeClass);
    footer.classList.toggle(lightModeClass);
}

function changeText() {
    const lightMode = `<i class="fa-solid fa-sun"></i>`;
    const darkMode = `<i class="fa-solid fa-moon"></i>`;

    if(body.classList.contains(lightModeClass)) {
        button.innerHTML = darkMode;
        return;
    }
    button.innerHTML = lightMode;
}

function changeMod() {
    changeClass();
    changeText();
}

button.addEventListener("click", changeMod);
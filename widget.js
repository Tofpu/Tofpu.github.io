let lightMode = "true";

function loadTheme() {
    let theme = localStorage.getItem("theme");
    if (theme != null && theme !== '') {
        lightMode = theme;
    }

    action();
}

function onThemeSwitch() {
    // active dark mode
    lightMode = lightMode === 'true' ? "false" : "true";

    action();

    localStorage.setItem('theme', lightMode);
}

function action() {
    const themeDocument = document.getElementById('themeButton');
    if (lightMode === 'true') {
        document.body.style.backgroundColor = '#DFDBE5';
        themeDocument.style.backgroundColor = '#1c1822';
    } else {
        document.body.style.backgroundColor = '#1c1822';
        themeDocument.style.backgroundColor = '#DFDBE5';
    }
}


class Widget {
    static INSTANCE = new Widget();
    private lightMode = "true";

    loadTheme() {
        let theme = localStorage.getItem("theme");
        if (theme != null && theme !== '') {
            this.lightMode = theme;
        }
        console.log('theme: ' + theme);

        this.action();
    }

    onThemeSwitch() {
        // active dark mode
        this.lightMode = this.lightMode === 'true' ? "false" : "true";

        this.action();

        localStorage.setItem('theme', this.lightMode);
    }

    action() {
        const themeDocument = document.getElementById('themeButton');
        if (this.lightMode === 'true') {
            document.body.style.backgroundColor = '#DFDBE5';
            themeDocument.style.backgroundColor = '#1c1822';
        } else {
            document.body.style.backgroundColor = '#1c1822';
            themeDocument.style.backgroundColor = '#DFDBE5';
        }
    }

    static get() {
        return this.INSTANCE;
    }
}

export default Widget.get();

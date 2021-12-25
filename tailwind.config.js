module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '108': '27rem',
                'max': '100rem'
            },
            colors: {
                'testPrimary': '#7752b4',
                'primary': '#9c92ac',
                'secondary': '#dfdbe5',
                title: {
                    DEFAULT: '#8470a2',
                    light: 'rgba(132,112,162,0.9)',
                    lighter: 'rgba(132,112,162,0.8)'
                },
                'hover': '#9c92ac'
            }
        }
    },
    plugins: [],
}

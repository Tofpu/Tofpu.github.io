const color = require("@k-vyn/coloralgorithm");

const props = {
    steps: 11,
    hue: {
        "start": 216,
        "end": 222,
        "curve": "easeOutQuad"
    },
    "saturation": {
        "start": 0.07,
        "end": 0.71,
        "rate": 1,
        "curve": "easeOutQuad"
    },
    "brightness": {
        "start": 1,
        "end": 0.03,
        "curve": "linear"
    }
}

const options = {
    "minorSteps": [
        0,
        1
    ],
    "name": "New Color",
    "provideInverted": true,
    "rotation": "clockwise"
}

const result = color.generate(props, options);

console.log(result);
console.log(result[1].colors);

const resultColor = result[1].colors;

const hex = resultColor[10].hex;
const secondHex = resultColor[9].hex;
const hoverHex = resultColor[8].hex;

console.log('hover: ' + resultColor[4].hex);

console.log('hex: ' + hex);

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'primary': hex,
                'secondary': secondHex,
                'hover': hoverHex,
                'other': {
                    '5': resultColor[5].hex,
                    '6': resultColor[6].hex,
                    '7': resultColor[7].hex
                },
                'background': {
                    'default': resultColor[0].hex,
                    'light': resultColor[1].hex,
                    'lighter': resultColor[2].hex,
                    'lightest': resultColor[3].hex
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}

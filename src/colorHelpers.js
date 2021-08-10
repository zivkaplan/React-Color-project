import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(palette) {
    let newPalette = {
        paletteName: palette.paletteName,
        id: palette.id,
        emoji: palette.emoji,
        colors: {},
    };

    levels.forEach((level) => {
        newPalette.colors[level] = [];
    });
    palette.colors.forEach((color) => {
        let scale = generateScale(color.color, 10).reverse();
        scale.forEach((shade, i) => {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: shade,
                rgb: chroma(shade).css(),
                rgba: chroma(shade)
                    .css()
                    .replace('rgb', 'rgba')
                    .replace(')', ',1.0)'),
            });
        });
    });
    return newPalette;
}

function getRange(hexColor) {
    return [chroma(hexColor).darken(1.4).hex(), hexColor, '#ffffff'];
}

function generateScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

export default generatePalette;

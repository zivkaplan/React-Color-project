import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorFormat: 'hex',
        };
        this._shades = this.gatherShades(
            this.props.palette,
            this.props.colorId
        );
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }
    changeColorFormat(colorFormat) {
        this.setState({ colorFormat });
    }

    gatherShades(palette, colorId) {
        let shades = [];
        Object.keys(palette.colors).forEach((level) => {
            shades.push(
                ...palette.colors[level].filter((color) => color.id === colorId)
            );
        });
        return shades.slice(1);
    }
    render() {
        const colorBoxes = this._shades.map((color) => (
            <ColorBox
                key={color.id}
                name={color.name}
                background={color[this.state.colorFormat]}
                showMoreLink={false}
            />
        ));
        return (
            <div className="Palette">
                <Navbar
                    showSlider={false}
                    changeColorFormat={this.changeColorFormat}
                />
                <div className="Palette-colors">{colorBoxes}</div>
                <PaletteFooter
                    paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji}
                />
            </div>
        );
    }
}
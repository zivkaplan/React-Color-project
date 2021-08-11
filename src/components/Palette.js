import React from 'react';
import './css/Palette.css';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

export default class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, colorFormat: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }
    changeColorFormat(colorFormat) {
        this.setState({ colorFormat });
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(
            (color) => (
                <ColorBox
                    background={color[this.state.colorFormat]}
                    name={color.name}
                    key={color.id}
                    showMoreLink={true}
                    moreShadesUrl={`/palette/${this.props.palette.id}/${color.id}`}
                />
            )
        );
        return (
            <div className="Palette">
                <Navbar
                    showSlider={true}
                    level={this.state.level}
                    changeLevel={this.changeLevel}
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

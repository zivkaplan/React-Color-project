import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

class Palette extends React.Component {
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
        const { classes, palette } = this.props;
        const { colorFormat, level } = this.state;
        const colorBoxes = palette.colors[level].map((color) => (
            <ColorBox
                background={color[colorFormat]}
                name={color.name}
                key={color.id}
                showingFullPalette={true}
                moreShadesUrl={`/palette/${palette.id}/${color.id}`}
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar
                    showSlider={true}
                    level={level}
                    changeLevel={this.changeLevel}
                    changeColorFormat={this.changeColorFormat}
                />
                <div className={classes.PaletteColors}>{colorBoxes}</div>
                <PaletteFooter
                    paletteName={palette.paletteName}
                    emoji={palette.emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);

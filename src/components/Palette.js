import React from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from './jss/PaletteStyles';

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
        const { classes } = this.props;
        const colorBoxes = this.props.palette.colors[this.state.level].map(
            (color) => (
                <ColorBox
                    background={color[this.state.colorFormat]}
                    name={color.name}
                    key={color.id}
                    showingFullPalette={true}
                    moreShadesUrl={`/palette/${this.props.palette.id}/${color.id}`}
                />
            )
        );
        return (
            <div className={classes.Palette}>
                <Navbar
                    showSlider={true}
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                    changeColorFormat={this.changeColorFormat}
                />
                <div className={classes.PaletteColors}>{colorBoxes}</div>
                <PaletteFooter
                    paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);

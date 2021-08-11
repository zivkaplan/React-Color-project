import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './jss/PaletteStyles';

class SingleColorPalette extends React.Component {
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
        const { classes } = this.props;
        const colorBoxes = this._shades.map((color) => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[this.state.colorFormat]}
                showingFullPalette={false}
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar
                    showSlider={false}
                    changeColorFormat={this.changeColorFormat}
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link
                            className={classes.backButton}
                            to={`/palette/${this.props.palette.id}`}
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
                <PaletteFooter
                    paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);

import React from 'react';
import DraggableColorList from './DraggableColorList';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            colors: [...this.props.palettes[0].colors],
            newPaletteName: '',
            newColorName: '',
        };
        this.updateColor = this.updateColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
        this.clearPalette = this.clearPalette.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    }

    handleSubmit(paletteName, emoji) {
        const newPalette = {
            paletteName,
            id: paletteName.toLowerCase().replace(/ /g, '-'),
            colors: this.state.colors,
            emoji,
        };
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    }

    updateColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }

    addNewColor(newColor) {
        this.setState({
            colors: [...this.state.colors, newColor],
            newColorName: '',
        });
    }

    deleteColor(colorName) {
        this.setState({
            colors: this.state.colors.filter(({ name }) => name !== colorName),
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    clearPalette() {
        this.setState({ colors: [] });
    }

    addRandomColor() {
        const allColors = this.props.palettes.map((p) => p.colors).flat();
        const random = Math.floor(Math.random() * allColors.length);
        this.setState({ colors: [...this.state.colors, allColors[random]] });
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColors;
        return (
            <div className={classes.root}>
                <PaletteFormNav
                    palettes={palettes}
                    open={open}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.drawerContainer}>
                        <Typography variant="h4" gutterBottom>
                            Design Your Palette
                        </Typography>
                        <div className={classes.buttonsDiv}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                onClick={this.clearPalette}
                            >
                                Clear Palette
                            </Button>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={this.addRandomColor}
                                disabled={paletteIsFull}
                            >
                                Random Color
                            </Button>
                        </div>
                        <ColorPickerForm
                            colors={colors}
                            addNewColor={this.addNewColor}
                        />
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList
                        onSortEnd={this.onSortEnd}
                        axis="xy"
                        colors={colors}
                        deleteColor={this.deleteColor}
                        distance={2}
                    />
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

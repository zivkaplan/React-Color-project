import React from 'react';
import DraggableColorList from './DraggableColorList';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentColor: 'teal',
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

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.state.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            this.props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleSubmit() {
        let name = this.state.newPaletteName;
        const newPalette = {
            paletteName: name,
            id: name.toLowerCase().replace(/ /g, '-'),
            colors: this.state.colors,
        };
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    }

    updateColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }

    addNewColor() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName,
        };
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
        const { classes, maxColors } = this.props;
        const { open, currentColor, newColorName, newPaletteName, colors } =
            this.state;
        const paletteIsFull = colors.length >= maxColors;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Persistent drawer
                        </Typography>
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <TextValidator
                                label="Palette Name"
                                name="newPaletteName"
                                value={newPaletteName}
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'enter a palette name',
                                    'palette name already exists',
                                ]}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </ValidatorForm>
                        <Link to="/">Back</Link>
                    </Toolbar>
                </AppBar>
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
                    <Typography variant="h4">Design Your Palette</Typography>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.clearPalette}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.addRandomColor}
                            disabled={paletteIsFull}
                        >
                            Random Color
                        </Button>
                    </div>
                    <ChromePicker
                        color={currentColor}
                        onChangeComplete={this.updateColor}
                    />
                    <ValidatorForm onSubmit={this.addNewColor}>
                        <TextValidator
                            name="newColorName"
                            label="Color Name"
                            value={newColorName}
                            onChange={this.handleChange}
                            validators={[
                                'required',
                                'isColorNameUnique',
                                'isColorUnique',
                            ]}
                            errorMessages={[
                                'enter a color name',
                                'color name already exists',
                                'color already in palette',
                            ]}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            style={{
                                backgroundColor: paletteIsFull
                                    ? 'grey'
                                    : currentColor,
                            }}
                            disabled={paletteIsFull}
                        >
                            {paletteIsFull ? 'Palette Full' : 'Add Color'}
                        </Button>
                    </ValidatorForm>
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

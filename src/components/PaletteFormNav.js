import React from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import drawerWidth from './DrawerWidth';
import PaletteNamePopup from './PaletteNamePopup';

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
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
    navBtns: {
        marginRight: '1rem',
    },
    button: {
        margin: '0 0.5rem',
        '& a': {
            textDecoration: 'none',
        },
    },
});

class PaletteFormNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newPaletteName: '', popupState: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleOpen() {
        this.setState({ popupState: true });
    }
    handleClose() {
        this.setState({ popupState: false });
    }
    render() {
        const { classes, open, handleDrawerOpen, palettes, handleSubmit } =
            this.props;
        const { newPaletteName, popupState } = this.state;
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
                            onClick={handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.handleOpen}
                        >
                            Open form dialog
                        </Button>
                        <Link to="/">
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                            >
                                Back
                            </Button>
                        </Link>
                    </div>
                </AppBar>
                <PaletteNamePopup
                    popupState={popupState}
                    palettes={palettes}
                    handleSubmit={handleSubmit}
                    newPaletteName={newPaletteName}
                    handleClose={this.handleClose}
                />
                )
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);

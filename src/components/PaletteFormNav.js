import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotos from '@material-ui/icons/AddToPhotos';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteFormNavStyles';
import PaletteNamePopup from './PaletteNamePopup';

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
                            <AddToPhotos />
                        </IconButton>
                        <Typography
                            className={classes.createPaletteTitle}
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
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
                            Save
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

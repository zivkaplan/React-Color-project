import React from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { colorFormat: 'hex', open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(e) {
        this.setState({ open: true, colorFormat: e.target.value }, () =>
            this.props.changeColorFormat(this.state.colorFormat)
        );
    }
    closeSnackbar() {
        this.setState({ open: false });
    }
    render() {
        const { classes, level, changeLevel } = this.props;
        const { colorFormat, open } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">react-color-picker</Link>
                </div>
                {this.props.showSlider && (
                    <div className={classes.sliderContainer}>
                        <span className={`${classes.currentLevel}`}>
                            Level: {this.props.level}
                        </span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                                trackStyle={{ backgroundColor: 'transparent' }}
                                handleStyle={{
                                    borderColor: 'green',
                                    outline: 'none',
                                    border: '2px solid green',
                                    boxShadow: 'none',
                                    width: '13px',
                                    height: '13px',
                                    marginLeft: '-7px',
                                    marginTop: '-3px',
                                }}
                                railStyle={{ height: 8 }}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select
                        value={colorFormat}
                        onChange={this.handleFormatChange}
                    >
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={2000}
                    open={open}
                    onClose={this.closeSnackbar}
                    message={
                        <span>{`Color Format Set To ${colorFormat.toUpperCase()}`}</span>
                    }
                    ContentProps={{ 'aria-describedby': 'message-id' }}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);

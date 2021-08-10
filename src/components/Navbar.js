import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './css/Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { colorFormat: 'hex', open: true };
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
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">react-color-picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
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
                <div className="select-container">
                    <Select
                        value={this.state.colorFormat}
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
                    open={this.state.open}
                    onClose={this.closeSnackbar}
                    message={
                        <span>{`Color Format Set To ${this.state.colorFormat.toUpperCase()}`}</span>
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

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class PaletteNamePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: '',
            emojiPopup: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.savePalette = this.savePalette.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.openEmojiPicker = this.openEmojiPicker.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            this.props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    savePalette(emoji) {
        this.props.handleSubmit(this.state.newPaletteName, emoji.native);
        this.handleClose();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClose() {
        this.setState({ emojiPopup: false });
        this.props.handleClose();
    }

    handleOpen() {
        this.props.handleOpen();
    }
    openEmojiPicker() {
        this.setState({ emojiPopup: true, namePopup: false });
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.emojiPopup} onClose={this.handleClose}>
                    <DialogTitle id="form-dialog-title">
                        Pick an Emoji for Your Palette
                    </DialogTitle>
                    <Picker
                        onSelect={this.savePalette}
                        title="Choose an Emoji"
                    />
                </Dialog>
                <Dialog
                    open={this.props.popupState && !this.state.emojiPopup}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Name Your New Palette
                    </DialogTitle>
                    <ValidatorForm onSubmit={this.openEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Enter a name for your new palette. Please Make
                                sure it's unique!
                            </DialogContentText>

                            <TextValidator
                                fullWidth
                                margin="normal"
                                label="Palette Name"
                                name="newPaletteName"
                                value={this.state.newPaletteName}
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'enter a palette name',
                                    'palette name already exists',
                                ]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

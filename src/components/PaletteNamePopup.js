import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class PaletteNamePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            this.props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleSubmit(e) {
        this.props.handleSubmit(this.state.newPaletteName);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClose() {
        this.props.handleClose();
    }
    handleOpen() {
        this.props.handleOpen();
    }

    render() {
        return (
            <Dialog
                open={this.props.popupState}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Name Your New Palette
                </DialogTitle>
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Enter a name for your new palette. Please Make sure
                            it's unique!
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
        );
    }
}

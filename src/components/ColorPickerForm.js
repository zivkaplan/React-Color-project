import React from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPickerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newColorName: '', currentColor: 'red' };
        this.handleChange = this.handleChange.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }
    updateColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }
    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName,
        };
        this.props.addNewColor(newColor);
        this.setState({ newColorName: '' });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { handleSubmit, updateColor, paletteIsFull } = this.props;
        const { newColorName, currentColor } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
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
            </div>
        );
    }
}
export default ColorPickerForm;

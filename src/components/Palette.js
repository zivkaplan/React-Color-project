import React from 'react';
import './css/Palette.css';
import ColorBox from './ColorBox';

export default class Palette extends React.Component {
    render() {
        const colorBoxes = this.props.colors.map((color) => (
            <ColorBox background={color.color} name={color.name} />
        ));
        return (
            <div className="Palette">
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

import React from 'react';
import './css/Palette.css';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

export default class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(
            (color) => <ColorBox background={color.hex} name={color.name} />
        );
        return (
            <div className="Palette">
                <Navbar
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                />
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

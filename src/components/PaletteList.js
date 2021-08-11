import React from 'react';
import { Link } from 'react-router-dom';
export default class PaletteList extends React.Component {
    render() {
        return (
            <div>
                <h1>React Colors</h1>
                {this.props.palettes.map((palette) => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>
                            {palette.paletteName}
                        </Link>
                    </p>
                ))}
            </div>
        );
    }
}

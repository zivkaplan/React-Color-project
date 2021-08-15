import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
import styles from './jss/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends React.Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { classes, palettes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/create">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((palette) => (
                            <MiniPalette
                                {...palette}
                                handleClick={() => this.goToPalette(palette.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);

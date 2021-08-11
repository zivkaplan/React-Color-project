import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MiniPalette from './MiniPalette';
import styles from './jss/PaletteListStyles';

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
                        <Button variant="contained" href="/palette/create">
                            Create Palette
                        </Button>
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

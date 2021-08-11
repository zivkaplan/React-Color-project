import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    nav: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gap: '5%',
    },
};

class PaletteList extends React.Component {
    render() {
        const { classes, palettes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((palette) => (
                            <MiniPalette {...palette} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);

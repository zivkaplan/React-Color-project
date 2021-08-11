import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer',
        },
    },

    colors: {
        overflow: 'hidden',
        borderRadius: '5px',
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
    },

    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem',
    },
    miniColor: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        margin: '0 auto',
        marginBottom: '-4px',
    },
};
function MiniPalette(props) {
    // eslint-disable-next-line
    const { classes, paletteName, id, emoji, colors } = props;
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {colors.map((color) => (
                    <div
                        className={classes.miniColor}
                        style={{ backgroundColor: color.color }}
                        key={color.name}
                    ></div>
                ))}
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}
export default withStyles(styles)(MiniPalette);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './jss/MiniPaletteStyles';

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

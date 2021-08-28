import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends React.Component {
    constructor(props) {
        super(props);
        this.deletePaletteDialog = this.deletePaletteDialog.bind(this);
    }
    deletePaletteDialog(e) {
        e.stopPropagation();
        this.props.deletePaletteDialog(this.props.id);
    }

    render() {
        // eslint-disable-next-line
        const { classes, paletteName, id, emoji, colors, handleClick } =
            this.props;
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon
                    className={`deleteIcon ${classes.deleteIcon}`}
                    onClick={this.deletePaletteDialog}
                />
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
}
export default withStyles(styles)(MiniPalette);

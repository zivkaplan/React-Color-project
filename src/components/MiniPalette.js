import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends React.PureComponent {
    constructor(props) {
        super(props);
        this.deletePaletteDialog = this.deletePaletteDialog.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    deletePaletteDialog(e) {
        e.stopPropagation();
        this.props.deletePaletteDialog(this.props.id);
    }
    handleClick() {
        this.props.goToPalette(this.props.id);
    }
    render() {
        const { classes, paletteName, emoji, colors } = this.props;
        return (
            <div className={classes.root} onClick={this.handleClick}>
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

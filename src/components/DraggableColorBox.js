import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './jss/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    return (
        <div
            className={props.classes.root}
            style={{ backgroundColor: props.color }}
        >
            <div className={props.classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon
                    className={`deleteIcon ${props.classes.deleteIcon}`}
                    onClick={props.handleDelete}
                />
            </div>
        </div>
    );
});
export default withStyles(styles)(DraggableColorBox);

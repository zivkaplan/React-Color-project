import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from './styles/DraggableColorBoxStyles';

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

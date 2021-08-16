import React from 'react';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        '&:hover .deleteIcon': {
            transform: 'scale(1.4)',
        },
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        padding: '10px',
        left: '0',
        bottom: '0',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        justifyContent: 'space-between',
        color: (props) =>
            chroma(props.color).luminance() <= 0.4
                ? 'white'
                : 'rgba(0, 0, 0, 0.6)',
    },
    deleteIcon: {
        transition: 'transform 300ms ease-in-out',
    },
};

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

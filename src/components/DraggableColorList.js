import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer((props) => {
    return (
        <div style={{ height: '100%' }}>
            {props.colors.map((color, idx) => (
                <DraggableColorBox
                    index={idx}
                    key={color.name}
                    color={color.color}
                    name={color.name}
                    handleDelete={() => props.deleteColor(color.name)}
                />
            ))}
        </div>
    );
});
export default DraggableColorList;

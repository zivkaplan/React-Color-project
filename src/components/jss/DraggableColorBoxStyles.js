import chroma from 'chroma-js';

const styles = {
    root: {
        boxSizing: 'border-box',
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-5px',
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

export default styles;

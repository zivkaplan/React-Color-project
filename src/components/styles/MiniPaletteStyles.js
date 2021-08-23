const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover .deleteIcon': {
            opacity: 1,
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
    delete: {},
    deleteIcon: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        zIndex: 2,
        color: 'white',
        backgroundColor: '#eb3d30',
        width: '20px',
        height: '20px',
        padding: '10px',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        transition: 'opacity 150ms ease-out',
        borderRadius: '5px',
        opacity: 0,
    },
};
export default styles;

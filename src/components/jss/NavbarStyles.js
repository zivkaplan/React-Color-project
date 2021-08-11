const styles = {
    Navbar: {
        display: 'flex',
        height: '6vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    slider: {
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        backgroundColor: '#eceff1',
        fontSize: '22px',
        fontFamily: "'Roboto', sans-serif",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },
    },
    selectContainer: {
        marginRight: '15px',
        marginLeft: 'auto',
    },
    currentLevel: {
        marginRight: '10px',
    },
};

export default styles;

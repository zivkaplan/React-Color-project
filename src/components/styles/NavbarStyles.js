import mediaQueries from './mediaQueries';

const styles = {
    Navbar: {
        display: 'flex',
        height: '6vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [mediaQueries.down('xs')]: {
            justifyContent: 'center',
            flexDirection: 'column',
            height: 'fit-content',
            padding: '0px 10px 10px',
        },
    },
    sliderContainer: {
        width: '100%',
        flexShrink: 2,
        [mediaQueries.down('xs')]: {
            paddingTop: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    },
    slider: {
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
        [mediaQueries.down('sm')]: {
            width: '100px',
        },
        [mediaQueries.down('xs')]: {
            width: '80%',
            paddingTop: '5px',
        },
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
        minWidth: '260px',
        '& a': {
            textDecoration: 'none',
            color: 'black',
            paddingTop: '5px',
            paddingBottom: '5px',
            width: '100%',
        },
        [mediaQueries.down('xs')]: {
            width: '100%',
            textAlign: 'center',
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

import mediaQueries from './mediaQueries';

const styles = {
    '@global': {
        '.fade-enter': {
            opacity: 0,
        },
        '.fade-enter-active': {
            opacity: 1,
            transition: 'opacity 500ms ease-out',
        },
        '.fade-exit': {
            opacity: 1,
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out',
        },
    },
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors: {
        height: '90%',
        overflow: 'hidden',
    },
    goBack: {
        width: '20%',
        height: '50%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        verticalAlign: 'top',
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        '& a': {
            textDecoration: 'none',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            outline: 'none',
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
        },
        [mediaQueries.down('lg')]: {
            width: '25%',
            height: '33.33%',
        },
        [mediaQueries.down('md')]: {
            width: '50%',
            height: '20%',
        },
        [mediaQueries.down('xs')]: {
            width: '100%',
            height: '10%',
        },
    },
};

export default styles;

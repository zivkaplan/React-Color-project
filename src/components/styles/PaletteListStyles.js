import mediaQueries from './mediaQueries';
import bg from './bg.svg';

const styles = {
    '@global': {
        '.fade-enter': {
            opacity: 0,
        },
        '.fade-enter-active': {
            opacity: 1,
            transition: ' opacity 500ms ease-out',
        },
        '.fade-exit': {
            opacity: 1,
        },
        '.fade-exit-active ': {
            opacity: 0,
            transition: 'opacity 500ms ease-out',
        },
    },
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#017DBB',
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 500,
    },
    container: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        [mediaQueries.down('xl')]: {
            width: '70%',
        },
    },
    nav: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
        '& a': {
            color: 'black',
            textDecoration: 'none',
            backgroundColor: '#D5D5D5',
            borderRadius: '5px',
            padding: '0.7rem 1rem',
            textAlign: 'center',
            boxShadow: '0px 2px black',
            '&:hover': {
                backgroundColor: 'grey',
            },
        },
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        paddingBottom: '20px',
        gridTemplateColumns: 'repeat(3,30%)',
        gap: '1.5rem',
        [mediaQueries.down('md')]: {
            gridTemplateColumns: 'repeat(2,50%)',
        },
        [mediaQueries.down('xs')]: {
            gridTemplateColumns: 'repeat(1,100%)',
        },
    },
};
export default styles;

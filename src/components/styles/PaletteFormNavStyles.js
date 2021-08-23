import { DRAWER_WIDTH } from '../../constants';
import mediaQueries from './mediaQueries';

const styles = (theme) => ({
    root: {
        display: 'flex',
        maxWidth: '100vw',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        [mediaQueries.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    navBtns: {
        marginRight: '0.5rem',
        [mediaQueries.down('xs')]: {
            margin: '0',
        },
    },
    button: {
        margin: '0 0.5rem',
        '& a': {
            textDecoration: 'none',
        },
        [mediaQueries.down('xs')]: {
            marginRight: '0.2rem',
            fontSize: '12px',
        },
    },
    hide: {
        display: 'none',
    },
});

export default styles;

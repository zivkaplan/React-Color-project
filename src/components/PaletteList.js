import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class PaletteList extends React.Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { classes, palettes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/create">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map((palette) => (
                            <CSSTransition
                                key={palette.id}
                                classNames="fade"
                                timeout={500}
                            >
                                <MiniPalette
                                    {...palette}
                                    key={palette.id}
                                    deletePalette={deletePalette}
                                    handleClick={() =>
                                        this.goToPalette(palette.id)
                                    }
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);

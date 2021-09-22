import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openDeleteDialog: false, paletteIdToDelete: null };
        this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
        this.deletePalette = this.deletePalette.bind(this);
    }

    toggleDeleteDialog(paletteIdToDelete) {
        this.setState({
            openDeleteDialog: !this.state.openDeleteDialog,
            paletteIdToDelete: this.state.openDeleteDialog
                ? null
                : paletteIdToDelete,
        });
    }
    deletePalette() {
        this.props.deletePalette(this.state.paletteIdToDelete);
        this.toggleDeleteDialog();
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { classes, palettes, deletePalette } = this.props;
        const { openDeleteDialog } = this.state;
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
                                    deletePaletteDialog={
                                        this.toggleDeleteDialog
                                    }
                                    goToPalette={this.goToPalette}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog
                    onClose={this.toggleDeleteDialog}
                    aria-labelledby="delete-palette-dialog-title"
                    open={openDeleteDialog}
                >
                    <DialogTitle id="delete-palette-dialog-title">
                        Delete Palette?
                    </DialogTitle>
                    <List>
                        <ListItem button onClick={this.deletePalette}>
                            <ListItemAvatar>
                                <Avatar
                                    style={{
                                        backgroundColor: blue[100],
                                        color: blue[600],
                                    }}
                                >
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.toggleDeleteDialog}>
                            <ListItemAvatar>
                                <Avatar
                                    style={{
                                        backgroundColor: red[100],
                                        color: red[600],
                                    }}
                                >
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);

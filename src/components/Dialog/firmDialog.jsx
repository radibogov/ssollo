import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setFirmId, setUserID } from '../../redux-state/reducers/contractFormReducer';
import { fetchFirms } from '../../redux-state/async-actions/fetchFirms';
import { toggleFirmDialog } from '../../redux-state/reducers/DialogsReducer';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FirmDialog() {
    const dispatch = useDispatch()
    const autoList = useSelector(state => state.lists.firms)
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.firm)

    const handleClickOpen = () => {
        dispatch(toggleFirmDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleFirmDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchFirms())
    }, [])
    return (
        <div>
            <IconButton color="primary"
                onClick={
                    () => {
                        handleClickOpen(true)
                    }
                }
            >
                <ArrowDropDownCircleIcon />
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Фирмы
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText primary="Айди" />
                        <ListItemText primary="Название" />
                    </ListItem>
                    {autoList.map(el =>
                        <React.Fragment
                            key={el.id}
                        >
                            <ListItem button
                                onClick={
                                    () => {
                                        dispatch(setFirmId(el))
                                        dispatch(toggleFirmDialog(false))
                                    }

                                }
                            >
                                <ListItemText primary={el.id} />
                                <ListItemText primary={el.name} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}


                </List>
            </Dialog>
        </div>
    );
}
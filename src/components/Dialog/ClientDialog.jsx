import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { fetchUsers } from '../../redux-state/async-actions/fetchUsers';
import { setUserID } from '../../redux-state/reducers/contractFormReducer';
import { toggleClientDialog } from '../../redux-state/reducers/DialogsReducer';

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

export default function ClientDialog() {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.lists.users)
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.client)
    const handleClickOpen = () => {
        dispatch(toggleClientDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleClientDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchUsers())
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
                            Пользователи
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText style={{width: '10%'}} primary="Айди" />
                        <ListItemText style={{width: '30%', textAlign: 'center'}} primary="Полное имя" />
                        <ListItemText style={{width: '25%', textAlign: 'center'}} primary="Телефон" />
                        <ListItemText style={{width: '25%', textAlign: 'center'}} primary="Баланс" />
                    </ListItem>
                    {usersList.map(el =>
                        <React.Fragment
                        key={el.id}
                        >
                            <ListItem button
                                onClick={
                                    () => {
                                        dispatch(setUserID({ id: el.id, name: el.full_name + ', ' + el.phone }))
                                        dispatch(toggleClientDialog(false))
                                    }
                                }
                            >
                                <ListItemText style={{width: '10%'}} primary={el.id} />
                                <ListItemText style={{width: '30%', textAlign: 'center'}} primary={el.full_name} />
                                <ListItemText style={{width: '25%', textAlign: 'center'}} primary={el.phone} />
                                <ListItemText style={{width: '25%', textAlign: 'center'}} primary={el.balance} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}


                </List>
            </Dialog>
        </div>
    );
}
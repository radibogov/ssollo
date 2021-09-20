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
import { fetchManagers } from '../../../redux-state/async-actions/fetchManagers';
import {setEmployeePayment} from "../../../redux-state/reducers/paymentReducer";
import {toggleManagerPaymentDialog} from "../../../redux-state/reducers/DialogsReducer";


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
export default function ManagerPaymentDialog() {
    const dispatch = useDispatch();
    const managerList = useSelector(state => state.lists.managers)
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.manager_payment)

    const handleClickOpen = () => {
        dispatch(toggleManagerPaymentDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleManagerPaymentDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchManagers())
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
                            Сотрудники
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText primary="Айди" />
                        <ListItemText primary="Сотрудник" />
                    </ListItem>
                    {managerList?.map(el =>
                        <React.Fragment
                            key={el.id}
                        >
                            <ListItem button
                                      onClick={
                                          () => {
                                              dispatch(setEmployeePayment({id: el.id, name: el.full_name}));
                                              dispatch(toggleManagerPaymentDialog(false));

                                          }

                                      }
                            >
                                <ListItemText primary={el.id} />
                                <ListItemText primary={el.full_name} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}


                </List>
            </Dialog>
        </div>
    );
}
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
import { fetchCars } from '../../redux-state/async-actions/fetchCars';
import { setAutomobileId, setRealAutoId } from '../../redux-state/reducers/contractFormReducer';
import {toggleAutoDialog, toggleTaiffDialog} from '../../redux-state/reducers/DialogsReducer';
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

//создание pop-up
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TariffDialog() {
    const dispatch = useDispatch()
    const tarifList = useSelector(state => state.contractForm.automobile_id)

    const classes = useStyles();
    const open = useSelector(state => state.dialogs.tariff)

    const handleClickOpen = () => {
        dispatch(toggleTaiffDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleTaiffDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchCars())
    }, [])
    return (
        <div>
            <IconButton color="primary"
                        onClick={
                            () => {
                                handleClickOpen(true)
                            }
                        }>
                <ArrowDropDownCircleIcon />
            </IconButton>
            <IconButton color="secondary">
                <CancelIcon />
            </IconButton>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                {/*меню*/}
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Тарифы
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/*таблица*/}
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText primary="Айди" />
                        <ListItemText primary="Тариф" />
                        <ListItemText primary="За день" />
                        <ListItemText primary="Просрочка" />
                        <ListItemText primary="Залог" />
                    </ListItem>
                    <ListItem button
                              onClick={
                                  () => {
                                      dispatch(toggleTaiffDialog(false))
                                  }
                              }
                    >
                        <ListItemText primary={tarifList?.id} />
                        <ListItemText primary={tarifList?.name} />
                        <ListItemText primary={tarifList?.tarif_one_two} />
                        <ListItemText primary={tarifList?.tarif_one_two} />
                        <ListItemText primary={tarifList?.deposit} />
                    </ListItem>
                    <Divider />

                </List>
            </Dialog>
        </div>
    );
}
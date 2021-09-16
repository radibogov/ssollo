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
import { setPlaceOt, setPlacePr} from '../../redux-state/reducers/contractFormReducer';
import { fetchPlaces } from '../../redux-state/async-actions/fetchPlaces';
import { togglePlaceOtDialog, togglePlacePrDialog} from '../../redux-state/reducers/DialogsReducer';

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
export default function PlaceDialog({priem}) {
    const dispatch = useDispatch()
    const placesList = useSelector(state => state.lists.places)
    const classes = useStyles();
    const open = useSelector(state => priem?state.dialogs.place_pr:state.dialogs.place_ot)

    const handleClickOpen = () => {
        priem?dispatch(togglePlacePrDialog(true)):dispatch(togglePlaceOtDialog(true))
    };

    const handleClose = () => {
        priem?dispatch(togglePlacePrDialog(false)):dispatch(togglePlaceOtDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchPlaces())
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
                            {priem?' Прием':' Выдача'}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText primary="Айди" />
                        <ListItemText primary="Адресс" />
                    </ListItem>
                    {placesList?.map(el =>
                        <React.Fragment
                            key={el.id}
                        >
                            <ListItem button
                                      onClick={
                                          () => {
                                              if (priem) {
                                                  dispatch(setPlacePr({id: el.id, address: el.address}));
                                                  dispatch(togglePlacePrDialog(false));
                                              } else {
                                                  dispatch(setPlaceOt({id: el.id, address: el.address}));
                                                  dispatch(togglePlaceOtDialog(false));
                                              }
                                          }

                                      }>
                                <ListItemText primary={el.id} />
                                <ListItemText primary={el.address} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}


                </List>
            </Dialog>
        </div>
    );
}
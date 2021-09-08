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

import { setTerritory } from '../../redux-state/reducers/contractFormReducer';
import { fetchTerritories } from '../../redux-state/async-actions/fetchTerritories';
import { toggleTerritoryDialog } from '../../redux-state/reducers/DialogsReducer';

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

export default function TerritoryDialog() {
    const dispatch = useDispatch()
    const autoList = useSelector(state => state.lists.territories)
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.territory)

    const handleClickOpen = () => {
        dispatch(toggleTerritoryDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleTerritoryDialog(false))
    };

    React.useEffect(() => {
        dispatch(fetchTerritories())
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
                            Территории эксплуатации
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem style={{ background: 'red' }}>
                        <ListItemText primary="Айди" />
                        <ListItemText primary="Территория" />
                    </ListItem>
                    {autoList.map(el =>
                        <React.Fragment
                            key={el.id}
                        >
                            <ListItem button
                                      onClick={
                                          () => {
                                              dispatch(setTerritory(el.territory_name))
                                              dispatch(toggleTerritoryDialog(false))
                                          }

                                      }
                            >
                                <ListItemText primary={el.id} />
                                <ListItemText primary={el.territory_name} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}


                </List>
            </Dialog>
        </div>
    );
}
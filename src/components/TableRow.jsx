import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormTabs from '../containers/FormTabs'

const Row = styled.div`
white-space: nowrap;
width: 1100px;
    :hover{
        background-color: #eee;
        transition: .2s;
        cursor: pointer;
    }
`;
const Cell = styled.div`
    white-space: nowrap;
    display: inline-block;
    padding: 2px 6px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    overflow: hidden;
    min-width: 230px;
`;

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

const TableRow = (props) => {
    const rowRef = React.useRef()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Договор проката
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Сохранить
                    </Button>
                </Toolbar>
            </AppBar>
            <FormTabs />
        </Dialog>



        <Row
            ref={rowRef}
            onClick={
                () => {
                    //rowRef.current.style
                }
            }
            onDoubleClick={
                () => {
                    handleClickOpen()
                }
            }
        >
            <Cell>
                {props.time}
            </Cell>
            <Cell>
                {props.numberAuto}
            </Cell>
            <Cell>
                {props.model}
            </Cell>
            <Cell>
                {props.place}
            </Cell>
            <Cell>
                {props.client}
            </Cell>
            <Cell>
                {props.payment}
            </Cell>
            <Cell>
                {props.balance}
            </Cell>
            <Cell>
                {props.days}
            </Cell>
            <Cell>
                {props.returnDate}
            </Cell>
            <Cell>
                {props.contract}
            </Cell>
            <Cell>
                {props.comment}
            </Cell>
            <Cell>
                {props.mark}
            </Cell>
        </Row>
    </>
}

export default React.memo(TableRow)
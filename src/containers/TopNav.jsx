import React from 'react'
import styled from 'styled-components'
import NoteIcon from '@material-ui/icons/Note';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';
import 'date-fns';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 110px;
`;
const Inner = styled.div`
width: 30%;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Row = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-evenly;
height: 80px;
width: 100%;
`;
const Header = styled.div`
  width: 50%;
  text-align: center;
  background-color: #dfdfdf;
  height: 100%;
  padding-top: 7px;
  font-size: 20px;
  border-radius: 2rem 2rem 0 0;
`;

const TopNav = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return <Wrapper>
    <Row>
      <Inner>
        <Tooltip title="Добавить новую запись">
          <IconButton aria-label="delete" color="primary">
            <NoteAddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Открыть договор">
          <IconButton aria-label="delete" color="primary">
            <NoteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить договор-">
          <IconButton aria-label="delete" color="primary">
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Inner>
      <Inner>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Дата для просмотра"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Inner>
      <Inner>
        <Tooltip title="Открыть договор">
          <IconButton aria-label="delete" color="primary">
            <NoteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Замечание">
          <IconButton aria-label="delete" color="primary">
            <AnnouncementIcon />
          </IconButton>
        </Tooltip>
      </Inner>
    </Row>
    <Row>
      <Header>
        Выдача
      </Header>
      <Header>
        Возврат
      </Header>
    </Row>
  </Wrapper>
}

export default TopNav;
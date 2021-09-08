import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import {
    setContractNumber,
    setDaysFirst,
    setDaysSecond,
    setEndDatetime,
    setGodNumber,
    setIsGiven,
    setIsReturned,
    setRealAutoId,
    setStartDateTime,
    setUchNumber,
    setNotes,
    setDiscoundsPercents, setDiscountSum, setDIscountReason, setMarks
} from '../redux-state/reducers/contractFormReducer';
import { Button } from '@material-ui/core';

import { createContract } from '../redux-state/async-actions/createContract';
import { fetchTableRows } from '../redux-state/async-actions/fetchTableRows';

import ClientDialog from './Dialog/ClientDialog';
import AutoDialog from './Dialog/AutoDialog';
import TariffDialog from "./Dialog/TariffDialog";
import ManagerDialog from "./Dialog/ManagerDialog";
import PlaceDialog from "./Dialog/PlaceDialog";
import FirmDialog from './Dialog/firmDialog';
import TerritoryDialog from "./Dialog/TerritoryDialog";

const FormWrapper = styled.form`
width: 80%;
margin: 20px auto;
`;
const InputRow = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px 0;
`;
const Inner = styled.div`
border-bottom: 1px solid #3f51b5;
`;

const ContractForm = () => {
    const dispatch = useDispatch()
    const contractForm = useSelector(state => state.contractForm)
    console.log(contractForm)

    return <FormWrapper>

        <Inner>
            <InputRow>
                <TextField value={contractForm.contract_number} onChange={(event) => dispatch(setContractNumber(event.target.value))} id="filled-basic" label="Договор №" variant="filled" style={{ marginRight: '20px', width: '120%' }} />
                <TextField value={contractForm.uch_number} onChange={(event) => dispatch(setUchNumber(event.target.value))} id="filled-basic" label="Уч №" variant="filled" style={{ marginRight: '20px', width: '120%' }} />
                <TextField value={contractForm.god_number} onChange={(event) => dispatch(setGodNumber(event.target.value))} id="filled-basic" label="№ год." variant="filled" style={{ marginRight: '20px', width: '120%' }} />
                <TextField value={contractForm.real_auto_id} onChange={
                    (event) => dispatch(setRealAutoId( { id: event.target.value,
                                                                    gos_number: contractForm.gos_number,
                                                                    name: contractForm.name  }))}  id="filled-basic" label="№ автом" variant="filled" style={{ marginRight: '20px', width: '120%' }} />
                <FormControlLabel
                    control={<Checkbox checked={contractForm.is_given} onChange={(event) => dispatch(setIsGiven(event.target.checked))} name="checkedA" />}
                    label="Автомобиль выдан"
                />
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '30%'
                }}>
                    <TextField value={contractForm.gos_number} readOnly id="filled-basic" label="Автомобиль" variant="filled" style={{ width: '90%' }} />
                    <AutoDialog />
                </div>
                <TextField id="filled-basic" value={contractForm.auto_name} variant="filled" style={{ width: '70%' }} />
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '75%'
                }}>
                    <TextField readOnly value={contractForm.client_name} id="filled-basic" label="Клиент" variant="filled" style={{ width: '95%' }} />
                    <ClientDialog />
                </div>
                <TextField id="filled-basic" value='Новый' variant="filled" style={{ width: '30%' }} />
            </InputRow>
            {/* <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '60%'
                }}>
                    <TextField id="filled-basic" label="Представитель 1" variant="filled" style={{ width: '95%' }} />
                    <IconButton color="primary">
                        <ArrowDropDownCircleIcon />
                    </IconButton>
                    <IconButton color="secondary">
                        <CancelIcon />
                    </IconButton>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40%'
                }}>
                    <TextField id="filled-basic" label="Организация" variant="filled" style={{ width: '95%' }} />

                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '60%'
                }}>
                    <TextField id="filled-basic" label="Представитель 2" variant="filled" style={{ width: '95%' }} />
                    <IconButton color="primary">
                        <ArrowDropDownCircleIcon />
                    </IconButton>
                    <IconButton color="secondary">
                        <CancelIcon />
                    </IconButton>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40%'
                }}>
                    <TextField id="filled-basic" label="Водитель" variant="filled" style={{ width: '87%' }} />
                    <IconButton color="primary">
                        <ArrowDropDownCircleIcon />
                    </IconButton>

                </div>
            </InputRow> */}
        </Inner>
        <Inner>
            <InputRow>
                <TextField
                    id="datetime-local"
                    label="Начало"
                    type="datetime-local"
                    value={contractForm.start_datetime}
                    onChange={
                        (event) => {
                            dispatch(setStartDateTime(event.target.value))
                        }
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {/* <TextField
                    id="date"
                    label="Дата тар."
                    type="date"
                    value={contractForm.tariff_date}
                    onChange={
                        (event) => {
                            dispatch(setTariffDate(event.target.value))
                        }
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '20px' }}
                /> */}

            </InputRow>
            <InputRow>
                <TextField
                    id="datetime-local"
                    label="Возврат"
                    type="datetime-local"
                    value={contractForm.end_datetime}
                    onChange={
                        (event) => {
                            dispatch(setEndDatetime(event.target.value))
                        }
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControlLabel
                    control={<Checkbox checked={contractForm.is_returned} onChange={() => {
                        dispatch(setIsReturned())
                    }
                    } name="checkedA" />}
                    label="Возвращено"
                    style={{ marginLeft: '20px' }}
                />
            </InputRow>
            <InputRow>
                {/* НЕ ПОНЯТНО ЧТО С ЭТИМ ПОЛЕМ, РИДОНЛИ ОНО ИЛИ НЕТ, ОТКУДА БРАТЬ ЕГО */}
                <TextField
                    id="date"
                    label="Оплачено"
                    type="date"

                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </InputRow>
            <InputRow>
                <IconButton color="primary"
                    onClick={
                        () => {
                            dispatch(setDaysFirst(+contractForm.days_first - 1 >= 0 ? +contractForm.days_first - 1 : 0))
                        }
                    }
                >
                    <ArrowLeftIcon />
                </IconButton>
                <TextField id="filled-basic" label="Дней" variant="filled" value={'' + contractForm.days_first} onChange={(event) => dispatch(setDaysFirst(event.target.value))} type="number" />
                <IconButton color="primary"
                    onClick={
                        () => {
                            dispatch(setDaysFirst(+contractForm.days_first + 1))
                        }
                    }
                >
                    <ArrowRightIcon />
                </IconButton>
                <AddIcon />
                <TextField id="filled-basic" variant="filled" value={contractForm.days_second} onChange={event => dispatch(setDaysSecond(event.target.value))} type="number" style={{ width: '80px', marginLeft: '15px' }} />
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '40%'
                }}>
                    <TextField id="filled-basic" label="Тариф" variant="filled" style={{ width: '65%' }} />
                    <TariffDialog />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '20%'
                }}>
                    <TextField id="filled-basic" label="Название тарифа" variant="filled" style={{ width: '95%' }} />
                </div>
            </InputRow>
            <InputRow>
                <TextField id="filled-basic" value={contractForm.discount_percents} onChange={(event) => dispatch(setDiscoundsPercents(event.target.value))} label="Скидка в процентах %" variant="filled" style={{ width: '26%' }} />
                <TextField id="filled-basic" value={contractForm.discount_sum} onChange={(event) => dispatch(setDiscountSum(event.target.value))} label="Скидка абсолютная ₽" variant="filled" style={{ width: '26%', marginLeft: '20px' }} />
                <TextField id="filled-basic" value={contractForm.discount_reason} onChange={(event) => dispatch(setDIscountReason(event.target.value))} label="Причина скидки" variant="filled" style={{ width: '45%', marginLeft: '20px' }} />
            </InputRow>
            <InputRow>
                <TextField readOnly value={contractForm.summa_prokata} id="filled-basic"  label="За прокат"  variant="filled" style={{ width: '27%', marginLeft: '' }} />
                <TextField id="filled-basic" value={contractForm.marks} onChange={(event) => dispatch(setMarks(event.target.value))} label="Отметки" variant="filled" style={{ width: '75%', marginLeft: '20px' }} />
            </InputRow>
        </Inner>
        <Inner>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.place_ot} readOnly id="filled-basic" label="Выдача" variant="filled" style={{ width: '87%' }} />
                    <PlaceDialog priem={false}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.manager_pr_name} readOnly id="filled-basic" label="Менеджер приема" variant="filled" style={{ width: '87%' }} />
                    <ManagerDialog priem={true} />
                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.place_pr} readOnly id="filled-basic" label="Прием" variant="filled" style={{ width: '87%' }} />
                    <PlaceDialog priem={true}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.manager_ot_name} readOnly id="filled-basic" label="Менеджер возврата " variant="filled" style={{ width: '87%' }} />
                    <ManagerDialog priem={false} />
                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '60%'
                }}>
                    <TextField value={contractForm.territory} id="filled-basic" label="Территория" variant="filled" style={{ width: '87%' }} />
                    <TerritoryDialog />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.firm_name} id="filled-basic" label="Фирма" variant="filled" style={{ width: '87%' }} />
                    <FirmDialog/>
                </div>
            </InputRow>
            <InputRow
                style={{
                    justifyContent: 'space-between',
                    padding: '20px 0'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'end',
                    width: '75%'
                }}>
                    <TextField value={contractForm.notes} onChange={(event) => dispatch(setNotes(event.target.value))} id="filled-basic" label="Примечание" variant="filled" style={{ width: '100%' }} />
                </div>
                <Button variant="contained" color="primary"
                    onClick={
                        () => {
                            dispatch(createContract(contractForm))
                            dispatch(fetchTableRows(true))
                        }
                    }>
                    Сохранить
                </Button>
            </InputRow>
        </Inner>
    </FormWrapper>
}

export default ContractForm;
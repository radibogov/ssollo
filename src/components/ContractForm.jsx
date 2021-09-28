import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch, useSelector} from 'react-redux';
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
    setComment,
    setDiscountsPercents,
    setDiscountSum,
    setDiscountReason,
    setMarks,
    setTariffDate,
    setDepDateTime,
    setTariff,
    setSummaProkata, setPayDate
} from '../redux-state/reducers/contractFormReducer';
import {Button} from '@material-ui/core';

import {createContract} from '../redux-state/async-actions/contract/createContract';
import {updateContract} from "../redux-state/async-actions/contract/updateContract";
import {fetchTableRows} from "../redux-state/async-actions/fetchTableRows";

import ClientDialog from './Dialog/ClientDialog';
import AutoDialog from './Dialog/AutoDialog';
import TariffDialog from "./Dialog/TariffDialog";
import ManagerDialog from "./Dialog/ManagerDialog";
import PlaceDialog from "./Dialog/PlaceDialog";
import FirmDialog from './Dialog/firmDialog';
import TerritoryDialog from "./Dialog/TerritoryDialog";
import moment from "moment";
import RepresentativeDialog from "./Dialog/RepresentativeDialog";


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
    const dispatch = useDispatch();
    const contractForm = useSelector(state => state.contractForm);
    const activeCar = useSelector(state => state.lists.active_car)
    const firstRenderRef = useRef(true);
    //пересчет количесвта дней
    useEffect(() => {
        if (firstRenderRef.current) {
            return;
        }
        dispatch(setDepDateTime(
            {
                start: contractForm.start_datetime,
                end: contractForm.end_datetime,
                days: (moment(contractForm.end_datetime) - moment(contractForm.start_datetime)) / 3600 / 24 / 1000
            }))
    }, [contractForm.end_datetime, contractForm.start_datetime]);

    //меняется количество дней - меняется конечная дата, но также может меняться и тариф,
    useEffect(() => {
        if (firstRenderRef.current) {
            return;
        }
        dispatch(setDepDateTime(
            {
                start: moment(contractForm.start_datetime).format('YYYY-MM-DDTHH:mm'),
                end: moment(contractForm.start_datetime).add(contractForm.days_first, 'days').format('YYYY-MM-DDTHH:mm'),
                days: contractForm.days_first
            }));
        if (activeCar) {
            +contractForm.days_first < 3 ? dispatch(setTariff(activeCar?.tarif_one_two)) :
                +contractForm.days_first < 7 ? dispatch(setTariff(activeCar?.tarif_three_six)) :
                    +contractForm.days_first < 15 ? dispatch(setTariff(activeCar?.tarif_seven_four)) :
                        +contractForm.days_first < 31 ? dispatch(setTariff(activeCar?.tarif_five_three)) :
                            dispatch(setTariff(activeCar?.tarif_one_two_mounth))
        }
    }, [contractForm.days_first]);

    useEffect(() => {
        if (firstRenderRef.current) {
            return;
        }
        let summa = contractForm.days_first * (1 - contractForm.discount_percents / 100) * (contractForm.tariff - contractForm.discount_sum)
        dispatch(setSummaProkata(Math.ceil(summa)))
    }, [contractForm.discount_sum, contractForm.tariff, contractForm.discount_percents, contractForm.days_first, activeCar]);

    useEffect(() => {
        if (contractForm.start_datetime === '') {
            dispatch(setDepDateTime(
                {
                    start: moment().format('YYYY-MM-DDTHH:mm'),
                    end: moment().add(1, 'day').format('YYYY-MM-DDTHH:mm'),
                    days: 1
                }))
            dispatch(setTariffDate(moment().format('YYYY-MM-DD')));
        }
        firstRenderRef.current = false;
    });
    const formSubmit = (e) => {
        e.preventDefault()
        if (contractForm.id) {
            dispatch(updateContract(contractForm.id,contractForm));
        } else {
            dispatch(createContract(contractForm));
        }
        setTimeout(() => {
            dispatch(fetchTableRows(true))
            dispatch(fetchTableRows(false))
        }, 200)
    };

    return <FormWrapper onSubmit={formSubmit}>
        <Inner>
            <InputRow>
                <TextField required value={contractForm.contract_number}
                           onChange={(event) => dispatch(setContractNumber(event.target.value))} id="filled-basic"
                           label="Договор №" variant="filled" style={{marginRight: '20px', width: '120%'}}/>
                <TextField required value={contractForm.uch_number}
                           onChange={(event) => dispatch(setUchNumber(event.target.value))} id="filled-basic"
                           label="Уч №" variant="filled" style={{marginRight: '20px', width: '120%'}}/>
                <TextField required value={contractForm.god_number}
                           onChange={(event) => dispatch(setGodNumber(event.target.value))} id="filled-basic"
                           label="№ год." variant="filled" style={{marginRight: '20px', width: '120%'}}/>
                <TextField required value={contractForm.real_auto_id} onChange={
                    (event) => dispatch(setRealAutoId({
                        id: event.target.value,
                        gos_number: contractForm.gos_number,
                        name: contractForm.name
                    }))} id="filled-basic" label="№ автом" variant="filled"
                           style={{marginRight: '20px', width: '120%'}}/>
                <FormControlLabel
                    control={<Checkbox checked={contractForm.is_given}
                                       onChange={(event) => dispatch(setIsGiven(event.target.checked))}
                                       name="checkedA"/>}
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
                    <TextField required value={'' + contractForm.gos_number} readOnly id="filled-basic" label="Автомобиль"
                               variant="filled" style={{width: '90%', background: "#f0ff008c"}}/>
                    <AutoDialog/>
                </div>
                <TextField required id="filled-basic" value={contractForm.auto_name} variant="filled" style={{width: '70%', background: "#f0ff008c"}}/>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '77%'
                }}>
                    <TextField required readOnly value={contractForm.client_name?contractForm.client_name:''} id="filled-basic" label="Клиент"
                               variant="filled" style={{width: '95%', background: "#f0ff008c"}}/>
                    <ClientDialog/>
                </div>
                <TextField id="filled-basic" value='Новый'  variant="filled" style={{width: '30%', background: "#f0ff008c"}}/>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '77%'
                }}>
                    <TextField
                        value={contractForm.representative_first_name ? contractForm.representative_first_name : ''}
                        id="filled-basic" label="Представитель 1" variant="filled"
                        style={{width: '95%', background: "#f0ff008c"}}/>
                    <RepresentativeDialog first={true}/>
                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '77%'
                }}>
                    <TextField
                        value={contractForm.representative_second_name ? contractForm.representative_second_name : ''}
                        id="filled-basic" label="Представитель 2" variant="filled"
                        style={{width: '95%', background: "#f0ff008c"}}/>
                    <RepresentativeDialog first={false}/>
                </div>
            </InputRow>
        </Inner>
        <Inner>
            <InputRow>
                <TextField
                    id="datetime-local"
                    label="Начало"
                    type="datetime-local"
                    value={moment(contractForm.start_datetime).format('YYYY-MM-DDTHH:mm')}
                    onChange={
                        (event) => {
                            dispatch(setStartDateTime(event.target.value))
                            event.target.value < contractForm.end_datetime ? dispatch(setStartDateTime(event.target.value)) : dispatch(setStartDateTime(contractForm.start_datetime))
                        }
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Дата тар."
                    type="date"
                    value={moment(contractForm.tariff_date).format('YYYY-MM-DD')}
                    onChange={
                        (event) => {
                            dispatch(setTariffDate(event.target.value))
                        }
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{marginLeft: '20px'}}/>

            </InputRow>
            <InputRow>
                <TextField
                    id="datetime-local"
                    label="Возврат"
                    type="datetime-local"
                    value={moment(contractForm.end_datetime).format('YYYY-MM-DDTHH:mm')}
                    onChange={
                        (event) => {
                            event.target.value > contractForm.start_datetime ? dispatch(setEndDatetime(event.target.value)) : dispatch(setEndDatetime(contractForm.end_datetime))
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
                    } name="checkedA"/>}
                    label="Возвращено"
                    style={{marginLeft: '20px'}}
                />

            </InputRow>
            <InputRow>
                <TextField
                    id="date"
                    label="Оплачено"
                    type="date"
                    value={moment(contractForm.pay_date).format('YYYY-MM-DD')}
                    onChange={(event) => dispatch(setPayDate(event.target.value))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </InputRow>
            <InputRow>
                <IconButton color="primary"
                            onClick={
                                () => {
                                    dispatch(setDaysFirst(+contractForm.days_first - 1 >= 1 ? +contractForm.days_first - 1 : 1))
                                }
                            }
                >
                    <ArrowLeftIcon/>
                </IconButton>
                <TextField id="filled-basic" label="Дней" variant="filled" value={'' + contractForm.days_first}
                           onChange={(event) => event.target.value > 0 ? dispatch(setDaysFirst(event.target.value)) : dispatch(setDaysFirst(1))}
                           type="number"/>
                <IconButton color="primary"
                            onClick={
                                () => {
                                    dispatch(setDaysFirst(+contractForm.days_first + 1))
                                }
                            }
                >
                    <ArrowRightIcon/>
                </IconButton>
                <AddIcon/>
                <TextField id="filled-basic" variant="filled" value={contractForm.days_second}
                           onChange={event => event.target.value > 0 ? dispatch(setDaysSecond(event.target.value)) : dispatch(setDaysSecond(0))}
                           type="number" style={{width: '80px', marginLeft: '15px'}}/>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '40%'
                }}>
                    <TextField value={'' + contractForm.tariff}
                               onChange={(event) => {event.target.value<=1000000?dispatch(setTariff(event.target.value)):dispatch(setTariff(contractForm.tariff))}} id="filled-basic"
                               label="Тариф" variant="filled" style={{width: '65%'}}/>
                    <TariffDialog days={'' + contractForm.days_first}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '20%'
                }}>
                    <TextField value={'' + contractForm.tariff_name} id="filled-basic" label="Название тарифа"
                               variant="filled" style={{width: '95%', background: "#f0ff008c"}}/>
                </div>
            </InputRow>
            <InputRow>
                <TextField id="filled-basic" value={contractForm.discount_percents}
                           onChange={(event) => event.target.value >= 0 && event.target.value <= 100 ? dispatch(setDiscountsPercents(event.target.value)) : dispatch(setDiscountsPercents(contractForm.discount_percents))}
                           label="Скидка в процентах %" variant="filled" style={{width: '26%'}}/>
                <TextField id="filled-basic" value={contractForm.discount_sum}
                           onChange={(event) => event.target.value >= 0 ? dispatch(setDiscountSum(event.target.value)) : dispatch(setDiscountSum(contractForm.discount_sum))}
                           label="Скидка абсолютная ₽" variant="filled" style={{width: '26%', marginLeft: '20px'}}/>
                <TextField id="filled-basic" value={contractForm.discount_reason}
                           onChange={(event) => dispatch(setDiscountReason(event.target.value))} label="Причина скидки"
                           variant="filled" style={{width: '45%', marginLeft: '20px'}}/>
            </InputRow>
            <InputRow>
                <TextField readOnly value={'' + contractForm.summa_prokata} id="filled-basic" label="За прокат"
                           variant="filled" style={{width: '27%', marginLeft: '', background: "#f0ff008c"}}/>
                <TextField id="filled-basic" value={contractForm.marks}
                           onChange={(event) => dispatch(setMarks(event.target.value))} label="Отметки" variant="filled"
                           style={{width: '75%', marginLeft: '20px'}}/>
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
                    <TextField value={contractForm.address_gave ? contractForm.address_gave : ''} readOnly
                               id="filled-basic" label="Выдача" variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
                    <PlaceDialog priem={false}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.manager_pr_name ? contractForm.manager_pr_name : ''} readOnly
                               id="filled-basic" label="Менеджер приема" variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
                    <ManagerDialog priem={true}/>
                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.address_received ? contractForm.address_received : ''} readOnly
                               id="filled-basic" label="Прием" variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
                    <PlaceDialog priem={true}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField value={contractForm.manager_ot_name ? contractForm.manager_ot_name : ''} readOnly
                               id="filled-basic" label="Менеджер возврата " variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
                    <ManagerDialog priem={false}/>
                </div>
            </InputRow>
            <InputRow>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '60%'
                }}>
                    <TextField value={contractForm.territory_address ? contractForm.territory_address : ''} readOnly
                               id="filled-basic" label="Территория" variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
                    <TerritoryDialog/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '50%'
                }}>
                    <TextField required value={contractForm.firm_name ? contractForm.firm_name : ''} readOnly
                               id="filled-basic" label="Фирма" variant="filled" style={{width: '87%', background: "#f0ff008c"}}/>
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
                    <TextField value={contractForm.comment ? contractForm.comment : ''}
                               onChange={(event) => dispatch(setComment(event.target.value))} id="filled-basic"
                               label="Примечание" variant="filled" style={{width: '100%'}}/>
                </div>
                <Button type={'submit'} variant="contained" color="primary">
                    Сохранить
                </Button>
            </InputRow>
        </Inner>
    </FormWrapper>
}

export default ContractForm;
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContractForm from '../components/ContractForm';
import PaymentForm from '../components/PaymentForm'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FormTabs = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Договор" {...a11yProps(0)} />
                <Tab label="Расчет" {...a11yProps(1)} />
                <Tab label="Замечания" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ContractForm/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PaymentForm/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Paper>
    );
}

export default FormTabs;
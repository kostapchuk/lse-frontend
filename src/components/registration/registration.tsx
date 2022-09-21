import {Grid, Paper} from '@mui/material'
import {FC} from "react";
import RegistrationHeader from '../registration-header/registration-header';
import RegistrationBody from '../registration-body/registration-body'
import {paperStyle, signUpContainerStyle} from './registration-styles'

const Registration: FC = () => {

    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2}>
                <Paper elevation={20} style={paperStyle}>
                    <RegistrationHeader/>
                    <RegistrationBody/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Registration
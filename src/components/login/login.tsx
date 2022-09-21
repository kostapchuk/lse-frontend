import {Grid, Paper} from '@mui/material'
import {FC} from "react";
import LoginHeader from '../login-header/login-header';
import LoginBody from '../login-body/login-body'
import {paperStyle, signUpContainerStyle} from './login-styles'

const Login: FC = () => {

    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2}>
                <Paper elevation={20} style={paperStyle}>
                    <LoginHeader/>
                    <LoginBody/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login
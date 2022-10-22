import {Grid, Paper} from '@mui/material'
import LoginHeader from '../login-header/login-header';
import {paperStyle, signUpContainerStyle} from '../login-styles'
import LoginForTeacherBody from './login-for-teacher-body';

const LoginForTeacher = () => {
    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2}>
                <Paper elevation={20} style={paperStyle}>
                    <LoginHeader/>
                    <LoginForTeacherBody/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LoginForTeacher;

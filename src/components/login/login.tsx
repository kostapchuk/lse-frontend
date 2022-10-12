import {Button, Grid, Paper} from '@mui/material'
import {FC} from "react";
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes';
import {paperStyle, signUpContainerStyle, registrationButtonStyle, registrationFormStyle} from '../registration/registration-styles'

const Registration: FC = () => {

    const navigate = useNavigate()

    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2} style={registrationFormStyle}>
                <Paper elevation={20} style={paperStyle}>
                    <Button variant="contained" sx={{borderRadius: 50}} style={registrationButtonStyle}
                     onClick={() => navigate(RouteNames.STUDENTLOGIN)}>
                        Студент
                    </Button>
                    <Button variant="contained" sx={{borderRadius: 50}} style={registrationButtonStyle}
                     onClick={() => navigate(RouteNames.TEACHERLOGIN)}>
                        Преподаватель
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Registration
import {Box, Button, Grid, Paper} from '@mui/material'
import {FC} from "react";
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes';
import { signUpContainerStyle, registrationButtonStyle, registrationFormStyle, paperStyleForm} from './registration-styles'

const Registration: FC = () => {

    const navigate = useNavigate()

    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2} style={registrationFormStyle}>
                <Paper elevation={20} style={paperStyleForm}>
                    <Box>
                        <Button variant="contained" sx={{borderRadius: 50}} style={registrationButtonStyle}
                        onClick={() => navigate(RouteNames.STUDENT_REGISTRATION)}>
                        Студент
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" sx={{borderRadius: 50}} style={registrationButtonStyle}
                        onClick={() => navigate(RouteNames.TEACHER_REGISTRATION)}>
                        Преподаватель
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Registration

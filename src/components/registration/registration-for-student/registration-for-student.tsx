import {Grid, Paper} from '@mui/material'
import RegistrationHeader from "../registration-header/registration-header"
import { paperStyle, signUpContainerStyle } from "../registration-styles";
import RegistrationForStudentBody from './registration-for-student-body';

const RegistrationForStudent = () => {
    
    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2}>
                <Paper elevation={20} style={paperStyle}>
                    <RegistrationHeader/>
                    <RegistrationForStudentBody/>
                </Paper>    
            </Grid>
        </Grid>
    )
}


export default RegistrationForStudent;

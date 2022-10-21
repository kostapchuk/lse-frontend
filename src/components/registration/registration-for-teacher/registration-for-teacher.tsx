import {Grid, Paper} from '@mui/material'
import RegistrationHeader from "../../registration-header/registration-header"
import RegistrationForTeacherBody from "./registration-for-teacher-body";
import { paperStyle, signUpContainerStyle } from "../registration-styles";

const RegistrationForTeacher = () => {
    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={2}>
                <Paper elevation={20} style={paperStyle}>
                    <RegistrationHeader/>
                    <RegistrationForTeacherBody/>
                </Paper>    
            </Grid>
        </Grid>
    )
}


export default RegistrationForTeacher;
import {Grid, Paper} from '@mui/material'
import {FC} from "react";
import SignUpHeader from './sign-up-header';
import SignUpBody from './sign-up-body';
import {paperStyle, signUpContainerStyle} from './sign-up-styles'

const SignUp: FC = () => {

    return (
        <Grid container style={signUpContainerStyle}>
            <Grid item lg={3} md={4} sm={5} xs={10} xl={12}>
                <Paper elevation={20} style={paperStyle}>
                    <SignUpHeader/>
                    <SignUpBody/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SignUp
import {Grid, Paper} from "@mui/material";
import {paperStyle, signUpContainerStyle} from "../../components/login/login-styles";
import LoginHeader from "../../components/login/login-header/login-header";
import LoginBody from "../../components/login/login-body/login-body";

const LoginPage = () => {
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
};

export default LoginPage;

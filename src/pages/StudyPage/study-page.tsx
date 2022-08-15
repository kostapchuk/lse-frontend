import React, {FC, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderBar from "../../components/header-bar/header-bar";
import Sidebar from "../../components/sidebar/sidebar";
import {Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from '@mui/material';
import Quiz from "../../components/quiz/quiz";
import QuizList from "../../components/quiz-list/quiz-list";

const StudyPage: FC = () => {

    const mdTheme = createTheme();

    const [open, setOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                {/*<CssBaseline/>*/}
                {/*<HeaderBar open={open} toggleSidebar={toggleSidebar}/>*/}
                {/*<Sidebar open={open} toggleSidebar={toggleSidebar}/>*/}
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <Grid container spacing={3} sx={{mt: 10, width: '100%', maxWidth: '100%'}}>
                        <Typography variant="h4" gutterBottom align="center">
                            1. ЗАЩИТА НАСЕЛЕНИЯ И ОБЪЕКТОВ НАРОДНОГО ХОЗЯЙСТВА ОТ ЧРЕЗВЫЧАЙНЫХ СИТУАЦИЙ
                        </Typography>
                        {/*<Typography variant="h5" gutterBottom>*/}
                        {/*    МОДУЛЬ 1. Организация защиты населения и объектов от чрезвычайных ситуаций природного и*/}
                        {/*    техногенного характера, опасностей военного времени*/}
                        {/*</Typography>*/}
                        <Typography> Скачать учебник тут: {""}
                            <Link href="https://elib.bsu.by/handle/123456789/253155" target="_blank">Учебно-методическая
                                карта дисциплины БЖЧ</Link>
                        </Typography>
                        {/*<FormControl>*/}
                        {/*    <InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                         {/*    <Input id="my-input" aria-describedby="my-helper-text" />*/}
                        {/*    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>*/}
                        {/*</FormControl>*/}
                    </Grid>
                    <QuizList/>

                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default StudyPage;

import React, {FC, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Button, Container, Grid, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import QuizList from "../../components/quiz-list/quiz-list";

const StudyPage: FC = () => {

    const mdTheme = createTheme();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <Grid container spacing={3} sx={{mb: 3, width: '100%', maxWidth: '100%'}}>
                        <Typography variant="h4" gutterBottom align="center">
                            Электронный учебник по дисциплине "Безопасность Жизнидеятельности Человека"
                        </Typography>
                        <Typography> Скачать учебник тут: {""}
                            <Link href="https://elib.bsu.by/handle/123456789/253155" target="_blank">Учебно-методическая
                                карта дисциплины БЖЧ</Link>
                        </Typography>
                    </Grid>
                    <Box>
                        <QuizList/>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default StudyPage;

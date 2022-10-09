import React, {FC, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Button, Container, Grid, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import QuizList from "../../components/quiz-list/quiz-list";
import Header from '../../components/header/header'

const StudyPage: FC = () => {

    const mdTheme = createTheme();
    const [results, setResults] = useState<any[string]>(['']);

    return (
        <ThemeProvider theme={mdTheme}>
            <Header/>
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
                        <Button onClick={() => setResults(console.log(results))} 
                        style={{backgroundColor: '#1976d2'}}
                        sx={{ my: 2, color: 'white', display: 'block' }}>
                            Отправить
                        </Button>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default StudyPage;

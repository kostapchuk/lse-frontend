import React, {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const NotFoundPage: FC = () => {

    const mdTheme = createTheme();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <Grid container spacing={3} sx={{mb: 3, width: '100%', maxWidth: '100%'}}>
                        <Typography variant="h2" gutterBottom align="center">
                            Фатальная ошибка! Страница не найдена:( 404
                        </Typography>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default NotFoundPage;

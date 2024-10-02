import { Container, createTheme, CssBaseline, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { OrderForm } from './OrderForm';
import axios from 'axios';
import { green } from '@mui/material/colors';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const darkTheme = createTheme({ palette: { mode: 'dark', primary: green } });

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Paper elevation={0}>
                    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
                        <Stack
                            spacing={2}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                            sx={{ mb: 3 }}
                        >
                            <Typography component="h1" variant="h4">
                                Cafetería UNLaM
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                {import.meta.env.BUILD_DATE}
                            </Typography>
                        </Stack>
                        <OrderForm />
                    </Container>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App

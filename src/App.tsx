import { Container, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material'
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
                        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
                            Cafetería UNLaM
                        </Typography>
                        <OrderForm />
                    </Container>
                    <Typography variant='body2' color='textSecondary'>
                        {import.meta.env.BUILD_DATE}
                    </Typography>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App

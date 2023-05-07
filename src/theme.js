
    import { createTheme } from '@mui/material/styles';

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#002177',
                light: '#bccdf7',
            },
            secondary: {
                main: '#9c27b0',
            },
            background: {
                default: '#fff',
                paper: '#fff',
            },
            // footer: {
            //     background: '#ff0000',
            //     text: '#ffffff',
            // },
        },
    });

    export default theme;

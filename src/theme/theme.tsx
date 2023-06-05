import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#4D4D4D',
                },
                h1: {
                    fontFamily: 'Playfair Display',
                    color: '#6ec1e4',
                    fontSize: '3rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                },
                h2: {
                    fontFamily: 'Playfair Display',
                    color: '#6ec1e4',
                    fontSize: '2rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                },
                h3: {
                    fontFamily: 'Playfair Display',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                },
                h4: {
                    fontSize: '1rem',
                    color: '#6ec1e4',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                },
                h6: {
                    fontSize: '1rem',
                },
                body1: {
                    fontWeight: 500,
                },
                body2: {
                    fontSize: '1rem',
                    fontWeight: 300,
                },
            },
        },
    },
});

export default theme;

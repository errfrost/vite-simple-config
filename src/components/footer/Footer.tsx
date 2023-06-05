import { Box, Container, Typography } from '@mui/material';
import Map from './Map';
import Contacts from './Contacts';
import ScrollTop from '../../helpers/ScrollTop';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#f1f4f5' }}>
            <Container maxWidth="lg">
                <div id="contacts" />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                    }}
                >
                    <Contacts />
                    <Map />
                </Box>
            </Container>
            <Box sx={{ bgcolor: '#ccc' }}>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ fontWeight: 400, fontSize: 13, p: 1 }}
                >
                    {new Date().getFullYear()} Студия йоги ЁGA hall ©
                </Typography>
            </Box>
            <ScrollTop />
        </footer>
    );
}

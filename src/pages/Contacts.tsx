import { Container, Typography } from '@mui/material';
import EgaParallax from '../components/EgaParallax';

export default function Contacts() {
    return (
        <>
            <EgaParallax image="images/KP8A0051.JPG" text="" />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Где мы?
                </Typography>
            </Container>
        </>
    );
}

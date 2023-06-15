import { Container, Typography } from '@mui/material';
import EgaParallax from '../components/EgaParallax';
import GalleryLightBox from '../components/studio/GalleryLightBox';
import Gallery from '../components/studio/Gallery';

export default function Space() {
    return (
        <>
            <EgaParallax image="images/parallax/par19.png" text="" />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Студия йоги
                </Typography>
                <Gallery />
            </Container>
        </>
    );
}

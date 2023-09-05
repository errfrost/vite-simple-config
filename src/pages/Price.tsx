import { Container, Divider, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EgaParallax from '../components/EgaParallax';

const priceList = [
    {
        price: 4000,
        lessons: '12 занятий',
        duration: 'действует 5 недель',
    },
    {
        price: 3500,
        lessons: '8 занятий',
        duration: 'действует 5 недель',
    },
    {
        price: 2000,
        lessons: '4 занятия',
        duration: 'действует 5 недель',
    },
    { price: 600, lessons: '1 занятие', duration: 'разовое посещение' },
];

export default function Price() {
    return (
        <>
            <EgaParallax image="images/parallax/par_1047.webp" text="" />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Стоимость занятий
                </Typography>
                <Grid
                    container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ py: 4, justifyContent: 'center', gap: 3 }}
                >
                    {priceList.map((abonement, i) => (
                        <Grid key={i}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    bgcolor: '#ccc',
                                    flex: '1 1 0px',
                                    textAlign: 'center',
                                    width: 235,
                                    height: 220,
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h3"
                                    sx={{ color: '#fff', pb: 2 }}
                                >
                                    {abonement.price}
                                </Typography>
                                <Typography variant="h6" sx={{ py: 2 }}>
                                    {abonement.lessons}
                                </Typography>
                                <Divider style={{ width: '50%' }} />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: '1rem',
                                        whiteSpace: 'pre-line',
                                        py: 2,
                                    }}
                                >
                                    {abonement.duration}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" align="center">
                    Израсходовать абонемент вы можете раньше срока действия.
                </Typography>
            </Container>
        </>
    );
}

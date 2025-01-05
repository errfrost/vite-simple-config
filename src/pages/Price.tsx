import { Container, Divider, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EgaParallax from '../components/EgaParallax';

const priceList = [
    {
        price: 5000,
        lessons: '12 занятий',
        duration: 'действует 5 недель',
    },
    {
        price: 4500,
        lessons: '8 занятий',
        duration: 'действует 5 недель',
    },
    {
        price: 3000,
        lessons: '4 занятия',
        duration: 'действует 5 недель',
    },
    { price: 800, lessons: '1 занятие', duration: 'разовое посещение' },
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
                                    height: 140,
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h3"
                                    sx={{ color: '#fff', pb: 2 }}
                                >
                                    {abonement.price}
                                </Typography>
                                <Divider style={{ width: '50%' }} />
                                <Typography variant="h6" sx={{ py: 2 }}>
                                    {abonement.lessons}
                                </Typography>
                                {/* <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: '1rem',
                                        whiteSpace: 'pre-line',
                                        py: 2,
                                    }}
                                >
                                    {abonement.duration}
                                </Typography> */}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ py: 1, px: 5 }}
                >
                    Срок действия любого абонемента 5 календарных недель, в этот
                    срок уже включена дополнительная неделя на случай пропусков.
                    Израсходовать абонемент вы можете раньше окончания его
                    срока.
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ py: 1, px: 5 }}
                >
                    Абонемент не закрепляется за одной группой или инструктором,
                    вы можете посещать все занятия студии по расписанию.
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ py: 1, px: 5 }}
                >
                    Абонемент необходимо активировать в течение месяца с момента
                    покупки. Через 30 дней после покупки абонемент активируется
                    автоматически.{' '}
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ py: 1, px: 5 }}
                >
                    Если по каким-то причинам вы не успеваете проходить все
                    занятия за 5 недель, вы можете воспользоваться платной
                    услугой продления срока абонемента: на 1 день - 100 сом, на
                    1 неделю (7 дней) - 500 сом, на 1 месяц (30 дней) - 1000
                    сом.{' '}
                </Typography>
            </Container>
        </>
    );
}

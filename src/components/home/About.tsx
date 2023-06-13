import { Container, Paper, Typography } from '@mui/material';

export default function About() {
    return (
        <Container maxWidth="md">
            <Paper
                elevation={0}
                square
                sx={{
                    bgcolor: '#f1f4f5',
                    px: { xs: 0, sm: 2, md: 4 },
                    mx: { xs: 0, sm: 2, md: 4 },
                    py: { xs: 2, md: 4 },
                    my: { xs: 2, md: 4 },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    pt={1}
                    align="center"
                    sx={{ textTransform: 'none' }}
                >
                    ËGA hall
                </Typography>
                <Typography variant="body1" component="p" p={2} align="center">
                    ËGA hall — это место, куда вы сможете прийти, чтоб
                    позаниматься йогой, расслабиться, пообщаться с интересными
                    людьми и просто насладиться приятной атмосферой. Студия
                    находится в центре Бишкека, к нам легко добраться из любой
                    точки города.
                </Typography>
                <Typography variant="body2" component="p" p={2} align="center">
                    Наша цель — продвижение йоги в Бишкеке. Мы хотим, чтоб как
                    можно больше людей узнало, что йога — это не только
                    медитации и духовность, но и физические занятия для здоровья
                    тела и хорошего самочувствия.
                </Typography>
                <Typography variant="body2" component="p" p={2} align="center">
                    В нашей студии преподают профессиональные инструкторы и
                    представлены разные направления йоги. У нас вы найдете
                    классы, интересные для любого возраста, уровня физической
                    подготовки и состояния здоровья.
                </Typography>
            </Paper>
        </Container>
    );
}

import { Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';

const tableOfContents = [
    {
        id: 1,
        img: 'images/home-menu/menu1.webp',
        link: 'space',
        title: 'Обзор студии',
        description:
            'Просторный зал для занятий, уютная атмосфера, удобные раздевалки и все необходимое для комфортной практики',
    },
    {
        id: 2,
        img: 'images/home-menu/menu2.webp',
        link: 'schedule',
        title: 'Расписание',
        description:
            'Здесь вы найдете наше актуальное расписание, выбирайте занятия и приходите практиковать',
    },
    {
        id: 3,
        img: 'images/home-menu/menu3.webp',
        link: 'price',
        title: 'Цены',
        description:
            'Доступные цены и единый абонемент на все занятия, +1 неделя заморозки, которая для удобства сразу включена в срок',
    },
    {
        id: 4,
        img: 'images/home-menu/menu4.webp',
        link: 'teachers',
        title: 'Инструкторы',
        description:
            'Крутейший состав инструкторов, прочитайте про каждого инструктора и выбирайте кто вам больше по душе',
    },
    {
        id: 5,
        img: 'images/home-menu/menu5.webp',
        link: 'classes',
        title: 'Направления',
        description:
            'Разнообразие направлений, программы для всех возрастов и людей с любым уровнем физической подготовки',
    },
    {
        id: 6,
        img: 'images/home-menu/menu6.webp',
        link: 'rules',
        title: 'Правила студии',
        description:
            'Рекомендуем ознакомиться с правилами нашей студии и соблюдать их, чтоб ваше пребывание в студии было приятным',
    },
];

export default function BlockMenu() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            <Typography variant="h2" component="h2" align="center">
                Всё что нужно знать о нашей студии
            </Typography>

            <Grid
                container
                pt={2}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ justifyContent: 'center', gap: 3 }}
            >
                {tableOfContents.map((content) => (
                    <Grid
                        key={content.id}
                        onClick={() => {
                            if (content.link !== '') {
                                navigate(content.link);
                            }
                        }}
                        sx={{ cursor: 'pointer', display: 'flex' }}
                    >
                        <Paper
                            elevation={0}
                            square
                            sx={{
                                bgcolor: '#f1f4f5',
                                p: { sm: 1, md: 2 },
                                width: { xs: 300, sm: 330 },
                            }}
                        >
                            <img src={content.img} alt={content.title} />

                            <Typography variant="h3" pt={1} align="center">
                                {content.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                component="p"
                                p={2}
                                align="center"
                            >
                                {content.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

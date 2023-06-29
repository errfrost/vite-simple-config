import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IClasses } from '../types/interface';
import EgaParallax from '../components/EgaParallax';

const animateEffect = [
    { boxShadow: '0px 0px 10px 5px #69b1cf' },
    { boxShadow: '' },
];

const animateTiming = {
    duration: 1000,
    iterations: 1,
};

export default function Classes() {
    const [classes, setClasses] = useState<IClasses[]>([]);
    useEffect(() => {
        fetch(
            `${window.location.protocol}//${window.location.host}/data/classes.json`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setClasses(data.classes);
            });
    }, []);

    const { hash } = window.location;
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        setCurrentHash(hash.substring(1, hash.length));
    }, [hash]);

    useEffect(() => {
        const currentHashElement = document.getElementById(currentHash);
        if (currentHashElement) {
            currentHashElement.scrollIntoView({
                block: 'center',
            });
            if (currentHashElement.parentElement)
                currentHashElement.parentElement.animate(
                    animateEffect,
                    animateTiming
                );
        }
    });

    return (
        <>
            <EgaParallax image="images/parallax/par_1047.webp" text="" />

            <Container maxWidth="lg" sx={{ p: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Направления
                </Typography>

                <Box sx={{ pt: 1 }}>
                    <Paper
                        elevation={0}
                        square
                        sx={{
                            bgcolor: '#f1f4f5',
                            px: { xs: 0, sm: 2, md: 4 },
                            mx: { xs: 0, sm: 2, md: 4 },
                            py: { xs: 2, md: 4 },
                            my: 2,
                        }}
                    >
                        <Typography variant="body2" component="p" p={2}>
                            По сути, направления йоги, представленные в студии,
                            это разные школы хатха-йоги. Все занятия направлены
                            на оздоровление тела и организма в целом, а также на
                            остановку колебаний ума. На классах выполняются
                            комплексы для разогрева тела, различные упражнения и
                            асаны (положения тела) и пранаямы (дыхательные
                            практики). Чтоб ощутить сполна пользу и “понять”
                            занятия, нужно хотя бы месяц походить в одну и ту же
                            группу к одному инструктору.
                        </Typography>
                    </Paper>
                    <Typography variant="h4" p={2} align="center">
                        Всего у нас есть {classes.length} разных направлений
                        йоги
                    </Typography>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{
                            justifyContent: 'center',
                            rowGap: 1,
                            columnGap: 2,
                            px: 10,
                        }}
                    >
                        {classes.map((currentClass, i) => (
                            <Grid key={i} sx={{ cursor: 'pointer' }}>
                                <Button
                                    disableRipple
                                    component={NavLink}
                                    to={`#class${currentClass.id}`}
                                    sx={{
                                        color: 'black',
                                        ':hover': {
                                            bgcolor: '#f9fafb',
                                            color: '#69b1cf',
                                            transition: 'all 0.5s',
                                        },
                                    }}
                                    onClick={() => {
                                        const classId = document.getElementById(
                                            `class${currentClass.id}`
                                        );
                                        if (classId) {
                                            classId.scrollIntoView({
                                                block: 'center',
                                            });
                                            if (classId.parentElement)
                                                classId.parentElement.animate(
                                                    animateEffect,
                                                    animateTiming
                                                );
                                        }
                                    }}
                                >
                                    {currentClass.class}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    {classes.map((currentClass, i) => (
                        <Paper
                            key={i}
                            elevation={0}
                            square
                            sx={{
                                bgcolor: '#f1f4f5',
                                px: { xs: 0, sm: 2, md: 4 },
                                mx: { xs: 0, sm: 2, md: 4 },
                                py: { xs: 2, md: 4 },
                                my: 2,
                            }}
                        >
                            <div id={`class${currentClass.id}`} />
                            <Typography
                                variant="h2"
                                pt={1}
                                align="center"
                                sx={{ color: '#4D4D4D' }}
                            >
                                {currentClass.class}
                            </Typography>
                            <Typography variant="body2" component="p" p={2}>
                                {currentClass.description}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </>
    );
}

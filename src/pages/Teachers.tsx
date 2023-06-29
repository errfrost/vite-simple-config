import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EgaParallax from '../components/EgaParallax';
import { ITeacher } from '../types/interface';

export default function Teachers() {
    const [teachers, setTeachers] = useState<ITeacher[]>([]);
    useEffect(() => {
        fetch(
            `${window.location.protocol}//${window.location.host}/data/teachers.json`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setTeachers(data.teachers);
            });
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <EgaParallax image="images/parallax/par_1047.webp" text="" />

            <Container maxWidth="lg" sx={{ p: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Инструкторы
                </Typography>

                <Grid
                    container
                    pt={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ justifyContent: 'center', gap: 3 }}
                >
                    {teachers.map((content, i) => (
                        <Grid
                            key={i}
                            onClick={() => {
                                if (content.link !== '') {
                                    navigate(content.link);
                                }
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    p: { sm: 1, md: 2 },
                                    width: { xs: 300, sm: 330 },
                                }}
                            >
                                <Avatar
                                    alt={content.name}
                                    src={content.photo}
                                    sx={{ width: 200, height: 200 }}
                                />

                                <Typography variant="h3" pt={1} align="center">
                                    {content.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="p"
                                    p={2}
                                    align="center"
                                >
                                    {content.classes.map((curClass, j) => (
                                        <>
                                            {curClass}{' '}
                                            {j !== content.classes.length - 1
                                                ? '•'
                                                : ''}{' '}
                                        </>
                                    ))}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

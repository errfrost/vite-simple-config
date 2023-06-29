import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FormatQuote } from '@mui/icons-material';
import { ITeacher } from '../../types/interface';
import EgaParallax from '../EgaParallax';

export default function Teacher() {
    const { teacher } = useParams();
    const [currentTeacher, setCurrentTeacher] = useState<ITeacher>();
    useEffect(() => {
        fetch(
            `${window.location.protocol}//${window.location.host}/data/teachers.json`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setCurrentTeacher(
                    data.teachers.findLast((t: ITeacher) => t.link === teacher)
                );
            });
    }, [teacher]);

    return (
        <>
            <EgaParallax image="images/parallax/par_1047.webp" text="" />

            <Container
                maxWidth="lg"
                sx={{ px: { xs: 0, sm: 2, md: 4 }, py: 4 }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="h1" variant="h2">
                        {currentTeacher?.name}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        pb: 2,
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box sx={{ p: 2, minWidth: 255 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar
                                alt={currentTeacher?.name}
                                src={currentTeacher?.photo}
                                sx={{ width: 200, height: 200 }}
                            />
                        </Box>
                        <Typography variant="body2" sx={{ pt: 2 }}>
                            <strong>Направления:</strong>
                            {currentTeacher?.classes.map((curClass, i) => (
                                <>
                                    {' '}
                                    {curClass}
                                    {i !== currentTeacher.classes.length - 1
                                        ? ','
                                        : ''}{' '}
                                </>
                            ))}
                        </Typography>
                        <Typography variant="body2" sx={{ pt: 2 }}>
                            <strong>Стаж практики:</strong> c{' '}
                            {currentTeacher?.experience} года
                        </Typography>
                        <Typography variant="body2" sx={{ pt: 2 }}>
                            <strong>Стаж преподавания:</strong> c{' '}
                            {currentTeacher?.teacherExperience} года
                        </Typography>
                        <Typography variant="body2" sx={{ pt: 2 }}>
                            <strong>Обучение:</strong>
                            {currentTeacher?.education.map((education) => (
                                <>
                                    <br />
                                    {education}
                                    <br />
                                </>
                            ))}
                        </Typography>
                    </Box>

                    <Divider
                        variant="middle"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    />

                    <Box sx={{ p: 2 }}>
                        <Typography
                            component="p"
                            variant="body2"
                            sx={{ whiteSpace: 'pre-line', pb: 4 }}
                        >
                            {currentTeacher?.bio}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pb: 2,
                            }}
                            textAlign="center"
                        >
                            <FormatQuote
                                sx={{
                                    color: '#6ec1e4',
                                    pr: 1,
                                    fontSize: 40,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: '#6ec1e4' }}
                            >
                                {currentTeacher?.quote}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ justifyContent: 'center', gap: 3 }}
                    >
                        {currentTeacher?.gallery.map((image, i) => (
                            <Grid key={i}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${image})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        width: { xs: 320, sm: 350 },
                                        height: { xs: 320, sm: 350 },
                                        filter: 'grayscale(100%)',
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

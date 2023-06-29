import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import EgaParallax from '../components/EgaParallax';
import HardnessInfo from '../components/schedule/HardnessInfo';
import HardSwitch from '../components/schedule/HardSwitch';
import Timeline from '../components/schedule/Timeline';

const hardnessColors = ['#FFF', '#7A9FBD7F', '#D8BEAC7F', '#AF76767F'];
const noHardnessColors = ['#FFF', '#FFF', '#FFF', '#FFF'];

export default function Schedule() {
    const [hardness, setHardness] = useState(
        Boolean(localStorage.getItem('hardness')) || false
    );
    useEffect(() => {
        localStorage.setItem('hardness', hardness ? '1' : '');
    });

    const scheduleColors = hardness ? hardnessColors : noHardnessColors;

    return (
        <>
            <EgaParallax image="images/parallax/par_1047.webp" text="" />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" component="h2" align="center">
                    Расписание
                </Typography>

                <Box sx={{ pt: 4 }}>
                    <Timeline colors={scheduleColors} />

                    <HardSwitch
                        hardness={hardness}
                        setHardness={setHardness}
                        colors={scheduleColors}
                    />

                    {hardness && <HardnessInfo colors={scheduleColors} />}
                </Box>
            </Container>
        </>
    );
}

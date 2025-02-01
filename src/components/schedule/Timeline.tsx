import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ISchedule } from '../../types/interface';

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const groupWeekDays = ['ПН, СР, ПТ', 'ВТ, ЧТ', 'СБ', 'ВС'];

interface DayCellProps {
    scheduleCell: ISchedule;
    colors: string[];
}

function DayCell({ scheduleCell, colors }: DayCellProps) {
    return (
        <Paper
            key={scheduleCell.id}
            sx={{
                whiteSpace: 'nowrap',
                height: 93,
                width: '100%',
                minWidth: 150,
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1.58,
                my: 1,
                flexDirection: 'column',
                bgcolor: colors[+scheduleCell.hardLevel],
            }}
        >
            {scheduleCell.timeStart} - {scheduleCell.timeFinish}
            {scheduleCell.class && <br />}
            <NavLink to={scheduleCell.classLink}>{scheduleCell.class}</NavLink>
            <NavLink to={scheduleCell.teacherLink}>
                {scheduleCell.teacher}
            </NavLink>
        </Paper>
    );
}

interface MinProps {
    schedule: ISchedule[];
    colors: string[];
}

function SmallTimeline({ schedule, colors }: MinProps) {
    return (
        <Carousel
            autoPlay={false}
            cycleNavigation={false}
            navButtonsAlwaysVisible
            indicators={false}
            swipe={false}
            sx={{ flexGrow: 1, pb: 2, height: 740 }}
        >
            {groupWeekDays.map((days, i) => (
                <Box key={i} textAlign="center">
                    <Paper
                        sx={{
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#ccc',
                        }}
                    >
                        <Typography variant="h6" component="p">
                            {days}
                        </Typography>
                    </Paper>
                    {schedule
                        .filter((daySchedule) =>
                            days.includes(daySchedule.days[0])
                        )
                        .map((scheduleCell, j) => (
                            <DayCell
                                key={j}
                                scheduleCell={scheduleCell}
                                colors={colors}
                            />
                        ))}
                </Box>
            ))}
        </Carousel>
    );
}

function BigTimeline({ schedule, colors }: MinProps) {
    return (
        <>
            {weekDays.map((day, i) => (
                <Box key={i} flexGrow={1} textAlign="center">
                    <Paper
                        sx={{
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#ccc',
                        }}
                    >
                        <Typography variant="h6" component="p">
                            {day}
                        </Typography>
                    </Paper>
                    {schedule
                        .filter((daySchedule) => daySchedule.days.includes(day))
                        .map((scheduleCell, j) => (
                            <DayCell
                                key={j}
                                scheduleCell={scheduleCell}
                                colors={colors}
                            />
                        ))}
                </Box>
            ))}
        </>
    );
}

interface Props {
    colors: string[];
}

export default function Timeline({ colors }: Props) {
    const [schedule, setSchedule] = useState<ISchedule[]>([]);
    useEffect(() => {
        fetch(
            `${window.location.protocol}//${window.location.host}/data/schedule.json`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setSchedule(data.schedule);
            });
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    gap: 1,
                }}
            >
                <BigTimeline schedule={schedule} colors={colors} />
            </Box>

            <Box
                sx={{
                    display: { xs: 'flex', lg: 'none' },
                    gap: 1,
                }}
            >
                <SmallTimeline schedule={schedule} colors={colors} />
            </Box>
        </>
    );
}

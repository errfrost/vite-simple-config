import { Box, Switch, Typography } from '@mui/material';
import React from 'react';

const hardLevel = [
    'Умеренная нагрузка',
    'Средняя нагрузка',
    'Интенсивная нагрузка',
];

interface Props {
    hardness: boolean;
    setHardness: React.Dispatch<React.SetStateAction<boolean>>;
    colors: string[];
}

export default function HardSwitch({ hardness, setHardness, colors }: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    flexGrow: 2,
                }}
            >
                <Switch
                    onClick={() => setHardness(!hardness)}
                    checked={hardness}
                />

                <Typography variant="body2">Отобразить сложность</Typography>
            </Box>

            {hardness && (
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 1, md: 2 },
                        flexDirection: { xs: 'column', md: 'row' },
                        alignSelf: { xs: 'flex-end', md: 'center' },
                    }}
                >
                    {hardLevel.map((level, i) => (
                        <Typography
                            key={i}
                            variant="body1"
                            sx={{ color: colors[i + 1] }}
                            textAlign="right"
                        >
                            {level}
                        </Typography>
                    ))}
                </Box>
            )}
        </Box>
    );
}

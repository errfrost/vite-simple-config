import { Box, Paper, Typography } from '@mui/material';

const hardLevel = [
    {
        level: 'УМЕРЕННАЯ',
        desc1: 'Подойдет начинающим йогам или тем, кто хочет умеренную физическую нагрузку, чтоб и поработать, и расслабиться.',
        desc2: 'После практики вы будете в приятном расслабленном состоянии с незначительной усталостью в теле.',
    },
    {
        level: 'СРЕДНЯЯ',
        desc1: 'Понравится тем, кто хочет поработать на коврике и прям хорошенько физически нагрузиться.',
        desc2: 'После практики вы выйдете немного уставшими физически, но одновременно с этим заряженными и бодрыми.',
    },
    {
        level: 'ИНТЕНСИВНАЯ',
        desc1: 'Придется по душе тем, кто хочет прям ушататься, чтоб ног не чувствовать к концу занятия и в шавасане вырубиться.',
        desc2: 'После практики вы выползете из зала "без задних ног", но будете при этом дико довольные и счастливые.',
    },
];

interface Props {
    colors: string[];
}

export default function HardnessInfo({ colors }: Props) {
    return (
        <Paper
            elevation={0}
            square
            sx={{
                bgcolor: '#f1f4f5',
                px: { xs: 0, sm: 2, md: 4 },
                mx: { xs: 0, sm: 2, md: 4 },
                pt: { xs: 2, md: 4 },
                pb: { xs: 0, sm: 2, md: 4 },
                my: 2,
            }}
        >
            <Typography variant="h2" pt={1} align="center">
                Уровни нагрузки
            </Typography>
            <Typography variant="body2" component="p" p={2}>
                Занятия йогой очень сложно разделить на уровни, так как каждая
                практика одновременно может быть и легкой, и сложной - все
                зависит от приложенных вами усилий. Но мы условно разделили
                группы на три категории сложности - умеренная, средняя и
                интенсивная. Выбирайте категорию занятий согласно своим
                физическим потребностям и возможностям, тогда практика будет в
                удовольствие.
            </Typography>
            <Typography variant="body2" component="p" p={2}>
                А еще, если вы новичок, никто не запрещает вам пойти на
                интенсивные занятия, или наоборот, если вы продвинутый, пойти на
                умеренные по нагрузке практики. Прислушивайтесь к себе.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {hardLevel.map((hardness, i) => (
                    <Box key={i} textAlign="center" sx={{ flex: '1 1 0px' }}>
                        <Paper
                            sx={{
                                height: 50,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: colors[i + 1],
                                mt: 1,
                                mb: { xs: '1px', md: 1 },
                            }}
                        >
                            <Typography variant="h6" component="p">
                                {hardness.level}
                            </Typography>
                        </Paper>
                        <Paper
                            sx={{
                                p: 1,
                                mt: { xs: '1px', md: 1 },
                                mb: 1,
                                height: 'calc(100% - 80px)',
                            }}
                        >
                            <Typography variant="body2" sx={{ p: 1 }}>
                                {hardness.desc1}
                            </Typography>
                            <Typography variant="body2" sx={{ p: 1 }}>
                                {hardness.desc2}
                            </Typography>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

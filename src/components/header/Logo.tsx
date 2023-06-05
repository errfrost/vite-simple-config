import { Box } from '@mui/material';

export default function Logo() {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundImage: 'url("img/bg.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                justifyContent: 'center',
                height: 100,
                p: 2,
            }}
        >
            <img src="img/ico-512x512.png" alt="EGA Hall" />
        </Box>
    );
}

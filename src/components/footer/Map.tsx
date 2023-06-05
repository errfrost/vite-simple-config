import { Box } from '@mui/material';

export default function Map() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 1,
                minWidth: { xs: '100%', sm: 300, md: 350 },
            }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2618663691424!2d74.60492627632824!3d42.86731670290355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb754ddc72b61%3A0xf55cdf3cb5e9aa6f!2zw4tHQSBoYWxs!5e0!3m2!1sru!2skg!4v1683659845624!5m2!1sru!2skg"
                style={{
                    border: 0,
                    width: '100%',
                    height: '385px',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EGA hall on map"
            />
        </Box>
    );
}

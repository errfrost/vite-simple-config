import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';

interface Slide {
    Caption: string;
    Image: string;
}

function Item(props: any) {
    const { slide } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundImage: `url(${slide.Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                p: 2,
            }}
        >
            <Typography
                variant="h1"
                component="h2"
                sx={{
                    textTransform: 'uppercase',
                    fontSize: '3rem',
                    color: 'white',
                }}
            >
                {/* {slide.Caption} */}
            </Typography>
        </Box>
    );
}

export default function HomeCarousel() {
    const items: Slide[] = [
        {
            Caption: 'Здоровье',
            Image: 'images/KP8A0051.JPG',
        },
        {
            Caption: 'Сила',
            Image: 'images/KP8A0092.JPG',
        },
        {
            Caption: 'Энергия',
            Image: 'images/KP8A9927.JPG',
        },
    ];

    return (
        <Carousel indicators={false}>
            {items.map((slide, i) => (
                <Item key={i} slide={slide} />
            ))}
        </Carousel>
    );
}

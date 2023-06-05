import { Typography } from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';

interface Props {
    image: string;
    text: string;
}

export default function EgaParallax({ image, text }: Props) {
    return (
        <ParallaxBanner
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '2 / 1',
                height: 300,
            }}
            layers={[
                {
                    image: `${window.location.protocol}//${window.location.host}/${image}`,
                    speed: -20,
                    // expanded: false,
                    // scale: [1.5, 1.5],
                },
            ]}
        >
            <div
                style={{
                    position: 'absolute',
                }}
            >
                <Typography component="h1" variant="h1">
                    {text}
                </Typography>
            </div>
        </ParallaxBanner>
    );
}

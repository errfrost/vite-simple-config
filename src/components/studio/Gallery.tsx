import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const imagesOrder = [
    { cols: 2, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
];

const imagesUrl = 'images/studio/';

const images = [
    'IMG_1046_.webp',
    'IMG_1047_.webp',
    'IMG_1048_.webp',
    'IMG_1049_.webp',
    'IMG_1050_.webp',
    'IMG_1051_.webp',
    'IMG_1052_.webp',
    'IMG_1053_.webp',
    'KP8A6623_.webp',
    'KP8A6722 2_.webp',
    'KP8A6725 2_.webp',
    'KP8A6744 2_.webp',
    'IMG_1018_.webp',
    'IMG_1019_.webp',
    'IMG_1020_.webp',
    'IMG_1021_.webp',
    'IMG_1022_.webp',
    'IMG_1023_.webp',
    'IMG_1024_.webp',
    'IMG_1025_.webp',
    'IMG_1026_.webp',
    'IMG_1027_.webp',
    'IMG_1028_.webp',
    'IMG_1029_.webp',
    'IMG_1030_.webp',
    'IMG_1031_.webp',
    'IMG_1032_.webp',
    'IMG_1033_.webp',
    'IMG_1034_.webp',
    'IMG_1035_.webp',
    'IMG_1036_.webp',
    'IMG_1037_.webp',
    'IMG_1038_.webp',
    'IMG_1039_.webp',
    'IMG_1040_.webp',
    'IMG_1041_.webp',
    'IMG_1042_.webp',
    'IMG_1043_.webp',
    'IMG_1044_.webp',
    'IMG_1045_.webp',
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop`,
    };
}

export default function Gallery() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const rowHeight = matches ? 250 : 200;
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images2 = images.map((image) => {
        const newArrayItem = { src: imagesUrl + image };
        return newArrayItem;
    });

    return (
        <>
            <ImageList
                variant="quilted"
                cols={matches ? 4 : 2}
                rowHeight={rowHeight}
            >
                {images2.map((item, i) => {
                    const currenImageOrder = i % 8;

                    return (
                        <ImageListItem
                            key={item.src}
                            cols={imagesOrder[currenImageOrder].cols}
                            rows={imagesOrder[currenImageOrder].rows}
                            onClick={() => {
                                setCurrentImage(i);
                                setOpen(true);
                            }}
                        >
                            <img
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...srcset(
                                    item.src,
                                    rowHeight,
                                    imagesOrder[currenImageOrder].rows,
                                    imagesOrder[currenImageOrder].cols
                                )}
                                alt="студия йоги EgaHall"
                                loading="lazy"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images2}
                index={currentImage}
            />
        </>
    );
}

import { Box, Typography } from '@mui/material';
import {
    Place,
    WhatsApp,
    Phone,
    Instagram,
    Telegram,
    // YouTube,
} from '@mui/icons-material';
import MUIIcon from '../../helpers/icons';

const contactDetails = [
    {
        id: 1,
        icon: Place,
        text: 'Бишкек, ул. Боконбаева 103',
        link: '',
    },
    {
        id: 2,
        icon: WhatsApp,
        text: 'WhatsApp',
        link: 'https://wa.me/996553880108',
    },
    {
        id: 3,
        icon: Telegram,
        text: 'Telegram',
        link: 'https://t.me/egahallkg',
    },
    { id: 4, icon: Phone, text: '0553 88 01 08', link: 'tel:0553880108' },
    { id: 5, icon: Phone, text: '0773 88 01 08', link: 'tel:0773880108' },
    {
        id: 6,
        icon: Instagram,
        text: 'egahall.kg',
        link: 'https://www.instagram.com/egahall.kg/',
    },
    {
        id: 7,
        icon: Telegram,
        text: 'Telegram канал',
        link: 'https://t.me/egahall',
    },
    // {
    //     id: 8,
    //     icon: YouTube,
    //     text: 'ЁGA hall на YouTube',
    //     link: 'https://www.youtube.com/channel/UCLhMSTnZRpZIOhfzpFlYcOA/',
    // },
];

export default function Contacts() {
    return (
        <Box
            sx={{
                flexGrow: 0,
                minWidth: 285,
                alignSelf: { xs: 'flex-start' },
            }}
        >
            <div id="contacts" />
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    p: 2,
                }}
            >
                Где мы находимся
            </Typography>

            {contactDetails.map((contact) => (
                <Box
                    key={contact.id}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 1,
                    }}
                >
                    <MUIIcon iconType={contact.icon} />
                    <Typography
                        variant="body2"
                        onClick={() => {
                            if (contact.link !== '') {
                                window.open(contact.link, '_blank');
                            }
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        {contact.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

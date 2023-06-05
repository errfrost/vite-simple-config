import { SvgIconComponent } from '@mui/icons-material';

interface IconProps {
    iconType: SvgIconComponent;
}

export default function MUIIcon({ iconType }: IconProps) {
    const CurrentIcon = iconType;
    return <CurrentIcon sx={{ color: '#a3a3a3' }} />;
}

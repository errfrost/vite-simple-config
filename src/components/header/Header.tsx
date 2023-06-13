import AutoScrollToTop from '../../helpers/AutoScrollToTop';
import HeaderBar from './HeaderBar';
import Logo from './Logo';

export default function Header() {
    return (
        <>
            <Logo />
            <HeaderBar />
            <AutoScrollToTop />
        </>
    );
}

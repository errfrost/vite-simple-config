import About from '../components/home/About';
import EgaParallax from '../components/EgaParallax';
import BlockMenu from '../components/home/BlockMenu';

export default function Home() {
    return (
        <>
            <About />
            <EgaParallax image="images/parallax/par_1047.webp" text="" />
            <BlockMenu />
        </>
    );
}

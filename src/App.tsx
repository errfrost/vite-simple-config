import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';

// pages
import Home from './pages/Home';
import NotFound from './pages/404';
import Teachers from './pages/Teachers';
import Teacher from './components/teachers/Teacher';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Price from './pages/Price';
import Contacts from './pages/Contacts';
import Rules from './pages/Rules';
import Space from './pages/Space';

// layouts
import RootLayout from './layouts/RootLayout';

// theme
import theme from './theme/theme';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:teacher" element={<Teacher />} />
            <Route path="classes" element={<Classes />} />
            <Route path="price" element={<Price />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="rules" element={<Rules />} />
            <Route path="space" element={<Space />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <ParallaxProvider>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </ParallaxProvider>
    );
}

export default App;

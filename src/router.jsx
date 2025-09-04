import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/layout';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ]
    },
])
export default router;
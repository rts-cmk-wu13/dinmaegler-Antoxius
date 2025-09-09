import Home from './pages/Home';
import About from './pages/About';
import Property_List from './pages/Property_List';
import Layout from './components/layout';
import { createBrowserRouter } from 'react-router';
import { All_Properties } from './loaders/Property_Loader';

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
            {
                path: '/property-list',
                element: <Property_List />,
                loader: All_Properties
            }
        ]
    },
])
export default router;
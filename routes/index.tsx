import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt';

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/encrypt',
        element: <Encrypt/>
    },
    {
        path: '/decrypt',
        element: <Decrypt/>
    }
]);

export default router;
import { createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/encrypt',
        element: <Encrypt/>
    },
    {
        path: '/decrypt',
        element: <Decrypt/>
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
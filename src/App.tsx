import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../routes/index';

const App:React.FC = () => {
  return (
    <div className='App h-full w-full'>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
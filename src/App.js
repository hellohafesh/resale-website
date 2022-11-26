import './App.css';
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';
import 'react-day-picker/dist/style.css';


function App() {
  return (
    <div className='max-w-[1400px]  mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

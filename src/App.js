import './App.css';
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

import './App.css'
import PrimarySearchNavbar from './components/Navbar/PrimarySearchNavbar';
import MainRoutes from './routes/MainRoutes';
import axios from 'axios';

function App() {
  axios.defaults.headers.common['app-id'] = import.meta.env.VITE_APP_ID;

  return (
    <>
      <PrimarySearchNavbar />
      <MainRoutes />
    </>
  )
}

export default App;

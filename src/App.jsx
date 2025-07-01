import './App.css'
import SocialApp from './components/SocialApp';
import axios from 'axios';

function App() {
  axios.defaults.headers.get['app-id'] = import.meta.env.VITE_APP_ID;

  return (
    <>
      <SocialApp />
    </>
  )
}

export default App;

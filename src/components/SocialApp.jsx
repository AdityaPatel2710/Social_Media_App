import axios from 'axios';
import MainContainer from "./MainContainer/MainContainer";
import PrimarySearchNavbar from "./Navbar/PrimarySearchNavbar";

function SocialApp() {
    axios.defaults.headers.common['app-id'] = import.meta.env.VITE_APP_ID;
    
    return (
        <div className="social-app-wrapper">

            <PrimarySearchNavbar />
            <MainContainer />

        </div>
    )
}


export default SocialApp;

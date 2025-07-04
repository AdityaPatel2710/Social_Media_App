import { Route, Routes } from "react-router-dom";
import SocialApp from '../components/SocialApp';
import UserProfile from "../components/UserProfile/UserProfile";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <SocialApp /> } />
            <Route path="/user/:userId" element={ <UserProfile /> } />
        </Routes>
    )
}


export default MainRoutes;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUserData from '../helpers/getUserData';

function useUserProfileData() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    let { userId } = useParams();

    useEffect(() => {
        getUserData(userId)
        .then(res => {
            setUserData(res);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            setLoading(false);
        });
    }, [userId]);

    return [userData, loading];
}


export default useUserProfileData;

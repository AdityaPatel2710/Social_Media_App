import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
  Paper
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  CalendarToday
} from '@mui/icons-material';
import formatDate from '../../helpers/formatDate';
import calculateAge from '../../helpers/calculateAge';
import { useParams } from 'react-router-dom';
import getUserData from '../../helpers/getUserData';
import UserProfileLoader from '../Loaders/UserProfileLoader';

function UserProfile() {
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
  
    if(loading) {
        return <UserProfileLoader />;
    }

    if(!userData) {
        return (
            <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
                <Card elevation={3} sx={{ borderRadius: 3, padding: 3, textAlign: 'center' }}>
                    <Typography variant="h6" color="error">
                        Failed to load user data. Please try again.
                    </Typography>
                </Card>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
        <Card elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            {/* Header Section */}
            <Box
            sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: 4,
                color: 'white',
                textAlign: 'center'
            }}
            >
            <Avatar
                src={userData.picture}
                alt={`${userData.firstName} ${userData.lastName}`}
                sx={{
                width: 120,
                height: 120,
                margin: '0 auto 16px',
                border: '4px solid white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
            />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {userData.title}. {userData.firstName} {userData.lastName}
            </Typography>
            <Chip
                label={userData.gender}
                sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 'bold'
                }}
            />
            </Box>

            <CardContent sx={{ padding: 3 }}>
            {/* Personal Information */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Personal Information
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                    <Box display="flex" alignItems="center" mb={1}>
                    <Email color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                        Email
                    </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                    {userData.email}
                    </Typography>
                </Paper>
                </Box>

                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                    <Box display="flex" alignItems="center" mb={1}>
                    <Phone color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                        Phone
                    </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                    {userData.phone}
                    </Typography>
                </Paper>
                </Box>

                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                    <Box display="flex" alignItems="center" mb={1}>
                    <CalendarToday color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                        Date of Birth
                    </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                    {formatDate(userData.dateOfBirth)} ({calculateAge(userData.dateOfBirth)} years old)
                    </Typography>
                </Paper>
                </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Location Information */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Location
            </Typography>
            
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                <Box display="flex" alignItems="flex-start" mb={2}>
                <LocationOn color="primary" sx={{ mr: 1, mt: 0.5 }} />
                <Box>
                    <Typography variant="body1" fontWeight="medium">
                    {userData.location.street}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {userData.location.city}, {userData.location.state}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {userData.location.country}
                    </Typography>
                    <Chip
                    size="small"
                    label={`Timezone: ${userData.location.timezone}`}
                    variant="outlined"
                    sx={{ mt: 1 }}
                    />
                </Box>
                </Box>
            </Paper>
            </CardContent>
        </Card>
        </Box>
    );
}

export default UserProfile;
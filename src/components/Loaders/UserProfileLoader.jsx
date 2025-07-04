import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Paper,
  Skeleton
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  CalendarToday
} from '@mui/icons-material';

function UserProfileLoader() {
  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
      <Card elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        {/* Header Section Skeleton */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: 4,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Skeleton
            variant="circular"
            width={120}
            height={120}
            sx={{
              margin: '0 auto 16px',
              border: '4px solid white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={40}
            sx={{
              margin: '0 auto 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }}
          />
          <Skeleton
            variant="rounded"
            width={80}
            height={24}
            sx={{
              margin: '0 auto',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }}
          />
        </Box>

        <CardContent sx={{ padding: 3 }}>
          {/* Personal Information Skeleton */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Personal Information
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            {/* Email Skeleton */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
              <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Email color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    Email
                  </Typography>
                </Box>
                <Skeleton variant="text" width="80%" height={24} />
              </Paper>
            </Box>

            {/* Phone Skeleton */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
              <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Phone color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    Phone
                  </Typography>
                </Box>
                <Skeleton variant="text" width="60%" height={24} />
              </Paper>
            </Box>

            {/* Date of Birth Skeleton */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
              <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <CalendarToday color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    Date of Birth
                  </Typography>
                </Box>
                <Skeleton variant="text" width="70%" height={24} />
              </Paper>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Location Information Skeleton */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Location
          </Typography>
          
          <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <Box display="flex" alignItems="flex-start" mb={2}>
              <LocationOn color="primary" sx={{ mr: 1, mt: 0.5 }} />
              <Box sx={{ width: '100%' }}>
                <Skeleton variant="text" width="60%" height={24} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="50%" height={24} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
                <Skeleton variant="rounded" width={120} height={24} sx={{ mt: 1 }} />
              </Box>
            </Box>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserProfileLoader;
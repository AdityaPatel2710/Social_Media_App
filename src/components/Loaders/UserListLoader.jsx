import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Skeleton from '@mui/material/Skeleton';

function UserListLoader({ numberOfUsers }) {
    return (
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(240, 255, 247)' }}>
        {Array(numberOfUsers).fill().map((_, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={24}
                  />
                }
                secondary={
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={18}
                  />
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
}

export default UserListLoader;

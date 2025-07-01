import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UsersList/UsersList';


function MainContainer() {
    
    return (
    <Box sx={{ width: '100%', mt: '5vh' }}>

        <Grid container ml="6vw" columnSpacing={{ xs: 3, sm: 6, md: 12 }}>

            <Grid size={{xs: 0, md: 3.5}}>
                <UserList numberOfUsers={5} />
            </Grid>
            
            <Grid 
                size = {{xs: 12, md: 8.5}}
                rowSpacing = {5}
                container
                direction = "column"
                justifyContent = "center"
                alignItems = "start"
            >
                <PostCardList numberOfPosts={100} />
            </Grid>

        </Grid>

    </Box>
  );
}


export default MainContainer;

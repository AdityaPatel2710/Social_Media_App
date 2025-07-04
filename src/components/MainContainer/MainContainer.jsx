import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UsersList/UsersList';
import PostInput from '../PostInput/PostInput';


function MainContainer() {
    
    return (
    <Box sx={{ width: '100%', mt: '5vh' }} >

        <Grid container mx="4vw" columnSpacing={{ xs: 1, sm: 3, md: 6 }}>

            <Grid pr="3vw" size={{xs: 0, md: 3}}>
                <UserList numberOfUsers={10} />
            </Grid>
            
            <Grid 
                size = {{xs: 10, md: 5}}
                rowSpacing = {5}
                container
                direction = "column"
                justifyContent = "center"
                alignItems = "center"
            >
                <PostCardList numberOfPosts={20} />
            </Grid>

            <Grid 
                size = {{xs: 2, md: 4}}
                container
                direction = "row"
                justifyContent = "center"
                alignItems = "baseline"
            >
                <PostInput />
            </Grid>

        </Grid>

    </Box>
  );
}


export default MainContainer;

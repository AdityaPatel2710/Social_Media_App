import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UsersList/UsersList';
import PostInput from '../PostInput/PostInput';
import { useState } from 'react';
import PostsContext from '../../contexts/PostsContext';


function MainContainer() {
    const [posts, setPosts] = useState([]);
    
    return (
    <Box sx={{ width: '100%', mt: '5vh' }} >

        <PostsContext.Provider value={{ posts, setPosts }} >

            <Grid container mx="4vw" columnSpacing={{ xs: 1, sm: 3, md: 6 }}>

                <Grid pr="3vw" size={{xs: 0, md: 3}}>
                    <UserList numberOfUsers={50} />
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

        </PostsContext.Provider>

    </Box>
  );
}


export default MainContainer;

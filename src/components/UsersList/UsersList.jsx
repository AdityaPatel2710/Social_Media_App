import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { memo, useEffect, useState } from 'react';
import getUsers from '../../helpers/getUsers';
import UserListLoader from '../Loaders/UserListLoader';
import { Link } from 'react-router-dom';

let dummyUser = {
                    "id": "60d0fe4f5311236168a109ca",
                    "title": "ms",
                    "firstName": "Sara",
                    "lastName": "Andersen",
                    "picture": "https://randomuser.me/api/portraits/women/58.jpg"
                };


function UserList({ numberOfUsers }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers(numberOfUsers)
        .then(res => {
            setUsers(res);
            setLoading(false);
        })
        .catch(console.error);;
    }, [numberOfUsers]);


    if(loading) return (
        <div>
            <UserListLoader numberOfUsers={numberOfUsers} />
        </div>
    );

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(240, 255, 247)' }}>
            {
                users.map(user => (
                    <ListItem key={user.id} >
                        <Link className='route-link' to={`/user/${user.id}`} >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar src={user.picture} />
                                </ListItemAvatar>
                                <ListItemText primary={user.firstName+" "+user.lastName} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))
            }
        </List>
    );
}


export default memo(UserList);

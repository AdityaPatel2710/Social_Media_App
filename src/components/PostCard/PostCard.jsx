import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import getUniqueDateForId from '../../helpers/getUniqueDate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { memo, useState } from 'react';


function PostCard({postDetails}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card sx={{ width: '25vw' }} elevation={3} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={postDetails.owner.picture} />
        }
        title={postDetails.owner.firstName+" "+postDetails.owner.lastName}
        subheader={getUniqueDateForId(parseInt(postDetails.id.slice(-5), 16))}
      />
      { 
        (postDetails.image != "") &&  <CardMedia
                                        component="img"
                                        height="250vh"
                                        // image={`https://picsum.photos/seed/${postDetails.id}/350/250`}
                                        image={postDetails.image}
                                        alt="Image not available"
                                      />
      }
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {postDetails.text}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setIsLiked(!isLiked)}>
          { (isLiked) ? <FavoriteIcon sx={{color: red[500]}} /> : <FavoriteBorderIcon /> }
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
} 


export default memo(PostCard);

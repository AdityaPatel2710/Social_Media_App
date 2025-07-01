import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

function PostCardLoader({ loading = false }) {
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar alt="Author avatar" src="/* real avatar URL */" />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="60%" sx={{ mb: 1 }} />
          ) : (
            /* real title */ 'Post Title'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            /* real date */ 'Jan 1, 2025'
          )
        }
      />
      {loading ? (
        <Skeleton animation="wave" variant="rectangular" height={190} />
      ) : (
        <CardMedia
          component="img"
          height="190"
          image="/* real image URL */"
          alt="Post image"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {/* real body text */}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

PostCardLoader.propTypes = {
  loading: PropTypes.bool,
};

export default function PostLoader() {
  
  return (
    <div style={{marginBottom: '5vh'}}>
      <PostCardLoader loading />
    </div>
  );
}

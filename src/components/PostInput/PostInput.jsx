import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Typography,
  IconButton,
  Alert,
} from '@mui/material';
import {
  PhotoCamera,
  Send,
} from '@mui/icons-material';
import createPost from '../../helpers/createPost';
import profile from "../../assets/profile.jpg";

const PostInput = () => {
    const [postText, setPostText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePost = () => {
        if (!postText.trim() && !imageUrl.trim()) {
            return;
        }

        const postData = {postText, imageUrl};
        createPost(postData)
        .then((res) => {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);

            setPostText('');
            setImageUrl('');
        })
    };

    const isPostButtonDisabled = !postText.trim() && !imageUrl.trim();

    return (
        <Box sx={{ width: '100%' }}>
        
            <Card elevation={3}>
                <CardContent sx={{ p: 3 }}>
                    {/* Header with Avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }} src={profile} />
                        <Typography variant="h6" color="text.secondary">
                            What's on your mind?
                        </Typography>
                    </Box>

                    {/* Post Text Input */}
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Share your thoughts..."
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        variant="outlined"
                        sx={{ mb: 2 }}
                        inputProps={{ maxLength: 500 }}
                    />

                    {/* Character count */}
                    <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        sx={{ display: 'block', textAlign: 'right', mb: 2 }}
                    >
                        {postText.length}/500
                    </Typography>

                    {/* Image URL Input */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton color="primary" sx={{ mr: 1 }}>
                                <PhotoCamera />
                        </IconButton>
                        <TextField
                            fullWidth
                            placeholder="Image URL (optional)"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            variant="outlined"
                            size="small"
                        />
                    </Box>

                    {/* Image Preview */}
                    {imageUrl && (
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                Image Preview:
                            </Typography>
                            <Box
                                component="img"
                                src={imageUrl}
                                alt="Preview"
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: 200,
                                    borderRadius: 1,
                                    objectFit: 'cover',
                                }}
                                onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                            />
                        </Box>
                    )}

                    {/* Post Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            endIcon={<Send />}
                            onClick={handlePost}
                            disabled={isPostButtonDisabled}
                            sx={{
                                borderRadius: 2,
                                px: 3,
                                py: 1,
                                textTransform: 'none',
                                fontSize: '1rem',
                            }}
                        >
                            Post
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {showSuccess && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    Post created successfully!
                </Alert>
            )}
        </Box>
    );
};

export default PostInput;
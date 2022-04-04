import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { subHours, subMinutes, subSeconds } from 'date-fns';
import {
  Button,
  Avatar,
  Link,
  Box,
  Card,
  CardMedia,
  Chip,
  Grid,
  Typography
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

const now = new Date();

const posts = [
  {
    id: '24b76cac9a128cd949747080',
    author: {
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'PhotoGrapherName'
    },
    category: 'Mehandi',
    cover: '/static/mock-images/covers/cover_4.jpeg',
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),

  },
  {
    id: 'a9c19d0caf2ca91020aacd1f',
    author: {
      avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
      name: 'PhotoGrapherName'
    },
    category: 'Shadi',
    cover: '/static/mock-images/covers/cover_5.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
  },
  {
    id: '44df90cbf89963b8aa625c7d',
    author: {
      avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
      name: 'PhotoGrapherName'
    },
    category: 'Reception',
    cover: '/static/mock-images/covers/cover_6.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
  },
  {
    id: '24b76cac9a128cd949747080',
    author: {
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'PhotoGrapherName'
    },
    category: 'Mehandi',
    cover: '/static/mock-images/covers/cover_4.jpeg',
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),

  },
  {
    id: 'a9c19d0caf2ca91020aacd1f',
    author: {
      avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
      name: 'PhotoGrapherName'
    },
    category: 'Shadi',
    cover: '/static/mock-images/covers/cover_5.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
  },
  {
    id: '44df90cbf89963b8aa625c7d',
    author: {
      avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
      name: 'PhotoGrapherName'
    },
    category: 'Reception',
    cover: '/static/mock-images/covers/cover_6.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
  },
  {
    id: '24b76cac9a128cd949747080',
    author: {
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'PhotoGrapherName'
    },
    category: 'Mehandi',
    cover: '/static/mock-images/covers/cover_4.jpeg',
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),

  },
  {
    id: 'a9c19d0caf2ca91020aacd1f',
    author: {
      avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
      name: 'PhotoGrapherName'
    },
    category: 'Shadi',
    cover: '/static/mock-images/covers/cover_5.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
  },
  {
    id: '44df90cbf89963b8aa625c7d',
    author: {
      avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
      name: 'PhotoGrapherName'
    },
    category: 'Reception',
    cover: '/static/mock-images/covers/cover_6.jpeg',
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
  }
];

const BlogPostCardMediaWrapper = experimentalStyled('div')({
  paddingTop: 'calc(100% * 4 / 4)',
  position: 'relative'
});

const GridList1: FC = () => (
  <>
    <Box>
      <Grid
        container
        spacing={3}
      >
        {posts.map((post) => (
          <Grid
            item
            key={post.id}
            md={4}
            xs={12}
          >
            <Card
              sx={{
                height: '100%',
                p: 2
              }}
            >
              <BlogPostCardMediaWrapper>
                <Link
                  underline="none"
                  component={RouterLink}
                  to="/uploads/new"
                >
                  <CardMedia
                    image={post.cover}
                    sx={{
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      width: '100%'
                    }}
                  />
                </Link>
              </BlogPostCardMediaWrapper>
              <Box
                sx={{ mt: 2 }}
              >
                <div>
                  <Chip
                    label={post.category}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/events/folders/new"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                  >
                    Delete
                  </Button>
                </div>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 2
                  }}
                >
                  <Avatar src={post.author.avatar} />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {post.author.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>

);

export default GridList1;

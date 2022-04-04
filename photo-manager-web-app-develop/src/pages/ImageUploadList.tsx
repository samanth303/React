import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Container } from '@material-ui/core';
// eslint-disable-next-line import/order
import PlusIcon from '../icons/Plus';
import ImageUploadList from 'src/components/imageuploads/ImagesList';
import WidgetPreviewer from 'src/components/WidgetPreviewer';
import gtm from 'src/lib/gtm';

const EventFolderGridLists: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>EventFolder: Grid Lists | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Button
            startIcon={<PlusIcon fontSize="small" />}
            sx={{ m: 1 }}
            variant="contained"
            component={RouterLink}
            to="/uploads/new"
          >
            Upload
          </Button>
          <Box>
            <WidgetPreviewer
              element={<ImageUploadList />}
              name="Images list"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EventFolderGridLists;

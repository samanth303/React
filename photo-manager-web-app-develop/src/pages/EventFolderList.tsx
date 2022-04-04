import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Container } from '@material-ui/core';
// eslint-disable-next-line import/order
import PlusIcon from '../icons/Plus';
import EventFolderList from 'src/components/eventfolder/FolderList';
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
            to="/events/folders/new"
          >
            Add Folder
          </Button>
          <Box>
            <WidgetPreviewer
              element={<EventFolderList />}
              name="Folder List"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EventFolderGridLists;

import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import EventList1 from 'src/components/dashboard/events/EventsListsGrid';
import WidgetPreviewer from 'src/components/WidgetPreviewer';
import gtm from 'src/lib/gtm';

const BrowseGridLists: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Grid Lists | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <WidgetPreviewer
              element={<EventList1 />}
              name="Event List Images"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseGridLists;

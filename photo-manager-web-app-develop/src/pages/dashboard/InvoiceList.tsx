import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import { InvoiceListTable } from '../../components/dashboard/invoice';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import useSettings from '../../hooks/useSettings';
import ChevronRightIcon from '../../icons/ChevronRight';
import DownloadIcon from '../../icons/Download';
import PlusIcon from '../../icons/Plus';
import UploadIcon from '../../icons/Upload';
import gtm from '../../lib/gtm';
import type { Invoice } from '../../types/invoice';
import axios from '../../lib/axios';

const InvoiceList: FC = () => {
  const isMountedRef = useIsMountedRef();
  const { settings } = useSettings();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getInvoices = useCallback(async () => {
    try {
      const response = await axios.get<{ invoices: Invoice[] }>('/api/invoices');

      if (isMountedRef.current) {
        setInvoices(response.data.invoices);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <>
      <Helmet>
        <title>Dashboard: Invoice List | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Invoice List
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Management
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Invoices
                </Typography>
              </Breadcrumbs>
              <Box
                sx={{
                  mb: -1,
                  mx: -1,
                  mt: 1
                }}
              >
                <Button
                  color="primary"
                  startIcon={<UploadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="text"
                >
                  Import
                </Button>
                <Button
                  color="primary"
                  startIcon={<DownloadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="text"
                >
                  Export
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                >
                  New Invoice
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <InvoiceListTable invoices={invoices} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default InvoiceList;

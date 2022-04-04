import { useState } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button
//   CardHeader,
//   FormHelperText,
} from '@material-ui/core';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import EventFileDropzone from '../../EventFileDropzone';

// interface

const EventCreateForm: FC = (props) => {
// const {
  //     event,
//     onAddComplete,
//     onCancel,
//     onDeleteComplete,
//     onEditComplete,
// }=props;

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [files, setFiles] = useState<any[]>([]);

  const handleDrop = (newFiles: any): void => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (file): void => {
    setFiles((prevFiles) => prevFiles.filter((_file) => _file.path
      !== file.path));
  };

  const handleRemoveAll = (): void => {
    setFiles([]);
  };

  return (
    <Formik
      initialValues={{
        images: [],
        name: '',
        date: new Date(),
        submit: null
      }}
      validationSchema={
        Yup
          .object()
          .shape({
            images: Yup.array(),
            date: Yup.date(),
            name: Yup.string().max(255).required(),
          })
      }
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }): Promise<void> => {
        try {
          // NOTE: Make API request
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Event Created', {
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            variant: 'success'
          });
          navigate('/dashboard/events');
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        handleSubmit,
        setFieldValue,
        values
        // errors,
        // handleBlur,
        // handleChange,
        // touched,
      }): JSX.Element => (
        <form
          onSubmit={handleSubmit}
          {...props}
        >
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
            >
              <Box>
                <Card>
                  <Box sx={{ pl: 3, py: 2 }}>
                    <Grid>
                      <Typography
                        color="textPrimary"
                        sx={{ mb: 1 }}
                        variant="body2"
                      >
                        Name of the event
                      </Typography>
                      <TextField
                        fullWidth
                        label="Event name"
                        name="name"
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Box>
                  <Box sx={{ m: 2, pl: 2 }}>
                    <Grid>
                      <MobileDatePicker
                        label="Select date"
                        onChange={(date) => setFieldValue('date', date)}
                        renderInput={(inputProps) => (
                          <TextField
                            sx={{ mb: 1 }}
                            variant="outlined"
                            {...inputProps}
                          />
                        )}
                        value={values.date}
                      />
                    </Grid>
                  </Box>
                  <CardContent>
                    <EventFileDropzone
                      accept="image/*"
                      files={files}
                      onDrop={handleDrop}
                      onRemove={handleRemove}
                      onRemoveAll={handleRemoveAll}
                    />
                  </CardContent>
                </Card>
                <Box sx={{ mb: 1, mx: 'auto', width: 200 }}>
                  <Button
                    color="primary"
                    size="large"
                    sx={{ mr: 3, pl: 3 }}
                    variant="contained"
                  >
                    Create Event
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default EventCreateForm;

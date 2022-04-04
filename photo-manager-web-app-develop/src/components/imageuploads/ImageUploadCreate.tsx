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
  Button
} from '@material-ui/core';
import ImageUploadDropzone from '../ImageUploadDropzone';

// interface

const ImagesUploadsCreate: FC = (props) => {
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
          enqueueSnackbar('Images Added', {
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            variant: 'success'
          });
          navigate('/uploads/imageslist');
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
                  <CardContent>
                    <ImageUploadDropzone
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
                    Upload
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

export default ImagesUploadsCreate;

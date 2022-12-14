import * as Yup from "yup";
import { useCallback, useState } from "react";
import { useSnackbar } from "notistack";
// next
import { useRouter } from "next/router";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Card,
  Chip,
  Stack,
  Button,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "@routes/paths";
//components
import {
  RHFSwitch,
  RHFEditor,
  FormProvider,
  RHFTextField,
  //   RHFUploadSingleFile,
} from "@components/Common/hook-form";
//
// import BlogNewPostPreview from "./BlogNewPostPreview";

// ----------------------------------------------------------------------

const TAGS_OPTION = [
  "Toy Story 3",
  "Logan",
  "Full Metal Jacket",
  "Dangal",
  "The Sting",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "3 Idiots",
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

export default function BlogNewPostForm() {
  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleOpenPreview = () => {
    setOpen(true);
  };

  const handleClosePreview = () => {
    setOpen(false);
  };

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    content: Yup.string().min(1000).required("Content is required"),
    cover: Yup.mixed().required("Cover is required"),
  });

  const defaultValues = {
    title: "",
    description: "",
    content: "",
    cover: null,
    tags: ["Logan"],
    publish: true,
    comments: true,
    metaTitle: "",
    metaDescription: "",
    metaKeywords: ["Logan"],
  };

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      handleClosePreview();
      enqueueSnackbar("Post success!");
      push(PATH_DASHBOARD.blog.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "cover",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Post Title" />

                <RHFTextField
                  name="description"
                  label="Description"
                  multiline
                  rows={3}
                />

                <div>
                  <LabelStyle>Content</LabelStyle>
                  {/* <RHFEditor name="content" /> */}
                </div>

                <div>
                  <LabelStyle>Cover</LabelStyle>
                  {/* <RHFUploadSingleFile
                    name="cover"
                    accept="image/*"
                    maxSize={3145728}
                    onDrop={handleDrop}
                  /> */}
                </div>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>

      {/* <BlogNewPostPreview
        values={values}
        isOpen={open}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      /> */}
    </>
  );
}

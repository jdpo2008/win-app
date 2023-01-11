import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Box, Card, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Product } from "@interfaces/index";
import { FormProvider, RHFTextField } from "@components/Common/hook-form";

interface Props {
  isEdit?: boolean;
  product?: Product;
}

export default function ProductNewEditForm({ isEdit = false, product }: Props) {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  console.log(product);

  const NewUserSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre del producto es requerido"),
    descripcion: Yup.string().required(
      "La descripcion del producto es requerida"
    ),
  });

  const defaultValues = useMemo(
    () => ({
      nombre: product?.nombre || "",
      descripcion: product?.descripcion || "",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && product) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, product]);

  const onSubmit = async () => {
    try {
      //   await new Promise((resolve) => setTimeout(resolve, 500));
      //   reset();
      //   enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
      //   push(PATH_DASHBOARD.user.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          md={12}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <RHFTextField name="nombre" label="Nombre Producto" />
              <RHFTextField name="descrpcion" label="DEscripcion" />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

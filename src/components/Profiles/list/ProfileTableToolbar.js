import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Stack,
  InputAdornment,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
// components
import Iconify from "@components/Common/Iconify";

// ----------------------------------------------------------------------

ProfileTableToolbar.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  onCreateNew: PropTypes.func,
};

export default function ProfileTableToolbar({
  filterName,
  onFilterName,
  onCreateNew,
}) {
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      sx={{ py: 2.5, px: 1 }}
    >
      <TextField
        fullWidth
        value={filterName}
        onChange={(event) => onFilterName(event.target.value)}
        placeholder="Buscar perfil..."
        label="Buscar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={"eva:search-fill"}
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
        }}
        size={"small"}
      />
      <Button
        sx={{
          minWidth: "120px",
        }}
        variant="contained"
        startIcon={<Iconify icon={"eva:plus-fill"} />}
        onClick={() => {
          onCreateNew();
        }}
      >
        Agregar
      </Button>
    </Stack>
  );
}

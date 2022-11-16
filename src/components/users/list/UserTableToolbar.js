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

UserTableToolbar.propTypes = {
  filterName: PropTypes.string,
  filterRole: PropTypes.string,
  onFilterName: PropTypes.func,
  onFilterRole: PropTypes.func,
  optionsRole: PropTypes.arrayOf(PropTypes.string),
  onCreateNew: PropTypes.func,
};

export default function UserTableToolbar({
  filterName,
  filterRole,
  onFilterName,
  onFilterRole,
  optionsRole,
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
        select
        label="Perfil"
        value={filterRole}
        onChange={onFilterRole}
        SelectProps={{
          MenuProps: {
            sx: { "& .MuiPaper-root": { maxHeight: 260 } },
          },
        }}
        sx={{
          maxWidth: { sm: 240 },
          textTransform: "capitalize",
        }}
        size={"small"}
      >
        {optionsRole.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 0.75,
              typography: "body2",
              textTransform: "capitalize",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        value={filterName}
        onChange={(event) => onFilterName(event.target.value)}
        placeholder="Buscar usuario..."
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

import { useState } from "react";
import PropTypes from "prop-types";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Checkbox,
  TableRow,
  TableCell,
  Typography,
  MenuItem,
} from "@mui/material";
// components
import Label from "@components/Common/Label";
import Iconify from "@components/Common/Iconify";
import { TableMoreMenu } from "@components/Common/table";

// ----------------------------------------------------------------------

ProductTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function ProductTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
}) {
  const theme = useTheme();

  const { nombre, descripcion, active, createdAt } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {nombre}
        </Typography>
      </TableCell>

      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {descripcion}
        </Typography>
      </TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {createdAt}
      </TableCell>

      <TableCell align="center">
        <Iconify
          icon={active ? "eva:checkmark-circle-fill" : "eva:clock-outline"}
          sx={{
            width: 20,
            height: 20,
            color: "success.main",
            ...(!active && { color: "warning.main" }),
          }}
        />
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: "error.main" }}
              >
                <Iconify icon={"eva:trash-2-outline"} />
                Eliminar
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={"eva:edit-fill"} />
                Editar
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}

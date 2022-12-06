import PropTypes from "prop-types";
import { useState } from "react";
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

ProfileTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function ProfileTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
}) {
  const theme = useTheme();

  const { nombre, descripcion, status, fecha } = row;

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

      <TableCell>
        <Typography variant="subtitle2" noWrap>
          {nombre}
        </Typography>
      </TableCell>

      <TableCell align="left">
        <Typography noWrap>{descripcion}</Typography>
      </TableCell>

      <TableCell align="center">
        <Iconify
          icon={status ? "eva:checkmark-circle-fill" : "eva:clock-outline"}
          sx={{
            width: 20,
            height: 20,
            color: "success.main",
            ...(!status && { color: "warning.main" }),
          }}
        />
        <span style={{ marginLeft: "5px" }}>
          {status ? "Activo" : "Inactivo"}
        </span>
      </TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {fecha}
      </TableCell>

      {/* <TableCell align="left">
        <Label
          variant={theme.palette.mode === "light" ? "ghost" : "filled"}
          color={(status === "banned" && "error") || "success"}
          sx={{ textTransform: "capitalize" }}
        >
          {status}
        </Label>
      </TableCell> */}

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

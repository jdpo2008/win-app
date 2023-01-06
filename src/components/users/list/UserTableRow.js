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

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function UserTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
}) {
  const theme = useTheme();

  const { nombres, apellidos, email, perfil, avatarUrl, telefono, createdAt } =
    row;

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

      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={nombres}
          src={avatarUrl}
          sx={{ mr: 1, width: "35px", height: "35px" }}
        />
        <Typography variant="subtitle2" noWrap>
          {nombres}
        </Typography>
      </TableCell>

      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {apellidos}
        </Typography>
      </TableCell>

      <TableCell align="left">{email}</TableCell>

      <TableCell align="left">{telefono}</TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {perfil.nombre}
      </TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {createdAt}
      </TableCell>

      {/* <TableCell align="center">
        <Iconify
          icon={isVerified ? "eva:checkmark-circle-fill" : "eva:clock-outline"}
          sx={{
            width: 20,
            height: 20,
            color: "success.main",
            ...(!isVerified && { color: "warning.main" }),
          }}
        />
      </TableCell> */}

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

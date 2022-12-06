import React, { FC, useState } from "react";
import PropTypes from "prop-types";

// @mui
import {
  Box,
  Card,
  Table,
  Tooltip,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import useTabs from "@hooks/useTabs";
import useSettings from "@hooks/useSettings";
import useTable, { getComparator, emptyRows } from "@hooks/useTable";

import Layout from "@components/_App/Layouts";
import Page from "@components/_App/Page";
import PageBanner from "@components/Common/PageBanner";
import Iconify from "@components/Common/Iconify";
import Scrollbar from "@components/Common/Scrollbar";
import { DialogAnimate } from "@components/Common/animate";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from "@components/Common/table";
import { ProfileTableRow, ProfileTableToolbar } from "@components/Profiles";
import ProfileNewEditForm from "@components/Profiles/ProfileNewEditForm";

const DialogStyle = styled(DialogAnimate)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 48px)",
      maxHeight: "calc(100% - 48px)",
    },
  },
}));

const TABLE_HEAD = [
  { id: "nombre", label: "Nombre", align: "left" },
  { id: "descripcion", label: "Descripcion", align: "left" },
  { id: "status", label: "Status", align: "center" },
  { id: "fecha", label: "Fecha Creacion", align: "center" },
  { id: "" },
];

const PerfilesList = (props) => {
  const { themeStretch } = useSettings();
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const [tableData, setTableData] = useState([
    {
      id: 1,
      nombre: "Administrador",
      descripcion: "Privilegios totales",
      status: true,
      fecha: "11/11/2022",
    },
    {
      id: 2,
      nombre: "Usuario",
      descripcion: "Privilegios reducidos de la aplicacion",
      status: true,
      fecha: "11/11/2022",
    },
  ]);
  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const [filterName, setFilterName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const denseHeight = dense ? 52 : 72;

  const isNotFound = !dataFiltered.length && !!filterName;

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleEditRow = (id) => {
    setShowModal(true);
    setCurrentProfile(null);
    setIsEdit(false);
    if (id && id !== "0") {
      setCurrentProfile(tableData.find((u) => u.id === id));
      setIsEdit(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Page title="Lista de Perfiles">
      <PageBanner
        pageTitle="Lista de Perfiles"
        homePageUrl="/"
        s
        homePageText="Home"
        activePageText="Perfiles"
      />
      <Container maxWidth={themeStretch ? false : "lg"} className="pt-50 pb-50">
        <Card sx={{ padding: "15px" }}>
          <ProfileTableToolbar
            filterName={filterName}
            onFilterName={handleFilterName}
            onCreateNew={() => handleEditRow("0")}
          />
          <Scrollbar sx={{}}>
            <TableContainer sx={{ minWidth: 850, position: "relative" }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                  actions={
                    <Tooltip title="Delete">
                      <IconButton
                        color="primary"
                        onClick={() => handleDeleteRows(selected)}
                      >
                        <Iconify icon={"eva:trash-2-outline"} />
                      </IconButton>
                    </Tooltip>
                  }
                />
              )}
              <Table size={dense ? "small" : "medium"}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ProfileTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
          <Box sx={{ position: "relative" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />
          </Box>
        </Card>
      </Container>

      <DialogStyle
        title={isEdit ? "Editar Perfil" : "Agregar Perfil"}
        open={showModal}
        onClose={handleCloseModal}
        size="md"
        sx={{}}
      >
        <ProfileNewEditForm isEdit={isEdit} currentProfile={currentProfile} />
      </DialogStyle>
    </Page>
  );
};

PerfilesList.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

PerfilesList.propTypes = {};

export default PerfilesList;

function applySortFilter({ tableData, comparator, filterName }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      (item) =>
        item.nombre.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  // if (filterStatus !== "all") {
  //   tableData = tableData.filter((item) => item.status === filterStatus);
  // }

  return tableData;
}

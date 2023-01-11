import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@data/client/endpoints";
import { PaginatorRequest } from "@interfaces/index";
import client from "@data/client";
import Layout from "@components/_App/Layouts";
import Page from "@components/_App/Page";
import PageBanner from "@components/Common/PageBanner";
import {
  Box,
  Card,
  Container,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tooltip,
} from "@mui/material";
import useSettings from "@hooks/useSettings";
import { useState } from "react";
import ServiceTableToolbar from "@components/servicios/list/ServicesTableToolbar";
import Scrollbar from "@components/Common/Scrollbar";
import useTable, { getComparator } from "@hooks/useTable";
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from "@components/Common/table";
import Iconify from "@components/Common/Iconify";
import { ServicesTableRow } from "@components/servicios/list";

const TABLE_HEAD = [
  { id: "nombre", label: "Nombre", align: "left" },
  { id: "descripcion", label: "Descripcion", align: "left" },
  { id: "precio", label: "Precio", align: "right" },
  { id: "velocidad_anterior", label: "Velocidad Anterior", align: "center" },
  { id: "velocidad_actual", label: "Velocidad Actual", align: "center" },
  { id: "tiene_promocion", label: "Tiene Promocion", align: "center" },
  { id: "promocion", label: "Promocion", align: "center" },
  //   { id: "active", label: "Estatus", align: "center" },
  //   { id: "createdAt", label: "Fecha Creacion", align: "center" },
  { id: "" },
];

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.SERVICIOS, {}],
        ({ queryKey }) => client.services.all(queryKey[1] as PaginatorRequest)
      ),
    ]);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

const ServicesList = (props) => {
  const { themeStretch } = useSettings();
  const [filterName, setFilterName] = useState("");
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

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    // setPage(0);
  };

  const [tableData, setTableData] = useState(
    props.dehydratedState.queries[0].state.data.pages[0].data
  );

  const handleEditRow = (id) => {
    // setShowModal(true);
    // setCurrentUser(null);
    // setIsEdit(false);
    // if (id && id !== "0") {
    //   setCurrentUser(tableData.find((u) => u.id === id));
    //   setIsEdit(true);
    // }
  };

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

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const denseHeight = dense ? 52 : 72;

  const isNotFound = !dataFiltered.length && !!filterName;

  console.log(props);
  return (
    <Page title="Servicios">
      <>
        <PageBanner
          pageTitle="Lista de Servicios"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Servicios"
        />
        <Container
          maxWidth={themeStretch ? false : "lg"}
          className="pt-50 pb-50"
        >
          <Card sx={{ padding: "5px" }}>
            <ServiceTableToolbar
              filterNombre={filterName}
              onFilterNombre={handleFilterName}
              onCreateNew={() => handleEditRow("0")}
            />
            <Scrollbar sx={{ width: "100%" }}>
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <ServicesTableRow
                          key={row.id}
                          row={row}
                          selected={selected.includes(row.id)}
                          onSelectRow={() => onSelectRow(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          onEditRow={() => handleEditRow(row.id)}
                        />
                      ))}

                    {/* <TableEmptyRows
                      height={denseHeight}
                      emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                    /> */}

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
                labelRowsPerPage={"servcios por pagina"}
              />

              {/* <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            /> */}
            </Box>
          </Card>
        </Container>
      </>
    </Page>
  );
};

// ----------------------------------------------------------------------
ServicesList.authorization = true;
ServicesList.getLayout = function getLayout(page) {
  return (
    <Layout variant="main" isLoadding={false}>
      {page}
    </Layout>
  );
};

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

  return tableData;
}

export default ServicesList;

// import { paramCase } from 'change-case';
import React, { useState } from "react";
// next
import { useRouter } from "next/router";
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
// routes
import { PATH_DASHBOARD } from "@routes/paths";
// hooks
import useTabs from "@hooks/useTabs";
import useSettings from "@hooks/useSettings";
import useTable, { getComparator, emptyRows } from "@hooks/useTable";
// _mock_
//  import { _userList } from "../../../_mock";
// layouts
import Layout from "@components/_App/Layouts";
// components
import Page from "@components/_App/Page";
import Iconify from "@components/Common/Iconify";
import Scrollbar from "@components/Common/Scrollbar";
import { DialogAnimate } from "@components/Common/animate";
// import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from "@components/Common/table";
// sections
import { UserTableToolbar, UserTableRow } from "@components/users";
import PageBanner from "@components/Common/PageBanner";
import UserNewEditForm from "@components/users/UserNewEditForm";
import { useUser } from "../../../data/user";
import { GetServerSideProps, GetStaticProps } from "next";
import { API_ENDPOINTS } from "@data/client/endpoints";
import { NextPageWithLayout, PaginatorRequest } from "@interfaces/index";
import client from "@data/client";
import { dehydrate, QueryClient } from "@tanstack/react-query";

// ----------------------------------------------------------------------

const DialogStyle = styled(DialogAnimate)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 48px)",
      maxHeight: "calc(100% - 48px)",
    },
  },
}));

const ROLE_OPTIONS = ["Todos", "Administrador", "Usuario"];

const TABLE_HEAD = [
  { id: "nombres", label: "Nombres", align: "left" },
  { id: "apellidos", label: "Apellidos", align: "left" },
  { id: "email", label: "Email", align: "left" },
  { id: "telefono", label: "Telefono", align: "left" },
  { id: "perfil", label: "Perfil", align: "center" },
  // { id: "status", label: "Status", align: "center" },
  { id: "createdAt", label: "Fecha Creacion", align: "center" },
  { id: "" },
];

interface Props {
  dehydratedState: {
    queries: any;
    mutation: any;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.USER_ALL, {}],
        ({ queryKey }) => client.user.all(queryKey[1] as PaginatorRequest)
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

const UserList: NextPageWithLayout = (props: Props) => {
  const { result, isLoading } = useUser();

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

  const { themeStretch } = useSettings();

  const { push } = useRouter();

  const [tableData, setTableData] = useState(
    props.dehydratedState.queries[0].state.data.pages[0].data
  );

  const [filterName, setFilterName] = useState("");

  const [filterRole, setFilterRole] = useState("Todos");

  const [showModal, setShowModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } =
    useTabs("all");

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterRole = (event) => {
    setFilterRole(event.target.value);
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

  const handleEditRow = (id) => {
    setShowModal(true);
    setCurrentUser(null);
    setIsEdit(false);
    if (id && id !== "0") {
      setCurrentUser(tableData.find((u) => u.id === id));
      setIsEdit(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterRole,
    filterStatus,
  });

  const denseHeight = dense ? 52 : 72;

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterRole) ||
    (!dataFiltered.length && !!filterStatus);

  return isLoading ? (
    <>Isloadding</>
  ) : (
    <Page title="Lista de Usuarios">
      <>
        <PageBanner
          pageTitle="Lista de Usuarios"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Usuarios"
        />
        <Container
          maxWidth={themeStretch ? false : "lg"}
          className="pt-50 pb-50"
        >
          <Card sx={{ padding: "15px" }}>
            <UserTableToolbar
              filterName={filterName}
              filterRole={filterRole}
              onFilterName={handleFilterName}
              onFilterRole={handleFilterRole}
              optionsRole={ROLE_OPTIONS}
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
                        <UserTableRow
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
          sx={{ with: "100%" }}
          title={isEdit ? "Editar Usuario" : "Agregar Usuario"}
          open={showModal}
          onClose={handleCloseModal}
          size="md"
        >
          <UserNewEditForm isEdit={isEdit} currentUser={currentUser} />
        </DialogStyle>
      </>
    </Page>
  );
};

// ----------------------------------------------------------------------
UserList.authorization = true;
UserList.getLayout = function getLayout(page) {
  return (
    <Layout variant="main" isLoadding={false}>
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

function applySortFilter({
  tableData,
  comparator,
  filterName,
  filterStatus,
  filterRole,
}) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      (item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  // if (filterStatus !== "all") {
  //   tableData = tableData.filter((item) => item.status === filterStatus);
  // }

  if (filterRole !== "Todos") {
    tableData = tableData.filter((item) => item.role === filterRole);
  }

  return tableData;
}

export default UserList;
